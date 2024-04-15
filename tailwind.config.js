/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    colors: {
      white:{
        100: '#FFFFFF'
      },
      black:{
        900: '#000000'
      },
      gray:{
        300: '#F2F2F2',
        400: '#D9D9D9',
        500: '#D2D2D2',
        600: '#BFBFBF'
      },
      red:{
        200: ''
      },
      green:{
        300: ''
      },
      blue:{
        500: '#0377FF',
        600: '#0339A6'
      }

    }
  },
  plugins: [],
}

