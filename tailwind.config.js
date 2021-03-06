module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
       'Bai': ['"Bai Jamjuree"']
      },
      boxShadow:{
        'boxshadow1': '0px 10px 20px rgba(137, 229, 199, 0.503305), inset 0px -3px 0px rgba(0, 0, 0, 0.151333)',
        'boxshadow2': '0px 10px 20px rgba(0, 0, 0, 0.0988035), inset 0px -3px 0px rgba(0, 0, 0, 0.151333)',
      },
      fontSize: {
        '32fs' : '2rem',
        '7fs': '1.75rem',
        '46fs': '2.875rem',
      },
      lineHeight:{
        '26lh': '1.625rem',
        '30lh': '1.875rem',
        '35lh': '2.188rem',
        '57.5lh': '3.594rem',
        '45lh': '2.813rem',
      },
      letterSpacing:{
        '12ls': '0.007rem',
        '.5ls': '0.031rem',
        '.46ls': '-0.029rem',
        '.39ls': '-0.024rem',
        '.03ls': '0.007rem',
        '.035ls': '0.009rem',
        '.75ls': '-0.047rem',
        '.59ls': '-0.037rem',
        

        
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
        '475mw': '29.688rem',
        '300mw': '18.75rem',
        '350mw': '21.875rem',
        '700mw': '43.75rem',

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
        '19p': '1.188rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
