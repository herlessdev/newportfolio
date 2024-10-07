/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      fondamento: ["fondamento"],
      "nunito-sans": ['"Nunito Sans"', "sans-serif"],
      "nanum-myeongjo": ['"Nanum Myeongjo"', "serif"],
    },
    colors: {
      primary: "#081F2D",
      secondary: "#006580",
      tertiary: "#003E52",
      quaternary: "#EE7623",
      quinary: "#F3F4F6",
      "sky-blue": {
        100: "#316e8c",
        200: "#4e89a7",
      },
      gold: {
        100: "#d93",
        200: "#febe10",
      },
      black: {
        100: "#121215",
        200: "#1c1c1c",
        300: "#100503"
      },
      whites: {
        100: "#f7f7f7",
      },
      blue: {
        100: "#3b5998"
      }
    },
  },
};
export const plugins = [];
