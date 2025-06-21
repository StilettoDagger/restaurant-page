const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif']
      },
      backgroundImage: {
        'reception': "url('../assets/reception.jpg')",
      }
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}

