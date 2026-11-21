import { chromium } from "playwright";

async function captureNavbar() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log("Loading http://localhost:3333/ to capture enhanced navbar...");
  await page.goto("http://localhost:3333/", { waitUntil: "networkidle" });

  // 1. Capture Header region
  const header = page.locator("header");
  await header.screenshot({ path: "C:/Users/rama/.gemini/antigravity/brain/6c2d2530-5fae-45bb-8188-4e00a46893c6/enhanced_navbar_closed.png" });

  // 2. Click Capabilities dropdown
  const capBtn = page.locator("button:has-text('Capabilities')");
  if (await capBtn.count() > 0) {
    await capBtn.click();
    await page.waitForTimeout(300);
    await page.screenshot({ 
      path: "C:/Users/rama/.gemini/antigravity/brain/6c2d2530-5fae-45bb-8188-4e00a46893c6/enhanced_navbar_dropdown_open.png",
      clip: { x: 0, y: 0, width: 1440, height: 400 }
    });
  }

  await browser.close();
  console.log("Navbar captures completed!");
}

captureNavbar().catch(err => {
  console.error("Capture failed:", err);
  process.exit(1);
});
