const api = $fetch.create({
  baseURL: import.meta.env.VITE_API,
});

export * from "./keys";
export * from "./queries";
export default api;
