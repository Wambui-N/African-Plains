import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '640px',  // Small devices
      md: '768px',  // Medium devices (Tablets)
      lg: '1024px', // Large devices (Desktops)
      xl: '1280px', // Extra-large devices
      '2xl': '1536px', // 2X Large devices
    },
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-img': "url('/hero-img.png')",
        'conservation': "url('/conservation.png')",
        'communities': "url('/communities.png')",
        'education': "url('/education.png')",
      },
      colors: {
        white: "#FBF8F4",
        brown: "#391709",
        orange: "#FF8400",
        yellow: "#FFD93D",
        transparent: "transparent"
      },
    },
  },
  plugins: [],
};
export default config;
