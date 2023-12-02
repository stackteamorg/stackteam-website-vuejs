import fa from "~/assets/locales/fa.json";
import en from "~/assets/locales/en.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: en,
    fa: fa,
  },
}));
