/** @type {import('tailwindcss').Config} */

const defautTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./dist/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      height: {
        modal: "min(500px, 100% - 4rem)",
      },
      maxWidth: {
        container: "min(1400px, 100% - 4rem)",
        modal: "min(750px, 100% )",
      },
      flexBasis: {
        test: "calc(100% - (180px + 20px));",
      },
      width: {
        container: "min(1400px, 100% - 4rem)",
        storeContainer: "min(1280px, 100% - 15rem)",
        modal: "min(750px, 100% )",
        signForm: "min(380px, 100% - 1rem)",
        smContainer: "min(1000px, 100% - 4rem)",
      },
      keyframes: {
        floatting: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2%)" },
        },
      },
      animation: {
        floatting: "floatting 5s ease-in-out infinite",
      },

      colors: {
        solidblack: "rgb(var(--solid-black))",
        black: "rgba(var(--black))",
        white: "rgba(var(--white))",
        orange: {
          100: "rgba(var(--orange-100))",
          200: "rgba(var(--orange-200))",
        },
        blue: {
          100: "rgba(var(--blue-100))",
          200: "rgba(var(--blue-200))",
        },
        green: {
          100: "rgba(var(--green-100))",
          200: "rgba(var(--green-200))",
        },
        pink: {
          100: "rgba(var(--pink-100))",
          200: "rgba(var(--pink-200))",
        },
        yellow: {
          100: "rgba(var(--yellow-100))",
          200: "rgba(var(--yellow-200))",
        },
        error: "rgba(var(--error))",
        success: "rgba(var(--success))",
      },

      fontFamily: {
        hero: ["Chopin", "sans-serif"],
        sans: ["Poppins", "sans-serif", defautTheme.fontFamily.sans],
        logo: ["Transforma Mix", "sans-serif"],
        script: ["Transforma Script", "sans-serif"],
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1030px" },
      // => @media (max-width: 1023px) { ... }

      ipad: { max: "900px" },

      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "375px" },
    },
  },
  plugins: [require("flowbite/plugin")],
};
