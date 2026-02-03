/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        mario: {
          red: '#E52521',
          blue: '#0048BB', // Corrigido para uma string de cor válida
        },
        luigi: {
          green: '#43B047',
          blue: '#0048BB', // Corrigido para uma string de cor válida
        },
        game: {
          coin: '#FBD000',
          brick: '#B84F26',
          sky: '#6B8CFF',
          ground: '#EAA374'
        }
      }
    },
  },
  plugins: [],
}