/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/templates/**/*.js", "./dist/**/*.html"],
  theme: {
    extend: {
      colors: {
        surface: "#fcf8fa",
        "surface-dim": "#ddd9db",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f6f2f4",
        "surface-container": "#f1edef",
        "surface-container-high": "#ebe7e9",
        "on-surface": "#1c1b1d",
        "on-surface-variant": "#47464c",
        outline: "#78767d",
        "outline-variant": "#c8c5cd",
        primary: "#141422",
        "on-primary": "#ffffff",
        "primary-container": "#1a1a2e",
        secondary: "#5e5d68",
        "on-secondary": "#ffffff",
        trust: "#3B5BDB",
        growth: "#2F9E5C",
        attention: "#C9762E",
        detail: "#B4425A",
        // WCAG AA-safe (4.5:1+ on the cream surface) text/icon variants of
        // growth/attention — the base tones above pass fine for borders and
        // large decorative fills but fall short (~3:1) as small body text.
        "growth-ink": "#047857",
        "attention-ink": "#92400E",
        // Light amber for the dark "Applied AI" card — AA/AAA-safe against
        // the primary-container navy background.
        "attention-light": "#F2C078",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      spacing: {
        base: "4px",
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
        gutter: "24px",
        section: "120px",
        "section-mobile": "64px",
        "margin-mobile": "16px",
        "margin-desktop": "64px",
      },
      borderRadius: {
        card: "16px",
        control: "12px",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.05)",
      },
      fontSize: {
        "display-lg": ["64px", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["40px", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-lg": ["36px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-md": ["28px", { lineHeight: "1.25", fontWeight: "700" }],
        "headline-sm": ["22px", { lineHeight: "1.3", fontWeight: "700" }],
        "title-lg": ["20px", { lineHeight: "1.4", fontWeight: "600" }],
        "title-md": ["16px", { lineHeight: "1.5", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["15px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.03em", fontWeight: "600" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "600" }],
      },
    },
  },
  plugins: [],
};
