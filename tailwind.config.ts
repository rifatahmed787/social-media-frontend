/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.tsx",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "box-pattern": 'url("/loginPattern.svg")',
        "gradient-backdrop":
          "linear-gradient(to top right, #36393C, #141727, #141727, #141727, #141727, #141727)",
        "image-gradient": "bg-gradient-to-b from-yellow-400 to-green-400",
      },
      colors: {
        primary: "#0000FF",
        secondary: "#387CE5",
        footer: "#CFF1FF",
        button: "#05072F",
        background: "#39BFE1",
        grayscale: {
          90: "#464646",
          100: "#1A1A1A",
        },
        v2: {
          new1: "#211E52",
          new2: "#AA7B2F",
        },
      },
    },
  },
  variants: {
    extend: {
      ringColor: ["hover", "active", "focus"],
      ringWidth: ["hover", "active", "focus"],
      ringOffsetWidth: ["hover", "active", "focus"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
