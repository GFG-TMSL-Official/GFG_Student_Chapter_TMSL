/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all template files to enable Tailwind's JIT mode
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      // Custom Fonts
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Default font for text
        display: ['Poppins', 'sans-serif'], // Font for headings
        body: ['Open Sans', 'sans-serif'], // Font for body text
      },
      // Custom Color Palette
      colors: {
        primary: '#0f9d58', // GFG green
        'primary-dark': '#0c7c47', // Darker green for hover states
        secondary: '#20232a', // Dark gray for text
        accent: '#34a853', // Lighter green for accents
        background: '#f9fafb', // Light background for a clean look
      },
      // Custom Spacing for Padding and Margins
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      // Custom Shadow
      boxShadow: {
        'custom-light': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 20px rgba(0, 0, 0, 0.2)',
      },
      // Custom Transitions for Smooth Animations
      transitionTimingFunction: {
        'in-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  // Plugins
  plugins: [
    require('@tailwindcss/forms'), // For better form styling
    require('@tailwindcss/typography'), // For advanced typography utilities
    require('@tailwindcss/aspect-ratio'), // For aspect ratio utilities
  ],
};
