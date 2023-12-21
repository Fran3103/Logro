/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors:{
            'blue': '#4967c0',
            'white':'#ffffff',
            'green': '#02cc75',
            'gray' : '#c7cede',
            'blueDark': '#0a1e3d',
            'black':'#000000',


        },
        backgroundImage: {
            'bg-header': "url('https://raw.githubusercontent.com/Fran3103/Logro/main/src/assets/fondo-principal.jpg?token=GHSAT0AAAAAACK22N2YXEBIDWHGIILYVPUWZL54TVA')",
            'footer-texture': "url('/img/footer-texture.png')",
          },

          fontWeight:{
            'semibold':'400',
            'bold':'700',
            'light':'300'
          },
      extend: {},
    },
    plugins: [],
  }
