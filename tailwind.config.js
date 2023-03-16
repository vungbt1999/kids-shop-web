/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{jsx,tsx}',
    './src/components/**/*.{jsx,tsx}',
    './src/config/**/*.{jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      "2xl": "1140px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem",
      },
      screens: {
        sm: "1140px",
        md: "1140px",
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
    fontFamily: {
      primary: 'var(--font-primary)',
      secondary: 'var(--font-secondary)',
      tertiary: 'var(--font-tertiary)'
    },
    colors: {
      // default
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',

      // theme
      primary: {
        DEFAULT: 'var(--color-primary)',
      },
      secondary: {
        DEFAULT: 'var(--color-secondary)',
      },
      gray: {
        DEFAULT: 'var(--color-gray)',
        50: 'var(--color-gray-50)',
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)'
      },
      grey: {
        DEFAULT: 'var(--color-grey)',
      },
      blue: {
        DEFAULT: 'var(--color-blue)',
      },
      indigo: {
        DEFAULT: 'var(--color-indigo)',
      },
      purple: {
        DEFAULT: 'var(--color-purple)',
      },
      pink: {
        DEFAULT: 'var(--color-pink)',
      },
      red: {
        DEFAULT: 'var(--color-red)',
      },
      orange: {
        DEFAULT: 'var(--color-orange)',
      },
      yellow: {
        DEFAULT: 'var(--color-yellow)',
      },
      green: {
        DEFAULT: 'var(--color-green)',
      },
      cyan: {
        DEFAULT: 'var(--color-cyan)',
      },
      teal: {
        DEFAULT: 'var(--color-teal)',
      },
      success: {
        DEFAULT: 'var(--color-success)',
      },
      info: {
        DEFAULT: 'var(--color-info)',
      },
      warning: {
        DEFAULT: 'var(--color-warning)',
      },
      danger: {
        DEFAULT: 'var(--color-danger)',
      },
      light: {
        DEFAULT: 'var(--color-light)',
      },
      dark: {
        DEFAULT: 'var(--color-dark)',
      },
      facebook: {
        DEFAULT: 'var(--color-facebook)',
      },
      twitter: {
        DEFAULT: 'var(--color-twitter)',
      },
      linkedin: {
        DEFAULT: 'var(--color-linkedin)',
      },
    }
  },
  plugins: []
};
