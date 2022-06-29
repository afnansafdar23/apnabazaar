/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      xsm: '425px',
    },
      backgroundImage: {
        'grocery': "url('F:\Html projects\apnabazaar\public\images\landing picture.webp')",
      },
   
      
    extend: { colors: {
     
      'primary':'rgba(var(--color-accent),var(--tw-bg-opacity));' ,
    },
    
    },
  },
  plugins: [],
}
