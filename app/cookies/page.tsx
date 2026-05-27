// Ruta: /app/cookies/page.tsx
// Política de Cookies — Delva & Asociados — v.1.1 (Cloudflare Web Analytics).

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies — Delva & Asociados",
  description:
    "Política de Cookies del sitio delvayasociados.com conforme a la nueva LFPDPPP (DOF 20-mar-2025), RGPD y CPRA. Analítica sin cookies.",
  alternates: { canonical: "/cookies" },
  openGraph: {
    title: "Política de Cookies — Delva & Asociados",
    description:
      "Tipos de cookies utilizadas, finalidades, duración y mecanismos de consentimiento.",
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <main data-surface="light" className="legal-page">
      <style>{`
        .legal-page { max-width: 820px; margin: 0 auto; padding: 6rem 1.5rem 4rem; font-family: ui-serif, "Georgia", "Cambria", serif; color: #0E1B2C; line-height: 1.7; background: #FAEFE5; }
        .legal-back { display: inline-block; margin-bottom: 2rem; font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.8rem; letter-spacing: 0.18em; text-transform: uppercase; color: #B8651D; text-decoration: none; }
        .legal-back:hover { text-decoration: underline; }
        .legal-page h1 { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 2rem; letter-spacing: 0.04em; text-transform: uppercase; margin: 0 0 0.5rem; }
        .legal-page h2 { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 1.05rem; letter-spacing: 0.14em; text-transform: uppercase; color: #B8651D; margin: 2.5rem 0 0.5rem; }
        .legal-page h3 { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.95rem; letter-spacing: 0.1em; text-transform: uppercase; margin: 1.75rem 0 0.5rem; }
        .legal-page p { margin: 0.75rem 0; }
        .legal-page ul { padding-left: 1.5rem; }
        .legal-meta { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.78rem; letter-spacing: 0.16em; text-transform: uppercase; color: #6b6b6b; margin-bottom: 2rem; }
        .legal-page a { color: #B8651D; }
        .legal-page table { width: 100%; border-collapse: collapse; margin: 1rem 0 1.5rem; font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.88rem; }
        .legal-page th, .legal-page td { border: 1px solid #d8d3c9; padding: 0.6rem 0.7rem; text-align: left; vertical-align: top; }
        .legal-page th { background: #f0e4d4; letter-spacing: 0.08em; text-transform: uppercase; font-size: 0.78rem; color: #0E1B2C; }
        .legal-page button.cookie-manager-btn { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.8rem; letter-spacing: 0.14em; text-transform: uppercase; padding: 0.6rem 1rem; border: 1px solid #B8651D; background: transparent; color: #B8651D; cursor: pointer; }
        .legal-page button.cookie-manager-btn:hover { background: #B8651D; color: #FAEFE5; }
      `}</style>

      <Link href="/" className="legal-back">← Volver al inicio</Link>

      <h1>Política de Cookies</h1>
      <p className="legal-meta">
        Delva & Asociados · Última actualización: 26 de mayo de 2026 · v.1.1
      </p>

      <p>
        La presente Política forma parte integrante del{" "}
        <Link href="/privacidad">Aviso de Privacidad Integral</Link> y de los{" "}
        <Link href="/terminos">Términos de Uso</Link> del sitio{" "}
        <code>https://delvayasociados.com</code>.
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Pequeños archivos de texto que un sitio web almacena en el navegador
        para reconocer al visitante, recordar preferencias o habilitar
        funcionalidades. Comprende también tecnologías análogas como{" "}
        <em>web beacons</em>, píxeles y <em>local storage</em>.
      </p>

      <h2>2. Marco jurídico aplicable</h2>
      <ul>
        <li>
          Ley Federal de Protección de Datos Personales en Posesión de los
          Particulares, publicada en el DOF el 20 de marzo de 2025{" "}
          (<strong>LFPDPPP</strong>) y su Reglamento.
        </li>
        <li>RGPD y Directiva 2002/58/CE (ePrivacy), cuando aplique al visitante por su residencia en el EEE.</li>
        <li>CCPA y CPRA, cuando aplique al visitante por su residencia en California.</li>
      </ul>

      <h2>3. Analítica del Sitio: sin cookies</h2>
      <p>
        El Sitio utiliza <strong>Cloudflare Web Analytics</strong> como
        herramienta de medición de tráfico. Esta herramienta:
      </p>
      <ul>
        <li>No utiliza cookies ni almacenamiento persistente en el navegador.</li>
        <li>No recopila datos personales identificables del visitante.</li>
        <li>No realiza rastreo entre sitios ni perfilado del visitante.</li>
        <li>Genera únicamente métricas agregadas (visitas, países, dispositivos, páginas más vistas).</li>
        <li>Tiene un periodo de retención de 30 días.</li>
      </ul>
      <p>
        La analítica del Sitio <strong>no requiere consentimiento previo</strong>{" "}
        del visitante.
      </p>

      <h2>4. Categorías de cookies utilizadas</h2>

      <h3>4.1 Estrictamente necesarias</h3>
      <table>
        <thead>
          <tr><th>Cookie</th><th>Finalidad</th><th>Tipo</th><th>Duración</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><code>delva_cookie_consent</code></td>
            <td>Preferencia de consentimiento del visitante.</td>
            <td>Propia</td>
            <td>12 meses</td>
          </tr>
          <tr>
            <td>Sesión del hosting</td>
            <td>Identificar la sesión técnica y prevenir abusos.</td>
            <td>De terceros (Vercel / Cloudflare)</td>
            <td>Sesión</td>
          </tr>
        </tbody>
      </table>

      <h3>4.2 Funcionalidad</h3>
      <table>
        <thead>
          <tr><th>Cookie</th><th>Finalidad</th><th>Tipo</th><th>Duración</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><code>delva_lang</code></td>
            <td>Recordar idioma elegido (ES/EN/FR cuando estén disponibles).</td>
            <td>Propia</td>
            <td>12 meses</td>
          </tr>
        </tbody>
      </table>

      <h3>4.3 Marketing</h3>
      <p>
        <strong>El Sitio no utiliza cookies de marketing</strong>, publicidad
        comportamental ni <em>retargeting</em>. En caso de activarse, esta
        Política será actualizada y se solicitará consentimiento expreso
        adicional.
      </p>

      <h2>5. Gestión del consentimiento</h2>
      <p>
        En la primera visita, el Sitio muestra un banner mediante el cual el
        visitante puede aceptar todas, rechazar todas, o personalizar su
        elección por categoría. El consentimiento puede revocarse o
        modificarse en cualquier momento desde:
      </p>
      <p>
        <button type="button" data-cookie-manager className="cookie-manager-btn">
          Gestionar mis preferencias
        </button>
      </p>

      <h2>6. Cómo deshabilitar cookies desde el navegador</h2>
      <ul>
        <li>Google Chrome: <code>chrome://settings/cookies</code></li>
        <li>Mozilla Firefox: <code>about:preferences#privacy</code></li>
        <li>Safari: Ajustes → Privacidad → Cookies y datos de sitios web.</li>
        <li>Microsoft Edge: Configuración → Cookies y permisos del sitio.</li>
        <li>Brave / Vivaldi / Arc: secciones equivalentes en sus paneles de privacidad.</li>
      </ul>

      <h2>7. Transferencias internacionales</h2>
      <p>
        Vercel Inc. (hosting) y Cloudflare, Inc. (analítica) procesan datos
        en infraestructura distribuida globalmente, incluyendo servidores
        fuera del territorio mexicano. Ambas compañías cuentan con marcos
        de adecuación y cláusulas contractuales tipo conformes al RGPD.
      </p>

      <h2>8. Derechos del visitante</h2>
      <p>
        El visitante puede ejercer sus derechos ARCO (acceso, rectificación,
        cancelación, oposición), revocar el consentimiento y limitar el uso o
        divulgación escribiendo al correo{" "}
        <code>emmanueldelva@gmail.com</code>, conforme al{" "}
        <Link href="/privacidad">Aviso de Privacidad Integral</Link>.
      </p>

      <h2>9. Autoridad competente</h2>
      <p>
        La autoridad federal mexicana competente en materia de protección de
        datos personales en posesión de los particulares es la{" "}
        <strong>Secretaría Anticorrupción y Buen Gobierno</strong>, conforme
        a la LFPDPPP publicada el 20 de marzo de 2025.
      </p>

      <h2>10. Cambios a esta Política</h2>
      <p>
        Cualquier modificación sustancial se notificará mediante actualización
        de la fecha al inicio del documento y, cuando implique nuevas
        categorías de cookies, mediante reaparición del banner de
        consentimiento.
      </p>
    </main>
  );
}
