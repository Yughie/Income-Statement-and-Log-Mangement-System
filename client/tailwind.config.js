/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      ddbackground: '#252736',
      dbackground: '#2F3042'

    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

