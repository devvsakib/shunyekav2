/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "primary": "#2C4EAA",
            "secondary": "#62BA9E",
            "gray": "#707070",
            "b_gray": "#C5CDD2",
        }

    },
  },
  plugins: [],
}
