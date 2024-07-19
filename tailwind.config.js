/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        rect: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      },
    },
  },
  plugins: [],
}

