/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   "./src/**/*.{js,jsx,ts,tsx}",
  // ],
   purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    safelist: ['animate-autoBlur', 'animate-autoShow'],
  },
  theme: {
    extend: {
      keyframes: {
        autoShowAnimation: {
          '0%': { opacity: '0', transform: 'translateY(200px) scale(0.3)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        autoBLurAnimation: {
          '0%': { filter: 'blur(10px)' },
          '85%, 95%': { filter: 'blur(0px)' },
          '100%': { filter: 'blur(10px)' },
        },
      },
      animation: {
        autoShow: 'autoShowAnimation both',
        autoBLur: 'autoBLurAnimation ease-in-out',
      },
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
