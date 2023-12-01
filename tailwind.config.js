/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "verde": "#65C565",
        "vinho": "#C56565",
        "cinza-400": "#93A3AB",
        "cinza-600": "#475569",
        "azul": "#0561FC",
        "branco": "#ffffff"
      }
    },
  },
  plugins: [],
}