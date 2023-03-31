/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primay: '#FCE2DB',
      secondary: '#FF8FB1',
      pink: '#F675A8',
      purple: "#554994",
      lightBlue:'#F2F8FB'
    }
  },
  plugins: [],
}
