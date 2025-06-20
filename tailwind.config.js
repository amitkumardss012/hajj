/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f2',
          100: '#cceee4',
          200: '#99ddc9',
          300: '#66cead',
          400: '#33be92',
          500: '#1A936F', // Primary color
          600: '#157657',
          700: '#10573f',
          800: '#0a3928',
          900: '#051c14',
        },
        accent: {
          50: '#fffbe6',
          100: '#fff8cc',
          200: '#fff099',
          300: '#ffe966',
          400: '#ffe033',
          500: '#FFD700', // Accent color
          600: '#ccac00',
          700: '#998100',
          800: '#665600',
          900: '#332b00',
        },
        beige: '#F8F6F0',
        dark: '#1A1A1A',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 6px 30px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};