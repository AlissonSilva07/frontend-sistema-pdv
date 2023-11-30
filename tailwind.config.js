/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "verdinho": "#65C565",
        "vinho": "#C56565",
        "cinza": "#93A3AB",
        "azul": "#0561FC"
      }
    },
  },
  plugins: [],
}