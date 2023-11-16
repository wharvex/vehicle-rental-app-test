/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        aliceblue: "#ebf5ff",
        "gray-900": "#101828",
        white: "#fff",
        lime: "#3bff37",
      },
      spacing: {},
      fontFamily: {
        "body-medium": "'Fira Sans'",
        "header-footer-button-small": "Cabin",
        "red-hat-mono": "'Red Hat Mono'",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "21xl": "40px",
      "11xl": "30px",
      "36xl": "55px",
      "13xl": "32px",
      "3xs": "10px",
      "41xl": "60px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
