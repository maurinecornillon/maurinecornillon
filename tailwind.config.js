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
        violet: "#DDE1FF",
        blue: "#C4D3EF",
      },
      backgroundImage: {
        gradient_blue: "linear-gradient(90deg,#D9C5FF, #C4D3EF, #CAD0FF)",
        gradient: "linear-gradient(90deg, #D9C5FF, #C4D3EF, #CAD0FF)",
        purple: "#D9C5FF",
      },
    },
  },
  plugins: [],
};
