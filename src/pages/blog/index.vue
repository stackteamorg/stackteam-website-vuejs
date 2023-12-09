<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

definePageMeta({
  layout: "landing-full",
});

const { locale } = useI18n();
const route = useRoute();
const router = useRouter();
const page = ref(1);

// const { suspense } = useQuery({ queryFn: () => $fetch("") });

// onServerPrefetch(async () => await suspense());

const { data: articles, pending: articlePending } = useData("/article", {
  key: "articles",
  params: { page: page.value, lang: locale.value },
});

const categoryHandler = (category: string) => () =>
  router.push({ path: route.path, query: { category } });

const { data: categories, pending: categoryPending } = useData<ICategory[]>(
  "/category",
  {
    key: keys.CATEGORIES,
  },
);

const categoryOptions = computed(() => {
  if (categoryPending.value) return [];

  return [
    categories.value!.map((item) => ({
      label: item.name,
      click: categoryHandler(item.name),
    })),
  ];
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

  <div class="container-app container-padding space-y-6 py-6">
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
        <p class="text-sm">صفحه 2 از 10</p>
        <div class="grid grid-cols-1 gap-2">
          <UDropdown :disabled="categoryPending" :items="categoryOptions">
            <UButton
              size="lg"
              variant="soft"
              label="دسته بندی"
              trailing-icon="i-heroicons-chevron-down-20-solid"
              class="w-full justify-between" />
          </UDropdown>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="i in 13" :key="i">
        <img
          :width="600"
          :height="400"
          :src="`https://picsum.photos/600/40${`${i}`.slice(-1)}`"
          class="mb-4 aspect-[16/9] rounded-lg object-cover" />
        <p class="mb-2 text-sm">Admin . 4 Sep . 9 min</p>
        <h4 class="mb-2 text-lg font-semibold">
          این یک متن ساده برای عنوان پست است
        </h4>
        <p class="mb-2 text-sm leading-6 text-secondary-700">
          این یک متن ساده برای تست زیر عنوان است که باید متنی نسبتا طولانی باشد
          این یک متن ساده برای تست زیر عنوان است که باید متنی نسبتا طولانی باشد
        </p>
        <div class="flex flex-wrap gap-2">
          <UBadge color="secondary">Flutter</UBadge>
          <UBadge color="secondary">Dart</UBadge>
          <UBadge color="secondary">Google</UBadge>
        </div>
      </div>
    </div>

    <UPagination
      class="justify-center pb-4 pt-12"
      v-model="page"
      :page-count="5"
      :total="300"
      :max="8"
      :active-button="{ variant: 'pagination' }" />
  </div>
</template>
