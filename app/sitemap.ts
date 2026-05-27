import type { MetadataRoute } from "next";
import { areas } from "./lib/servicios";

// Sitemap dinámico construido desde la fuente de verdad (areas + problematicas).
// Incluye 5 institucionales + 3 legales + 13 áreas + 65 problemáticas = ~86 URLs.

const SITE = "https://delvayasociados.com";
const LASTMOD = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [];

  // Home
  pages.push({
    url: `${SITE}/`,
    lastModified: LASTMOD,
    changeFrequency: "weekly",
    priority: 1.0
  });

  // Institucionales
  const institutional: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/servicios", priority: 0.9, freq: "weekly" },
    { path: "/despacho", priority: 0.7, freq: "monthly" },
    { path: "/manifiesto", priority: 0.8, freq: "monthly" },
    { path: "/contacto", priority: 0.8, freq: "monthly" }
  ];
  for (const inst of institutional) {
    pages.push({
      url: `${SITE}${inst.path}`,
      lastModified: LASTMOD,
      changeFrequency: inst.freq,
      priority: inst.priority
    });
  }

  // Legales (paquete v1.1 mergeado)
  const legal = ["/privacidad", "/terminos", "/cookies"];
  for (const l of legal) {
    pages.push({
      url: `${SITE}${l}`,
      lastModified: LASTMOD,
      changeFrequency: "yearly",
      priority: 0.3
    });
  }

  // 13 áreas + 65 problemáticas dinámicas
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
