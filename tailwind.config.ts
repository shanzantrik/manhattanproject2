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
        // Book Cover Color Palette
        primary: {
          50: "#fef7e6",
          100: "#fdecc2",
          200: "#fbd68a",
          300: "#f9c053",
          400: "#f7a827", // Golden-orange
          500: "#d4880f",
          600: "#b06d0b",
          700: "#8d520a",
          800: "#72430f",
          900: "#5f3813",
        },
        // Electric blue (third eye glow)
        electric: {
          50: "#e6f3ff",
          100: "#b3daff",
          200: "#80c1ff",
          300: "#4da8ff",
          400: "#1a8fff",
          500: "#0076ff", // Electric blue
          600: "#005ecc",
          700: "#004699",
          800: "#002f66",
          900: "#001733",
        },
        // Blood red/orange red (moon)
        blood: {
          50: "#ffe6e6",
          100: "#ffb3b3",
          200: "#ff8080",
          300: "#ff4d4d",
          400: "#ff1a1a",
          500: "#cc0000", // Blood red
          600: "#990000",
          700: "#660000",
          800: "#330000",
          900: "#1a0000",
        },
        // Deep blue/purple (sky and silhouette)
        dark: {
          50: "#f5f0ff",
          100: "#e6d9ff",
          200: "#ccb3ff",
          300: "#b38cff",
          400: "#9966ff",
          500: "#8040ff",
          600: "#6633cc",
          700: "#4d2699",
          800: "#331a66", // Deep purple-blue
          900: "#1a0d33", // Almost black purple
        },
        // Cream/gold (text)
        cream: {
          50: "#fffef9",
          100: "#fffdf3",
          200: "#fffbe7",
          300: "#fff9db",
          400: "#fff7cf",
          500: "#fff5c3", // Cream/gold
          600: "#ccc4a0",
          700: "#99937d",
          800: "#66625a",
          900: "#333137",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
