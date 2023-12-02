<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const lang = ref(locale.value.toLocaleUpperCase());
const collapseBanner = ref(process.server ? false : window.scrollY > 20);

const scrollHandler = () => {
  if (window.scrollY > 150 && !collapseBanner.value) {
    collapseBanner.value = true;
  } else if (window.scrollY <= 150 && collapseBanner.value) {
    collapseBanner.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", scrollHandler);
});
onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandler);
});

watch(lang, () => {});
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur-sm">
    <div
      class="bg-black text-center text-white text-xs transition-all overflow-hidden"
      :class="collapseBanner ? 'py-0 h-0' : 'py-3'">
      <slot></slot>
    </div>
    <div class="mx-auto max-w-screen-2xl h-20 flex items-stretch justify-between px-4">
      <div class="flex h-full items-center">
        <img
          :width="620"
          :height="620"
          src="assets/images/icon.png"
          alt="logo"
          class="h-16 w-16 pt-[0.371rem] object-contain" />
        <LayoutsLandingLanguageSelect />
      </div>

      <div class="flex h-full items-center gap-6 pt-0.5">
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

      <div class="flex h-full items-center gap-1">
        <Button
          class="block"
          :label="$t('layouts.landing.header.collabration')"
          severity="outlined" />
        <Button
          class="block"
          :label="$t('layouts.landing.header.login')"
          severity="primary" />
      </div>
    </div>
  </div>
</template>
