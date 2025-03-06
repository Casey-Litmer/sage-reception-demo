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
      colors: {
        background: 'var(--color-background)',
        middle: 'var(--color-middle)',
        top: 'var(--color-top)'
      },
    },
  },
  plugins: [],
}

