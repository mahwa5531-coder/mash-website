import { chromium } from "playwright";

async function captureOfficialLogo() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log("Loading http://localhost:3333/ to capture official logo...");
  await page.goto("http://localhost:3333/", { waitUntil: "networkidle" });

  // 1. Capture Header with Official Logo
  const header = page.locator("header");
  await header.screenshot({ 
    path: "C:/Users/rama/.gemini/antigravity/brain/6c2d2530-5fae-45bb-8188-4e00a46893c6/official_logo_navbar.png" 
  });

  // 2. Capture Zoomed Monogram
  const brandLink = page.locator("header a[href='/']").first();
  await brandLink.screenshot({ 
    path: "C:/Users/rama/.gemini/antigravity/brain/6c2d2530-5fae-45bb-8188-4e00a46893c6/official_logo_monogram_zoom.png" 
  });

  await browser.close();
  console.log("Official logo captures completed!");
}

captureOfficialLogo().catch(err => {
  console.error("Capture failed:", err);
  process.exit(1);
});
