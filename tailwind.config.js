/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'system-ui', 'segoe ui', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '32': '32px',
        '11': '11px',
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#3861fb',
          800: '#075985',
          900: '#0c4a6e',
        },
        blue: {
          700: '#3861fb',
        },
        border: {
          light: '#eff2f5',
        },
        green: {
          500: 'rgb(22, 199, 132)',
        },
        gray: {
          200: '#EFF2F5',
          500: '#616E85',
        },
        red: {
          500: 'rgb(234, 57, 67)',
        },
        black: {
          100: '#0D1421',
        },
      },
    },
  },
  plugins: [],
} 