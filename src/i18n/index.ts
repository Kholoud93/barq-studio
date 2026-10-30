import en from "./locales/en";
import ar from "./locales/ar";

export type Locale = "en" | "ar";
export type Theme = "light" | "dark";

export const locales: Locale[] = ["ar", "en"];
export const defaultLocale: Locale = "ar";
export const defaultTheme: Theme = "dark";
export const themeStorageKey = "barq-theme-v2";
export const localeStorageKey = "barq-locale";

export const translations = { en, ar } as const;

export function getTranslation(locale: Locale): typeof en {
  return (translations[locale] ?? translations.ar) as typeof en;
}
