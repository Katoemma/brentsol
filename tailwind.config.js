/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./public/*.html"],
  theme: {
    screens:{
      'md': '487px',
      'lg': '1024px',
      'xl' : '1224px'
    },
    colors:{
      'white': '#ffffff',
      'greener': '#33cc33',
      'grayish': '#f5f5f0',
      'black': '#000000'
    },
    extend: {},
  },
  plugins: [],
}

