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
      'custom-bg': '#0A400C ',
      'custom-sndclr': '#819067', //  custom color name and hex code
    },
  },
  },
  plugins: [],
}

