import { chromium } from "playwright";

async function captureCards() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1200 } });
  const page = await context.newPage();

  console.log("Loading http://localhost:3333/ to capture card-wise features...");
  await page.goto("http://localhost:3333/", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);

  // Capture the AppFeaturesGrid section
  const section = page.locator("section:has-text('How the workbench actually works.')");
  if (await section.count() > 0) {
    await section.screenshot({ 
      path: "C:/Users/rama/.gemini/antigravity/brain/6c2d2530-5fae-45bb-8188-4e00a46893c6/card_wise_app_features.png"
    });
  }

  await browser.close();
  console.log("Card-wise capture completed!");
}

captureCards().catch(err => {
  console.error("Capture failed:", err);
  process.exit(1);
});
