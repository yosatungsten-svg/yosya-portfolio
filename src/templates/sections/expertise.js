const { icons } = require("../icons");
const { accentText, accentBgSoft } = require("../accent");

function expertise(content) {
  const { expertise: x } = content;
  return `
<section id="expertise" class="py-section-mobile md:py-section px-margin-mobile md:px-margin-desktop bg-surface-container-low/40">
  <div class="max-w-[1400px] mx-auto">
    <div class="mb-xxl pb-xl border-b border-outline-variant/60 reveal">
      <h2 class="font-serif text-headline-lg text-on-surface">${x.title}</h2>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-lg mb-xxl reveal">
      ${x.cards
        .map(
          (c) => `
      <div class="bg-surface-container-lowest border border-outline-variant rounded-card p-lg transition-all hover:shadow-card hover:-translate-y-0.5">
        <div class="w-10 h-10 rounded-control ${accentBgSoft[c.accent]} ${accentText[c.accent]} flex items-center justify-center mb-md">
          ${icons[c.icon] || icons.doc}
        </div>
        <h3 class="font-sans text-title-md text-on-surface mb-xs">${c.title}</h3>
        <p class="font-sans text-body-md text-on-surface-variant">${c.desc}</p>
      </div>`
        )
        .join("")}
    </div>

    <div class="grid md:grid-cols-2 gap-xxl border-t border-outline-variant/60 pt-xl reveal">
      <div>
        <h3 class="font-serif text-headline-sm text-on-surface mb-lg">${x.toolsTitle}</h3>
        <div class="flex flex-wrap gap-sm">
          ${x.tools
            .map(
              (t) =>
                `<span class="px-md py-sm border border-outline-variant rounded-full font-sans text-label-md text-on-surface-variant">${t}</span>`
            )
            .join("")}
        </div>
      </div>
      <div>
        <h3 class="font-serif text-headline-sm text-on-surface mb-lg">${x.languagesTitle}</h3>
        <div class="space-y-lg">
          ${x.languages
            .map(
              (l) => `
          <div>
            <div class="flex justify-between items-baseline mb-xs">
              <span class="font-sans text-title-md text-on-surface">${l.name}</span>
              <span class="font-sans text-label-md text-on-surface-variant">${l.level}</span>
            </div>
            <div class="h-1.5 rounded-full bg-outline-variant/40 overflow-hidden">
              <div class="h-full rounded-full bg-primary" style="width:${l.percent}%"></div>
            </div>
          </div>`
            )
            .join("")}
        </div>
      </div>
    </div>
  </div>
</section>`;
}

module.exports = { expertise };
