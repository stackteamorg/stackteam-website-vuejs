<script setup lang="ts">
import { getWellcome, keys } from "~/api";
import { Bars3Icon } from "@heroicons/vue/24/solid";
import { useQuery } from "@tanstack/vue-query";

const ui = useUIState();
const { locale } = useI18n();
const localePath = useLocalePath();
const loginHandler = () =>
  open("https://console.stackteam.org/login", "_blank");

const { data, suspense } = useQuery({
  queryFn: () => getWellcome(locale.value),
  queryKey: [keys.MAIN_PARAMS, locale],
});

onServerPrefetch(async () => await suspense());

const collapseBanner = ref(false);

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
  <nav
    class="fixed left-0 right-0 top-0 z-20"
    :class="{
      'bg-white/80 shadow-md shadow-gray-100 backdrop-blur': collapseBanner,
    }">
    <div
      class="overflow-hidden truncate bg-secondary text-center text-xs text-white transition-all"
      :class="collapseBanner ? 'h-0 px-0 py-0' : 'px-4 py-3'"
      v-html="data?.hero.text"></div>
    <div
      class="container-app container-padding flex h-20 items-stretch justify-between">
      <div class="flex h-full items-center gap-2">
        <img
          :width="620"
          :height="620"
          src="assets/images/icon.png"
          alt="logo"
          class="h-12 w-12 object-contain" />
        <LayoutsLandingLanguageSelect />
      </div>

      <div class="hidden h-full items-center gap-6 pt-0.5 lg:flex">
        <NuxtLink active-class="text-primary" :to="localePath('/')">
          {{ $t("layouts.landing.header.home") }}
        </NuxtLink>
        <NuxtLink active-class="text-primary" :to="localePath('/services')">
          {{ $t("layouts.landing.header.services") }}
        </NuxtLink>
        <NuxtLink active-class="text-primary" :to="localePath('/blog')">
          {{ $t("layouts.landing.header.blog") }}
        </NuxtLink>
        <NuxtLink active-class="text-primary" :to="localePath('/collabrate')">
          {{ $t("layouts.landing.header.collabration_process") }}
        </NuxtLink>
        <NuxtLink active-class="text-primary" :to="localePath('/about')">
          {{ $t("layouts.landing.header.about") }}
        </NuxtLink>
      </div>

      <div class="hidden h-full items-center gap-1 lg:flex">
        <UButton
          class="block"
          size="sm"
          :label="$t('layouts.landing.header.collabration')" />
        <UButton
          @click="loginHandler"
          class="block"
          size="sm"
          :label="$t('layouts.landing.header.login')" />
      </div>

      <button @click="ui.isMenuOpen = true" class="block lg:hidden">
        <Bars3Icon class="h-8 w-8" />
      </button>
    </div>
  </nav>
</template>
