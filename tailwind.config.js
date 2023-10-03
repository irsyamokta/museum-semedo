/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        primary: '#3BACB6',
        dark: '#222831',
        semiDark: '#393E46',
      }
    },
  },
  plugins: [],
}

