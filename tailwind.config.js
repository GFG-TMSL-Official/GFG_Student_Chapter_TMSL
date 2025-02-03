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
        darkBg: '#121212',  // Darker background for better contrast
        darkText: '#f7fafc',  // Light text for dark mode
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2c3e50 0%, #000000 100%)',
      },
      boxShadow: {
        glow: '0 0 15px rgba(52, 168, 83, 0.5)',
        soft: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  darkMode: 'class', // Enable dark mode via class
  plugins: [],
};
