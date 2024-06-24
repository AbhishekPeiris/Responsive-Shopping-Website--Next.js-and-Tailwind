import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px"
      },
      colors: {
        accent: "#FF8F9C",
        blackish: "#1b1b1b",
        gray: {
          200: '#E5E7EB',
          // add other gray shades if needed
        }
      }
    },
  },
  plugins: [],
};

export default config;
