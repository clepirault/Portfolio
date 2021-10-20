module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'description': ['Nunito Sans']
       },
       backgroundColor: theme => ({
        'primaryBlue': '#00122e',
        'secondaryBlue': '#1e3b70'
       }),
       gradientColorStops: theme => ({
        'darkslategray': '#335650',
        'navajowhite': '#fbd09d',
        'primaryBlue': '#1e3b70',
        'secondaryBlue': '#29539b'
       })        
    },
  },
  variants: {
    extend: {
      letterSpacing: ['hover', 'focus'],
      transitionDuration: ['hover', 'focus'],
      backgroundImage: ['hover', 'focus']
    },
  },
  plugins: [],
}
