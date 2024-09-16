/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true, // containerni markazlash
        padding: '2rem', // containerning o'ng va chap tomonlariga padding qo'shish
      },

    },
  },
  plugins: [],
}