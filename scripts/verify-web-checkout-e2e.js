const assert = require("assert");
const http = require("http");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const OUT_DIR = path.join(__dirname, "..", "out");
const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".json": "application/json",
};

function startStaticServer(rootDir, port) {
  const srv = http.createServer((req, res) => {
    const cleanUrl = (req.url || "/").split("?")[0];
    let filePath = path.join(rootDir, cleanUrl === "/" ? "index.html" : cleanUrl);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, "index.html");
    } else if (!fs.existsSync(filePath) && fs.existsSync(`${filePath}.html`)) {
      filePath = `${filePath}.html`;
    }
    if (!fs.existsSync(filePath)) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    fs.createReadStream(filePath).pipe(res);
  });
  return new Promise((resolve) => srv.listen(port, "127.0.0.1", () => resolve(srv)));
}

async function main() {
  const staticSrv = await startStaticServer(OUT_DIR, 3099);
  const desktopPings = [];
  const bridgeSrv = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
      res.writeHead(204);
      res.end();
      return;
    }
    let body = "";
    req.on("data", (c) => (body += c));
    req.on("end", () => {
      desktopPings.push({ url: req.url, body: JSON.parse(body || "{}") });
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end('{"success":true}');
    });
  });
  await new Promise((resolve) => bridgeSrv.listen(8000, "127.0.0.1", resolve));

  const browser = await chromium.launch({ headless: true, channel: "chrome" });
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();

    let webSessionCalls = 0;
    let desktopCodeCalls = 0;
    let checkoutCalls = 0;
    let confirmPayload = null;
    let oauthTriggered = false;

    await page.route("https://api.mash.ai/**", async (route) => {
      const url = route.request().url();
      if (url.endsWith("/v1/auth/oauth/google")) {
        oauthTriggered = true;
        return route.fulfill({ status: 200, contentType: "text/plain", body: "oauth_ok" });
      }
      if (url.endsWith("/v1/auth/web/session")) {
        webSessionCalls++;
        return route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            access_token: "web_tok_test",
            expires_in: 900,
            user: { email: "ca.real@firm.in", display_name: "Partner CA" },
          }),
        });
      }
      if (url.endsWith("/v1/auth/desktop/code")) {
        desktopCodeCalls++;
        return route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({ code: "mcode_live_777", expires_in: 60 }),
        });
      }
      if (url.endsWith("/v1/payments/checkout")) {
        checkoutCalls++;
        assert(route.request().headers()["idempotency-key"], "Missing Idempotency-Key");
        assert.strictEqual(
          route.request().headers()["authorization"],
          "Bearer web_tok_test"
        );
        return route.fulfill({
          status: 201,
          contentType: "application/json",
          body: JSON.stringify({
            provider: "razorpay",
            key_id: "rzp_test_123",
            provider_order_id: "order_rzp_123",
            order: {
              order_id: "pay_order_1",
              provider: "razorpay",
              provider_order_id: "order_rzp_123",
              amount_paise: 199900,
              currency: "INR",
              status: "pending",
            },
          }),
        });
      }
      if (url.endsWith("/v1/payments/confirm")) {
        confirmPayload = JSON.parse(route.request().postData() || "{}");
        return route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            order: {
              order_id: "pay_order_1",
              provider: "razorpay",
              provider_order_id: "order_rzp_123",
              amount_paise: 199900,
              currency: "INR",
              status: "paid",
            },
          }),
        });
      }
      return route.abort();
    });

    // Stub Razorpay checkout.js so clicking Pay runs full checkout -> confirm -> success
    await page.route("https://checkout.razorpay.com/v1/checkout.js", (route) => {
      route.fulfill({
        status: 200,
        contentType: "application/javascript",
        body: `
          window.Razorpay = function(opts) {
            this.on = function() {};
            this.open = function() {
              opts.handler({
                razorpay_order_id: opts.order_id,
                razorpay_payment_id: "pay_rzp_123",
                razorpay_signature: "sig_abc"
              });
            };
          };
        `,
      });
    });

    const base = "http://127.0.0.1:3099";
    const pageErrors = [];
    page.on("pageerror", (err) => pageErrors.push(err.message));

    // 1. All core static routes load 200 OK (and /404/ renders branded error page)
    for (const r of ["/", "/pricing/", "/use-cases/", "/download/", "/terms/", "/privacy/", "/policies/", "/checkout/", "/404/"]) {
      const resp = await page.goto(`${base}${r}`, { waitUntil: "domcontentloaded" });
      assert.strictEqual(resp.status(), 200, `Route ${r} failed`);
    }

    // 2. OAuth error banner on /checkout/?error=...
    await page.goto(`${base}/checkout/?error=OAUTH_PROVIDER_ERROR`, { waitUntil: "networkidle" });
    await page.locator("text=Google sign-in was cancelled").waitFor();
    await page.locator('button:has-text("Continue with Google to Checkout")').waitFor();

    // 3. Pricing -> Upgrade to Pro sets mash_post_auth and kicks off Google OAuth
    await page.goto(`${base}/pricing/`, { waitUntil: "networkidle" });
    await page.locator('button:has-text("Upgrade to Pro")').click();
    await page.waitForTimeout(300);
    assert(oauthTriggered, "Upgrade to Pro did not start Google OAuth");

    // 4. Simulated OAuth return to /auth/success/?grant=... with mash_post_auth=/checkout
    await page.goto(`${base}/pricing/`, { waitUntil: "domcontentloaded" });
    await page.evaluate(() => sessionStorage.setItem("mash_post_auth", "/checkout"));
    await page.goto(`${base}/auth/success/?grant=wgrant_web_1`, { waitUntil: "networkidle" });
    await page.waitForURL("**/checkout/**");
    assert.strictEqual(webSessionCalls, 1, "Expected exactly 1 web/session call");
    assert.strictEqual(desktopCodeCalls, 0, "Checkout flow must NOT mint desktop code");

    await page.locator("text=ca.real@firm.in").waitFor();
    await page.locator('button:has-text("Pay ₹1,999 with Razorpay")').click();
    await page.waitForURL("**/checkout/success/**");
    assert.strictEqual(checkoutCalls, 1);
    assert.strictEqual(confirmPayload?.razorpay_payment_id, "pay_rzp_123");
    await page.locator("text=pay_rzp_123").waitFor();
    await page.locator("text=ca.real@firm.in").waitFor();

    // 5. Desktop OAuth flow: /auth/success/?grant=wgrant_desktop_1 -> desktop/code + bridge ping
    await page.goto(`${base}/auth/success/?grant=wgrant_desktop_1`, { waitUntil: "networkidle" });
    await page.waitForTimeout(700);
    assert.strictEqual(webSessionCalls, 2);
    assert.strictEqual(desktopCodeCalls, 1);
    assert(
      desktopPings.some((p) => p.url === "/api/auth/login" && p.body.code === "mcode_live_777"),
      "Desktop loopback did not receive minted mcode"
    );
    assert.strictEqual(pageErrors.length, 0, `Uncaught page errors: ${pageErrors.join("; ")}`);

    console.log("ALL WEB CHECKOUT + AUTH E2E CHECKS PASSED!");
  } finally {
    await browser.close();
    staticSrv.close();
    bridgeSrv.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
