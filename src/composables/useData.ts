import { useFetch } from "nuxt/app";

export const keys = { 
  MAIN_PARAMS: "MAIN_PARAMS",
  CATEGORIES: "CATEGORIES"
} as const;

const useData: typeof useFetch = (url, opts) => {
  return useFetch(url, {
    baseURL: "http://console.stackteam.org/api",
    cache: 'reload',
    ...opts,
  });
};

export default useData;
