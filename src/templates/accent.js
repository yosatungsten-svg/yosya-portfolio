// Maps a semantic accent key (from content JSON) to the Tailwind classes
// generated from the "Ledger" palette in tailwind.config.js.
const accentText = {
  trust: "text-trust",
  growth: "text-growth",
  attention: "text-attention",
  detail: "text-detail",
};

const accentBorderTop = {
  trust: "border-trust/40",
  growth: "border-growth/40",
  attention: "border-attention/40",
  detail: "border-detail/40",
};

const accentBg = {
  trust: "bg-trust",
  growth: "bg-growth",
  attention: "bg-attention",
  detail: "bg-detail",
};

const accentBgSoft = {
  trust: "bg-trust/10",
  growth: "bg-growth/10",
  attention: "bg-attention/10",
  detail: "bg-detail/10",
};

module.exports = { accentText, accentBorderTop, accentBg, accentBgSoft };
