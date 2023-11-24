/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
        void: "#0E0816",
        fuschia: "#A239CA",
        jewel: "#4717f6",
        stark: "#E7DFDD",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
