/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: '#DC2626', // Rich Red
        secondary: '#CA8A04', // Warm Gold
        accent: '#F87171', // Soft Red
        background: '#FEF2F2', // Light Warm
        text: '#450A0A', // Deep Brown
        border: '#FECACA', // Soft Red
      },
    },
  },
  plugins: [],
}
