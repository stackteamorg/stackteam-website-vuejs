// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      "@nuxtjs/i18n",
      {
        vueI18n: "./i18n.config.ts",
        locales: ["en", "fr"],
        defaultLocale: "en",
        strategy: "prefix_and_default",
      },
    ],
  ],
  devtools: { enabled: true },
});
