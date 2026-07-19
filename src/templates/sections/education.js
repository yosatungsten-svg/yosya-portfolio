const { icons } = require("../icons");

function education(content) {
  const { education: ed } = content;
  return `
<section id="education" class="px-margin-mobile md:px-margin-desktop">
  <div class="max-w-[1400px] mx-auto reveal">
    <h2 class="font-serif text-headline-lg text-on-surface mb-xl border-b border-outline-variant/60 pb-sm">${ed.title}</h2>
    <div class="flex items-start gap-md bg-surface-container-lowest border border-outline-variant rounded-card p-lg max-w-xl">
      <div class="w-10 h-10 rounded-control bg-trust/10 text-trust flex items-center justify-center shrink-0">
        ${icons.cap}
      </div>
      <div>
        <h3 class="font-serif text-headline-sm text-on-surface mb-xs">${ed.school}</h3>
        <p class="font-sans text-title-md text-on-surface-variant mb-xs">${ed.degree}</p>
        <p class="font-sans text-label-md text-on-surface-variant">${ed.years}</p>
      </div>
    </div>
  </div>
</section>`;
}

module.exports = { education };
