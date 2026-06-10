import type { Locale } from "./dict";

// Rutas que tienen variantes /en y /fr (las institucionales + legales).
// /servicios/* sigue solo en ES por ahora — postpone migración trilingüe.
export const I18N_PATHS = new Set([
  "",
  "despacho",
  "manifiesto",
  "contacto",
  "privacidad",
  "terminos",
  "cookies"
]);

export function stripLocalePrefix(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] === "en" || parts[0] === "fr") parts.shift();
  return "/" + parts.join("/");
}

export function applyLocaleToPath(pathname: string, locale: Locale): string {
  const cleanPath = stripLocalePrefix(pathname);
  const firstSeg = cleanPath.split("/").filter(Boolean)[0] || "";
  // Solo aplicar prefix de locale si la ruta tiene variante traducida.
  // Si es /servicios/... o similar, mantener ES (sin prefix).
  if (!I18N_PATHS.has(firstSeg)) return cleanPath;
  if (locale === "es") return cleanPath === "" ? "/" : cleanPath;
  return `/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}

// Igual que applyLocaleToPath pero conserva el fragmento (#hash) del href,
// p. ej. "/#areas" → "/en#areas".
export function localizeHref(href: string, locale: Locale): string {
  const [path, hash] = href.split("#");
  const localized = applyLocaleToPath(path || "/", locale);
  return hash ? `${localized}#${hash}` : localized;
}
