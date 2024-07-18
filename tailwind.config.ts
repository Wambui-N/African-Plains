import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      raleway: ["Raleway", "latin"],
      playfair: ["Playfair_Display", "latin"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "transparent": "transparent",
        "white": "#FBF8F4",
        "brown": "#391709",
        "orange": "#FF8400",
        "yellow": "#FFD93D",
      },
      screens: {
        'sm': '568px',
        'md': '768px',
        'lg': '1068px',
        'xl': '1280px',
        '2xl': '1536px',
     },
    },
  },
  plugins: [],
};
export default config;
