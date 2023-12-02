import path from "path";
import pt from "./theme";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
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
      },
    ],
  ],
  devtools: { enabled: true },
});
