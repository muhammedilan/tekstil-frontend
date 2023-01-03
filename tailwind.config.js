/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        dropdown: {
          from: { transform: "translate(0px,20px)" },
          to: { transform: "translate(0px,4px)" },
        },
      },
      animation: {
        dropdown: "dropdown 0.3s",
      },
    },
    boxShadow: {
      panel: "0px 3px 3px rgba(56,65,74,0.1)]",
    },
    colors: {
      brown: "#555252",
      primary: "#a749ff",
      "dark-blue": "#130F26",
    },
  },
  plugins: [],
};
