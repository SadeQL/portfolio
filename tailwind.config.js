module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/imgs/header-bg.jpg')",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        main: "#333C3D",
        blue: "#27363b",
        "main-200": "#1c1d1f",
        menu: "#F7FADC",
        txt: "#FFFAF4",
        footer: "9fc0c4",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
