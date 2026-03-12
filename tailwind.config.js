/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#1E3A8A',  // Biru navy profesional
        secondary: '#0F172A',  // Hitam gelap untuk bg
        accent: '#3B82F6',  // Biru muda untuk hover
        textLight: '#F1F5F9',  // Putih abu untuk text
      },
    },
  },
  plugins: [],
}