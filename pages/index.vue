<script setup lang="ts">
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/vue/24/solid";

const { locale } = useI18n();

definePageMeta({
  layout: "landing",
});

const { data } = useData<IMainResult>("/content/wellcome", {
  key: "test",
  method: "POST",
  params: { lang: locale.value },
});
</script>

<template>
  <div
    class="container-app container-padding py-16 relative z-0 overflow-hidden">
    <img
      class="absolute -z-[1] h-[110%] w-full object-contain top-12 right-1/2 translate-x-1/2"
      src="~/assets/images/header-bg.png"
      alt="header-bg" />
    <div class="max-w-md lg:max-w-2xl mx-auto space-y-6">
      <p class="text-center text-primary font-bold text-sm">
        {{ data?.hero.title }}
      </p>
      <h2 class="text-center text-6xl lg:text-8xl font-bold">
        {{ data?.hero.name }}
      </h2>
      <p
        class="text-center max-w-md lg:max-w-lg mx-auto"
        v-html="data?.hero.text"></p>
      <form
        autocomplete="off"
        class="w-full max-w-md mx-auto flex items-stretch rounded-md p-1 border border-solid border-gray-200 bg-white/50 backdrop-blur-sm">
        <Button
          type="submit"
          class="flex items-center gap-2 shrink-0"
          severity="primary">
          <ArrowLeftIcon v-if="locale === 'en'" class="w-4 h-4" />
          <ArrowRightIcon v-if="locale !== 'en'" class="w-4 h-4" />
          <p>{{ $t("collabration") }}</p>
        </Button>
        <input
          type="text"
          class="bg-transparent grow px-4 min-w-0"
          placeholder="+989196043787"
          dir="auto" />
      </form>
    </div>
  </div>
  <div class="container-app container-padding">
    <img
      class="block mx-auto w-full max-w-7xl"
      src="~/assets/images/banner_img.jpg"
      alt="banner" />
  </div>
  <div
    class="container-app container-padding bg-gradient-to-br from-dreamy-green-200 to-dreamy-green-300 rounded-t-3xl py-12">
    <p class="text-center font-bold">
      Trusted <span class="text-primary">120 companies</span> across the world
    </p>
  </div>
</template>

<style scoped>
.header-bg {
  background: url("~/assets/images/header-bg.png") no-repeat;
  background-position-x: 40%;
  background-position-y: 0;
  background-size: 100%;
}

@media (min-width: 1024px) {
  .header-bg {
    background-size: 45rem;
  }
}
</style>
