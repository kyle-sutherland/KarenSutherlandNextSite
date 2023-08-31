/** @type {DefaultColors} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#3E424D",
        slate: "#6B7288",
        "cool-gray": "#98A3C4",
        "maniac-mansion": {
          light: "#036085",
          DEFAULT: "#024059",
        },
        "thistle-blossom": {
          light: "#A3D1E3",
          DEFAULT: "#8AB0BF",
        },
        bosporus: {
          light: "#0593B3",
          DEFAULT: "#035E73",
        },
        "calypso-blue": {
          light: "#3FA4BA",
          DEFAULT: "#307B8C",
        },
        "bleached-silk": {
          light: "#FAFAFA",
          DEFAULT: "#F2F2F2",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

