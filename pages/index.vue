<script setup lang="ts">
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/vue/24/solid";

import MobileLogo from "~/assets/icons/mobile.svg";
import WebLogo from "~/assets/icons/web.svg";
import DesktopLogo from "~/assets/icons/desktop.svg";
import BlockchainLogo from "~/assets/icons/blockchain.svg";
import TechLogo from "~/assets/icons/technology.svg";

const { locale } = useI18n();

definePageMeta({
  layout: "landing",
});

const icons = new Map([
  ["mobile-development", MobileLogo],
  ["web-development", WebLogo],
  ["desktop-app", DesktopLogo],
  ["blockchain-development", BlockchainLogo],
  ["counseling", TechLogo],
]);

const { data } = useData<IMainResult>("/content/wellcome", {
  key: "test",
  method: "POST",
  params: { lang: locale.value },
});
</script>

<template>
  <div
    class="container-app container-padding relative z-0 overflow-hidden py-20">
    <img
      class="absolute right-1/2 top-12 -z-[1] h-[110%] w-full translate-x-1/2 object-contain"
      src="~/assets/images/header-bg.png"
      alt="header-bg" />
    <div class="mx-auto max-w-md space-y-6 lg:max-w-2xl">
      <p class="text-primary-400 text-center text-sm font-bold">
        {{ data?.hero.title }}
      </p>
      <h2 class="text-center text-6xl font-bold lg:text-8xl">
        {{ data?.hero.name }}
      </h2>
      <p
        class="color-text mx-auto max-w-md text-center lg:max-w-lg"
        v-html="data?.hero.text"></p>
      <form
        autocomplete="off"
        class="mx-auto flex w-full max-w-md items-stretch rounded-md border border-solid border-gray-200 bg-white/50 p-1 backdrop-blur-sm">
        <UButton type="submit" class="flex shrink-0 items-center gap-2">
          <ArrowLeftIcon v-if="locale === 'en'" class="h-4 w-4" />
          <ArrowRightIcon v-if="locale !== 'en'" class="h-4 w-4" />
          <p>{{ $t("collabration") }}</p>
        </UButton>
        <input
          type="text"
          class="min-w-0 grow bg-transparent px-4"
          placeholder="+989196043787"
          dir="auto" />
      </form>
    </div>
  </div>
  <div class="container-app container-padding">
    <img
      :width="585"
      :height="238"
      class="mx-auto block w-full max-w-7xl rounded-t-3xl shadow"
      src="~/assets/images/banner_img.png"
      alt="banner" />
  </div>
  <div
    class="container-app container-padding rounded-t-3xl bg-gradient-to-br from-dreamy-green-200 to-dreamy-green-300 pt-12">
    <p class="mb-12 text-center font-bold">
      Trusted <span class="text-primary">120 companies</span> across the world
    </p>

    <div class="container-padding mx-2 rounded-t-3xl bg-secondary py-12">
      <p class="text-primary-400 mb-4 text-center text-sm">
        {{ data?.services["small-title"] }}
      </p>
      <p class="mx-auto mb-14 max-w-3xl text-center text-4xl text-white">
        {{ data?.services.title }}
      </p>

      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-5 xl:grid-cols-4">
        <div
          class="col-span-1 row-span-1 grid grid-cols-1 place-content-start gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:col-span-3 xl:row-span-2">
          <div
            v-for="item in data?.services.items"
            :key="item.id"
            class="hover:border-primary-400 w-full rounded-xl border border-solid border-white bg-white px-5 py-8 transition-colors duration-300 hover:bg-transparent hover:text-white lg:aspect-[1]">
            <div class="bg-primary-400 mb-3 h-14 w-14 rounded p-3">
              <img
                class="h-full w-full object-contain"
                :src="icons.get(item.name)"
                alt="logo" />
            </div>
            <h3 class="mb-2 text-lg font-bold">{{ item.title }}</h3>
            <p class="leading-6">{{ item.subtitle }}</p>
          </div>
        </div>
        <div
          class="bg-primary-400 relative row-span-1 space-y-3 rounded-xl p-6 text-white xl:row-span-2">
          <img
            class="h-20 w-20 object-contain brightness-[3] grayscale"
            src="~/assets/images/icon.png"
            alt="logo" />
          <p class="text-xl font-bold leading-[1.75rem]">
            {{ data?.services.title }}
          </p>
          <p class="leading-[1.75rem]">{{ data?.services.text }}</p>

          <UButton
            size="lg"
            type="submit"
            class="flex shrink-0 items-center gap-2">
            <p>{{ $t("collabration") }}</p>
            <ArrowLeftIcon v-if="locale !== 'en'" class="h-4 w-4" />
            <ArrowRightIcon v-if="locale === 'en'" class="h-4 w-4" />
          </UButton>

          <img
            class="absolute bottom-2 h-16 w-16 ltr:right-2 rtl:left-2 rtl:-scale-x-100"
            src="~/assets/images/service_shape.png"
            alt="logo" />
        </div>
      </div>
    </div>
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

<style>
.color-text code {
  @apply text-primary-400;
}
</style>
