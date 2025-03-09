/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto', 'Montserrat', 'sans-serif'],
        sans2:['Montserrat', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      },
      colors: {
        background: 'var(--color-background)',
        middle: 'var(--color-middle)',
        top: 'var(--color-top)',
        grey1: 'var(--color-grey1)',
        grey2: 'var(--color-grey2)',
        grey3: 'var(--color-grey3)'
      },
    },
  },
  plugins: [],
}

