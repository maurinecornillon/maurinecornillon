/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: ["hover"],
      letterSpacing: {
        tightest: "0.1em",
      },
      fontFamily: {
        NHAASDS: ["NHAASDS", "sans-serif"],
        ITC: ["ITC", "sans-serif"],
      },
      colors: {
        primary: "#F6F4F4",
        secondary: "#212121",
        red: "#DF2531",
      },
    },
  },
  plugins: [],
};
