import { useFetch } from "nuxt/app";

const useData: typeof useFetch = (url, opts) => {
  return useFetch(url, {
    baseURL: "http://console.stackteam.org/api",
    ...opts,
  });
};

export default useData;
