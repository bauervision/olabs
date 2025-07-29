/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', // optional if using /components
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF6F00',
        dark: '#1A1A1A',
        light: '#F5F5F5',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: 'scale(0.95)' },
          to: { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
