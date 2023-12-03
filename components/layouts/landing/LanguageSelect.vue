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
        <ChevronDownIcon class="h-4 w-4" />
        <span class="text-sm">{{ languages.get($i18n.locale) }}</span>
      </div>
    </Button>
    <div
      v-show="show"
      class="absolute top-full min-w-full overflow-hidden rounded-md bg-white text-center text-sm shadow ltr:left-0 rtl:right-0">
      <NuxtLink
        @click="show = false"
        :to="switchLocalePath('en')"
        class="block w-full pb-0.5 pt-1.5 transition-colors duration-300 hover:bg-black/10">
        English
      </NuxtLink>
      <NuxtLink
        @click="show = false"
        :to="switchLocalePath('fa')"
        class="block w-full py-0.5 transition-colors duration-300 hover:bg-black/10">
        فارسی
      </NuxtLink>
      <NuxtLink
        @click="show = false"
        :to="switchLocalePath('ar')"
        class="block w-full pb-1 pt-0.5 transition-colors duration-300 hover:bg-black/10">
        العربية
      </NuxtLink>
    </div>
  </div>
</template>
