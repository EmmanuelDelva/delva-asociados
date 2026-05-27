// Ruta: /app/privacidad/page.tsx
// Aviso de Privacidad Integral — Delva & Asociados — v.1.1 (NLFPDPPP marzo 2025).

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad — Delva & Asociados",
  description:
    "Aviso de Privacidad Integral conforme a la nueva LFPDPPP (DOF 20-mar-2025) y al RGPD del despacho jurídico digital Delva & Asociados.",
  alternates: { canonical: "/privacidad" },
  openGraph: {
    title: "Aviso de Privacidad — Delva & Asociados",
    description:
      "Aviso integral de tratamiento de datos personales del sitio delvayasociados.com.",
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
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
        .legal-page ul, .legal-page ol { padding-left: 1.5rem; }
        .legal-page li { margin: 0.4rem 0; }
        .legal-meta { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.78rem; letter-spacing: 0.16em; text-transform: uppercase; color: #6b6b6b; margin-bottom: 2rem; }
        .legal-page a { color: #B8651D; }
      `}</style>

      <Link href="/" className="legal-back">← Volver al inicio</Link>

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
        de contacto <code>emmanueldelva@gmail.com</code> (en adelante, el{" "}
        <strong>“Responsable”</strong>), es el sujeto regulado que decide
        sobre el tratamiento de los datos personales recabados a través del
        sitio <code>https://delvayasociados.com</code> (en adelante, el{" "}
        <strong>“Sitio”</strong>) y de los canales de contacto asociados.
      </p>

      <h2>II. Datos personales que serán sometidos a tratamiento</h2>
      <p>
        <strong>A. Datos de identificación y contacto</strong> que la persona
        titular proporciona voluntariamente al escribir al correo electrónico,
        al canal de WhatsApp <code>+52 33 1213 6004</code>, al agendar
        mediante el calendario en línea del Sitio o al unirse a sesiones
        remotas: nombre completo, correo electrónico, número telefónico,
        ocupación o cargo, y empresa o despacho de adscripción cuando se
        indique.
      </p>
      <p>
        <strong>B. Datos de navegación y técnicos</strong> que se recaban de
        forma automatizada al visitar el Sitio: dirección IP truncada,
        identificador agregado de dispositivo, tipo y versión del navegador,
        sistema operativo, idioma, sitio de procedencia, páginas visitadas,
        fecha y hora de la visita y duración de la sesión.
      </p>
      <p>
        <strong>C. Datos relativos al asunto consultado</strong> que la
        persona titular comparta al describir su caso: descripción de hechos,
        partes involucradas, documentos compartidos voluntariamente y demás
        información necesaria para evaluar la viabilidad de una eventual
        relación profesional.
      </p>
      <h3>Datos personales sensibles</h3>
      <p>
        El Responsable <strong>no recaba intencionalmente datos personales
        sensibles</strong> (origen racial o étnico, estado de salud presente
        o futuro, información genética, creencias religiosas, filosóficas y
        morales, opiniones políticas o preferencia sexual). En el supuesto de
        que la persona titular comparta voluntariamente este tipo de datos en
        el marco de la descripción de su caso, se recabará{" "}
        <strong>consentimiento expreso por escrito</strong> previo a cualquier
        tratamiento adicional.
      </p>

      <h2>III. Finalidades del tratamiento</h2>
      <h3>Finalidades necesarias</h3>
      <ol>
        <li>Atender la solicitud de contacto, consulta o cotización formulada por la persona titular.</li>
        <li>Evaluar la viabilidad técnica y jurídica de prestar los servicios solicitados.</li>
        <li>Formalizar, en su caso, la relación profesional mediante carta de encargo o contrato.</li>
        <li>Dar seguimiento a la prestación del servicio jurídico contratado.</li>
        <li>Cumplir con las obligaciones legales, fiscales y administrativas que correspondan al Responsable.</li>
        <li>Atender requerimientos de autoridad competente formulados mediante orden judicial, resolución o mandato fundado y motivado.</li>
      </ol>
      <h3>Finalidades voluntarias</h3>
      <p>Previo consentimiento de la persona titular:</p>
      <ol>
        <li>Envío de comunicaciones informativas sobre actualizaciones regulatorias, jurisprudencia relevante o publicaciones del Responsable.</li>
        <li>Invitaciones a eventos académicos o profesionales organizados por el Responsable o con su participación.</li>
        <li>Estadísticas internas anonimizadas para mejora del Sitio y de los servicios.</li>
      </ol>
      <p>
        La persona titular puede manifestar su negativa al tratamiento para
        finalidades voluntarias en cualquier momento. Dicha negativa no será
        motivo para negar los servicios solicitados ni para terminar la
        relación profesional.
      </p>
      <h3>Tratamiento automatizado</h3>
      <p>
        El Responsable no realiza decisiones individuales automatizadas sin
        intervención humana que produzcan efectos jurídicos o afecten
        significativamente a la persona titular. En caso de implementarse en
        el futuro, el aviso será actualizado y se solicitará el
        consentimiento correspondiente.
      </p>

      <h2>IV. Consentimiento</h2>
      <p>
        El consentimiento se otorga de forma libre, específica e informada.
        Para finalidades necesarias se entiende otorgado de forma tácita al
        utilizar los canales de contacto. Para finalidades voluntarias y para
        el tratamiento de datos sensibles que la persona titular comparta
        espontáneamente, se recabará <strong>consentimiento expreso</strong>{" "}
        por separado. Si el Responsable pretendiera tratar los datos para
        finalidades distintas a las previstas, solicitará nuevamente el
        consentimiento.
      </p>

      <h2>V. Encargados del tratamiento y comunicaciones de datos</h2>
      <p>
        El Responsable se apoya en los siguientes encargados, quienes acceden
        a los datos exclusivamente para prestar el servicio al Responsable
        bajo instrucciones documentadas y obligaciones de confidencialidad
        equivalentes: proveedor de <strong>hosting</strong> (Vercel Inc.);{" "}
        <strong>analítica agregada sin cookies</strong> (Cloudflare Web
        Analytics); <strong>correo electrónico profesional</strong> (Zoho
        Mail u análogo); <strong>agenda en línea</strong> (Calendly /
        Cal.com); <strong>mensajería</strong> (WhatsApp — Meta Platforms
        Ireland Ltd.); y <strong>videoconferencia</strong> (Google Meet,
        Microsoft Teams, Immersed, Meta Workrooms o análogos).
      </p>
      <p>
        Cuando alguno de estos encargados procese datos fuera de los Estados
        Unidos Mexicanos y la operación involucre territorio sujeto al RGPD,
        el Responsable adoptará las garantías apropiadas previstas en el
        Capítulo V del propio RGPD. El Responsable podrá comunicar datos a
        autoridades cuando medie orden judicial, resolución o mandato fundado
        y motivado.
      </p>

      <h2>VI. Ejercicio de derechos ARCO y revocación del consentimiento</h2>
      <p>
        La persona titular o su representante legal acreditado tiene derecho
        a acceder, rectificar, cancelar (incluyendo archivos, registros,
        expedientes y sistemas del Responsable), oponerse (incluido el
        tratamiento automatizado sin intervención humana) y revocar el
        consentimiento.
      </p>
      <p>
        Para ejercer estos derechos, deberá presentar solicitud por escrito
        al correo <code>emmanueldelva@gmail.com</code>, acompañando: (i)
        nombre completo y medio para comunicarle la respuesta; (ii) documento
        que acredite su identidad y, en su caso, la personalidad de su
        representante; (iii) descripción clara de los datos respecto de los
        cuales se ejerce el derecho; (iv) cualquier otro elemento que
        facilite la localización de los datos.
      </p>
      <p>
        El Responsable comunicará la determinación en un plazo máximo de 20
        días hábiles desde la recepción de la solicitud, y de resultar
        procedente, hará efectivo el derecho en 15 días hábiles adicionales.
        El ejercicio es gratuito.
      </p>

      <h2>VII. Medios para limitar el uso o divulgación</h2>
      <ol>
        <li>Solicitud por escrito al correo señalado en el apartado VI.</li>
        <li>Inscripción en el Registro Público para Evitar Publicidad de PROFECO.</li>
        <li>Configuración del navegador para rechazar cookies, conforme a la <Link href="/cookies">Política de Cookies</Link>.</li>
      </ol>

      <h2>VIII. Cookies y tecnologías similares</h2>
      <p>
        La analítica del Sitio se realiza mediante una herramienta agregada{" "}
        <strong>sin cookies</strong> (Cloudflare Web Analytics). El detalle
        completo de las cookies utilizadas y los mecanismos para gestionarlas
        se encuentra en la <Link href="/cookies">Política de Cookies</Link>.
      </p>

      <h2>IX. Cambios al Aviso de Privacidad</h2>
      <p>
        El Responsable se reserva el derecho de modificar el presente Aviso.
        Cualquier cambio sustancial se comunicará a través del propio Sitio.
        Cuando el cambio implique nuevas finalidades de tratamiento, se
        solicitará el consentimiento correspondiente.
      </p>

      <h2>X. Autoridad competente</h2>
      <p>
        La persona titular que considere que su derecho a la protección de
        datos personales ha sido vulnerado podrá interponer la denuncia o
        queja correspondiente ante la <strong>Secretaría Anticorrupción y
        Buen Gobierno</strong>, autoridad federal sucesora del Instituto
        Nacional de Transparencia, Acceso a la Información y Protección de
        Datos Personales (INAI) en materia de protección de datos personales
        en posesión de los particulares, conforme a la reforma constitucional
        publicada en el DOF el 20 de diciembre de 2024 y a la LFPDPPP del 20
        de marzo de 2025. Conforme al régimen de impugnación establecido por
        la LFPDPPP, los actos de la Secretaría podrán impugnarse mediante{" "}
        <strong>juicio de amparo indirecto</strong> ante los juzgados y
        tribunales especializados habilitados por el Poder Judicial de la
        Federación.
      </p>
      <p>
        Para titulares ubicados en el Espacio Económico Europeo, podrán
        presentar reclamación ante la Autoridad de Control de su Estado
        miembro de residencia, conforme al artículo 77 del RGPD.
      </p>

      <p style={{ marginTop: "2.5rem", fontSize: "0.85rem", color: "#6b6b6b" }}>
        El uso del Sitio, el envío voluntario de un mensaje a los canales del
        Responsable o el agendamiento de una sesión implica el conocimiento y
        la aceptación del presente Aviso de Privacidad.
      </p>
    </main>
  );
}
