const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bodyBgColor: "#222222",
        darkColor: "#2e2e2e",
        lightColor: "#fff",
        lightColor2: "#BED2C9",
        lightColor3: "#E1E7DD",
        ...colors
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'cursive']
      },
    },
  },
  plugins: [],
}
