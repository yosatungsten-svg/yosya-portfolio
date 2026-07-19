// Minimal inline SVG icon set (24x24, stroke-based) used across section cards.
// Kept as plain functions (not a sprite) so Tailwind can purge unused classes
// and each icon can take its own currentColor via a wrapping class.

const base = (path) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">${path}</svg>`;

const icons = {
  chart: base(
    '<path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/>'
  ),
  shield: base(
    '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/>'
  ),
  check: base('<path d="M20 6L9 17l-5-5"/>'),
  team: base(
    '<circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6"/><circle cx="17" cy="8" r="2.5"/><path d="M16 14.2c2.9.6 5 2.8 5 5.8"/>'
  ),
  doc: base(
    '<path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/><path d="M9 13h6M9 17h6"/>'
  ),
  scale: base(
    '<path d="M12 3v18M7 21h10"/><path d="M5 7l-3 6a3 3 0 006 0l-3-6zM19 7l-3 6a3 3 0 006 0l-3-6z"/><path d="M4 7h16"/>'
  ),
  mail: base('<path d="M3 5h18v14H3z"/><path d="M3 6l9 7 9-7"/>'),
  phone: base(
    '<path d="M4 4h4l2 5-2.5 1.5a12 12 0 006 6L15 14l5 2v4a2 2 0 01-2 2C9.6 22 2 14.4 2 6a2 2 0 012-2z"/>'
  ),
  pin: base(
    '<path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>'
  ),
  cap: base(
    '<path d="M2 8l10-5 10 5-10 5-10-5z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>'
  ),
  arrowUp: base('<path d="M12 19V5M5 12l7-7 7 7"/>'),
  menu: base('<path d="M3 6h18M3 12h18M3 18h18"/>'),
  close: base('<path d="M6 6l12 12M18 6L6 18"/>'),
  linkedin: base(
    '<path d="M6.5 9v9M6.5 5.5v.01M11 18V9M11 12.5c0-2 1.5-3.5 3.5-3.5S18 10.5 18 12.5V18"/>'
  ),
};

module.exports = { icons };
