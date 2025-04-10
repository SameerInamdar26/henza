/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',        // Includes all files inside app/
    './components/**/*.{js,ts,jsx,tsx}', // Includes all your custom components
    './pages/**/*.{js,ts,jsx,tsx}',      // (Optional) In case you use pages directory too
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00f5a0', // example brand color
        secondary: '#00d9f5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // optional font customization
      },
      animation: {
        fade: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
