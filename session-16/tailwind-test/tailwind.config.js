// tailwind.config.js
module.exports = {
  mode: "jit",
  content: ["*.html", "./assets/**/*.css"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Tailwind's 'blue-700' as an example
        secondary: "#9333EA", // Tailwind's 'purple-600' as an example
      },
      animation: {
        "spin-slow": "spin-slow 3s linear infinite",
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
