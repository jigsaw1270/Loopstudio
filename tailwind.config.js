/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Ensures the container is centered
        padding: {
          DEFAULT: '1rem', // Padding on smaller screens
          sm: '2rem',
          lg: '4rem',
          xl: '6rem',
          '2xl': '8rem',
        },
      },
      fontFamily: {
        alata:["Alata"],
        jose:["Josefin Sans"]
      },
      colors: {
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        'dark-gray': 'var(--color-dark-gray)',
        'very-dark-gray': 'var(--color-very-dark-gray)',
      },
    },
  },
  plugins: [],
};

