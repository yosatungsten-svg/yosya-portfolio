function hero(content) {
  const { hero: h } = content;
  return `
<section id="hero" class="relative pt-28 md:pt-36 pb-16 md:pb-24 px-margin-mobile md:px-margin-desktop">
  <div class="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-xl md:gap-xxl items-center">
    <div class="order-2 md:order-1 md:col-span-7 reveal">
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
        <a href="${h.ctaPrimary.href}" class="inline-flex items-center justify-center min-h-[44px] bg-primary text-on-primary px-xl py-md rounded-full font-sans text-label-lg hover:bg-primary-container hover:-translate-y-0.5 transition-all">${h.ctaPrimary.label}</a>
        <a href="${h.ctaSecondary.href}" class="inline-flex items-center justify-center min-h-[44px] border border-outline-variant text-on-surface px-xl py-md rounded-full font-sans text-label-lg hover:bg-surface-container-low hover:-translate-y-0.5 transition-all">${h.ctaSecondary.label}</a>
      </div>
    </div>
    <div class="order-1 md:order-2 md:col-span-5 reveal">
      <div class="relative max-w-[260px] sm:max-w-[300px] md:max-w-[320px] mx-auto md:ml-auto md:mr-0">
        <div class="absolute -top-4 -right-4 w-full h-full rounded-card bg-trust/[0.06] border border-trust/10 -z-10"></div>
        <div class="relative rounded-card overflow-hidden border border-outline-variant shadow-card aspect-[4/5]">
          <picture>
            <source srcset="/img/hero-yosya-sm.webp" media="(max-width: 640px)" />
            <img src="/img/hero-yosya.webp" alt="${h.photoAlt}" class="w-full h-full object-cover" width="900" height="1125" loading="eager" />
          </picture>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

module.exports = { hero };
