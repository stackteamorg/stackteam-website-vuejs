<script setup lang="ts">
definePageMeta({
  layout: "landing-full",
});

const route = useRoute();
const router = useRouter();

const categoryHandler = (category: string) => () =>
  router.push({ path: route.path, query: { category } });

const { data, pending } = useData<ICategory[]>("/category", {
  key: keys.CATEGORIES,
});
</script>

<template>
  <div
    class="bg-gradient-to-br from-dreamy-green-200 to-dreamy-green-300 pb-16 pt-40">
    <div class="container-app container-padding space-y-4">
      <div class="flex items-center justify-center gap-1 text-primary">
        <span>Home</span>
        <span>/</span>
        <span>Blog</span>
      </div>
      <h2 class="text-center text-4xl font-bold lg:text-6xl">
        Latest blog post
      </h2>
    </div>
  </div>

  <div class="container-app container-padding py-6 space-y-6">
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
          <UDropdown
            :items="
              pending
                ? []
                : [
                    data?.map((item) => ({
                      label: item.name,
                      click: categoryHandler(item.name),
                    })),
                  ]
            ">
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

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div>
        <img src="https://picsum.photos/600/400" class="aspect-[16/9] object-cover rounded-lg mb-4" />
        <p class="text-sm mb-2">Admin . 4 Sep . 9 min</p>
        <h4 class="font-semibold text-lg mb-2">این یک متن ساده برای عنوان پست است</h4>
        <p class="text-sm text-secondary-700">این یک متن ساده برای تست زیر عنوان است که باید متنی نسبتا طولانی باشد</p>
      </div>
      <div>
        <img src="https://picsum.photos/600/400" class="aspect-[16/9] object-cover rounded-lg mb-4" />
        <p class="text-sm mb-2">Admin . 4 Sep . 9 min</p>
        <h4 class="font-semibold text-lg mb-2">این یک متن ساده برای عنوان پست است</h4>
        <p class="text-sm text-secondary-700">این یک متن ساده برای تست زیر عنوان است که باید متنی نسبتا طولانی باشد</p>
      </div>
      <div>
        <img src="https://picsum.photos/600/400" class="aspect-[16/9] object-cover rounded-lg mb-4" />
        <p class="text-sm mb-2">Admin . 4 Sep . 9 min</p>
        <h4 class="font-semibold text-lg mb-2">این یک متن ساده برای عنوان پست است</h4>
        <p class="text-sm text-secondary-700">این یک متن ساده برای تست زیر عنوان است که باید متنی نسبتا طولانی باشد</p>
      </div>
      <div>
        <img src="https://picsum.photos/600/400" class="aspect-[16/9] object-cover rounded-lg mb-4" />
        <p class="text-sm mb-2">Admin . 4 Sep . 9 min</p>
        <h4 class="font-semibold text-lg mb-2">این یک متن ساده برای عنوان پست است</h4>
        <p class="text-sm text-secondary-700">این یک متن ساده برای تست زیر عنوان است که باید متنی نسبتا طولانی باشد</p>
      </div>
    </div>
  </div>
</template>
