/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/app/**/*.{jsx,tsx}', 
    './src/components/**/*.{jsx,tsx}',
    './src/config/**/*.{jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: "var(--font-primary)",
      secondary: "var(--font-secondary)",
      tertiary:
        "var(--font-tertiary)",
    },
  },
  plugins: [],
}
