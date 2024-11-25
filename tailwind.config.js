/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        tightest: "0.1em",
      },
      colors: {
        primary: "#F2F0E9",
        secondary: "#212121",
        purple: "#D9C5FF",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #C4D3EF, #D9C5FF, #CAD0FF)",
        purple: "#D9C5FF",
      },
    },
  },
  plugins: [],
};
