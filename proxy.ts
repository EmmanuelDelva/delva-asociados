import { NextResponse, type NextRequest } from "next/server";

/**
 * Redirección a dominio canónico (convención "proxy" de Next.js 16,
 * antes "middleware").
 *
 * El alias antiguo de Vercel `delva-asociados.vercel.app` sigue resolviendo y
 * servía una copia completa del sitio, lo que genera contenido duplicado para
 * los buscadores. Lo redirigimos de forma permanente (308) al dominio canónico.
 *
 * IMPORTANTE: solo se redirige el alias de PRODUCCIÓN exacto. Los despliegues de
 * previsualización (`delva-asociados-*.vercel.app`, ramas/PRs) se dejan intactos
 * para poder revisarlos. El proxy NO fuerza renderizado dinámico de las páginas:
 * solo intercepta en el edge y, en el dominio canónico, deja pasar.
 */
const LEGACY_PROD_HOST = "delva-asociados.vercel.app";
const CANONICAL_HOST = "delvayasociados.com";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");

  if (host === LEGACY_PROD_HOST) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Todas las rutas excepto assets internos de Next y el favicon.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
