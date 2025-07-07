/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0,0,0,0.05)',
      },
      colors: {
        forest: '#2f3e46',
        leaf: '#84a98c',
        cream: '#fefae0',
      },
    },
  },
  plugins: [],
}
