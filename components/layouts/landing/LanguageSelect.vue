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
  <div class="group relative">
    <Button severity="outlined">
      <div class="flex items-center gap-1">
        <ChevronDownIcon class="w-4 h-4" />
        <span class="text-sm">{{ languages.get($i18n.locale) }}</span>
      </div>
    </Button>
    <div
      class="text-sm capitalize absolute top-full bg-white shadow rtl:right-0 ltr:left-0 hidden group-hover:block rounded-md min-w-[5rem] text-center overflow-hidden">
      <NuxtLink
        :to="switchLocalePath('en')"
        class="block w-full hover:bg-black/10 transition-colors duration-300 pt-1.5 pb-0.5">
        English
      </NuxtLink>
      <NuxtLink
        :to="switchLocalePath('fa')"
        class="block w-full hover:bg-black/10 transition-colors duration-300 py-0.5">
        فارسی
      </NuxtLink>
      <NuxtLink
        :to="switchLocalePath('ar')"
        class="block w-full hover:bg-black/10 transition-colors duration-300 pt-0.5 pb-1">
        العربية
      </NuxtLink>
    </div>
  </div>
</template>
