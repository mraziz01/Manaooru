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
      'custom-bg': '#50596A',
      'custom-sndclr': 'red', //  custom color name and hex code
    },
  },
  },
  plugins: [],
}

