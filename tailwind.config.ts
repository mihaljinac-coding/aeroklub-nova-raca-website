import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-blue": "#0d2438",
        "light-blue": "#88b9e1",
        "background-blue": "#e5edf4"
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero.svg')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        alexandria: ["Alexsandria", "sans-serif"]
      },
    },
  },
  plugins: [],
} satisfies Config;
