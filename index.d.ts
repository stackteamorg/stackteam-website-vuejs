declare module "#app" {
  interface NuxtApp {
    $dir: string;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $dir: string;
  }
}

export {};
