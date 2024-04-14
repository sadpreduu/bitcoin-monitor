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
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }

