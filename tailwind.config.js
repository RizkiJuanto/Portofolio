// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Update purge to content
  theme: {
    extend: {
      animation: {
        'spin-border': 'spin-border 2s linear infinite',
      },
      keyframes: {
        'spin-border': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      colors: {
        primary: '#2B2C32', // Example primary color
         secondary: '#33C68A', // Example secondary color
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as the default font family
      },
    },
  },
  plugins: [],
};
