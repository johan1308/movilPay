const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#52AE32",
        secondary: "#028454",
        tertiary: "#777777",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require('tailwindcss-animated')
  ],
}

