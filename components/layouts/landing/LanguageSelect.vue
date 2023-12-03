<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/24/solid";

const switchLocalePath = useSwitchLocalePath();

const show = ref(false);
const languages = new Map([
  ["fa", "فارسی"],
  ["en", "English"],
  ["ar", "العربية"],
]);
</script>

<template>
  <div
    class="group relative"
    @mouseenter="show = true"
    @mouseleave="show = false">
    <Button @click="show = true" severity="outlined">
      <div class="flex items-center gap-1">
        <ChevronDownIcon class="w-4 h-4" />
        <span class="text-sm">{{ languages.get($i18n.locale) }}</span>
      </div>
    </Button>
    <div
      v-show="show"
      class="text-sm absolute top-full bg-white shadow rtl:right-0 ltr:left-0 rounded-md min-w-full text-center overflow-hidden">
      <NuxtLink
        @click="show = false"
        :to="switchLocalePath('en')"
        class="block w-full hover:bg-black/10 transition-colors duration-300 pt-1.5 pb-0.5">
        English
      </NuxtLink>
      <NuxtLink
        @click="show = false"
        :to="switchLocalePath('fa')"
        class="block w-full hover:bg-black/10 transition-colors duration-300 py-0.5">
        فارسی
      </NuxtLink>
      <NuxtLink
        @click="show = false"
        :to="switchLocalePath('ar')"
        class="block w-full hover:bg-black/10 transition-colors duration-300 pt-0.5 pb-1">
        العربية
      </NuxtLink>
    </div>
  </div>
</template>
