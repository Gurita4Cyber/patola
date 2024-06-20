/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{php,js,html}',
    './module/**/*.{php,js,html}',
    './inc/**/*.{php,js,html}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{

      },
      colors : {
        "default" : '#03838D',
        "bgbody" : '#FAFAFA',
        "colorfont" : '#202020',
        "greydefault" : '#656C7B',
        "orange" : '#ED8323'
        
        
        
        
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

