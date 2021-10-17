module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'aboutDescription': ['Nunito Sans'] // text description in about page
       },
       backgroundColor: theme => ({
        'primaryBlue': '#00122e',
        'secondaryBlue': '#1e3b70'
       }),
       gradientColorStops: theme => ({
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
