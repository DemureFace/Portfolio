/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#754ef9",
        bg: "#fdfdfd",
        text: "#333",
        shadow: "rgba(0,0,0, .2)",
      },
      boxShadow: {
        primary: "0 .2rem .5rem rgba(0,0,0, .2)",
        header: "0 -.6rem 1.5rem #754ef9",
        cards: "0 .1rem .5rem rgba(0,0,0, .2)",
      },
      animation: {
        spin: "spin 10s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" }, // Начальное состояние, если нужно
          "15%": { transform: "rotate(0deg)" }, // Начальное состояние, если нужно
          "25%": { transform: "rotate(90deg)" }, // Начальное состояние, если нужно
          "40%": { transform: "rotate(90deg)" }, // Начальное состояние, если нужно
          "50%": { transform: "rotate(180deg)" }, // Начальное состояние, если нужно
          "65%": { transform: "rotate(180deg)" }, // Начальное состояние, если нужно
          "75%": { transform: "rotate(270deg)" }, // Конечное состояние, если нужно
          "90%": { transform: "rotate(270deg)" }, // Конечное состояние, если нужно
          "100%": { transform: "rotate(360deg)" }, // Конечное состояние, если нужно
        },
      },
    },
  },
  plugins: [],
};
