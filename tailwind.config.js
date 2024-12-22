/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html', // Include all HTML files in the public directory
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS, JSX, TS, and TSX files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#9FD89F',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}