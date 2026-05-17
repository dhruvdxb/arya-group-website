import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#0f172a',
        gold: {
          DEFAULT: '#c9a96e',
          light: '#f0d49a',
          dark: '#9a7a42',
        },
        ocean: {
          DEFAULT: '#0ea5e9',
          dark: '#0369a1',
        },
        flame: {
          DEFAULT: '#f97316',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '0.9' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #c9a96e 0%, #f0d49a 50%, #c9a96e 100%)',
        'dark-vignette': 'radial-gradient(ellipse at center, transparent 0%, rgba(5,8,22,0.8) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'gold': '0 0 40px rgba(201, 169, 110, 0.15)',
        'gold-lg': '0 0 80px rgba(201, 169, 110, 0.2)',
        'ocean': '0 0 40px rgba(14, 165, 233, 0.15)',
        'luxury': '0 25px 80px rgba(0, 0, 0, 0.5)',
        'card': '0 4px 40px rgba(0, 0, 0, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px',
      },
      screens: {
        'xs': '375px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      letterSpacing: {
        'widest2': '0.25em',
        'widest3': '0.35em',
      },
      lineHeight: {
        'tighter': '0.9',
      },
    },
  },
  plugins: [],
}

export default config