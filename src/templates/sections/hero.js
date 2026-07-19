function hero(content) {
  const { hero: h } = content;
  return `
<section id="hero" class="relative pt-28 md:pt-36 pb-16 md:pb-24 px-margin-mobile md:px-margin-desktop">
  <div class="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-xl md:gap-xxl items-center">
    <div class="order-2 md:order-1 reveal">
      <div class="flex items-center gap-md mb-lg">
        <span class="w-8 h-[1px] bg-on-surface/40"></span>
        <span class="font-sans text-label-md text-on-surface-variant tracking-widest">${h.eyebrow}</span>
      </div>
      <h1 class="font-serif text-display-lg-mobile md:text-display-lg text-on-surface mb-lg">${h.name}</h1>
      <p class="font-sans text-body-lg text-on-surface-variant max-w-xl mb-xl">${h.subtitle}</p>
      <div class="grid grid-cols-3 gap-lg border-y border-outline-variant py-lg mb-xl max-w-md">
        ${h.stats
          .map(
            (s, i) => `
        <div class="${i > 0 ? "border-l border-outline-variant pl-lg" : ""}">
          <div class="font-serif text-headline-md text-on-surface mb-xs">${s.value}</div>
          <div class="font-sans text-label-md text-on-surface-variant">${s.label}</div>
        </div>`
          )
          .join("")}
      </div>
      <div class="flex flex-wrap gap-md">
        <a href="${h.ctaPrimary.href}" class="inline-flex items-center justify-center min-h-[44px] bg-primary text-on-primary px-xl py-md rounded-full font-sans text-label-lg hover:bg-primary-container transition-colors">${h.ctaPrimary.label}</a>
        <a href="${h.ctaSecondary.href}" class="inline-flex items-center justify-center min-h-[44px] border border-outline-variant text-on-surface px-xl py-md rounded-full font-sans text-label-lg hover:bg-surface-container-low transition-colors">${h.ctaSecondary.label}</a>
      </div>
    </div>
    <div class="order-1 md:order-2 reveal">
      <div class="relative mx-auto max-w-sm md:max-w-none rounded-card overflow-hidden border border-outline-variant shadow-card aspect-[4/5]">
        <picture>
          <source srcset="/img/hero-yosya-sm.webp" media="(max-width: 640px)" />
          <img src="/img/hero-yosya.webp" alt="${h.photoAlt}" class="w-full h-full object-cover" width="900" height="1125" loading="eager" />
        </picture>
      </div>
    </div>
  </div>
</section>`;
}

module.exports = { hero };
