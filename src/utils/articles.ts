export const toArticleDate = (locale: string, dateString?: string) => {
  if (!dateString?.trim()) return "نامشخص";

  const date = new Date(dateString);

  return `${date.getDate()} ${date.toLocaleDateString(locale, {
    month: "short",
  })}`;
};
