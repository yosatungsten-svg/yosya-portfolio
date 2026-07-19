// Usage: node scripts/screenshot.js [baseUrl]
// Defaults to http://localhost:4173. Captures EN + ID at desktop/mobile.
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

const BASE_URL = process.argv[2] || "http://localhost:4173";
const OUT_DIR = path.join(__dirname, "..", ".qa-screenshots");

const targets = [
  { name: "en-desktop", url: "/", viewport: { width: 1440, height: 900 } },
  { name: "en-mobile", url: "/", viewport: { width: 390, height: 844 } },
  { name: "id-desktop", url: "/id", viewport: { width: 1440, height: 900 } },
  { name: "id-mobile", url: "/id", viewport: { width: 390, height: 844 } },
];

async function revealAll(page) {
  await page.evaluate(async () => {
    const step = 400;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 50));
    }
    window.scrollTo(0, 0);
  });
}

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const errors = [];

  for (const t of targets) {
    const page = await browser.newPage({ viewport: t.viewport });
    page.on("pageerror", (e) => errors.push(`${t.name}: ${e.message}`));
    await page.goto(BASE_URL + t.url, { waitUntil: "networkidle" });
    await revealAll(page);
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(OUT_DIR, `${t.name}.png`), fullPage: true });
    await page.close();
  }

  await browser.close();
  console.log(`[screenshot] saved to ${OUT_DIR}`);
  if (errors.length) {
    console.error("[screenshot] console/page errors:", errors);
    process.exitCode = 1;
  }
}

run();
