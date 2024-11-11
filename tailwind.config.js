/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg1: "#C23373",
        Title: "#FFABE1",
        Contact1: "#F5F7F8",
        About: "#3C3D37",
      },
      fontFamily: {
        poppins: "poppins",
        catalog: "Playfair Display, serif",
        welcome: "DM Serif Text serif",
        About: "Coming Soon cursive",
      },
    },
  },
  plugins: [],
};
