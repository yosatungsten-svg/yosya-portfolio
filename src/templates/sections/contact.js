const { icons } = require("../icons");

function contact(content) {
  const { contact: c } = content;
  return `
<section id="contact" class="py-section-mobile md:py-section px-margin-mobile md:px-margin-desktop">
  <div class="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-xxl reveal">
    <div class="md:col-span-7">
      <h2 class="font-serif text-headline-lg text-on-surface mb-md">${c.title}</h2>
      <p class="font-sans text-body-lg text-on-surface-variant max-w-xl mb-xl">${c.intro}</p>

      <div class="space-y-lg max-w-md">
        <a href="mailto:${c.email}" class="flex items-center gap-md group">
          <span class="w-10 h-10 rounded-control bg-trust/10 text-trust flex items-center justify-center shrink-0">${icons.mail}</span>
          <span>
            <span class="block font-sans text-label-md text-on-surface-variant">${c.emailLabel}</span>
            <span class="block font-sans text-title-md text-on-surface group-hover:text-trust transition-colors">${c.email}</span>
          </span>
        </a>
        <a href="tel:${c.phone.replace(/\s+/g, "")}" class="flex items-center gap-md group">
          <span class="w-10 h-10 rounded-control bg-growth/10 text-growth flex items-center justify-center shrink-0">${icons.phone}</span>
          <span>
            <span class="block font-sans text-label-md text-on-surface-variant">${c.phoneLabel}</span>
            <span class="block font-sans text-title-md text-on-surface group-hover:text-growth-ink transition-colors">${c.phone}</span>
          </span>
        </a>
        <div class="flex items-center gap-md">
          <span class="w-10 h-10 rounded-control bg-attention/10 text-attention flex items-center justify-center shrink-0">${icons.pin}</span>
          <span>
            <span class="block font-sans text-label-md text-on-surface-variant">${c.locationLabel}</span>
            <span class="block font-sans text-title-md text-on-surface">${c.location}</span>
          </span>
        </div>
        ${
          c.linkedin
            ? `
        <a href="${c.linkedin}" target="_blank" rel="noopener" class="flex items-center gap-md group">
          <span class="w-10 h-10 rounded-control bg-detail/10 text-detail flex items-center justify-center shrink-0">${icons.linkedin}</span>
          <span>
            <span class="block font-sans text-label-md text-on-surface-variant">${c.linkedinLabel}</span>
            <span class="block font-sans text-title-md text-on-surface group-hover:text-detail transition-colors">LinkedIn</span>
          </span>
        </a>`
            : ""
        }
      </div>
    </div>
    <div class="md:col-span-5">
      <div class="bg-surface-container-low border border-outline-variant rounded-card p-xl h-full flex flex-col justify-center items-start">
        <span class="inline-flex items-center gap-xs px-md py-xs rounded-full bg-growth/10 text-growth-ink font-sans text-label-md mb-lg">
          <span class="w-1.5 h-1.5 rounded-full bg-growth animate-pulse"></span>
          ${c.availability}
        </span>
        <p class="font-serif text-headline-sm text-on-surface mb-lg">${c.availabilityNote}</p>
        <a href="mailto:${c.email}" class="inline-flex items-center justify-center min-h-[44px] bg-primary text-on-primary px-xl py-md rounded-full font-sans text-label-lg hover:bg-primary-container hover:-translate-y-0.5 transition-all">${c.ctaEmail}</a>
      </div>
    </div>
  </div>
</section>`;
}

module.exports = { contact };
