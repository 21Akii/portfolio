import { en, type Content } from "./en";
import { fr } from "./fr";

export type Lang = "fr" | "en";
export type { Content };

// French typography: a non-breaking space before : ; ? ! % so they never wrap onto a new line alone.
function frenchTypography<T>(value: T): T {
  if (typeof value === "string") {
    return value.replace(/ ([:;?!%])/g, " $1") as T;
  }
  if (Array.isArray(value)) return value.map(frenchTypography) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, frenchTypography(v)]),
    ) as T;
  }
  return value;
}

const frTyped = frenchTypography(fr);

export function getContent(lang: Lang): Content {
  return lang === "fr" ? frTyped : en;
}
