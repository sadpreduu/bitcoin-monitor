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
        'plex': ['IBM Plex Sans','sans-serif'],
      },
      keyframes: {
        'border-spin':{
          '100%': {
            transform: 'rotate(360deg)'
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 1s linear infinite',
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }

