import { chromium } from "playwright";

async function captureHero() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1100 } });
  const page = await context.newPage();

  console.log("Loading http://localhost:3333/ to capture enhanced hero...");
  await page.goto("http://localhost:3333/", { waitUntil: "networkidle" });

  // 1. Capture Full Hero Section
  await page.screenshot({ 
    path: "C:/Users/rama/.gemini/antigravity/brain/6c2d2530-5fae-45bb-8188-4e00a46893c6/enhanced_hero_section.png",
    clip: { x: 0, y: 0, width: 1440, height: 1050 }
  });

  // 2. Hover over the first window bezel to trigger traffic light and shadow hover states
  const windowMockup = page.locator(".group.relative.mx-auto.w-full.max-w-5xl").first();
  if (await windowMockup.count() > 0) {
    await windowMockup.hover();
    await page.waitForTimeout(400);
    await page.screenshot({ 
      path: "C:/Users/rama/.gemini/antigravity/brain/6c2d2530-5fae-45bb-8188-4e00a46893c6/enhanced_hero_bezel_hover.png",
      clip: { x: 120, y: 380, width: 1200, height: 650 }
    });
  }

  await browser.close();
  console.log("Hero captures completed successfully!");
}

captureHero().catch(err => {
  console.error("Capture failed:", err);
  process.exit(1);
});
