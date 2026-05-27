import type { MetadataRoute } from "next";

// robots.txt generado dinámicamente por Next.js App Router.
// Política:
//  - Permitir indexación general
//  - Bloquear paths internos (api, _next, admin)
//  - AI training opt-out granular: GPTBot y CCBot bloqueados;
//    Claude / Perplexity / ChatGPT-User permitidos (estos son indexers en vivo, no entrenadores)
//  - Sitemap declarado

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/servicios/", "/despacho", "/manifiesto", "/contacto", "/privacidad", "/terminos", "/cookies"],
        disallow: ["/api/", "/_next/", "/admin/"]
      },
      // AI training opt-out: bloquear entrenadores
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      // Permitir explícitamente indexers en vivo (no entrenadores)
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" }
    ],
    sitemap: "https://delvayasociados.com/sitemap.xml"
  };
}
