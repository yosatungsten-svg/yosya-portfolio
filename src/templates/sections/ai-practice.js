function aiPractice(content) {
  const { appliedAi: a } = content;
  return `
<section id="applied-ai" class="py-section-mobile md:py-section px-margin-mobile md:px-margin-desktop">
  <div class="max-w-[1400px] mx-auto reveal">
    <div class="mb-xl">
      <span class="font-sans text-label-md text-attention tracking-widest">${a.eyebrow}</span>
      <h2 class="font-serif text-headline-lg text-on-surface mt-sm mb-md">${a.title}</h2>
      <p class="font-sans text-body-lg text-on-surface-variant max-w-2xl">${a.intro}</p>
    </div>

    <div class="border border-outline-variant rounded-card bg-gradient-to-br from-attention/5 to-surface-container-low/60 p-lg md:p-xxl">
      <div class="flex flex-wrap items-center gap-sm mb-lg">
        <span class="inline-flex items-center gap-xs px-md py-xs rounded-full bg-attention/10 text-attention font-sans text-label-md">
          <span class="w-1.5 h-1.5 rounded-full bg-attention animate-pulse"></span>
          ${a.card.status}
        </span>
      </div>
      <h3 class="font-serif text-headline-sm md:text-headline-md text-on-surface mb-md">${a.card.name}</h3>
      <p class="font-sans text-body-lg text-on-surface-variant max-w-2xl mb-lg">${a.card.description}</p>
      <div class="flex flex-wrap gap-sm mb-lg">
        ${a.card.badges
          .map(
            (b) =>
              `<span class="px-md py-sm border border-outline-variant bg-surface-container-lowest rounded-full font-sans text-label-md text-on-surface-variant">${b}</span>`
          )
          .join("")}
      </div>
      <a href="${a.card.footnoteHref}" class="font-sans text-label-lg text-attention hover:underline">${a.card.footnote} →</a>
    </div>
  </div>
</section>`;
}

module.exports = { aiPractice };
