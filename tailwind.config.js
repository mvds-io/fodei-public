/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rosa: {
          50: '#fdf8f7',
          100: '#f5d5d8',
          200: '#f0c5c9',
          300: '#e8b4b8',
          400: '#d49ea3',
          500: '#c4888e',
          600: '#a86e74',
          700: '#8c555b',
          800: '#704244',
          900: '#54302f',
        },
        teal: {
          50: '#edf5f5',
          100: '#d4e6e6',
          200: '#a8cdcd',
          300: '#8abcbc',
          400: '#67a3a3',
          500: '#4a8585',
          600: '#3d6e6e',
          700: '#305757',
          800: '#234040',
          900: '#162929',
        },
      },
    },
  },
  plugins: [],
};
