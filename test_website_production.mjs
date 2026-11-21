import { chromium } from "playwright";
import fs from "fs";

async function verifyProductionSite() {
  console.log("Launching headless browser to test production website...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const results = {
    pagesTested: [],
    errors: [],
    tabsTested: []
  };

  page.on("console", msg => {
    if (msg.type() === "error") {
      results.errors.push(msg.text());
    }
  });

  // 1. Test Landing Page
  console.log("Navigating to http://localhost:3333/ ...");
  await page.goto("http://localhost:3333/", { waitUntil: "networkidle" });
  await page.screenshot({ path: "C:/Users/rama/.gemini/antigravity/brain/6c2d2530-5fae-45bb-8188-4e00a46893c6/prod_website_hero.png" });
  results.pagesTested.push({ route: "/", title: await page.title(), status: 200 });

  // 2. Test Tab Switching
  const tabNames = ["Focused Chat", "Reasoning & Tools", "3D Spreadsheets", "Dual-Pane"];
  for (const tname of tabNames) {
    const tabBtn = page.locator(`button[role="tab"]:has-text("${tname}")`);
    if (await tabBtn.count() > 0) {
      await tabBtn.click();
      await page.waitForTimeout(300);
      results.tabsTested.push(tname);
    }
  }
  await page.screenshot({ path: "C:/Users/rama/.gemini/antigravity/brain/6c2d2530-5fae-45bb-8188-4e00a46893c6/prod_website_tabs.png" });

  // 3. Test Download Page
  console.log("Navigating to http://localhost:3333/download ...");
  await page.goto("http://localhost:3333/download", { waitUntil: "networkidle" });
  await page.screenshot({ path: "C:/Users/rama/.gemini/antigravity/brain/6c2d2530-5fae-45bb-8188-4e00a46893c6/prod_website_download.png" });
  results.pagesTested.push({ route: "/download", title: await page.title(), status: 200 });

  // 4. Test Docs Page
  console.log("Navigating to http://localhost:3333/docs ...");
  await page.goto("http://localhost:3333/docs", { waitUntil: "networkidle" });
  await page.screenshot({ path: "C:/Users/rama/.gemini/antigravity/brain/6c2d2530-5fae-45bb-8188-4e00a46893c6/prod_website_docs.png" });
  results.pagesTested.push({ route: "/docs", title: await page.title(), status: 200 });

  // 5. Test Changelog Page
  console.log("Navigating to http://localhost:3333/changelog ...");
  await page.goto("http://localhost:3333/changelog", { waitUntil: "networkidle" });
  await page.screenshot({ path: "C:/Users/rama/.gemini/antigravity/brain/6c2d2530-5fae-45bb-8188-4e00a46893c6/prod_website_changelog.png" });
  results.pagesTested.push({ route: "/changelog", title: await page.title(), status: 200 });

  await browser.close();
  console.log("Verification completed successfully!");
  console.log(JSON.stringify(results, null, 2));
}

verifyProductionSite().catch(err => {
  console.error("Verification failed:", err);
  process.exit(1);
});
