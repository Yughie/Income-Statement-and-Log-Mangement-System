/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'shadowPurple': '0px 0px 15px 8px #7A30C2',
        'redShadow': '0px 0px 15px 8px #800020'
      },
      fontFamily: {
        'poppins': ['Poppins',  'sans-serif']
      }
    },
    colors: {
      ddbackground: '#1E1D2B',  //Darker
      dbackground: '#252736',
      dbgContainer1: '#2F3042',
      dbgContainer2: '#44455D',  //Ligther
      darkPurple: '#450088',
      lightPurple: '#7A30C2',
      purpleGrape: '#8736DA'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

