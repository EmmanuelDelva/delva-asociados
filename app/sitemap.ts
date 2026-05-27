import type { MetadataRoute } from "next";
import { areas } from "./lib/servicios";

// Sitemap dinámico construido desde la fuente de verdad (areas + problematicas).
// 1 home + 4 institucionales + 3 legales + 13 áreas + 65 problemáticas = 86 URLs ES.
// Las 7 páginas top (home + 3 institucionales + 3 legales) tienen variantes /en y /fr
// con hreflang alternates declarados → 86 + 14 = 100 URLs canónicas.
// /servicios y subpaths siguen solo en ES por ahora (postpuesto a otro sprint).

const SITE = "https://delvayasociados.com";
const LASTMOD = new Date();

function buildAlternates(esPath: string): { languages: Record<string, string> } {
  return {
    languages: {
      es: `${SITE}${esPath}`,
      en: `${SITE}/en${esPath === "/" ? "" : esPath}`,
      fr: `${SITE}/fr${esPath === "/" ? "" : esPath}`,
      "x-default": `${SITE}${esPath}`
    }
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [];

  // Home (trilingüe)
  pages.push({
    url: `${SITE}/`,
    lastModified: LASTMOD,
    changeFrequency: "weekly",
    priority: 1.0,
    alternates: buildAlternates("/")
  });
  // Variantes EN/FR de home (cada una declara los 3 alternates)
  pages.push({
    url: `${SITE}/en`,
    lastModified: LASTMOD,
    changeFrequency: "weekly",
    priority: 1.0,
    alternates: buildAlternates("/")
  });
  pages.push({
    url: `${SITE}/fr`,
    lastModified: LASTMOD,
    changeFrequency: "weekly",
    priority: 1.0,
    alternates: buildAlternates("/")
  });

  // Institucionales trilingües: despacho, manifiesto, contacto
  const i18nInst: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/despacho", priority: 0.7, freq: "monthly" },
    { path: "/manifiesto", priority: 0.8, freq: "monthly" },
    { path: "/contacto", priority: 0.8, freq: "monthly" }
  ];
  for (const inst of i18nInst) {
    for (const langPrefix of ["", "/en", "/fr"]) {
      pages.push({
        url: `${SITE}${langPrefix}${inst.path}`,
        lastModified: LASTMOD,
        changeFrequency: inst.freq,
        priority: inst.priority,
        alternates: buildAlternates(inst.path)
      });
    }
  }

  // Servicios listing — solo ES (postpuesto)
  pages.push({
    url: `${SITE}/servicios`,
    lastModified: LASTMOD,
    changeFrequency: "weekly",
    priority: 0.9
  });

  // Legales trilingües (paquete v1.1 mergeado)
  const legal = ["/privacidad", "/terminos", "/cookies"];
  for (const l of legal) {
    for (const langPrefix of ["", "/en", "/fr"]) {
      pages.push({
        url: `${SITE}${langPrefix}${l}`,
        lastModified: LASTMOD,
        changeFrequency: "yearly",
        priority: 0.3,
        alternates: buildAlternates(l)
      });
    }
  }

  // 13 áreas + 65 problemáticas dinámicas — solo ES (postpuesto)
  for (const area of areas) {
    pages.push({
      url: `${SITE}/servicios/${area.slug}`,
      lastModified: LASTMOD,
      changeFrequency: "monthly",
      priority: 0.85
    });
    for (const problema of area.problematicas) {
      pages.push({
        url: `${SITE}/servicios/${area.slug}/${problema.id}`,
        lastModified: LASTMOD,
        changeFrequency: "monthly",
        priority: 0.7
      });
    }
  }

  return pages;
}
