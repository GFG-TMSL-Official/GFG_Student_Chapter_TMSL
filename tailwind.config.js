module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Add custom fonts here
        display: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: '#0f9d58', // Custom blue color
        secondary: '#20232a', // Custom gray color
        accent: "#34a853",
      },
    },
  },
  plugins: [],
};
