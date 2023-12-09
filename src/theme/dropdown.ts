import type { PrimeVuePTOptions } from "primevue/config";

const pt: PrimeVuePTOptions["dropdown"] = {
  root: ({ props }) => "flex gap-2 select-none cursor-pointer px-3 py-1.5 rounded-md border border-solid border-gray-400",
  panel: '!fixed !block'
};

export default pt;
