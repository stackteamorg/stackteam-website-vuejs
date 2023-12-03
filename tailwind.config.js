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
      },
    },
  },
  plugins: [],
};
