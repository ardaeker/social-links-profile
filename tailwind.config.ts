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
        white: "var(--color-white)",
        black: "var(--color-black)",
        gray: "var(--color-gray)",
        "dark-gray": "var(--color-dark-gray)",
        "neon-gray": "var(--color-neon-gray)",
        "neon-green": "var(--color-neon-green)",
      },
      fontFamily: {
        inter: "var(--font-inter)",
      },
      maxWidth: {
        card: "var(--max-width-card)",
      },
      spacing: {
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
