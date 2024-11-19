/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
