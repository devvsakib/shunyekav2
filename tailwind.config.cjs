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
            },
            fontFamily: {
                circular: ['Circular Std Book', 'sans'],
                circularMed: ['Circular Std Medium', 'sans'],
                circularBol: ['Circular Std Bold', 'sans'],
                circularItalic: ['Circular Std Book Italic', 'sans'],
                gilroyBol: ['Gilroy Bold', 'sans'],
            },
        },
    },
    plugins: [],
}
