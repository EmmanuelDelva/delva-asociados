"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { dict, type Dict, type Locale, locales } from "./dict";

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const STORAGE_KEY = "dya.locale";

/**
 * Lee el primer segmento de la URL. Si es "en" o "fr" devuelve ese locale.
 * Si no, devuelve null (default ES por contexto raíz).
 */
function pathToLocale(pathname: string): Locale | null {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg === "en" || seg === "fr") return seg;
  return null;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";
  const pathLocale = pathToLocale(pathname);
  const [locale, setLocaleState] = useState<Locale>(pathLocale || "es");

  useEffect(() => {
    // 1) Si la URL declara explícitamente locale (ej. /en/...), gana sobre todo lo demás.
    if (pathLocale) {
      setLocaleState(pathLocale);
      try {
        document.documentElement.lang = pathLocale;
        window.localStorage.setItem(STORAGE_KEY, pathLocale);
      } catch {}
      return;
    }
    // 2) Rutas en raíz: solo respetar una preferencia EXPLÍCITA previa
    //    (localStorage del switcher). No usar navigator.language: el renderer
    //    de Googlebot corre en en-US y re-renderizaba en inglés el contenido
    //    de las URLs canónicas ES (home + /servicios/*), indexándolas mal.
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && locales.includes(stored)) {
        setLocaleState(stored);
        document.documentElement.lang = stored;
      }
    } catch {}
  }, [pathname, pathLocale]);

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
