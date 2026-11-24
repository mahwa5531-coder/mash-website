import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function verifyProductionSite() {
  const port = process.env.PORT || 3001;
  const baseUrl = `http://localhost:${port}`;
  console.log(`Launching headless browser to test production website on ${baseUrl}...`);
  
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

  const routesToTest = [
    { route: "/", expectedTitle: "Mash" },
    { route: "/pricing", expectedTitle: "Pricing" },
    { route: "/use-cases", expectedTitle: "Use Cases" },
    { route: "/download", expectedTitle: "Download" },
    { route: "/checkout", expectedTitle: "Checkout" },
    { route: "/terms", expectedTitle: "Terms" },
    { route: "/privacy", expectedTitle: "Privacy" },
    { route: "/policies", expectedTitle: "Policies" }
  ];

  for (const { route, expectedTitle } of routesToTest) {
    console.log(`Testing ${baseUrl}${route} ...`);
    const resp = await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    const status = resp ? resp.status() : 0;
    const title = await page.title();
    
    if (status >= 400) {
      results.errors.push(`Route ${route} returned HTTP ${status}`);
    }
    
    results.pagesTested.push({ route, title, status });
  }

  // Test interactive elements on Landing page
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  const tabNames = ["Focused Chat", "Reasoning & Tools", "3D Spreadsheets", "Dual-Pane"];
  for (const tname of tabNames) {
    const tabBtn = page.locator(`button[role="tab"]:has-text("${tname}")`);
    if (await tabBtn.count() > 0) {
      await tabBtn.click();
      await page.waitForTimeout(200);
      results.tabsTested.push(tname);
    }
  }

  await browser.close();
  console.log("Verification completed successfully!");
  console.log(JSON.stringify(results, null, 2));

  if (results.errors.length > 0) {
    console.error(`Verification encountered ${results.errors.length} errors.`);
    process.exit(1);
  }
}

verifyProductionSite().catch(err => {
  console.error("Verification failed:", err);
  process.exit(1);
});
