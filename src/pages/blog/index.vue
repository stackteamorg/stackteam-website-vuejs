<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { getArticles, getCategories, keys } from "~/api";

import type { IArticleParams } from "~/api/types";

definePageMeta({
  layout: "landing-full",
});

const route = useRoute();
const router = useRouter();
const { locale } = useI18n();
const localePath = useLocalePath(); 

const mainContainer = ref<HTMLDivElement>();

const filters = reactive<Omit<IArticleParams, "lang">>({
  page: route.query.page && !isNaN(+route.query.page) ? +route.query.page : 1,
  count: 9,
});

const {
  data: categories,
  isSuccess: categorySuccess,
  suspense: suspenseCategory,
} = useQuery({
  queryFn: () => getCategories(locale.value),
  queryKey: [keys.CATEGORIES, locale],
});

const {
  data: articles,
  suspense: suspenseArticles,
  isLoading: articlesLoading,
} = useQuery({
  queryFn: () =>
    getArticles({
      lang: locale.value,
      category: filters.category,
      page: filters.page,
      count: filters.count,
      popular: filters.popular,
    }),
  queryKey: [keys.ARTICLES, filters, locale],
});

const categoryHandler = (category: string) => () => {
  if (filters.category !== category) filters.category = category;
  else delete filters.category;
};

const pageChangeHandler = (page: number) => {
  filters.page = page;
  if (!mainContainer.value) return;

  window.scrollTo({
    top: mainContainer.value.getBoundingClientRect().top + window.scrollY - 80,
    behavior: "smooth",
  });
};

const categoryOptions = computed(() => {
  if (!categorySuccess.value) return [];

  return [
    categories.value!.map((item) => ({
      label: item.name,
      click: categoryHandler(item.name),
    })),
  ];
});

const dateConvertor = (dateString?: string) => {
  if (!dateString?.trim()) return;

  const date = new Date(dateString);

  return `${date.getDate()} ${date.toLocaleDateString(locale.value, {
    month: "short",
  })}`;
};

watch(filters, () => {
  router.push({
    path: route.path,
    query: {
      page: filters.page,
      category: filters.category,
      popular: filters.popular ? `${filters.popular}` : undefined,
    },
  });
});

watch([() => route.query], () => {
  if (route.query.category && filters.category !== route.query.category)
    filters.category = route.query.category.toString() ?? undefined;

  pageChangeHandler(
    route.query.page && !isNaN(+route.query.page) ? +route.query.page : 1,
  );

  if (route.query.popular && filters.popular !== Boolean(route.query.popular))
    filters.popular = Boolean(route.query.popular) ? true : undefined;
});

onServerPrefetch(async () => {
  await suspenseCategory();
  await suspenseArticles();
});
</script>

<template>
  <div class="relative z-0 pb-20 pt-44">
    <div
      class="absolute inset-0 -z-[1] bg-gradient-to-br from-dreamy-green-200/80 to-dreamy-green-300" />
    <img
      src="https://picsum.photos/600/400"
      class="absolute inset-0 -z-[2] col-span-2 h-full w-full rounded-md object-cover" />
    <div class="container-app container-padding">
      <div class="col-span-1 lg:col-span-2">
        <h3 class="text-primary-400 mb-2 text-sm">محبوب ترین پست</h3>
        <h4 class="mb-4 text-5xl font-semibold">متن ساده</h4>
        <p class="mb-3 text-xs">Admin . 4 Sep . 9 min</p>
        <p class="text-lg leading-8 text-secondary-700">
          این یک متن ساده برای تست زیر عنوان است که باید متنی نسبتا طولانی باشد
          این یک متن ساده برای تست زیر عنوان است که باید متنی نسبتا طولانی باشد
          این یک متن ساده برای تست زیر عنوان است که باید متنی نسبتا طولانی باشد
          این یک متن ساده برای تست زیر عنوان است که باید متنی نسبتا طولانی باشد
          این یک متن ساده برای تست زیر عنوان است که باید متنی نسبتا طولانی باشد
          این یک متن ساده برای تست زیر عنوان است که باید متنی نسبتا طولانی باشد
          این یک متن ساده برای تست زیر عنوان است که باید متنی نسبتا طولانی
          باشد...
        </p>
      </div>
    </div>
  </div>

  <div
    ref="mainContainer"
    class="container-app container-padding space-y-6 py-6">
    <div
      class="flex flex-col items-stretch justify-between gap-3 lg:flex-row lg:items-center">
      <UInput
        variant="soft"
        size="lg"
        icon="i-heroicons-magnifying-glass-20-solid"
        trailing
        placeholder="جست و جو ..." />
      <div
        class="flex flex-col items-stretch gap-3 lg:flex-row lg:items-baseline">
        <div class="grid grid-cols-1 gap-2">
          <UDropdown :disabled="!categorySuccess" :items="categoryOptions">
            <UButton
              size="lg"
              variant="soft"
              :loading="!categorySuccess"
              :label="filters.category || $t('category')"
              trailing-icon="i-heroicons-chevron-down-20-solid"
              class="w-full justify-between" />

            <template #item="{ item }">
              <div class="flex w-full items-center justify-between">
                <p :class="item.label === filters.category && 'text-green-600'">
                  {{ item.label }}
                </p>
                <UIcon
                  v-if="item.label === filters.category"
                  class="block h-4 w-4 text-gray-600"
                  name="i-heroicons-x-mark" />
              </div>
            </template>
          </UDropdown>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <template v-if="articlesLoading">
        <SkeletonsArticle v-for="i in 9" :key="i" />
      </template>
      <NuxtLink
        v-for="article in articles?.data"
        :key="article.id"
        class="block w-full"
        :to="localePath(`/blog/${article.id}`)">
        <div>
          <img
            :width="600"
            :height="400"
            :src="article.image_url"
            :alt="article.title"
            class="mb-4 aspect-[16/9] w-full rounded-lg object-cover" />
          <p dir="ltr" class="mb-2 text-sm rtl:text-right">
            <span>{{ article.author.name }}</span>
            <span class="font-bold"> . </span>
            <template v-if="article.updated_at || article.created_at">
              <span>{{
                dateConvertor(article.updated_at || article.created_at)
              }}</span>
              <span class="font-bold"> . </span>
            </template>
            <span dir="auto">{{ article.read_time }} {{ $t("min") }}</span>
          </p>
          <h4 class="mb-2 text-lg font-semibold">
            {{ article.title }}
          </h4>
          <p class="mb-2 text-sm leading-6 text-secondary-700">
            {{ article.text }}
          </p>
          <div class="flex flex-wrap gap-2">
            <UBadge color="secondary">Flutter</UBadge>
            <UBadge color="secondary">Dart</UBadge>
            <UBadge color="secondary">Google</UBadge>
          </div>
        </div>
      </NuxtLink>
    </div>

    <UPagination
      class="justify-center pb-4 pt-12"
      :model-value="filters.page"
      @update:model-value="(value) => pageChangeHandler(value)"
      :page-count="articles?.meta.per_page ?? 9"
      :total="articles?.meta.total ?? 1"
      :max="8"
      :active-button="{ variant: 'pagination' }" />
  </div>
</template>
