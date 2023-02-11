/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.amber,
        background: colors.gray,
      },
    },
  },
  plugins: [],
}