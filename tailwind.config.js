/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**.{js,ts,jsx,tsx}",
    "./src/app/**.{js,ts,jsx,tsx}",
    "./src/pages/**.{js,ts,jsx,tsx}",
    "./src/**/**.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
      },
      backgroundColor: {
        primaryColor: "#AA8B56",
        secondryColor: "",
        lightModeColor: "#FEFFFE",
        darkModeColor: "#1E2936",
        darkModeContainerColor: "#111926",
        lightModeContainerColor: "#F9FBFA",
      },
      textColor: {
        primaryColor: "#AA8B56",
        lightModeMenuName: "#757575cc",
      },
      borderRadius: {
        "2/4": "50%",
      },
      padding: {
        "c-3": "3px",
      },
      borderColor: {
        primaryColor: "#AA8B56",
      },
      borderWidth: {
        "border-5": "5px",
      },
    },
  },
  plugins: [],
};
