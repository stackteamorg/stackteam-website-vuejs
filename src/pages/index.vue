<script setup lang="ts">
import { keys } from "~/api";
import { useQuery } from "@tanstack/vue-query";
import { getWellcome } from "~/api";

import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/vue/24/solid";

const { locale } = useI18n();

const { data, suspense } = useQuery({
  queryFn: () => getWellcome(locale.value),
  queryKey: [keys.MAIN_PARAMS, locale],
});

onServerPrefetch(async () => await suspense());

definePageMeta({
  layout: "landing",
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
  
  <PagesHomeServicesIntro :welcome-data="data" />

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
          class="absolute bottom-4 top-10 -z-[1] w-[1px] bg-secondary-950 ltr:left-[16px] ltr:-translate-x-1/2 rtl:right-[16px] rtl:translate-x-1/2"></div>
        <UAccordion
          :items="[
            {
              label: 'start',
              content: 'this is content',
              slot: 'padded',
              defaultOpen: true,
            },
            {
              label: 'mid',
              content: 'this is content 2',
              slot: 'padded',
            },
          ]">
          <template #default="{ item, index, open }">
            <UButton
              size="sm"
              variant="ghost"
              class="gap-3 px-0 text-xl font-bold hover:bg-transparent">
              <template #leading>
                <div
                  class="flex h-9 w-8 items-center justify-center rounded-lg"
                  :class="open ? 'bg-primary-400' : 'bg-secondary-950'">
                  <p class="text-xs font-normal text-white">{{ index + 1 }}</p>
                </div>
              </template>

              <span class="truncate">{{
                $t(`home.process.${item.label}`)
              }}</span>

              <template #trailing>
                <UIcon
                  name="i-heroicons-chevron-right-20-solid"
                  class="ms-auto h-5 w-5 transform transition-transform duration-200 rtl:-scale-x-100"
                  :class="[open && 'ltr:rotate-90 rtl:-rotate-90']" />
              </template>
            </UButton>
          </template>
          <template #padded="{ item }">
            <p class="ltr:pl-11 rtl:pr-11">
              {{ item.content }}
            </p>
          </template>
        </UAccordion>
        <UButton size="lg" :label="$t('home.process.btn')">
          <template #trailing>
            <UIcon class="h-5 w-5" name="i-heroicons-play-circle" />
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
