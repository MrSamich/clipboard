module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
       'Bai': ['"Bai Jamjuree"']
      },
      fontSize: {
        '32fs' : '2rem',
        '7fs': '1.75rem',
      },
      lineHeight:{
        '26lh': '1.625rem',
        '30lh': '1.875rem',
        '35lh': '2.188rem',
      },
      letterSpacing:{
        '12ls': '0.007rem',
        '.5ls': '0.031rem',
        '.46ls': '-0.029rem',
        '.39ls': '-0.024rem',
        '.03ls': '0.007rem',
        '.035ls': '0.009rem',
      },
      borderRadius:{
        '7br': '1.75rem',
      },
      colors:{
        "color1": "#9EABB2",
        "color2": "#26BBA4",
        "color3": "#6174FF",
        "color4": "#4C545C",
      
      },
      maxWidth:{
        '600mw': '37.5rem',
        '625mw': '39.063rem',
      },
      padding:{
        '13p': '0.813rem',
        '12.5p': '3.125rem',
        '10p': '0.625rem',
        '65p': '4.063rem',
        '186p': '11.625rem',
        '130p': '8.125rem',
        '90p': '5.625rem',
        '18p': '1.125rem',
        '131p': '8.188rem',
        '170p': '10.625rem',
        '52p': '3.25rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
