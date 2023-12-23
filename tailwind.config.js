/** @type {import('tailwindcss').Config} */

  module.exports = {
    
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        body: "rgb(var(--color-bg))",
        "box-bg": "rgb(var(--color-box))",
        "box-shadow": "rgb(var(--box-sd))",
        "box-border": "rgb(var(--box-border))",
        primary: "#0FAEA9",
        secondary: "#007A77",
        thirdy: "#007A77",
        fourty: "#02A327",
        fivety: "#016A81",
        "body-color": "#462C64",
        "gray-color": "",
      },
      zIndex: {
        60: "60",
        70: "70",
      },
      screens: {
        xs: "400px",
        sm: '640px',       
        md: '768px',  
        lg: '1024px',  
        xl: '1280px'
      },
    },

  },
};
