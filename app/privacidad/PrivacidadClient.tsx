"use client";

import Link from "next/link";
import { useI18n } from "../i18n/I18nProvider";

// Aviso de Privacidad. La version ES es la juridicamente vinculante
// (LFPDPPP Mexico). Las versiones EN/FR son courtesy translations
// resumidas con disclaimer claro al inicio.

const SHARED_STYLES = `
  .legal-page { max-width: 820px; margin: 0 auto; padding: 6rem 1.5rem 4rem; font-family: ui-serif, "Georgia", "Cambria", serif; color: #0E1B2C; line-height: 1.7; background: #FAEFE5; }
  .legal-back { display: inline-block; margin-bottom: 2rem; font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.8rem; letter-spacing: 0.18em; text-transform: uppercase; color: #B8651D; text-decoration: none; }
  .legal-back:hover { text-decoration: underline; }
  .legal-page h1 { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 2rem; letter-spacing: 0.04em; text-transform: uppercase; margin: 0 0 0.5rem; }
  .legal-page h2 { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 1.05rem; letter-spacing: 0.14em; text-transform: uppercase; color: #B8651D; margin: 2.5rem 0 0.5rem; }
  .legal-page h3 { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.95rem; letter-spacing: 0.1em; text-transform: uppercase; margin: 1.75rem 0 0.5rem; }
  .legal-page p { margin: 0.75rem 0; }
  .legal-page ul, .legal-page ol { padding-left: 1.5rem; }
  .legal-page li { margin: 0.4rem 0; }
  .legal-meta { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.78rem; letter-spacing: 0.16em; text-transform: uppercase; color: #6b6b6b; margin-bottom: 2rem; }
  .legal-page a { color: #B8651D; }
  .legal-disclaimer { border-left: 3px solid #B8651D; padding: 0.75rem 1rem; margin: 1.5rem 0; background: rgba(184, 101, 29, 0.06); font-size: 0.92rem; }
`;

export default function PrivacidadClient() {
  const { locale } = useI18n();

  if (locale === "en") return <PrivacidadEN />;
  if (locale === "fr") return <PrivacidadFR />;
  return <PrivacidadES />;
}

function BackLink({ label }: { label: string }) {
  return (
    <Link href="/" className="legal-back">
      ← {label}
    </Link>
  );
}

/* ============================================================
   ESPAÑOL — version juridicamente vinculante (LFPDPPP Mexico)
   ============================================================ */
function PrivacidadES() {
  return (
    <main data-surface="light" className="legal-page">
      <style>{SHARED_STYLES}</style>
      <BackLink label="Volver al inicio" />

      <h1>Aviso de Privacidad Integral</h1>
      <p className="legal-meta">
        Delva & Asociados · Última actualización: 26 de mayo de 2026 · v.1.1
      </p>

      <p>
        En cumplimiento del artículo 14 de la Ley Federal de Protección de
        Datos Personales en Posesión de los Particulares (en adelante, la{" "}
        <strong>“LFPDPPP”</strong>), publicada en el Diario Oficial de la
        Federación el 20 de marzo de 2025 y en vigor desde el 21 de marzo de
        2025, y, cuando resulte aplicable, del Reglamento (UE) 2016/679 (en
        adelante, el <strong>“RGPD”</strong>), se pone a disposición de la
        persona titular el presente Aviso de Privacidad Integral.
      </p>

      <h2>I. Identidad y domicilio del Responsable</h2>
      <p>
        <strong>Juan Emmanuel Delva Benavides</strong>, persona física con
        actividad empresarial y profesional, actuando bajo la denominación
        comercial <strong>Delva & Asociados</strong>, con domicilio en
        Guadalajara, Jalisco, Estados Unidos Mexicanos, y correo electrónico
        de contacto <code>contacto@delvayasociados.com</code> (en adelante, el{" "}
        <strong>“Responsable”</strong>), es el sujeto regulado que decide
        sobre el tratamiento de los datos personales recabados a través del
        sitio <code>https://delvayasociados.com</code> (en adelante, el{" "}
        <strong>“Sitio”</strong>) y de los canales de contacto asociados.
      </p>

      <h2>II. Datos personales que serán sometidos a tratamiento</h2>
      <p>
        <strong>A. Datos de identificación y contacto</strong> que la persona
        titular proporciona voluntariamente: nombre completo, correo
        electrónico, número telefónico, ocupación o cargo, y empresa o
        despacho de adscripción cuando se indique.
      </p>
      <p>
        <strong>B. Datos de navegación y técnicos</strong> recabados de forma
        automatizada: dirección IP truncada, identificador agregado de
        dispositivo, tipo y versión del navegador, sistema operativo, idioma,
        páginas visitadas, fecha y hora de la visita.
      </p>
      <p>
        <strong>C. Datos relativos al asunto consultado</strong>: descripción
        de hechos, partes involucradas, documentos compartidos voluntariamente.
      </p>
      <h3>Datos personales sensibles</h3>
      <p>
        El Responsable <strong>no recaba intencionalmente datos personales
        sensibles</strong>. En el supuesto de que la persona titular comparta
        voluntariamente este tipo de datos, se recabará{" "}
        <strong>consentimiento expreso por escrito</strong> previo a cualquier
        tratamiento adicional.
      </p>

      <h2>III. Finalidades del tratamiento</h2>
      <h3>Finalidades necesarias</h3>
      <ol>
        <li>Atender la solicitud de contacto, consulta o cotización.</li>
        <li>Evaluar la viabilidad técnica y jurídica de prestar los servicios.</li>
        <li>Formalizar la relación profesional mediante carta de encargo o contrato.</li>
        <li>Dar seguimiento a la prestación del servicio jurídico.</li>
        <li>Cumplir con las obligaciones legales, fiscales y administrativas.</li>
        <li>Atender requerimientos de autoridad competente formulados mediante orden judicial.</li>
      </ol>
      <h3>Finalidades voluntarias</h3>
      <p>Previo consentimiento de la persona titular:</p>
      <ol>
        <li>Envío de comunicaciones informativas y boletines.</li>
        <li>Invitaciones a eventos académicos o profesionales.</li>
        <li>Estadísticas internas anonimizadas para mejora del Sitio.</li>
      </ol>

      <h2>IV. Consentimiento</h2>
      <p>
        El consentimiento se otorga de forma libre, específica e informada.
        Para finalidades necesarias se entiende otorgado de forma tácita al
        utilizar los canales de contacto. Para finalidades voluntarias y para
        el tratamiento de datos sensibles, se recabará{" "}
        <strong>consentimiento expreso</strong> por separado.
      </p>

      <h2>V. Encargados del tratamiento</h2>
      <p>
        El Responsable se apoya en: hosting (Vercel Inc.), analítica agregada
        sin cookies (Cloudflare Web Analytics), correo electrónico profesional
        (Cloudflare Email Routing), agenda en línea (Calendly / Cal.com),
        mensajería (WhatsApp — Meta Platforms Ireland Ltd.) y videoconferencia
        (Google Meet, Microsoft Teams, Immersed, Meta Workrooms o análogos).
        Cuando alguno procese datos fuera de México, el Responsable adoptará
        las garantías apropiadas del RGPD.
      </p>

      <h2>VI. Ejercicio de derechos ARCO y revocación del consentimiento</h2>
      <p>
        La persona titular o su representante legal acreditado tiene derecho
        a acceder, rectificar, cancelar, oponerse y revocar el consentimiento.
        Para ejercerlos, deberá presentar solicitud por escrito al correo{" "}
        <code>contacto@delvayasociados.com</code>, acompañando: (i) nombre
        completo y medio para comunicarle la respuesta; (ii) documento que
        acredite su identidad; (iii) descripción clara de los datos respecto
        de los cuales se ejerce el derecho.
      </p>
      <p>
        El Responsable comunicará la determinación en un plazo máximo de{" "}
        <strong>20 días hábiles</strong>. El ejercicio es gratuito.
      </p>

      <h2>VII. Medios para limitar el uso o divulgación</h2>
      <ol>
        <li>Solicitud por escrito al correo señalado.</li>
        <li>Inscripción en el Registro Público para Evitar Publicidad de PROFECO.</li>
        <li>
          Configuración del navegador para rechazar cookies, conforme a la{" "}
          <Link href="/cookies">Política de Cookies</Link>.
        </li>
      </ol>

      <h2>VIII. Cookies y tecnologías similares</h2>
      <p>
        La analítica del Sitio se realiza mediante una herramienta agregada{" "}
        <strong>sin cookies</strong> (Cloudflare Web Analytics). Detalle
        completo en la <Link href="/cookies">Política de Cookies</Link>.
      </p>

      <h2>IX. Cambios al Aviso de Privacidad</h2>
      <p>
        El Responsable se reserva el derecho de modificar el presente Aviso.
        Cualquier cambio sustancial se comunicará a través del propio Sitio.
      </p>

      <h2>X. Autoridad competente</h2>
      <p>
        La persona titular que considere que su derecho a la protección de
        datos personales ha sido vulnerado podrá interponer la denuncia
        correspondiente ante la <strong>Secretaría Anticorrupción y Buen
        Gobierno</strong>, autoridad federal sucesora del INAI conforme a la
        reforma constitucional del 20 de diciembre de 2024 y a la LFPDPPP del
        20 de marzo de 2025. Los actos de la Secretaría podrán impugnarse
        mediante <strong>juicio de amparo indirecto</strong>.
      </p>
      <p>
        Para titulares ubicados en el Espacio Económico Europeo, podrán
        presentar reclamación ante la Autoridad de Control de su Estado
        miembro de residencia, conforme al artículo 77 del RGPD.
      </p>

      <p style={{ marginTop: "2.5rem", fontSize: "0.85rem", color: "#6b6b6b" }}>
        El uso del Sitio implica el conocimiento y la aceptación del presente
        Aviso de Privacidad.
      </p>
    </main>
  );
}

/* ============================================================
   ENGLISH — courtesy translation, Spanish version is binding
   ============================================================ */
function PrivacidadEN() {
  return (
    <main data-surface="light" className="legal-page">
      <style>{SHARED_STYLES}</style>
      <BackLink label="Back to home" />

      <h1>Privacy Notice</h1>
      <p className="legal-meta">
        Delva & Asociados · Last updated: May 26, 2026 · v.1.1
      </p>

      <div className="legal-disclaimer">
        <strong>Courtesy translation.</strong> The legally binding Privacy
        Notice is the Spanish version available at{" "}
        <Link href="/privacidad">/privacidad</Link>, drafted in compliance with
        Mexican LFPDPPP (DOF 20-Mar-2025). This English summary is for
        informational purposes only.
      </div>

      <h2>1. Data Controller</h2>
      <p>
        <strong>Juan Emmanuel Delva Benavides</strong>, individual professional
        operating under the commercial name <strong>Delva & Asociados</strong>,
        based in Guadalajara, Jalisco, Mexico. Contact:{" "}
        <code>contacto@delvayasociados.com</code>. Website:{" "}
        <code>https://delvayasociados.com</code>.
      </p>

      <h2>2. Data we collect</h2>
      <ul>
        <li>
          <strong>Identification and contact</strong> data you voluntarily
          provide: full name, email, phone, occupation, company.
        </li>
        <li>
          <strong>Technical and navigation</strong> data collected automatically:
          truncated IP, browser type, OS, language, pages visited, timestamp.
        </li>
        <li>
          <strong>Case-related</strong> data you share when describing your
          matter: facts, parties, documents.
        </li>
      </ul>
      <p>
        We <strong>do not intentionally collect sensitive data</strong>. If you
        voluntarily share sensitive data, we will request{" "}
        <strong>explicit written consent</strong> before any further processing.
      </p>

      <h2>3. Purposes</h2>
      <p>
        <strong>Necessary purposes:</strong> answer your inquiry, evaluate
        feasibility, formalize professional relationship, deliver legal
        services, comply with legal/tax/regulatory obligations, respond to
        court orders.
      </p>
      <p>
        <strong>Optional purposes</strong> (requires your consent): newsletters,
        invitations to events, anonymized internal statistics.
      </p>

      <h2>4. Data processors</h2>
      <p>
        Hosting (Vercel Inc.), cookieless analytics (Cloudflare Web Analytics),
        professional email (Cloudflare Email Routing), online calendar
        (Calendly / Cal.com), messaging (WhatsApp — Meta), and video calls
        (Google Meet, Microsoft Teams, Immersed, Meta Workrooms). When data is
        processed outside Mexico and EU jurisdiction applies, GDPR Chapter V
        safeguards are adopted.
      </p>

      <h2>5. Your rights (ARCO + GDPR)</h2>
      <p>
        You may access, rectify, cancel, oppose processing, and revoke
        consent. Send a written request to{" "}
        <code>contacto@delvayasociados.com</code> with: (i) your name and reply
        method; (ii) ID document; (iii) clear description of the data
        concerned. We will respond within <strong>20 business days</strong>{" "}
        (free of charge).
      </p>

      <h2>6. Cookies</h2>
      <p>
        Our analytics is cookieless (Cloudflare Web Analytics). Full details
        in the <Link href="/cookies">Cookies Policy</Link>.
      </p>

      <h2>7. Competent authority</h2>
      <p>
        In Mexico: <strong>Secretaría Anticorrupción y Buen Gobierno</strong>{" "}
        (federal authority succeeding INAI under the constitutional reform of
        20-Dec-2024 and the LFPDPPP of 20-Mar-2025). Decisions may be
        challenged via <em>amparo indirecto</em>.
      </p>
      <p>
        EEA residents may also file a complaint with the supervisory authority
        of their EU member state under GDPR Article 77.
      </p>

      <p style={{ marginTop: "2.5rem", fontSize: "0.85rem", color: "#6b6b6b" }}>
        Using the Site implies acceptance of this Privacy Notice. For the full
        legally binding version, see the Spanish text at{" "}
        <Link href="/privacidad">/privacidad</Link>.
      </p>
    </main>
  );
}

/* ============================================================
   FRANÇAIS — traduction de courtoisie, la version ES fait foi
   ============================================================ */
function PrivacidadFR() {
  return (
    <main data-surface="light" className="legal-page">
      <style>{SHARED_STYLES}</style>
      <BackLink label="Retour à l'accueil" />

      <h1>Avis de Confidentialité</h1>
      <p className="legal-meta">
        Delva & Asociados · Dernière mise à jour : 26 mai 2026 · v.1.1
      </p>

      <div className="legal-disclaimer">
        <strong>Traduction de courtoisie.</strong> La version juridiquement
        contraignante est la version espagnole disponible à{" "}
        <Link href="/privacidad">/privacidad</Link>, rédigée conformément à la
        LFPDPPP mexicaine (DOF 20-mars-2025). Ce résumé en français est à
        titre informatif uniquement.
      </div>

      <h2>1. Responsable du traitement</h2>
      <p>
        <strong>Juan Emmanuel Delva Benavides</strong>, personne physique avec
        activité professionnelle, sous la dénomination commerciale{" "}
        <strong>Delva & Asociados</strong>, domicilié à Guadalajara, Jalisco,
        Mexique. Contact : <code>contacto@delvayasociados.com</code>. Site :{" "}
        <code>https://delvayasociados.com</code>.
      </p>

      <h2>2. Données collectées</h2>
      <ul>
        <li>
          <strong>Identification et contact</strong> fournies volontairement :
          nom complet, email, téléphone, profession, entreprise.
        </li>
        <li>
          <strong>Techniques et de navigation</strong> collectées
          automatiquement : IP tronquée, type de navigateur, OS, langue, pages
          visitées, horodatage.
        </li>
        <li>
          <strong>Liées à l'affaire</strong> partagées lors de la description
          du cas : faits, parties, documents.
        </li>
      </ul>
      <p>
        Nous <strong>ne collectons pas intentionnellement de données
        sensibles</strong>. Si vous partagez volontairement de telles données,
        nous demanderons votre <strong>consentement écrit explicite</strong>{" "}
        avant tout traitement additionnel.
      </p>

      <h2>3. Finalités</h2>
      <p>
        <strong>Finalités nécessaires :</strong> répondre à votre demande,
        évaluer la faisabilité, formaliser la relation professionnelle, fournir
        les services juridiques, respecter les obligations légales/fiscales,
        répondre aux ordonnances judiciaires.
      </p>
      <p>
        <strong>Finalités optionnelles</strong> (nécessitent consentement) :
        newsletters, invitations à des événements, statistiques internes
        anonymisées.
      </p>

      <h2>4. Sous-traitants</h2>
      <p>
        Hébergement (Vercel Inc.), analytique sans cookies (Cloudflare Web
        Analytics), email professionnel (Cloudflare Email Routing), agenda en
        ligne (Calendly / Cal.com), messagerie (WhatsApp — Meta) et
        visioconférence (Google Meet, Microsoft Teams, Immersed, Meta
        Workrooms). Quand les données sont traitées hors du Mexique et que le
        RGPD s'applique, les garanties du Chapitre V du RGPD sont adoptées.
      </p>

      <h2>5. Vos droits (ARCO + RGPD)</h2>
      <p>
        Vous pouvez accéder, rectifier, annuler, vous opposer au traitement et
        révoquer le consentement. Envoyez une demande écrite à{" "}
        <code>contacto@delvayasociados.com</code> avec : (i) votre nom et
        moyen de réponse ; (ii) document d'identité ; (iii) description claire
        des données concernées. Nous répondrons dans un délai de{" "}
        <strong>20 jours ouvrables</strong> (gratuit).
      </p>

      <h2>6. Cookies</h2>
      <p>
        Notre analytique est sans cookies (Cloudflare Web Analytics). Détails
        complets dans la <Link href="/cookies">Politique de Cookies</Link>.
      </p>

      <h2>7. Autorité compétente</h2>
      <p>
        Au Mexique : <strong>Secretaría Anticorrupción y Buen Gobierno</strong>{" "}
        (autorité fédérale succédant à l'INAI selon la réforme constitutionnelle
        du 20-déc-2024 et la LFPDPPP du 20-mars-2025). Les décisions peuvent
        être contestées via <em>amparo indirecto</em>.
      </p>
      <p>
        Les résidents de l'EEE peuvent également déposer une plainte auprès de
        l'autorité de contrôle de leur État membre selon l'article 77 du RGPD.
      </p>

      <p style={{ marginTop: "2.5rem", fontSize: "0.85rem", color: "#6b6b6b" }}>
        L'utilisation du Site implique l'acceptation du présent Avis. Pour la
        version juridiquement contraignante complète, voir le texte espagnol à{" "}
        <Link href="/privacidad">/privacidad</Link>.
      </p>
    </main>
  );
}
