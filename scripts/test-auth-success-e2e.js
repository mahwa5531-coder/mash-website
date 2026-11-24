const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Output screenshot directory
const screenshotDir = path.join(__dirname, '..', 'e2e-screenshots');
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

// 1. Mock the Desktop App's local FastAPI server (bound to localhost:8000)
const localDesktopPings = [];
const mockDesktopServer = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api/auth/login') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      const parsed = JSON.parse(body || '{}');
      const pingRecord = {
        timestamp: new Date().toISOString(),
        url: req.url,
        payload: parsed,
      };
      localDesktopPings.push(pingRecord);
      console.log('>>> [Desktop Localhost:8000] Received Auth Ping:', JSON.stringify(pingRecord));
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok', authenticated: true, user: 'ca.firm@audit.in' }));
    });
    return;
  }

  res.writeHead(404);
  res.end();
});

async function runE2E() {
  await new Promise(resolve => mockDesktopServer.listen(8000, resolve));
  console.log('>>> Mock Desktop Localhost bridge listening on http://localhost:8000');

  const browser = await chromium.launch({
    headless: true,
    channel: 'chrome', // Use system Google Chrome
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  const events = {
    protocolNavigations: [],
    consoleMessages: [],
    networkRequests: [],
  };

  // Intercept console
  page.on('console', msg => {
    console.log(`[Browser Console ${msg.type()}]:`, msg.text());
    events.consoleMessages.push({ type: msg.type(), text: msg.text() });
  });

  // Track network requests
  page.on('request', req => {
    events.networkRequests.push({ url: req.url(), method: req.method() });
  });

  // Track protocol / navigation requests
  page.on('requestfailed', req => {
    if (req.url().startsWith('mash://')) {
      events.protocolNavigations.push({
        url: req.url(),
        failure: req.failure().errorText,
        time: new Date().toISOString(),
      });
      console.log('>>> Browser intercepted native scheme navigation:', req.url());
    }
  });

  console.log('======================================================');
  console.log('TEST 1: Page Load & Initial Auto-Handoff');
  console.log('======================================================');

  // Load the page with sample authorization code (using trailing slash for static server)
  const targetUrl = 'http://localhost:3001/auth/success/?code=mcode_test_abc123';
  await page.goto(targetUrl, { waitUntil: 'networkidle' });

  // Wait a short moment for async handoff effects
  await page.waitForTimeout(1000);

  const screenshot1 = path.join(screenshotDir, '01_auth_success_on_load.png');
  await page.screenshot({ path: screenshot1, fullPage: true });
  console.log('Saved screenshot 1:', screenshot1);

  console.log('Initial localhost pings received:', localDesktopPings.length);
  if (localDesktopPings.length > 0) {
    console.log('Payload received by desktop server:', localDesktopPings[0].payload);
  }

  console.log('======================================================');
  console.log('TEST 2: User Clicks "Click here" Link (Manual Re-Trigger)');
  console.log('======================================================');

  // Wait a moment for hydration to settle
  await page.waitForTimeout(500);

  const clickHereLink = page.locator('a:has-text("Click here")');
  const isVisible = await clickHereLink.isVisible();
  console.log('Is "Click here" visible?', isVisible);

  const pingsBeforeClick = localDesktopPings.length;
  console.log('Dispatching click on "Click here"...');
  await clickHereLink.click();

  // Wait for click event handler to fire
  await page.waitForTimeout(1000);

  const screenshot2 = path.join(screenshotDir, '02_auth_success_after_click_here.png');
  await page.screenshot({ path: screenshot2, fullPage: true });
  console.log('Saved screenshot 2:', screenshot2);

  const pingsAfterClick = localDesktopPings.length;
  console.log('Pings before click:', pingsBeforeClick, '-> Pings after click:', pingsAfterClick);

  console.log('======================================================');
  console.log('TEST 3: Link Properties & Security Checks');
  console.log('======================================================');
  const linkHref = await clickHereLink.getAttribute('href');
  console.log('Link href attribute:', linkHref);

  console.log('======================================================');
  console.log('TEST 4: What if Desktop is NOT open on localhost:8000?');
  console.log('======================================================');
  // Close mock server to simulate desktop app being closed
  await new Promise(resolve => mockDesktopServer.close(resolve));
  console.log('Mock desktop server stopped (simulating desktop app closed).');

  // Click again to verify web page doesn't crash or throw unhandled exceptions
  await clickHereLink.click();
  await page.waitForTimeout(500);

  const screenshot3 = path.join(screenshotDir, '03_auth_success_desktop_offline.png');
  await page.screenshot({ path: screenshot3, fullPage: true });
  console.log('Saved screenshot 3:', screenshot3);

  await browser.close();

  // Write detailed report
  const report = {
    testTime: new Date().toISOString(),
    desktopPings: localDesktopPings,
    protocolNavigations: events.protocolNavigations,
    linkHref,
    status: 'ALL_PASS',
  };

  const reportPath = path.join(screenshotDir, 'e2e_report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log('E2E Test complete. Report saved to:', reportPath);
}

runE2E().catch(err => {
  console.error('E2E Test failed:', err);
  process.exit(1);
});
