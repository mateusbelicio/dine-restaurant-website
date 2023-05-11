/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '40rem',
      md: '58rem',
      lg: '69.375rem',
    },
    fontFamily: {
      sans: ['League Spartan', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
      '5xl': '3.5rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    },
    extend: {
      colors: {
        'primary-400': 'hsl(27 22% 51%)',
        'secondary-300': 'hsl(217 14% 42%)',
        'secondary-400': 'hsl(218 21% 18%)',
        'secondary-500': 'hsl(234 30% 13%)',
        'black-300': 'hsl(0 0% 9%)',
        'black-400': '#111111',
      },
      letterSpacing: {
        tightest: '-.15em',
        tighter: '-.025em',
        tight: '-.0125em',
        normal: '0',
        wide: '.0125em',
        wider: '.025em',
        widest: '.05em',
      },
      backgroundSize: {
        double: '250%',
      },
      backgroundPosition: {
        initial: '0%',
        end: '90%',
      },
      transitionProperty: {
        colors:
          'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, background-position',
      },
      container: {
        center: true,
        screens: {
          lg: '69.375rem',
        },
      },
    },
  },
  plugins: [],
};
