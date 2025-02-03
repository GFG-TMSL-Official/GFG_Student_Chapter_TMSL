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
        accent: '#34a853',
        customBg: '#0FFF50',
        darkBg: '#1a202c',
        darkText: '#f7fafc',
      },
    },
  },
  darkMode: 'class', // ✅ Ensures global dark mode
  plugins: [],
};
