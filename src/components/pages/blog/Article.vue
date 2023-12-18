<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();

const props = defineProps<{
  itemId: number;
  imageUrl: string;
  titleText: string;
  authorName: string;
  updatedAt?: string;
  createdAt?: string;
  readtime: number;
  text: string;
  tags: {
    id: number;
    text: string;
  }[];
}>();

const url = computed(
  () => new URL(props.imageUrl, import.meta.env.VITE_API_ORIGIN),
);
</script>

<template>
  <NuxtLink class="block w-full" :to="localePath(`/blog/${itemId}`)">
    <div>
      <img
        :width="600"
        :height="400"
        :src="url.href"
        :alt="titleText"
        class="mb-4 aspect-[16/9] w-full rounded-lg object-cover" />
      <p dir="ltr" class="mb-2 text-sm rtl:text-right">
        <span>{{ authorName }}</span>
        <span class="font-bold"> . </span>
        <template v-if="updatedAt || createdAt">
          <span>{{ toArticleDate(locale, updatedAt || createdAt) }}</span>
          <span class="font-bold"> . </span>
        </template>
        <span dir="auto">{{ readtime }} {{ $t("min") }}</span>
      </p>
      <h4 class="mb-2 text-lg font-semibold">
        {{ titleText }}
      </h4>
      <p class="mb-2 text-sm leading-6 text-secondary-700">
        {{ text }}
      </p>
      <div v-if="tags.length > 0" class="flex flex-wrap gap-2">
        <UBadge
          v-for="(tag, idx) in tags"
          :key="idx"
          @click.prevent="
            $router.push({ query: { tag: tag.id }, replace: true })
          "
          color="secondary">
          {{ tag.text }}
        </UBadge>
      </div>
    </div>
  </NuxtLink>
</template>
