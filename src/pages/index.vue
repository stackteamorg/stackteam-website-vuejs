<script setup lang="ts">
import { keys } from "~/api";
import { useQuery } from "@tanstack/vue-query";

import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/vue/24/solid";

import MobileLogo from "~/assets/icons/mobile.svg";
import WebLogo from "~/assets/icons/web.svg";
import DesktopLogo from "~/assets/icons/desktop.svg";
import BlockchainLogo from "~/assets/icons/blockchain.svg";
import TechLogo from "~/assets/icons/technology.svg";
import { getWellcome } from "~/api";

const { locale } = useI18n();

const { data, suspense } = useQuery({
  queryFn: () => getWellcome(locale.value),
  queryKey: [keys.MAIN_PARAMS, locale],
});

onServerPrefetch(async () => await suspense());

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
        <UButton
          size="lg"
          type="submit"
          class="flex shrink-0 items-center gap-2">
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
  <div class="container-app px-12">
    <img
      :width="585"
      :height="238"
      class="mx-auto block w-full max-w-6xl rounded-t-xl shadow lg:rounded-t-3xl"
      src="~/assets/images/banner_img.png"
      alt="banner" />
  </div>
  <div
    class="container-app container-padding rounded-b rounded-t-3xl bg-gradient-to-br from-dreamy-green-200 to-dreamy-green-300 pt-12">
    <p class="mb-12 text-center font-bold">
      Trusted <span class="text-primary">120 companies</span> across the world
    </p>

    <div
      class="container-padding mx-2 rounded-b rounded-t-3xl bg-secondary py-12">
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
            size="xl"
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
  <div class="container-app container-padding mt-6 py-8">
    <h3 class="text-primary mb-2 text-center text-sm">WORKING PROCESS</h3>
    <p class="mb-12 text-center text-4xl font-bold lg:text-6xl">
      How Ai writer works
    </p>
    <div
      class="mx-auto grid max-w-sm grid-cols-1 items-center gap-10 lg:max-w-5xl lg:grid-cols-2">
      <div class="relative h-[360px]">
        <img
          class="absolute top-0 h-full w-[calc(100%-3rem)] object-cover ltr:left-0 rtl:right-0"
          src="~/assets/images/green-line-bg.jpg"
          alt="green lines" />
        <img
          class="absolute top-1/2 h-[75%] w-[calc(100%-3rem)] -translate-y-1/2 object-contain drop-shadow-lg ltr:right-0 ltr:object-right rtl:left-0 rtl:object-left"
          src="~/assets/images/screenshot-of-workspace.png"
          alt="screenshot of workspace" />
      </div>
      <div class="relative z-0 space-y-4">
        <div
          class="absolute bottom-4 rtl:right-[16px] ltr:left-[16px] top-10 -z-[1] w-[1px] rtl:translate-x-1/2 ltr:-translate-x-1/2 bg-secondary-950"></div>
        <UAccordion
          :items="[
            {
              label: 'Test Text',
              content: 'this is content',
              slot: 'padded',
              defaultOpen: true,
            },
            {
              label: 'Test Text 2',
              content: 'this is content 2',
              slot: 'padded',
            },
          ]">
          <template #default="{ item, index, open }">
            <UButton
              size="sm"
              variant="ghost"
              class="gap-3 hover:bg-transparent px-0 font-bold text-xl">
              <template #leading>
                <div
                  class="flex h-9 w-8 items-center justify-center rounded-lg"
                  :class="open ? 'bg-primary-400' : 'bg-secondary-950'">
                  <p class="text-white text-xs font-normal">{{ index + 1 }}</p>
                </div>
              </template>

              <span class="truncate">{{ item.label }}</span>

              <template #trailing>
                <UIcon
                  name="i-heroicons-chevron-right-20-solid"
                  class="ms-auto h-5 w-5 transform transition-transform duration-200 rtl:-scale-x-100"
                  :class="[open && 'ltr:rotate-90 rtl:-rotate-90']" />
              </template>
            </UButton>
          </template>
          <template #padded="{ item }">
            <p class="rtl:pr-11 ltr:pl-11">
              {{ item.content }}
            </p>
          </template>
        </UAccordion>
        <UButton size="lg" label="Start">
          <template #trailing>
            <UIcon class="w-5 h-5" name="i-heroicons-play-circle" />
          </template>
        </UButton>
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
  color: var(--color-primary-400);
}
</style>
