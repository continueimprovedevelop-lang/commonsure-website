import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#2E4636",
          light: "#3E5C48",
          dark: "#203327",
        },
        gold: {
          DEFAULT: "#C8912A",
          light: "#D9A94F",
        },
        cream: {
          DEFAULT: "#FAFBFA",
          deep: "#F4F7F2",
        },
        charcoal: "#1A1A1A",
      },
      fontFamily: {
        sans: ["var(--font-source-sans)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
