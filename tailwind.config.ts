import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fitness/health palette — white base, fresh green + clinical blue accents
        mint: {
          50: "#f0fdf6",
          100: "#dcfce9",
          500: "#16b364",
          600: "#0f9d58",
          700: "#0c7a45",
        },
        aqua: {
          50: "#eff8ff",
          100: "#d7edff",
          500: "#2e90fa",
          600: "#1570ef",
          700: "#175cd3",
        },
        ink: {
          500: "#4b5563",
          700: "#334155",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(15,23,42,0.06), 0 8px 24px -12px rgba(15,23,42,0.10)",
        lift: "0 12px 32px -12px rgba(15,157,88,0.28)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
