<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/solid";

const ui = useUIState();
const localePath = useLocalePath();
const loginHandler = () =>
  open("https://console.stackteam.org/login", "_blank");

watch(
  [() => ui.value.isMenuOpen],
  () => {
    if (!process.client) return;

    if (ui.value.isMenuOpen) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "";
  },
  { immediate: true },
);
</script>

<template>
  <Transition
    enter-from-class="opacity-0 scale-75"
    leave-to-class="opacity-0 scale-75"
    enter-active-class="transition-all duration-300"
    leave-active-class="transition-all duration-300">
    <div
      v-if="ui.isMenuOpen"
      class="fixed inset-0 z-30 flex flex-col items-center justify-center gap-3 bg-white/80 text-center backdrop-blur lg:hidden">
      <div
        class="absolute left-6 right-6 top-6 flex flex-row-reverse items-center justify-between">
        <button @click="ui.isMenuOpen = false">
          <XMarkIcon class="h-8 w-8" />
        </button>
        <div class="flex h-full items-center gap-1">
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
      </div>
      <NuxtLink
        active-class="text-primary"
        @click="ui.isMenuOpen = false"
        :to="localePath('/')">
        {{ $t("layouts.landing.header.home") }}
      </NuxtLink>
      <NuxtLink
        active-class="text-primary"
        @click="ui.isMenuOpen = false"
        :to="localePath('/services')">
        {{ $t("layouts.landing.header.services") }}
      </NuxtLink>
      <NuxtLink
        active-class="text-primary"
        @click="ui.isMenuOpen = false"
        :to="localePath('/blog')">
        {{ $t("layouts.landing.header.blog") }}
      </NuxtLink>
      <NuxtLink
        active-class="text-primary"
        @click="ui.isMenuOpen = false"
        :to="localePath('/collabrate')">
        {{ $t("layouts.landing.header.collabration_process") }}
      </NuxtLink>
      <NuxtLink
        active-class="text-primary"
        @click="ui.isMenuOpen = false"
        :to="localePath('/about')">
        {{ $t("layouts.landing.header.about") }}
      </NuxtLink>
    </div>
  </Transition>
</template>
