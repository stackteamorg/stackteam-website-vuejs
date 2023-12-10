const api = $fetch.create({
  baseURL: "https://console.stackteam.org/api",
});

export * from "./keys";
export * from "./queries";
export default api;
