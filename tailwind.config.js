/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E8762A',
          dark: '#1E2A38',
          darker: '#16202C',
          card: '#243040',
        }
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

