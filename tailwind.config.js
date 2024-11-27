/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Add the path to your app directory files
    './pages/**/*.{js,ts,jsx,tsx}', // Add the path to your pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Add the path to your components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
