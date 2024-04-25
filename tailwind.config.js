/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgb(0, 21, 41)',
        'bgSecondary': '#f9f9f9'
      },
    },
  },
  plugins: [],
}

