/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./src/*.{html,js,jsx}"],
  theme: {
    extend: {dropShadow: {
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.55)',
      '4xl': [
          '0 10px 8px rgba(150, 150, 150, 0.29)',
          '0 10px 8px rgba(150, 150, 150, 0.29)'
      ]
    }},
    borderRadius: {
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '3.0rem',
      'full': '9999px',
      'large': '12px',
    }

  },
  plugins: [],
}
