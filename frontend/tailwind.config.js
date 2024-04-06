/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryNeutral: '#f6f6f6',
        secondaryFou: '#c3af9d',
        secondaryFouTwo: "#a5886d",
        dimBlue:  "rgba(9, 151, 124, 0.1)",
        successCol: "#15803d",
        primaryNeuOne: "#ffffff"
      },
      fontFamily: {
        monda: ["Monda","Poppins"],
        poppins: ["Poppins", "sans-serif"]
      },
    },

    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      
    }

  },



  plugins: [require("daisyui")],
}

