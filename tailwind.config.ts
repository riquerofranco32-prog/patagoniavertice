import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // ── Core palette ──────────────────────────
        tierra:  "#1C1916",   // deep warm charcoal (main dark)
        crema:   "#F5EFE6",   // warm cream (main light bg)
        dorado:  "#C49555",   // warm amber-gold (main accent)

        // ── Pastel / mid-tones ────────────────────
        arena:   "#EAD9C4",   // warm sand — secondary backgrounds
        salvia:  "#7A9E7E",   // muted sage green — Patagonia landscape
        piedra:  "#9E8E80",   // warm stone grey — mid tone
        humo:    "#F0E8DC",   // very light warm smoke — card bg

        // ── Extended earth palette (for fine control) ─
        earth: {
          950: "#0E0C09",
          900: "#1C1916",
          800: "#2E2923",
          700: "#40372F",
          400: "#8C7860",
          200: "#C8B4A0",
        },
        gold: {
          500: "#C49555",
          400: "#D4A868",
          300: "#E2BF8A",
          100: "#F5E6CC",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body:    ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
