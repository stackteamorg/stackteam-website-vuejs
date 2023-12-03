import path from "path";
import pt from "./theme";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      "nuxt-primevue",
      {
        components: {
          include: ["Button", "Dropdown"],
        },
        importPT: {
          as: "mypreset",
          from: path.resolve(__dirname, "./theme/index.ts"),
        },
        options: {
          unstyled: true,
        },
      },
    ],
    [
      "@nuxtjs/i18n",
      {
        vueI18n: "./i18n.config.ts",
        locales: ["en", "fa", "ar"],
        defaultLocale: "en",
        strategy: "prefix_and_default",
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
          redirectOn: "root",
        },
      },
    ],
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
