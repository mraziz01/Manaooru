/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ['"Satisfy"', 'cursive'],
        Birthstone:[''],
      },
      colors: {
      'custom-bg': '#4A4947 ',
      'custom-sndclr': '#8E1616', //  custom color name and hex code
    },
  },
  },
  plugins: [],
}

