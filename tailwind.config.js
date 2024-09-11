/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      // ...
      colors: {
        interactionHighlight: '#f2f4f7',
        primary:{
          main: "#0866ff",
          hover:"#0f44be"
        },
        secondary:{
          main:"#333333"
        },
        neutralInactive: "#cacaca",
        muted: "#565656",
        success:"#42b72a"
      },
    },
  },
  plugins: [],
}
