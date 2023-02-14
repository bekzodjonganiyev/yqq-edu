/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/images/bg-image.png')",
      },
      backgroundColor: {
        'bg-language-btn': ' rgba(255, 255, 255, 0.5);'
      }
    },
  },
  plugins: [],
}
