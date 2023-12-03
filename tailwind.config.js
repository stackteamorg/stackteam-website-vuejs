/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{vue,ts}",
    "./layouts/**/*.{vue,ts}",
    "./components/**/*.{vue,ts}",
    "./theme/**/*.ts",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "green-gradient":
          "linear-gradient(102deg, #dbf1c3 -7.72%, #dce7e3 86.48%))",
      },
      colors: {
        primary: {
          DEFAULT: "#ff8565",
        },
        secondary: {
          DEFAULT: "#111013",
        },
        typo: {
          dark: "#111013",
          DEFAULT: "#5c728e",
        },
        "dreamy-green": {
          300: "#dbf0c6",
          200: "#dce7e3",
        },
      },
    },
  },
  plugins: [],
};
