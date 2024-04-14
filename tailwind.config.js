/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false,
   theme: {
     extend: {
      fontFamily: {
        'poppins': ['Poppins','sans-serif'],
        'raleway': ['Raleway','sans-serif'],
        'playfair': ['Playfair Display','serif'],
        'ptserif': ['PT Serif','serif'],
        'oswald': ['Oswald','sans-serif'],
        'roboto': ['Roboto','sans-serif'],
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }

