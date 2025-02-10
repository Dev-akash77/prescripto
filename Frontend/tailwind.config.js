/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        highlightText: "var(--highlightText)",
        white: "var(--white)",
        blueTrans: "var(--blueTrans)",
        green: "var(--green)",
        blue: "var(--blue)",
      },
    },
  },
  plugins: [],
};
