// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],
  srcDir: "src",
  routeRules: {
    // "/**": { swr: 5 * 60 * 1000 },
  },
  colorMode: {
    preference: "light",
  },
  i18n: {
    vueI18n: "./src/i18n.config.ts",
    locales: ["en", "fa", "ar"],
    defaultLocale: "en",
    strategy: "prefix_and_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  devtools: { enabled: true },
});

// Team page - Member page => photo bio social posts
