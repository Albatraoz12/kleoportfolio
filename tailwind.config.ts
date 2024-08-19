import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        spinWords: 'spinWords 5s ease-in-out infinite',
      },
      keyframes: {
        spinWords: {
          '0%': {
            opacity: '0.1',
            transform: 'translateY(-300%)',
            color: 'blue',
          },
          '2%': {
            opacity: '0.5',
            transform: 'translateY(-300%)',
            color: 'blue',
          },
          '3%': {
            opacity: '0.9',
            transform: 'translateY(-300%)',
            color: 'blue',
          },
          '5%': {
            opacity: '1',
            transform: 'translateY(-300%)',
          },
          '10%': {
            color: 'blue',
          },
          '25%': {
            transform: 'translateY(-200%)',
            opacity: '1',
            color: 'green',
          },
          '35%': {
            color: 'green',
          },
          '50%': {
            transform: 'translateY(-100%)',
            opacity: '1',
            color: 'black',
          },
          '60%': {
            color: 'black',
          },
          '70%': {
            transform: 'translateY(0)',
            opacity: '1',
            color: 'red',
          },
          '85%': {
            opacity: '0.6',
          },
          '95%': {
            opacity: '0.2',
            transform: 'translateY(-300%)',
          },
          '100%': {
            transform: 'translateY(-300%)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
