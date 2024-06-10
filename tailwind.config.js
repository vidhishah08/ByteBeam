/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans':['Outfit','sana-serif']
      },
      colors:{
        customDarkPurple:"#1f1834",
        customLightPurple:"#4d3c5d",
        customPurple:"#231a37",
        customMediumPurple:"#3d2c53",
        customPurple2:"#342150",
        customPink:"#DD60AE",
        customBlack:"#060419",
        cusomLighterBlack:"#100c28",
        customLightestBlack:"#1f1936",
        customLastPurple:"#271e42",
      }
    },
  },
  plugins: [],
}

