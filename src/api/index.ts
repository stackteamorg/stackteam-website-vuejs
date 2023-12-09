const api = $fetch.create({
  baseURL: "http://console.stackteam.org/api",
});

export * from "./keys";
export * from "./queries";
export default api;
