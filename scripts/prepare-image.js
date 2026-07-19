const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

const SOURCE = path.join(__dirname, "..", "assets-source", "headshot-original.png");
const OUT_DIR = path.join(__dirname, "..", "public", "img");

async function run() {
  if (!fs.existsSync(SOURCE)) {
    console.warn(`[prepare-image] source photo not found at ${SOURCE}, skipping (using committed public/img output if present).`);
    return;
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // Source is 1067x1600 with a lot of blank wall above the head; crop that
  // out first so the resized 4:5 portrait is framed on the face/shoulders.
  const cropped = sharp(SOURCE).extract({ left: 0, top: 280, width: 1067, height: 1320 });

  // Hero photo now renders at a modest max-width (~320px CSS) in the layout,
  // so a 2x-retina-sized source is plenty — no need for the original's full
  // 900px width, which only bloated the file for no visible gain.
  await cropped
    .clone()
    .resize({ width: 640, height: 800, fit: "cover", position: "top" })
    .webp({ quality: 80 })
    .toFile(path.join(OUT_DIR, "hero-yosya.webp"));

  await cropped
    .clone()
    .resize({ width: 400, height: 500, fit: "cover", position: "top" })
    .webp({ quality: 78 })
    .toFile(path.join(OUT_DIR, "hero-yosya-sm.webp"));

  console.log("[prepare-image] hero-yosya.webp + hero-yosya-sm.webp generated.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
