/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#bae7ff',
          200: '#91d5ff',
          300: '#69c0ff',
          400: '#40a9ff',
          500: '#33bdf3',
          600: '#1890ff',
          700: '#096dd9',
          800: '#0050b3',
          900: '#003a8c',
        },
        dark: {
          50: '#f6f6f7',
          100: '#e1e3e5',
          200: '#c3c6cc',
          300: '#9ea2ab',
          400: '#797e8a',
          500: '#5f636f',
          600: '#4c4f58',
          700: '#40424a',
          800: '#37383e',
          900: '#1a1b1e',
          950: '#0a0a0b',
        },
      },
      fontFamily: {
        display: ['Anton', 'system-ui', 'sans-serif'],
        body: ['Anton', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '1148px',
          '2xl': '1148px',
        },
      },
    },
  },
  plugins: [],
}
