import { computed } from "vue";

const plugin = defineNuxtPlugin({
  setup() {
    const nuxtApp = useNuxtApp();
    const dir = computed(() =>
      nuxtApp.$i18n.locale.value === "en" ? "ltr" : "rtl"
    );

    useHead({
      htmlAttrs: { dir: dir, lang: nuxtApp.$i18n.locale },
    });
  },
});

export default plugin;
