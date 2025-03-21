/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "serif"],
        Merriweather: ["Merriweather", "serif"],
        Playfair: ["Playfair", "serif"],
      },
      colors: { dustyPink: "#eda7ba", lightgray: "#f8f1f1" },
    },
    backgroundImage: {
      "bg-img1": "url('/frontend/public/sm.JPG')",
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".roboto-reg ": {
          fontFamily: '"Roboto", serif',
          fontOpticalsizing: "auto",
          fontWeight: "<weight>",
          fontStyle: "normal",
          fontVariationSettings: '"wdth" 100',
        },
      });
    }),
  ],
};
