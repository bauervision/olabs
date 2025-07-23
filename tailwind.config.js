/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // optional if using /components
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF6F00",
        dark: "#1A1A1A",
        light: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
