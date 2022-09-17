/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "1px",
        "sm": "660px",
        "smd": "868px",
      },
      colors: {
        background: "#000",
        text_color: "#FFF",
        button: "#8257E5",
        border: "#29292E",
        border_menu_mobile: "#A8A8B3",
        text_color_menu_mobile: "#E1E1E6",
      },
    },
    fontFamily: {
      manrope: ["'Manrope'", "sans-serif"],
    }
  },
  plugins: [],
};
