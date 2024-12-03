module.exports = {
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Define content sources for Tailwind
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Custom sans fonts
        display: ['Poppins', 'sans-serif'], // Custom display fonts
        body: ['Open Sans', 'sans-serif'], // Custom body fonts
      },
      colors: {
        primary: '#007bff', // Custom primary blue color
        secondary: '#6c757d', // Custom secondary gray color
        darkBg: '#1a202c', // Dark mode background
        darkText: '#f7fafc', // Dark mode text color
        darkPrimary: '#2b6cb0', // Custom primary color for dark mode
      },
    },
  },
  plugins: [],
};
