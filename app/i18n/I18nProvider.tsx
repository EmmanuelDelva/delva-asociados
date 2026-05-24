"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { dict, type Dict, type Locale, locales } from "./dict";

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const STORAGE_KEY = "dya.locale";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && locales.includes(stored)) {
        setLocaleState(stored);
        document.documentElement.lang = stored;
        return;
      }
      const nav = (navigator.language || "es").slice(0, 2).toLowerCase() as Locale;
      if (locales.includes(nav)) {
        setLocaleState(nav);
        document.documentElement.lang = nav;
      }
    } catch {}
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    } catch {}
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: dict[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
