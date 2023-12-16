<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { getArticle, keys } from "~/api";

definePageMeta({
  layout: "landing-full",
});

const route = useRoute();
const { locale } = useI18n();
const routeSlug = computed(() => +route.params.slug);

if (isNaN(routeSlug.value))
  throw createError({ statusCode: 404, message: "Not Found" });

const { data: article, isSuccess: articleSuccess } = useQuery({
  queryFn: () => getArticle(routeSlug.value),
  queryKey: [keys.ARTICLE, routeSlug, locale],
});
</script>

<template>
  <div class="bg-green-gradient pb-16 pt-36">
    <div
      class="container-app container-padding grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div class="order-2 flex flex-col gap-5 lg:order-1">
        <p class="text-primary text-sm">وبلاگ استگ تیم</p>
        <p class="text-5xl font-bold">
          {{ article?.title }}
        </p>
        <div class="flex items-center gap-5">
          <div class="space-y-1">
            <p class="text-xs text-gray-600">نویسنده</p>
            <p class="text-sm">سامان صفائی</p>
          </div>
          <div class="space-y-1">
            <p class="text-xs text-gray-600">تاریخ</p>
            <p class="text-sm">
              {{
                toArticleDate(
                  locale,
                  article?.updated_at || article?.created_at || undefined,
                )
              }}
            </p>
          </div>
          <div class="space-y-1">
            <p class="text-xs text-gray-600">زمان مطالعه</p>
            <p class="text-sm">{{ article?.read_time }} دقیقه</p>
          </div>
        </div>
        <p class="leading-8">
          {{ article?.subtext }}
        </p>

        <UButton size="md" class="mt-auto flex w-fit" label="اشتراک گذاری" />
      </div>
      <img
        src="https://picsum.photos/800/600"
        class="order-1 aspect-[16/9] w-full rounded-md object-cover lg:order-2" />
    </div>
  </div>
  <div
    class="container-app container-padding grid grid-cols-1 gap-6 py-12 leading-8 lg:grid-cols-3">
    <div class="lg:col-span-2">
      <p class="text-justify">
        {{ article?.text }}
      </p>

      <section aria-label="Tags" class="mt-8">
        <p class="mb-2 font-bold">{{ $t("tags") }}:</p>
        <div class="flex flex-wrap items-center gap-2 text-sm">
          <p class="rounded-lg bg-green-gradient px-3 py-1">Nuxt</p>
          <p class="rounded-lg bg-green-gradient px-3 py-1">Vue</p>
          <p class="rounded-lg bg-green-gradient px-3 py-1">Front-End</p>
        </div>
      </section>
    </div>
    <div class="space-y-6 lg:col-span-1">
      <div class="rounded-lg bg-gray-100 p-5"></div>
      <div class="rounded-lg bg-gray-100 p-5"></div>
      <div class="rounded-lg bg-gray-100 p-5"></div>
      <div class="rounded-lg bg-gray-100 p-5"></div>
    </div>
  </div>
</template>
