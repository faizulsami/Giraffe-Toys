/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#F2F2F2'
      }
    },
    fontFamily:{
      custom:["Nunito","sans-serif"]
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}

