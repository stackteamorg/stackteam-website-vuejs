// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/i18n",
      {
        vueI18n: "./i18n.config.ts",
        locales: ["en", "fa"],
        defaultLocale: "en",
        strategy: "prefix_and_default",
      },
    ],
  ],
  devtools: { enabled: true },
});