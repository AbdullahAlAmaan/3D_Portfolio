/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        times: ['serif'], 
      },
      colors: {
        primary: "black",
        secondary: "#white",
        tertiary: "gray.100",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "primary-bg": "url('/src/assets/herobg.jpg')", // New key for primary background image
        "hero-pattern": "url('/src/assets/herobg.jpg')", // Existing or duplicate for consistency
      },
    },
  },
  plugins: [],
};
  