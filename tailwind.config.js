/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sporting: ["Sporting Grotesque", "sans-serif"],
        canela: ["Canela Trial", "serif"],
      },
      letterSpacing: {
        tightest: "0.1em",
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#212121",
      },
    },
  },
  plugins: [],
};
