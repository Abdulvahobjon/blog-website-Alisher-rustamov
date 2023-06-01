/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      padding:{
        18:"18px",
        28:'114px',
        22:'86px',
        72:'72px',
      },
      margin:{
        30:'30px',
        72:"72px"
      },
      fontSize:{
        17:["17px" , "25.5px"],
        13:["13px" , "15.5px"],
        77:["77px" , "100px"],
        40:["40px" , "60px"],
        50:["50px" , "63px"],
        15:["15px" , "22.5px"],
        32:["32px" , "38px"],
      },
      borderRadius:{
        10:'10px',
        40: '40px',
      },
      maxWidth:{
        34:"134px",
        72:"287px",
        55:"220px",
        100:'400px'
      },
      colors:{
        blog:{
          "orange":'#FFC017',
          "grey":'#F6F7F8',
          "block-300" : "#222222",
          "block-400" : "#1E1E1E",
        }
      },
      gap:{
        19:'76px',
      },
      borderRadius:{
        10:"10px",
        20:"20px",
        30:"30px"
      },
      boxShadow:{
        'card-shadow' : '0px 8px 18px 0px #0000000D'
      }
    },
  },
  plugins: [],
}
