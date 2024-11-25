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
        "geist-mono": ["--font-geist-mono"],
        "geist-sans": ["--font-geist-sans"],
      },
    },
  },
  plugins: [],
} satisfies Config;
