<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { getArticles, getCategories, keys } from "~/api";

import type { IArticleParams } from "~/api/types";

import { TrashIcon } from "@heroicons/vue/24/outline";

type SetQueryOptions = {
  query: Record<string, string | undefined | number>;
  replaceQueries?: boolean;
  replaceUrl?: boolean;
};

definePageMeta({
  layout: "landing-full",
});

const route = useRoute();
const router = useRouter();
const { locale } = useI18n();
const searchParams = computed(() => toSearchParams(route.query));

const mainContainer = ref<HTMLDivElement>();

const filters = reactive<Omit<IArticleParams, "lang">>({
  page: extractNumber(searchParams, "page", 1)!,
  category: extractNumber(searchParams, "category"),
  tag: extractNumber(searchParams, "tag"),
  count: 9,
});

watch(searchParams, (searchParams) => {
  const tag = extractNumber(searchParams, "tag");
  const page = extractNumber(searchParams, "page");
  const category = extractNumber(searchParams, "category");

  if (tag !== filters.tag) filters.tag = tag;
  if (page && page !== filters.page) filters.page = page;
  if (category !== filters.category) filters.category = category;
});

function setQueryParams(options: SetQueryOptions) {
  const { query, replaceQueries = false, replaceUrl = true } = options;
  const mergedQuery = replaceQueries ? query : { ...route.query, ...query };

  const navigationOptions = {
    query: mergedQuery,
    replace: replaceUrl,
  };

  router.push(navigationOptions);
}

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
      tag: filters.tag,
    }),
  queryKey: [keys.ARTICLES, filters, locale],
});

const pageChangeHandler = (page: number) => {
  if (!mainContainer.value) return;
  setQueryParams({ query: { page }, replaceUrl: false });

  window.scrollTo({
    top: mainContainer.value.getBoundingClientRect().top + window.scrollY - 80,
    behavior: "smooth",
  });
};

const categoryOptions = computed(() => {
  if (!categorySuccess.value) return [];

  return categories.value!.map((item) => ({
    label: item.name,
    id: item.id,
  }));
});

onServerPrefetch(async () => {
  await suspenseCategory();
  await suspenseArticles();
});
</script>

<template>
  <div>
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
            این یک متن ساده برای تست زیر عنوان است که باید متنی نسبتا طولانی
            باشد این یک متن ساده برای تست زیر عنوان است که باید متنی نسبتا
            طولانی باشد این یک متن ساده برای تست زیر عنوان است که باید متنی
            نسبتا طولانی باشد این یک متن ساده برای تست زیر عنوان است که باید
            متنی نسبتا طولانی باشد این یک متن ساده برای تست زیر عنوان است که
            باید متنی نسبتا طولانی باشد این یک متن ساده برای تست زیر عنوان است
            که باید متنی نسبتا طولانی باشد این یک متن ساده برای تست زیر عنوان
            است که باید متنی نسبتا طولانی باشد...
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
          :placeholder="$t('search')" />
        <div
          class="flex flex-col items-stretch gap-3 lg:flex-row lg:items-baseline">
          <div class="grid grid-cols-2 gap-2">
            <UButton
              @click="setQueryParams({ query: {}, replaceQueries: true })"
              class="flex items-center justify-between"
              :label="$t('delete-filters')">
              <template #trailing>
                <TrashIcon class="h-5 w-5 text-red-400" />
              </template>
            </UButton>
            <USelectMenu
              :model-value="filters.category"
              @update:model-value="
                setQueryParams({ query: { category: $event } })
              "
              :options="categoryOptions"
              value-attribute="id"
              size="md"
              option-attribute="label">
              <template #label>{{
                categoryOptions.find((item) => item.id === filters.category)
                  ?.label || $t("category")
              }}</template>
            </USelectMenu>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <template v-if="articlesLoading">
          <SkeletonsArticle v-for="i in 9" :key="i" />
        </template>

        <PagesBlogArticle
          v-for="article in articles?.data"
          :key="article.id"
          :item-id="article.id"
          :image-url="article.image_url"
          :title-text="article.title"
          :author-name="article.author.name"
          :updated-at="article.updated_at"
          :created-at="article.created_at"
          :text="article.text"
          :readtime="article.read_time"
          :tags="article.tags.map((tag) => ({ id: tag.id, text: tag.text }))" />
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
  </div>
</template>
