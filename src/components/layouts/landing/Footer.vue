<script setup lang="ts">
// TODO - Translate
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "@heroicons/vue/24/solid";

const localePath = useLocalePath();
const floatElementHeight = ref(0);
const floatElement = ref<HTMLDivElement>();

const sizeHandler = () => {
  if (!floatElement.value) return;
  floatElementHeight.value = floatElement.value.clientHeight;
};

onMounted(() => {
  sizeHandler();

  window.addEventListener("resize", sizeHandler);
});

onUnmounted(() => {
  window.removeEventListener("resize", sizeHandler);
});
</script>

<template>
  <div class="mt-8" :style="{ height: `${floatElementHeight / 2}px` }"></div>

  <div
    class="relative rounded-t-3xl bg-green-gradient pb-4 pt-16">
    <div
      ref="floatElement"
      class="absolute bottom-full left-1/2 w-full max-w-screen-2xl -translate-x-1/2 translate-y-1/2 px-6">
      <div
        class="flex w-full flex-col items-center justify-between gap-6 rounded-2xl bg-secondary px-6 py-12 md:flex-row">
        <img
          :width="256"
          :height="256"
          class="hidden h-36 w-36 shrink-0 object-contain lg:block"
          src="~/assets/images/subscraib_img.png"
          alt="subscribe" />

        <div class="grow space-y-4 text-white">
          <p class="text-primary">UNLOCK THE POWER</p>
          <p class="max-w-lg text-5xl font-bold">
            Stop wasting time & money on content
          </p>
          <div class="flex flex-col items-baseline gap-4 md:flex-row">
            <div class="flex items-center gap-2">
              <CheckIcon class="text-primary-400 h-4 w-4" />
              <p>No credit card required</p>
            </div>
            <div class="flex items-center gap-2">
              <CheckIcon class="text-primary-400 h-4 w-4" />
              <p>No credit card required</p>
            </div>
          </div>
        </div>

        <UButton
          size="lg"
          variant="whiteGhost"
          type="submit"
          class="flex shrink-0 items-center gap-2">
          <p>{{ $t("collabration") }}</p>
          <ArrowLeftIcon v-if="$i18n.locale !== 'en'" class="h-4 w-4" />
          <ArrowRightIcon v-if="$i18n.locale === 'en'" class="h-4 w-4" />
        </UButton>
      </div>
    </div>

    <div :style="{ height: `${floatElementHeight / 2}px` }"></div>
    <div class="container-app container-padding mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div>
        <img
          src="@/assets/images/icon.png"
          class="mb-2 h-20 w-20 object-contain" />
        <h2 class="mb-2 text-xl font-bold">Stackteam</h2>
        <p>استک تیم، شرکت توسعه گران فناوری نوپا سما</p>
      </div>
      <div>
        <h3 class="mb-4 font-bold">فهرست</h3>
        <ul class="flex flex-col items-stretch gap-2.5">
          <li>
            <NuxtLink :to="localePath('/')">
              {{ $t("layouts.landing.header.home") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/services')">
              {{ $t("layouts.landing.header.services") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/blog')">
              {{ $t("layouts.landing.header.blog") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/collabrate')">
              {{ $t("layouts.landing.header.collabration_process") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/about')">
              {{ $t("layouts.landing.header.about") }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="mb-4 font-bold">تماس با ما</h3>
        <ul class="flex flex-col items-stretch gap-2.5">
          <li>
            <NuxtLink> xsamansafaeix@gmail.com </NuxtLink>
          </li>
          <li>
            <NuxtLink> 09196043787 </NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="mb-4 font-bold">فرم همکاری با ما</h3>
        <form
          autocomplete="off"
          class="mb-4 flex w-full items-stretch rounded-md border border-solid border-gray-200 bg-white/50 p-1 backdrop-blur-sm">
          <UButton size="lg" type="submit">
            <p>ارسال</p>
          </UButton>
          <input
            type="text"
            class="min-w-0 grow bg-transparent px-4"
            placeholder="+989196043787"
            dir="auto" />
        </form>
        <p>برای مشاوره رایگان شماره تماس خود را وارد نمایید.</p>
      </div>
    </div>
    <div class="container-app container-padding">
      <p>© تمامی حقوق مربوط به استک تیم محفوظ می باشد.</p>
    </div>
  </div>
</template>
