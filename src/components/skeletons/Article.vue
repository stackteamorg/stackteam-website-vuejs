<template>
  <div>
    <USkeleton class="mb-4 aspect-[16/9] w-full rounded-lg" />
    <div class="mb-2 flex h-5 items-center">
      <USkeleton class="h-3 w-1/2 rounded-full" />
    </div>
    <div class="mb-2 flex h-7 items-center">
      <USkeleton class="h-5 w-1/3 rounded-full" />
    </div>
    <div class="mb-2 flex h-6 items-center">
      <USkeleton class="h-4 w-full rounded-full" />
    </div>
    
    <div class="flex flex-wrap gap-2">
      <USkeleton class="h-[24px] w-20 rounded-md" />
      <USkeleton class="h-[24px] w-16 rounded-md" />
      <USkeleton class="h-[24px] w-24 rounded-md" />
    </div>
  </div>
</template>
