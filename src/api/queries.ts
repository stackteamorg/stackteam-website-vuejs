import api from ".";
import type { IMainResult, ICategory } from "./types";

export function getWellcome(lang: string) {
  return api<IMainResult>("/content/wellcome", {
    method: "POST",
    params: { lang },
  });
}

export function getCategories(lang: string) {
  return api<ICategory[]>("/category", { params: { lang } });
}

export function getArticles() {
  return api("/category");
}
