"use client";

import Link from "next/link";
import { useI18n } from "../i18n/I18nProvider";

const SHARED_STYLES = `
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
  .legal-disclaimer { border-left: 3px solid #B8651D; padding: 0.75rem 1rem; margin: 1.5rem 0; background: rgba(184, 101, 29, 0.06); font-size: 0.92rem; }
`;

export default function CookiesClient() {
  const { locale } = useI18n();
  if (locale === "en") return <CookiesEN />;
  if (locale === "fr") return <CookiesFR />;
  return <CookiesES />;
}

function BackLink({ label }: { label: string }) {
  return (
    <Link href="/" className="legal-back">
      ← {label}
    </Link>
  );
}

function CookiesES() {
  return (
    <main data-surface="light" className="legal-page">
      <style>{SHARED_STYLES}</style>
      <BackLink label="Volver al inicio" />

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
        <li>LFPDPPP (DOF 20 de marzo de 2025) y su Reglamento.</li>
        <li>RGPD y Directiva 2002/58/CE (ePrivacy), cuando aplique al EEE.</li>
        <li>CCPA y CPRA, cuando aplique a California.</li>
      </ul>

      <h2>3. Analítica del Sitio: sin cookies</h2>
      <p>
        El Sitio utiliza <strong>Cloudflare Web Analytics</strong>:
      </p>
      <ul>
        <li>No utiliza cookies ni almacenamiento persistente.</li>
        <li>No recopila datos personales identificables.</li>
        <li>No realiza rastreo entre sitios.</li>
        <li>Métricas agregadas, retención de 30 días.</li>
      </ul>

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
            <td>Recordar idioma elegido (ES/EN/FR).</td>
            <td>Propia</td>
            <td>12 meses</td>
          </tr>
        </tbody>
      </table>

      <h3>4.3 Marketing</h3>
      <p>
        <strong>El Sitio no utiliza cookies de marketing</strong>, publicidad
        comportamental ni <em>retargeting</em>.
      </p>

      <h2>5. Gestión del consentimiento</h2>
      <p>
        En la primera visita, el Sitio muestra un banner mediante el cual
        puedes aceptar todas, rechazar todas, o personalizar. El consentimiento
        puede revocarse en cualquier momento desde:
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
        <li>Safari: Ajustes → Privacidad → Cookies.</li>
        <li>Microsoft Edge: Configuración → Cookies y permisos del sitio.</li>
      </ul>

      <h2>7. Derechos del visitante</h2>
      <p>
        Puedes ejercer derechos ARCO escribiendo a{" "}
        <code>contacto@delvayasociados.com</code>, conforme al{" "}
        <Link href="/privacidad">Aviso de Privacidad Integral</Link>.
      </p>

      <h2>8. Autoridad competente</h2>
      <p>
        La <strong>Secretaría Anticorrupción y Buen Gobierno</strong>, conforme
        a la LFPDPPP publicada el 20 de marzo de 2025.
      </p>

      <h2>9. Cambios a esta Política</h2>
      <p>
        Cualquier modificación sustancial se notificará mediante actualización
        de la fecha y reaparición del banner de consentimiento.
      </p>
    </main>
  );
}

function CookiesEN() {
  return (
    <main data-surface="light" className="legal-page">
      <style>{SHARED_STYLES}</style>
      <BackLink label="Back to home" />

      <h1>Cookies Policy</h1>
      <p className="legal-meta">
        Delva & Asociados · Last updated: May 26, 2026 · v.1.1
      </p>

      <div className="legal-disclaimer">
        <strong>Courtesy translation.</strong> The legally binding Cookies
        Policy is the Spanish version at <Link href="/cookies">/cookies</Link>,
        compliant with Mexican LFPDPPP. This English summary is for
        informational purposes only.
      </div>

      <h2>1. What are cookies?</h2>
      <p>
        Small text files a website stores in your browser to recognize
        visitors, remember preferences, or enable functionality. Includes
        similar technologies like <em>web beacons</em>, pixels, and{" "}
        <em>local storage</em>.
      </p>

      <h2>2. Cookieless Analytics</h2>
      <p>
        We use <strong>Cloudflare Web Analytics</strong> which:
      </p>
      <ul>
        <li>Uses NO cookies or persistent storage.</li>
        <li>Collects NO personally identifiable data.</li>
        <li>Does NOT track across sites.</li>
        <li>Aggregated metrics only, 30-day retention.</li>
      </ul>

      <h2>3. Cookie Categories</h2>

      <h3>3.1 Strictly Necessary</h3>
      <table>
        <thead>
          <tr><th>Cookie</th><th>Purpose</th><th>Type</th><th>Duration</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><code>delva_cookie_consent</code></td>
            <td>Visitor consent preference.</td>
            <td>First-party</td>
            <td>12 months</td>
          </tr>
        </tbody>
      </table>

      <h3>3.2 Functionality</h3>
      <table>
        <thead>
          <tr><th>Cookie</th><th>Purpose</th><th>Type</th><th>Duration</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><code>delva_lang</code></td>
            <td>Remember chosen language (ES/EN/FR).</td>
            <td>First-party</td>
            <td>12 months</td>
          </tr>
        </tbody>
      </table>

      <h3>3.3 Marketing</h3>
      <p>
        <strong>We do NOT use marketing cookies</strong>, behavioral
        advertising, or retargeting.
      </p>

      <h2>4. Managing your consent</h2>
      <p>
        On your first visit, a banner lets you accept all, reject all, or
        customize. You can revoke consent anytime via:
      </p>
      <p>
        <button type="button" data-cookie-manager className="cookie-manager-btn">
          Manage my preferences
        </button>
      </p>

      <h2>5. Disable cookies in your browser</h2>
      <ul>
        <li>Google Chrome: <code>chrome://settings/cookies</code></li>
        <li>Mozilla Firefox: <code>about:preferences#privacy</code></li>
        <li>Safari: Settings → Privacy → Cookies.</li>
        <li>Microsoft Edge: Settings → Cookies and site permissions.</li>
      </ul>

      <h2>6. Your rights</h2>
      <p>
        Exercise ARCO rights by emailing{" "}
        <code>contacto@delvayasociados.com</code>, as detailed in the{" "}
        <Link href="/privacidad">Privacy Notice</Link>.
      </p>

      <h2>7. Competent Authority</h2>
      <p>
        Mexico's <strong>Secretaría Anticorrupción y Buen Gobierno</strong>{" "}
        under the LFPDPPP of 20-Mar-2025.
      </p>

      <p style={{ marginTop: "2.5rem", fontSize: "0.85rem", color: "#6b6b6b" }}>
        For the full legally binding version, see the Spanish text at{" "}
        <Link href="/cookies">/cookies</Link>.
      </p>
    </main>
  );
}

function CookiesFR() {
  return (
    <main data-surface="light" className="legal-page">
      <style>{SHARED_STYLES}</style>
      <BackLink label="Retour à l'accueil" />

      <h1>Politique de Cookies</h1>
      <p className="legal-meta">
        Delva & Asociados · Dernière mise à jour : 26 mai 2026 · v.1.1
      </p>

      <div className="legal-disclaimer">
        <strong>Traduction de courtoisie.</strong> La Politique juridiquement
        contraignante est la version espagnole à{" "}
        <Link href="/cookies">/cookies</Link>, conforme à la LFPDPPP
        mexicaine. Ce résumé en français est à titre informatif uniquement.
      </div>

      <h2>1. Que sont les cookies ?</h2>
      <p>
        Petits fichiers texte qu'un site web stocke dans votre navigateur pour
        reconnaître les visiteurs, mémoriser les préférences ou activer des
        fonctionnalités. Inclut les technologies similaires comme{" "}
        <em>web beacons</em>, pixels et <em>local storage</em>.
      </p>

      <h2>2. Analytique sans cookies</h2>
      <p>
        Nous utilisons <strong>Cloudflare Web Analytics</strong> qui :
      </p>
      <ul>
        <li>N'utilise PAS de cookies ni de stockage persistant.</li>
        <li>NE collecte PAS de données personnelles identifiables.</li>
        <li>NE suit PAS les visiteurs entre sites.</li>
        <li>Métriques agrégées uniquement, rétention de 30 jours.</li>
      </ul>

      <h2>3. Catégories de cookies</h2>

      <h3>3.1 Strictement nécessaires</h3>
      <table>
        <thead>
          <tr><th>Cookie</th><th>Finalité</th><th>Type</th><th>Durée</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><code>delva_cookie_consent</code></td>
            <td>Préférence de consentement.</td>
            <td>Propre</td>
            <td>12 mois</td>
          </tr>
        </tbody>
      </table>

      <h3>3.2 Fonctionnalité</h3>
      <table>
        <thead>
          <tr><th>Cookie</th><th>Finalité</th><th>Type</th><th>Durée</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><code>delva_lang</code></td>
            <td>Mémoriser la langue choisie (ES/EN/FR).</td>
            <td>Propre</td>
            <td>12 mois</td>
          </tr>
        </tbody>
      </table>

      <h3>3.3 Marketing</h3>
      <p>
        <strong>Nous N'utilisons PAS de cookies marketing</strong>, publicité
        comportementale ni retargeting.
      </p>

      <h2>4. Gestion du consentement</h2>
      <p>
        Lors de votre première visite, une bannière vous permet d'accepter
        tout, refuser tout ou personnaliser. Vous pouvez révoquer le
        consentement à tout moment via :
      </p>
      <p>
        <button type="button" data-cookie-manager className="cookie-manager-btn">
          Gérer mes préférences
        </button>
      </p>

      <h2>5. Désactiver les cookies dans votre navigateur</h2>
      <ul>
        <li>Google Chrome : <code>chrome://settings/cookies</code></li>
        <li>Mozilla Firefox : <code>about:preferences#privacy</code></li>
        <li>Safari : Réglages → Confidentialité → Cookies.</li>
        <li>Microsoft Edge : Paramètres → Cookies et autorisations de site.</li>
      </ul>

      <h2>6. Vos droits</h2>
      <p>
        Exercez vos droits ARCO en écrivant à{" "}
        <code>contacto@delvayasociados.com</code>, détaillés dans l'
        <Link href="/privacidad">Avis de Confidentialité</Link>.
      </p>

      <h2>7. Autorité compétente</h2>
      <p>
        La <strong>Secretaría Anticorrupción y Buen Gobierno</strong> du
        Mexique selon la LFPDPPP du 20-mars-2025.
      </p>

      <p style={{ marginTop: "2.5rem", fontSize: "0.85rem", color: "#6b6b6b" }}>
        Pour la version juridiquement contraignante complète, voir le texte
        espagnol à <Link href="/cookies">/cookies</Link>.
      </p>
    </main>
  );
}
