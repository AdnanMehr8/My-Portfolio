/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  // content: [
  //   "./src/**/*.{js,jsx,ts,tsx}",
  // // ],
  //  purge: {
  //   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/manifest.json'],
  //   safelist: ['autoBlur', 'autoShow'],
  },
  theme: {
    extend: {
      colors: {
        // "primary": "#0A192F",
        // "primary": "#12343b",
        // "primary": " #49494b",


        // "secondary": "#FFDAB9",
        "secondary": "#FFF0F5",

        // "secondary": "#20B2AA  ",
        // "secondary": "#778899",
        // "tertiary": "#333333 ",
        "tertiary": "#f1f0ee",

      },
    },
    screens: {
      'lg': { 'max': '2023px' },

      'sm': { 'max': '1000px' },

    }
  },
  plugins: [],
}
