import type { Config } from "tailwindcss";

export default <Partial<Config>>{
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
          "linear-gradient(102deg, #dbf1c3 -7.72%, #dce7e3 86.48%)",
      },
      colors: {
        salmon: {
          "50": "#fff4f1",
          "100": "#ffe7e1",
          "200": "#ffd3c7",
          "300": "#ffb4a0",
          "400": "#ff8565",
          "500": "#f8623b",
          "600": "#e5471d",
          "700": "#c13814",
          "800": "#a03114",
          "900": "#842e18",
          "950": "#481507",
        },
        secondary: {
          "50": "#f7f7f8",
          "100": "#efedf1",
          "200": "#dad8df",
          "300": "#b9b6c3",
          "400": "#938ea2",
          "500": "#757087",
          "600": "#605a6f",
          "700": "#4f4a5a",
          "800": "#433f4d",
          "900": "#3b3842",
          "950": "#111013",
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
