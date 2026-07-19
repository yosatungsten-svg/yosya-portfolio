const fs = require("fs");
const path = require("path");
const { renderPage } = require("../src/templates/layout");

const ROOT = path.join(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const PUBLIC = path.join(ROOT, "public");

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function build() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  // Static assets (images, js, favicon) — copied as-is.
  copyDir(PUBLIC, DIST);

  const en = JSON.parse(fs.readFileSync(path.join(ROOT, "src/content/en.json"), "utf8"));
  const id = JSON.parse(fs.readFileSync(path.join(ROOT, "src/content/id.json"), "utf8"));

  fs.writeFileSync(path.join(DIST, "index.html"), renderPage(en));

  const idDir = path.join(DIST, "id");
  fs.mkdirSync(idDir, { recursive: true });
  fs.writeFileSync(path.join(idDir, "index.html"), renderPage(id));

  console.log("[build] dist/index.html + dist/id/index.html generated.");
}

build();
