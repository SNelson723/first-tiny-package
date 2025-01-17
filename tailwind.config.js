/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  safelist: ["hover:bg-slate-300", "hover:bg-slate-200", "hover:bg-blue-200"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": {
            opacity: 0,
            display: "hidden",
          },
          "100%": {
            opacity: 1,
            display: "block",
          },
        },
        dissappear: {
          "0%": {
            opacity: "1",
            display: "block",
          },
          "100%": {
            opacity: "0",
            display: "hidden",
          },
        },
        fadeInModal: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeOutModal: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "90%": { transform: 'translateX(-10%)'},
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideOutToRight: {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "10%": { transform: "translateX(-10%)"},
          "100%": { transform: "translateX(100%)", opacity: 0 },
        },
        // slideUp: {
        //   "0": { transform: "translateY(100%)"},
        //   "100%": {transform: "translateY(0)"}
        // }
      },
      animation: {
        appear: "appear .3s ease-in-out forwards",
        dissappear: "dissappear .3s ease-in-out forwards",
        fadeInModal: "fadeInModal .3s ease-in-out forwards",
        fadeOutModal: "fadeOutModal .3s ease-in-out forwards",
        slideInFromRight: "slideInFromRight .5s ease-in-out forwards",
        slideOutToRight: "slideOutToRight .5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
