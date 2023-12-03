<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid';

const ui = useUI();
const localePath = useLocalePath();

watch(
  [() => ui.value.isMenuOpen],
  () => {
    if (process.server) return;

    if (ui.value.isMenuOpen) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "";
  },
  { immediate: true }
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
      class="fixed inset-0 z-30 bg-white/80 backdrop-blur lg:hidden flex flex-col items-center justify-center text-center gap-3">
      <button @click="ui.isMenuOpen = false" class="absolute top-6 left-6">
        <XMarkIcon class="w-8 h-8" />
      </button>
      <NuxtLink active-class="text-primary" @click="ui.isMenuOpen = false" :to="localePath('/')">
        {{ $t("layouts.landing.header.home") }}
      </NuxtLink>
      <NuxtLink active-class="text-primary" @click="ui.isMenuOpen = false" :to="localePath('/services')">
        {{ $t("layouts.landing.header.services") }}
      </NuxtLink>
      <NuxtLink active-class="text-primary" @click="ui.isMenuOpen = false" :to="localePath('/blog')">
        {{ $t("layouts.landing.header.blog") }}
      </NuxtLink>
      <NuxtLink active-class="text-primary" @click="ui.isMenuOpen = false" :to="localePath('/collabrate')">
        {{ $t("layouts.landing.header.collabration_process") }}
      </NuxtLink>
      <NuxtLink active-class="text-primary" @click="ui.isMenuOpen = false" :to="localePath('/about')">
        {{ $t("layouts.landing.header.about") }}
      </NuxtLink>
    </div>
  </Transition>
</template>
