import { chromium } from "playwright";

async function captureTabs() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1200 } });
  const page = await context.newPage();

  console.log("Loading http://localhost:3333/ to capture enhanced feature tabs...");
  await page.goto("http://localhost:3333/#features", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);

  const section = page.locator("#features");

  // 1. Capture Dual-Pane Tab with Proof Points
  await section.screenshot({ 
    path: "C:/Users/rama/.gemini/antigravity/brain/6c2d2530-5fae-45bb-8188-4e00a46893c6/enhanced_feature_tabs_dual_pane.png"
  });

  // 2. Click Single-Pane Chat Tab
  const singlePaneBtn = page.locator("button[role='tab']:has-text('Single-Pane Chat')");
  if (await singlePaneBtn.count() > 0) {
    await singlePaneBtn.click();
    await page.waitForTimeout(300);
    await section.screenshot({ 
      path: "C:/Users/rama/.gemini/antigravity/brain/6c2d2530-5fae-45bb-8188-4e00a46893c6/enhanced_feature_tabs_single_pane.png"
    });
  }

  // 3. Click 3D Spreadsheets Tab
  const spreadsheetsBtn = page.locator("button[role='tab']:has-text('3D Spreadsheets')");
  if (await spreadsheetsBtn.count() > 0) {
    await spreadsheetsBtn.click();
    await page.waitForTimeout(300);
    await section.screenshot({ 
      path: "C:/Users/rama/.gemini/antigravity/brain/6c2d2530-5fae-45bb-8188-4e00a46893c6/enhanced_feature_tabs_3d_spreadsheets.png"
    });
  }

  await browser.close();
  console.log("Feature tabs captures completed successfully!");
}

captureTabs().catch(err => {
  console.error("Capture failed:", err);
  process.exit(1);
});
