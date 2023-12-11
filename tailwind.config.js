/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'short': { 'raw': '(max-height: 768px)'}
    },
    extend: {
      boxShadow: {
        'padrao': '0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)',
      },
      colors: {
        "verde": "#65C565",
        "vinho": "#C56565",
        "cinza-100": "#ffffff",
        "cinza-400": "#93A3AB",
        "cinza-600": "#000000",
        "azul": "#0561FC",
        "azul-escuro": "#03317e",
        "branco": "#ffffff",
        "esmaecido": "rgba(0, 0, 0, 0.7)"
      }
    },
  },
  plugins: [],
}