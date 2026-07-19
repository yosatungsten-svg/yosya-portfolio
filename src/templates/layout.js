const { hero } = require("./sections/hero");
const { experience } = require("./sections/experience");
const { expertise } = require("./sections/expertise");
const { aiPractice } = require("./sections/ai-practice");
const { education } = require("./sections/education");
const { contact } = require("./sections/contact");
const { icons } = require("./icons");

function nav(content) {
  const { nav: n, hero: h } = content;
  return `
<header class="fixed top-0 inset-x-0 z-50 glass-nav border-b border-outline-variant/40">
  <nav class="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-[1400px] mx-auto">
    <a href="#hero" class="font-serif text-title-lg tracking-wide text-on-surface select-none">${n.brand}</a>

    <div class="hidden md:flex items-center gap-xl">
      ${n.links
        .map(
          (l) =>
            `<a class="font-sans text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" href="${l.href}">${l.label}</a>`
        )
        .join("")}
    </div>

    <div class="flex items-center gap-md">
      <a href="${content.altPath}" class="font-sans text-label-lg text-on-surface-variant hover:text-on-surface transition-colors px-sm py-xs border border-outline-variant rounded-full" aria-label="Switch language">${content.altLabel}</a>
      <a href="${n.links[n.links.length - 1].href}" class="hidden sm:inline-flex items-center justify-center min-h-[44px] bg-primary text-on-primary px-lg py-sm rounded-full font-sans text-label-lg hover:bg-primary-container transition-colors">${n.cta}</a>
      <button id="nav-toggle" class="md:hidden w-11 h-11 flex items-center justify-center text-on-surface" aria-label="Toggle menu" aria-expanded="false">
        <span id="nav-icon-open">${icons.menu}</span>
        <span id="nav-icon-close" class="hidden">${icons.close}</span>
      </button>
    </div>
  </nav>

  <div id="nav-panel" class="hidden md:hidden border-t border-outline-variant/40 bg-surface px-margin-mobile py-lg">
    <div class="flex flex-col gap-lg">
      ${n.links
        .map(
          (l) =>
            `<a class="font-sans text-title-md text-on-surface" href="${l.href}" data-nav-close>${l.label}</a>`
        )
        .join("")}
    </div>
  </div>
</header>`;
}

function footer(content) {
  const { footer: f } = content;
  const year = new Date().getFullYear();
  return `
<footer class="border-t border-outline-variant/40 py-xl mt-xxl">
  <div class="px-margin-mobile md:px-margin-desktop max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-lg text-center md:text-left">
    <span class="font-serif text-title-lg text-on-surface select-none">${f.brand}</span>
    <p class="font-sans text-label-md text-on-surface-variant">© ${year} Yosya Yodya. ${f.copyright}</p>
    <a href="#hero" class="font-sans text-label-md text-on-surface-variant hover:text-on-surface transition-colors inline-flex items-center gap-xs">
      ${f.backToTop} ${icons.arrowUp}
    </a>
  </div>
</footer>`;
}

function renderPage(content) {
  return `<!DOCTYPE html>
<html lang="${content.htmlLang}" class="scroll-smooth">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${content.meta.title}</title>
<meta name="description" content="${content.meta.description}" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="alternate" hreflang="en" href="/" />
<link rel="alternate" hreflang="id" href="/id/" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,500&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="/assets/style.css" />
</head>
<body class="bg-surface font-sans text-on-surface selection:bg-primary/10">
${nav(content)}
<main>
${hero(content)}
${experience(content)}
${expertise(content)}
${aiPractice(content)}
<div class="py-section-mobile md:py-section space-y-xxl">
${education(content)}
${contact(content)}
</div>
</main>
${footer(content)}
<script src="/js/main.js" defer></script>
</body>
</html>`;
}

module.exports = { renderPage };
