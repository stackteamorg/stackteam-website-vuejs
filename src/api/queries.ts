import api from ".";

import type {
  IWellcomeResult,
  ICategoryResult,
  IArticlesResult,
  IArticleParams,
} from "./types";

export function getWellcome(lang: string) {
  return api<IWellcomeResult>("/content/wellcome", {
    method: "POST",
    params: { lang },
  });
}

export function getCategories(lang: string) {
  return api<ICategoryResult[]>("/category", { params: { lang } });
}

export function getArticles(params: IArticleParams) {
  return api<IArticlesResult>("/article", {
    params: {
      lang: params.lang,
      page: params.page,
      category: params.category,
      count: params.count,
      popular: params.popular,
    },
  });
}
