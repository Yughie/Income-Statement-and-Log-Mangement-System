/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'shadowPurple': '0px 0px 15px 8px #7A30C2',
        'shaddow': '0px 0px 30px 5px #252736'
      }
    },
    colors: {
      ddbackground: '#252736',
      dbackground: '#2F3042',
      darkPurple: '#450088',
      lightPurple: '#7A30C2'

    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

