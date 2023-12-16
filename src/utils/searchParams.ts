import type { LocationQuery } from "vue-router";

export function extractString(
  searchRef: MaybeRef<URLSearchParams>,
  name: string,
  defaultValue?: string,
) {
  const search = unref(searchRef);
  const targetSearchParam = search.get(name);

  if (targetSearchParam == null && defaultValue != undefined)
    return defaultValue;

  return targetSearchParam ?? undefined;
}

export function extractNumber(
  searchRef: MaybeRef<URLSearchParams>,
  name: string,
  defaultValue?: number,
) {
  const search = unref(searchRef);
  const targetSearchParam = search.get(name);
  const notValid =
    (targetSearchParam == null || isNaN(+targetSearchParam)) &&
    defaultValue != undefined;

  if (notValid) return defaultValue;

  return targetSearchParam != null ? +targetSearchParam : undefined;
}

export function toSearchParams(query: LocationQuery) {
  const searchParamObject: Record<string, string> = {};

  for (let key of Object.keys(query)) {
    if (query[key])
      searchParamObject[key] = Array.isArray(query[key])
        ? (query[key]![0] as string)
        : (query[key] as string);
  }

  return new URLSearchParams(searchParamObject);
}
