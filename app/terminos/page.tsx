// Ruta: /app/terminos/page.tsx
// Términos y Condiciones de Uso del Sitio — Delva & Asociados.

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Uso — Delva & Asociados",
  description:
    "Términos y Condiciones de Uso del sitio delvayasociados.com. Disclaimer profesional, propiedad intelectual, jurisdicción de Guadalajara.",
  alternates: {
    canonical: "/terminos",
    languages: {
      es: "/terminos",
      en: "/en/terminos",
      fr: "/fr/terminos",
      "x-default": "/terminos"
    }
  },
  openGraph: {
    title: "Términos de Uso — Delva & Asociados",
    description:
      "Términos y Condiciones del sitio del despacho jurídico digital Delva & Asociados.",
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
  return (
    <main data-surface="light" className="legal-page">
      <style>{`
        .legal-page {
          max-width: 820px;
          margin: 0 auto;
          padding: 6rem 1.5rem 4rem;
          font-family: ui-serif, "Georgia", "Cambria", serif;
          color: #0E1B2C;
          line-height: 1.7;
          background: #FAEFE5;
        }
        .legal-back {
          display: inline-block;
          margin-bottom: 2rem;
          font-family: ui-sans-serif, system-ui, sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #B8651D;
          text-decoration: none;
        }
        .legal-back:hover { text-decoration: underline; }
        .legal-page h1 {
          font-family: ui-sans-serif, system-ui, sans-serif;
          font-size: 2rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin: 0 0 0.5rem;
        }
        .legal-page h2 {
          font-family: ui-sans-serif, system-ui, sans-serif;
          font-size: 1.05rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #B8651D;
          margin: 2.5rem 0 0.5rem;
        }
        .legal-page p { margin: 0.75rem 0; }
        .legal-page ul, .legal-page ol { padding-left: 1.5rem; }
        .legal-page li { margin: 0.4rem 0; }
        .legal-meta {
          font-family: ui-sans-serif, system-ui, sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #6b6b6b;
          margin-bottom: 2rem;
        }
        .legal-page a { color: #B8651D; }
        .legal-page strong { color: #0E1B2C; }
      `}</style>

      <Link href="/" className="legal-back">← Volver al inicio</Link>

      <h1>Términos y Condiciones de Uso</h1>
      <p className="legal-meta">
        Delva & Asociados · Última actualización: 26 de mayo de 2026 · v.1.1
      </p>

      <p>
        Los presentes Términos y Condiciones de Uso (en adelante, los{" "}
        <strong>“Términos”</strong>) rigen el acceso y la utilización del
        sitio web <code>https://delvayasociados.com</code> y sus subdominios
        (en adelante, el <strong>“Sitio”</strong>), operado por{" "}
        <strong>Juan Emmanuel Delva Benavides</strong>, persona física con
        actividad empresarial, bajo la denominación comercial{" "}
        <strong>Delva & Asociados</strong>.
      </p>
      <p>
        El acceso al Sitio implica la aceptación plena y sin reservas de los
        Términos. Si el visitante no está conforme con cualquiera de las
        cláusulas, deberá abstenerse de utilizar el Sitio.
      </p>

      <h2>Cláusula Primera. Objeto del Sitio</h2>
      <p>
        El Sitio constituye un canal informativo y de contacto del despacho
        Delva & Asociados, especializado en derecho y tecnología.
      </p>

      <h2>Cláusula Segunda. No constituye asesoría jurídica</h2>
      <p>
        <strong>
          La información publicada en el Sitio tiene carácter exclusivamente
          informativo y divulgativo, y no constituye asesoría jurídica para
          caso concreto, opinión legal vinculante ni recomendación profesional
          individualizada.
        </strong>
      </p>
      <p>
        El contacto inicial a través del Sitio, del correo electrónico, de
        WhatsApp o de cualquier otro canal habilitado no genera por sí mismo
        relación abogado-cliente ni configura el deber de confidencialidad
        profesional. La relación profesional, los honorarios y el alcance del
        encargo se formalizan exclusivamente mediante carta de encargo o
        contrato de prestación de servicios profesionales firmado entre las
        partes.
      </p>
      <p>
        Cabe mencionar que cualquier decisión, actuación u omisión que el
        visitante adopte con base en el contenido del Sitio antes de
        formalizar la relación profesional, queda bajo su exclusiva
        responsabilidad.
      </p>

      <h2>Cláusula Tercera. Propiedad intelectual</h2>
      <p>
        La totalidad de los contenidos del Sitio —textos, denominaciones,
        marcas, lemas comerciales, identidad visual, código fuente, diseños,
        imágenes, ilustraciones, fotografías, videos, archivos de audio,
        infografías y, en general, cualquier elemento susceptible de
        protección por la Ley Federal del Derecho de Autor o por la Ley
        Federal de Protección a la Propiedad Industrial— son propiedad del
        Titular del Sitio o se utilizan bajo licencia legítima.
      </p>
      <p>
        Queda expresamente prohibida la reproducción total o parcial,
        distribución, comunicación pública, transformación, ingeniería
        inversa, <em>scraping</em> automatizado, entrenamiento de modelos de
        inteligencia artificial sobre el contenido, o cualquier forma de
        explotación comercial, sin autorización previa y por escrito del
        Titular del Sitio.
      </p>

      <h2>Cláusula Cuarta. Uso aceptable</h2>
      <p>
        El visitante se obliga a utilizar el Sitio conforme a la legislación
        aplicable, al orden público y a las buenas costumbres. En particular,
        se compromete a no:
      </p>
      <ol type="a">
        <li>
          Acceder al Sitio por medios automatizados que excedan el uso normal
          de un navegador, incluyendo bots, <em>scrapers</em>, agentes
          automáticos no autorizados o sistemas de inteligencia artificial que
          extraigan información sin consentimiento.
        </li>
        <li>
          Realizar pruebas de penetración, escaneo de vulnerabilidades,
          denegación de servicio o cualquier conducta que pueda afectar la
          disponibilidad, integridad o confidencialidad del Sitio.
        </li>
        <li>
          Suplantar la identidad del Titular del Sitio o de cualquier otra
          persona.
        </li>
        <li>
          Cargar o transmitir, a través de los canales de contacto, contenidos
          ilícitos, difamatorios, discriminatorios o que vulneren derechos de
          terceros.
        </li>
        <li>
          Utilizar el Sitio para fines distintos de los expresamente previstos.
        </li>
      </ol>

      <h2>Cláusula Quinta. Protección de datos personales</h2>
      <p>
        El tratamiento de los datos personales que el visitante proporcione
        voluntariamente se rige por el{" "}
        <Link href="/privacidad">Aviso de Privacidad Integral</Link> y por la{" "}
        <Link href="/cookies">Política de Cookies</Link>, los cuales forman
        parte integrante de los presentes Términos.
      </p>

      <h2>Cláusula Sexta. Limitación de responsabilidad</h2>
      <p>
        El Titular del Sitio realiza esfuerzos razonables para mantener la
        información actualizada, exacta y disponible. No obstante lo anterior,
        no garantiza la continuidad ininterrumpida frente a fallas técnicas, la
        exactitud o vigencia exhaustiva tratándose de normativa o
        jurisprudencia sujeta a actualización constante, ni la idoneidad del
        contenido para el caso particular del visitante.
      </p>
      <p>
        En la máxima medida permitida por la legislación aplicable, el Titular
        no será responsable de daños indirectos, incidentales, consecuentes,
        lucro cesante, pérdida de oportunidades comerciales o daños
        reputacionales derivados del uso o imposibilidad de uso del Sitio.
      </p>

      <h2>Cláusula Séptima. Enlaces a sitios de terceros</h2>
      <p>
        El Sitio puede contener enlaces a sitios operados por terceros. El
        Titular no controla el contenido ni las prácticas de privacidad de
        dichos sitios y, en consecuencia, no asume responsabilidad por ellos.
      </p>

      <h2>Cláusula Octava. Modificación de los Términos</h2>
      <p>
        El Titular del Sitio podrá modificar los Términos en cualquier
        momento. La versión vigente será siempre la publicada en el Sitio con
        la fecha de última actualización al inicio del documento.
      </p>

      <h2>Cláusula Novena. Nulidad parcial</h2>
      <p>
        Si alguna disposición resultare nula, ilegal o inejecutable por
        resolución firme de autoridad competente, dicha nulidad se entenderá
        circunscrita a esa disposición y no afectará la validez ni
        exigibilidad del resto de los Términos.
      </p>

      <h2>Cláusula Décima. Ley aplicable y jurisdicción</h2>
      <p>
        Los Términos se rigen por las leyes federales de los Estados Unidos
        Mexicanos. Para la interpretación, ejecución y cumplimiento, las
        partes se someten expresamente a la jurisdicción y competencia de los
        tribunales del <strong>Primer Partido Judicial del Estado de Jalisco,
        con sede en Guadalajara</strong>, renunciando a cualquier otro fuero
        que pudiera corresponderles. Tratándose de visitantes con la calidad
        de consumidores, lo anterior se entenderá sin perjuicio del fuero
        protector cuando éste resulte aplicable de manera imperativa.
      </p>

      <p style={{ marginTop: "2.5rem", fontSize: "0.85rem", color: "#6b6b6b" }}>
        Contacto: <code>contacto@delvayasociados.com</code>.
      </p>
    </main>
  );
}
