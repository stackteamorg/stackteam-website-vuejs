<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <div
    class="rounded-t-3xl bg-gradient-to-br from-dreamy-green-200 to-dreamy-green-300 pb-4 pt-16">
    <div class="container-app container-padding mb-8 grid grid-cols-4 gap-5">
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
