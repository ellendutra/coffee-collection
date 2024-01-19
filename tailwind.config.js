/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      backgroundImage: {
        banner: 'url("../assets/bg-cafe.webp")',
      },
      fontSize: {
        caption: '0.625rem',
      },
      backgroundColor: {
        backgroundMain: '#111315',
        backgroundSection: '#1b1d1f',
        backgroundButton: '#6f757c',
      },
      colors: {
        yellow: '#F6C768',
        green: '#BEE3CC',
        grey: '#6f757c',
        white: '#fef7ee',
      },
      maxWidth: {
        mobile: '24.3rem',
        content: '36.25rem',
        tablet: '53.75rem',
        laptop: '62.5rem',
      },
    },
  },
  plugins: [],
};
