/** @type {import('tailwindcss').Config} */

// const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        grad: " linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
      },
      colors: {
        "white-color": "#ffffff",
        "prim-color": "#13547a",
        "secondary-color": " #80d0c7",
        "section-bg-color": "#f0f8ff",
        "custom-btn-bg-color": "#80d0c7",
        " custom-btn-bg-hover-color": "#13547a",
        "dark-color": "#000000",
        "p-color": "#717275",
        "border-color": "#7fffd4",
        "link-hover-color": "#13547a",
      },
    },
  },
  plugins: [],
};
