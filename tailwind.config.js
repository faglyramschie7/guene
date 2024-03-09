/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  prefix: '',
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        dark: '#252B37',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('gn-range-slider-thumb', [
        '&::-webkit-slider-thumb',
        '&::slider-thumb',
      ])
    }),
  ],
}
