module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        primary: "#E0D560",
        darkPrimary: "#948B2F",
        lightPrimary: "#FFF487",
        secondary: "#8060E0",
        darkSecondary: "#574294",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

