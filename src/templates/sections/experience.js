const { accentBorderTop, accentText } = require("../accent");

function experience(content) {
  const { experience: e } = content;
  return `
<section id="experience" class="py-section-mobile md:py-section px-margin-mobile md:px-margin-desktop">
  <div class="max-w-[1400px] mx-auto">
    <div class="flex items-end justify-between mb-xxl pb-xl border-b border-outline-variant/60 reveal">
      <h2 class="font-serif text-headline-lg text-on-surface">${e.title}</h2>
      <span class="font-sans text-label-md text-on-surface-variant hidden md:block">${e.eyebrow}</span>
    </div>
    <div class="space-y-xxl md:space-y-[64px]">
      ${e.roles
        .map(
          (r, i) => `
      <div class="grid md:grid-cols-12 gap-lg md:gap-xl reveal group">
        <div class="md:col-span-3 border-t-2 ${accentBorderTop[r.accent]} pt-sm relative">
          <span class="hidden md:block font-serif text-headline-lg text-on-surface/[0.06] leading-none mb-sm select-none">0${i + 1}</span>
          <p class="font-sans text-label-md text-on-surface-variant mb-xs">${r.period}</p>
          <p class="font-sans text-title-md text-on-surface">${r.title}</p>
        </div>
        <div class="md:col-span-8 md:col-start-5">
          <h3 class="font-serif text-headline-sm text-on-surface mb-md transition-colors group-hover:${accentText[r.accent]}">${r.company}</h3>
          <p class="font-sans text-body-lg text-on-surface-variant mb-lg">${r.summary}</p>
          <ul class="space-y-sm font-sans text-body-md text-on-surface-variant border-l border-outline-variant pl-md">
            ${r.bullets.map((b) => `<li>${b}</li>`).join("")}
          </ul>
        </div>
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>`;
}

module.exports = { experience };
