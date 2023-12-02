const plugin = defineNuxtPlugin({
  setup() {
    const nuxtApp = useNuxtApp();
    nuxtApp.provide("dir", nuxtApp.$i18n.locale.value === "en" ? "ltr" : "rtl");
  },
  hooks: {
    "i18n:localeSwitched": ({ newLocale }) => {
      const nuxtApp = useNuxtApp();
      nuxtApp.provide("dir", newLocale === "en" ? "ltr" : "rtl");
    },
  },
});

export default plugin;
