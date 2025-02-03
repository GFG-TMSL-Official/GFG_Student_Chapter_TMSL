module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: '#0f9d58',
        secondary: '#20232a',
        accent: "#34a853",
        customBg: '#0FFF50',
        darkBg: '#1a202c',  // Dark background color for dark mode
        darkText: '#f7fafc',  // Text color for dark mode
      },
    },
  },
  darkMode: 'class', // Enable dark mode via class
  plugins: [],
};
