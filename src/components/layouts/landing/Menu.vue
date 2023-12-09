<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/solid";

const ui = useUIState();
const localePath = useLocalePath();

watch(
  [() => ui.value.isMenuOpen],
  () => {
    if (process.server) return;

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
      <button @click="ui.isMenuOpen = false" class="absolute left-6 top-6">
        <XMarkIcon class="h-8 w-8" />
      </button>
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
