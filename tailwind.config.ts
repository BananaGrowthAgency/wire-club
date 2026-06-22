import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fdf8e7",
          100: "#faefc4",
          200: "#f5dc8a",
          300: "#efc450",
          400: "#e8ab24",
          500: "#CA8A04",
          600: "#a36a02",
          700: "#7d4e04",
          800: "#5a380a",
          900: "#3a220b",
        },
        obsidian: {
          950: "#030202",
          900: "#0c0a09",
          800: "#1c1917",
          700: "#292524",
          600: "#44403c",
        },
      },
      fontFamily: {
        heading: ["Bodoni Moda", "Georgia", "serif"],
        body: ["Jost", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #CA8A04, #e8ab24, #CA8A04)",
        "gold-shimmer": "linear-gradient(90deg, #7d4e04, #CA8A04, #e8ab24, #CA8A04, #7d4e04)",
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
