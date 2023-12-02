import type { ComputedGetter } from "vue";

declare module "#app" {
  interface NuxtApp {
    $dir: ComputedRef<string>;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $dir: ComputedRef<string>;
  }
}

export {};
