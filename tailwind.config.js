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
            'blueDark': '#0a1e3d'



        },
        backgroundImage: {
            'bg-header': "url('https://github.com/Fran3103/Logro/blob/main/src/assets/CONJUTNO-TRADICIONAL-e1701785391936.jpg?raw=true')",
            'footer-texture': "url('/img/footer-texture.png')",
          },
      extend: {},
    },
    plugins: [],
  }
