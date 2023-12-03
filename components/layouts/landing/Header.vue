<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/solid";

const { locale } = useI18n();
const localePath = useLocalePath();

const { data } = useFetch<IMainResult>(
  "http://console.stackteam.org/api/content/wellcome",
  { method: "POST", params: { lang: locale } }
);

const collapseBanner = ref(process.server ? false : window.scrollY > 20);

const scrollHandler = () => {
  if (window.scrollY > 50 && !collapseBanner.value) {
    collapseBanner.value = true;
  } else if (window.scrollY <= 50 && collapseBanner.value) {
    collapseBanner.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", scrollHandler);
});
onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandler);
});
</script>

<template>
  <div
    class="fixed top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur"
    :class="{ 'shadow-md shadow-gray-100': collapseBanner }">
    <div
      class="bg-secondary text-center text-white text-xs transition-all overflow-hidden"
      :class="collapseBanner ? 'py-0 h-0 px-0' : 'py-3 px-4'"
      v-html="data?.hero.text"></div>
    <div
      class="container-app container-padding h-20 flex items-stretch justify-between">
      <div class="flex h-full items-center">
        <img
          :width="620"
          :height="620"
          src="assets/images/icon.png"
          alt="logo"
          class="h-16 w-16 pt-[0.371rem] object-contain" />
        <LayoutsLandingLanguageSelect />
      </div>

      <div class="hidden lg:flex h-full items-center gap-6 pt-0.5">
        <NuxtLink :to="localePath('/')">
          {{ $t("layouts.landing.header.home") }}
        </NuxtLink>
        <NuxtLink :to="localePath('/')">
          {{ $t("layouts.landing.header.services") }}
        </NuxtLink>
        <NuxtLink :to="localePath('/blog')">
          {{ $t("layouts.landing.header.blog") }}
        </NuxtLink>
        <NuxtLink :to="localePath('/blog')">
          {{ $t("layouts.landing.header.collabration_process") }}
        </NuxtLink>
        <NuxtLink :to="localePath('/')">
          {{ $t("layouts.landing.header.about") }}
        </NuxtLink>
      </div>

      <div class="hidden lg:flex h-full items-center gap-1">
        <Button
          class="block"
          size="small"
          :label="$t('layouts.landing.header.collabration')"
          severity="outlined" />
        <Button
          class="block"
          size="small"
          :label="$t('layouts.landing.header.login')"
          severity="primary" />
      </div>

      <button>
        <Bars3Icon class="w-8 h-8" />
      </button>
    </div>
  </div>
</template>
