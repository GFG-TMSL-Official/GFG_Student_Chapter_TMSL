const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Include your source files
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...fontFamily.sans], // Use Roboto with default sans fonts as fallback
        display: ['Poppins', 'sans-serif'], // Custom display font
        body: ['Open Sans', 'sans-serif'], // Custom body font
      },
      colors: {
        primary: '#0f9d58', // Custom green
        secondary: '#20232a', // Custom gray
        accent: '#34a853', // Accent color
        primaryDark: '#087f47', // Darker shade for primary
        secondaryLight: '#2c2f3a', // Lighter shade for secondary
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Adds better form styles
    require('@tailwindcss/typography'), // Adds typography utilities
    require('@tailwindcss/aspect-ratio'), // Adds aspect-ratio utilities
  ],
};
