/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "4xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        sans: ["Lexend", ...defaultTheme.fontFamily.sans],
        jost: ["Jost", ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        1: "1px",
      },
      content: {
        empty: '" "',
        none: "none",
        sunring: "url('/svgs/sunring-left.svg')",
      },

      backgroundImage: () => ({
        gradient2:
          "linear-gradient(94.06deg, rgba(57, 191, 225, 0.23) -1.69%, rgba(55, 161, 212, 0.33) 40.72%, #30209B 100.6%)",
        "footer-gradient":
          "linear-gradient(180deg, #096ACE -2.31%, #30209B 139.16%)",
        gradient: "linear-gradient(180deg, #39BFE1 -2.31%, #30209B 139.16%)",
        g: "linear-gradient(180deg, #03C5F6 -2.31%, #00427F 139.16%)",
        heroBg: `linear-gradient( 108.94deg,#30209B98  25.52%, #39BFE1 115.21%),
                url('/images/layout/hero-bg.png')`,
        "hero-image": "url('/images/layout/hero-bg.png')",
        sunring: "url('/images/layout/sunring.png')",
        pipeLayout: `url('/images/layout/pipes-layout.png')`,
        quotation: `url('/svgs/quation.svg')`,
        sunringFull: "url('/svgs/sunring.svg')",
        sunringFullLeft: "url('/svgs/sunring-full.svg')",
        sunringOnBlue: "url('/svgs/sunring-onblue.svg')",
        ring: `url('/images/layout/ring.png')`,
        gradientImage: `url('/images/layout/gradient.png')`,
        textGradient: `linear-gradient(180deg, #39BFE1 -2.31%, #30209B 139.16%)`,
        newHero: "url('/svgs/globe-2.svg')",
        newProductGradient: `linear-gradient(0deg, rgba(3, 177, 246, 0.42) 40.53%, rgba(255, 255, 255, 0) 108.15%)`,
        skeleton: "url('/svgs/skeleton-loading.svg')",
        skeletonImage: "url('/svgs/image.svg')",
        heroBgV2: `linear-gradient(94.06deg, rgba(26, 29, 85, 0.2) -1.69%, rgba(26, 29, 85, 0.5) 40.72%, #1A1D55 100.6%)`,
        heroBackground: `url('/images/layout/gradient-2.png')`,
        homeBanner: `url('/images/layout/home-banner.png')`,
        hrRing: `url('/svgs/h-ring.svg')`,
        leftGoal: `url('/svgs/goals-left.svg')`,
        rightGoal: `url('/svgs/goals-right.svg')`,
      }),
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
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar-hide")],
};
