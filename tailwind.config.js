/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff444f',
        'primary-dark': '#d83944',
        'deriv-darkblue': '#0e0e3c',
        'deriv-blue': '#1e4ae9',
        'deriv-lightblue': '#85acfc',
        'deriv-lightgray': '#f4f5f8',
        bronze: '#CD7F32',
        silver: '#C0C0C0',
        gold: '#FFD700',
        platinum: '#E5E4E2',
        deriv: {
          gray: '#333333',
          lightgray: '#f4f4f4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
} 