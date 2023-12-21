<script setup lang="ts">
import WebLogo from "~/assets/icons/web.svg";
import MobileLogo from "~/assets/icons/mobile.svg";
import DesktopLogo from "~/assets/icons/desktop.svg";
import TechLogo from "~/assets/icons/technology.svg";
import BlockchainLogo from "~/assets/icons/blockchain.svg";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/vue/24/solid";

import type { IWellcomeResult } from "~/api/types";

defineProps<{
  welcomeData?: IWellcomeResult;
}>();

const icons = new Map([
  ["mobile-development", MobileLogo],
  ["web-development", WebLogo],
  ["desktop-app", DesktopLogo],
  ["blockchain-development", BlockchainLogo],
  ["counseling", TechLogo],
]);
</script>

<template>
  <div class="container-padding rounded-t-3xl bg-green-gradient pt-12">
    <p class="mb-12 text-center font-bold">
      Trusted <span class="text-primary">120 companies</span> across the world
    </p>

    <div
      class="container-app container-padding mx-2 rounded-t-3xl bg-secondary py-12">
      <p class="text-primary-400 mb-4 text-center text-sm">
        {{ welcomeData?.services["small-title"] }}
      </p>
      <p class="mx-auto mb-14 max-w-3xl text-center text-4xl text-white">
        {{ welcomeData?.services.title }}
      </p>

      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-5 xl:grid-cols-4">
        <div
          class="col-span-1 row-span-1 grid grid-cols-1 place-content-start gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:col-span-3 xl:row-span-2">
          <div
            v-for="item in welcomeData?.services.items"
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
            {{ welcomeData?.hero.title }}
          </p>
          <p class="leading-[1.75rem]">{{ welcomeData?.hero.text }}</p>

          <UButton
            size="xl"
            type="submit"
            class="flex shrink-0 items-center gap-2">
            <p>{{ $t("collabration") }}</p>
            <ArrowLeftIcon v-if="$i18n.locale !== 'en'" class="h-4 w-4" />
            <ArrowRightIcon v-if="$i18n.locale === 'en'" class="h-4 w-4" />
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
