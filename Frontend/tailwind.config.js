/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greyText: "#171717",
        pinkButton:'#FF007A',
        lightPink:"#FFF2F8",
        heroText:"#363636"
      }
    },
    fontFamily: {
      "roboto": ['roboto', 'sans-serif'],
      "montserrat": ['montserrat', 'sans-serif'],
  }
  },
  plugins: [],
}

