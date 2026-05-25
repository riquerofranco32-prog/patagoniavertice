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
        // Legacy brand tokens (keep for compatibility)
        tierra: "#1C1A17",
        crema: "#F0EBE1",
        dorado: "#B8965A",
        // Extended earth palette
        earth: {
          950: "#0D0B08",
          900: "#1A1610",
          800: "#2C2418",
          700: "#3D3322",
          400: "#8B7355",
          200: "#C4A882",
        },
        // Gold palette
        gold: {
          400: "#D4A853",
          300: "#E8C47A",
          100: "#F5E6C8",
        },
        // Patagonia neutrals
        patagonia: {
          stone: "#F0EDE8",
          white: "#FAFAF8",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "var(--font-jost)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
