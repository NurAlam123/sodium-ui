import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "geist-mono": ["var(--font-geist-mono)"],
        "geist-sans": ["var(--font-geist-sans)"],
        domino: ["var(--font-domino)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
