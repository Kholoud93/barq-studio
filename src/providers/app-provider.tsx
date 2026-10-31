"use client";

import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useSyncExternalStore,
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

type Prefs = { locale: Locale; theme: Theme };

let prefs: Prefs = { locale: defaultLocale, theme: defaultTheme };
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getPrefsSnapshot(): Prefs {
  return prefs;
}

const serverPrefsSnapshot: Prefs = {
  locale: defaultLocale,
  theme: defaultTheme,
};

function getServerPrefsSnapshot(): Prefs {
  return serverPrefsSnapshot;
}

function readStoredPrefs(): Prefs {
  try {
    const savedLocale = localStorage.getItem(localeStorageKey);
    const savedTheme = localStorage.getItem(themeStorageKey);
    return {
      locale: savedLocale === "en" || savedLocale === "ar" ? savedLocale : defaultLocale,
      theme: savedTheme === "light" || savedTheme === "dark" ? savedTheme : defaultTheme,
    };
  } catch {
    return { locale: defaultLocale, theme: defaultTheme };
  }
}

function writePrefs(next: Prefs) {
  prefs = next;
  try {
    localStorage.setItem(localeStorageKey, next.locale);
    localStorage.setItem(themeStorageKey, next.theme);
  } catch {}
  emit();
}

function applyDocumentPrefs(next: Prefs) {
  document.documentElement.lang = next.locale;
  document.documentElement.dir = next.locale === "ar" ? "rtl" : "ltr";
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(next.theme);
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const snapshot = useSyncExternalStore(
    subscribe,
    getPrefsSnapshot,
    getServerPrefsSnapshot
  );

  useEffect(() => {
    const stored = readStoredPrefs();
    writePrefs(stored);
    applyDocumentPrefs(stored);
  }, []);

  useEffect(() => {
    applyDocumentPrefs(snapshot);
  }, [snapshot]);

  const setLocale = useCallback((locale: Locale) => {
    writePrefs({ ...prefs, locale });
  }, []);

  const setTheme = useCallback((theme: Theme) => {
    writePrefs({ ...prefs, theme });
  }, []);

  const toggleLocale = useCallback(() => {
    writePrefs({
      ...prefs,
      locale: prefs.locale === "en" ? "ar" : "en",
    });
  }, []);

  const toggleTheme = useCallback(() => {
    writePrefs({
      ...prefs,
      theme: prefs.theme === "dark" ? "light" : "dark",
    });
  }, []);

  const t = getTranslation(snapshot.locale);

  return (
    <AppContext.Provider
      value={{
        locale: snapshot.locale,
        theme: snapshot.theme,
        t,
        setLocale,
        setTheme,
        toggleLocale,
        toggleTheme,
      }}
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
