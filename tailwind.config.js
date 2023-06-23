/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'swipe': 'swipe 1s ease-in-out forwards',
        'shake': 'shake 0.8s ease-in-out forwards infinite'
      }
    },
    keyframes:{
      'swipe': {
        '0%' : {
          'transform': 'translateX(0)'
        },
        '50%' : {
          'transform': 'rotateY(3.14159rad)'
        },
        '100%' : {
          'transform': 'translateX(0)'
        }
      },
      'shake': {
        '0%': {
          'transform': 'translateX(0)'
        },
        '50%': {
          'transform': 'translateX(10px)'
        },
        '100%': {
          'transform': 'translateX(0)'
        }
      }
    }
  },
  plugins: [],
}
