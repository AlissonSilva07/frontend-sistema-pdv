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
      backgroundImage: {
        "listras": "background: radial-gradient(circle, transparent 20%, #ffffff 20%, #ffffff 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #ffffff 20%, #ffffff 80%, transparent 80%, transparent) 25px 25px, linear-gradient(#0561FC 2px, transparent 2px) 0 -1px, linear-gradient(90deg, #0561FC 2px, #ffffff 2px) -1px 0;"
      },
      boxShadow: {
        'padrao': '0px 1px 3px 0px rgba(0, 0, 0, 0.10)',
      },
      colors: {
        "verde": "#059669",
        "vermelho": "#FF4242",
        "cinza-100": "#F9F8F6",
        "cinza-200": "#D4D1CA",
        "cinza-400": "#93A3AB",
        "cinza-600": "#000000",
        "azul": "#0561FC",
        "azul-escuro": "#03317e",
        "amarelo": "#FFBB12",
        "branco": "#ffffff",
        "roxo": "#612F74",
        "esmaecido": "rgba(0, 0, 0, 0.7)"
      }
    },
  },
  plugins: [],
}