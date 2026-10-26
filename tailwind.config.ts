import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0E1210", 800: "#151B18", 700: "#1D2521", 600: "#2A342F" },
        lime: { DEFAULT: "#C6F432", 600: "#A9D81A" },
        mist: { DEFAULT: "#9AA6A0", 300: "#C4CCC8" },
      },
      fontFamily: { sans: ["var(--font-cairo)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
