function aiPractice(content) {
  const { appliedAi: a } = content;
  return `
<section id="applied-ai" class="py-section-mobile md:py-section px-margin-mobile md:px-margin-desktop">
  <div class="max-w-[1400px] mx-auto reveal">
    <div class="mb-xl">
      <span class="font-sans text-label-md text-attention-ink tracking-widest">${a.eyebrow}</span>
      <h2 class="font-serif text-headline-lg text-on-surface mt-sm mb-md">${a.title}</h2>
      <p class="font-sans text-body-lg text-on-surface-variant max-w-2xl">${a.intro}</p>
    </div>

    <div class="relative overflow-hidden rounded-card bg-primary-container p-lg md:p-xxl">
      <div class="absolute inset-0 opacity-[0.06]" style="background-image:radial-gradient(circle at 1px 1px, #fff 1px, transparent 0); background-size: 24px 24px;"></div>
      <div class="relative">
        <div class="flex flex-wrap items-center gap-sm mb-lg">
          <span class="inline-flex items-center gap-xs px-md py-xs rounded-full bg-white/10 text-attention-light font-sans text-label-md">
            <span class="w-1.5 h-1.5 rounded-full bg-attention-light animate-pulse"></span>
            ${a.card.status}
          </span>
        </div>
        <h3 class="font-serif text-headline-sm md:text-headline-md text-on-primary mb-md">${a.card.name}</h3>
        <p class="font-sans text-body-lg text-on-primary/75 max-w-2xl mb-lg">${a.card.description}</p>
        <div class="flex flex-wrap gap-sm mb-lg">
          ${a.card.badges
            .map(
              (b) =>
                `<span class="px-md py-sm border border-white/15 bg-white/5 rounded-full font-sans text-label-md text-on-primary/80">${b}</span>`
            )
            .join("")}
        </div>
        <a href="${a.card.footnoteHref}" class="font-sans text-label-lg text-attention-light hover:underline">${a.card.footnote} →</a>
      </div>
    </div>
  </div>
</section>`;
}

module.exports = { aiPractice };
