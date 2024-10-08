/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  darkMode:'class',
  theme: {
    extend: {
      animation: {
        gradient: "gradient 8s linear infinite",
      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
      },
      colors:{
        primary:'#f42c37',
        secondary:'#f42c37',
        brandYellow:'#fdc62e',
        brandGreen:'#2dcc6f',
        brandBlue:'#1376f4',
        brandWhite:'#eeeeee',
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'3rem',
        },
      }
    },
  },
  plugins: [],
}