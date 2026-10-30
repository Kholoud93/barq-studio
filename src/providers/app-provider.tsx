"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  type Locale,
  type Theme,
  defaultLocale,
  defaultTheme,
  getTranslation,
  localeStorageKey,
  themeStorageKey,
} from "@/i18n";
import type { TranslationKeys } from "@/i18n/locales/en";

interface AppContextValue {
  locale: Locale;
  theme: Theme;
  t: TranslationKeys;
  setLocale: (locale: Locale) => void;
  setTheme: (theme: Theme) => void;
  toggleLocale: () => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem(localeStorageKey) as Locale | null;
    const savedTheme = localStorage.getItem(themeStorageKey) as Theme | null;
    if (savedLocale === "en" || savedLocale === "ar") setLocaleState(savedLocale);
    if (savedTheme === "light" || savedTheme === "dark") {
      setThemeState(savedTheme);
    } else {
      setThemeState(defaultTheme);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem(localeStorageKey, locale);
    localStorage.setItem(themeStorageKey, theme);
  }, [locale, theme, mounted]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggleLocale = useCallback(
    () => setLocaleState((l) => (l === "en" ? "ar" : "en")),
    []
  );
  const toggleTheme = useCallback(
    () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  const t = getTranslation(locale);

  return (
    <AppContext.Provider
      value={{ locale, theme, t, setLocale, setTheme, toggleLocale, toggleTheme }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
