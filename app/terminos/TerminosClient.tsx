"use client";

import Link from "next/link";
import { useI18n } from "../i18n/I18nProvider";

const SHARED_STYLES = `
  .legal-page { max-width: 820px; margin: 0 auto; padding: 6rem 1.5rem 4rem; font-family: ui-serif, "Georgia", "Cambria", serif; color: #0E1B2C; line-height: 1.7; background: #FAEFE5; }
  .legal-back { display: inline-block; margin-bottom: 2rem; font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.8rem; letter-spacing: 0.18em; text-transform: uppercase; color: #B8651D; text-decoration: none; }
  .legal-back:hover { text-decoration: underline; }
  .legal-page h1 { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 2rem; letter-spacing: 0.04em; text-transform: uppercase; margin: 0 0 0.5rem; }
  .legal-page h2 { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 1.05rem; letter-spacing: 0.14em; text-transform: uppercase; color: #B8651D; margin: 2.5rem 0 0.5rem; }
  .legal-page p { margin: 0.75rem 0; }
  .legal-page ul, .legal-page ol { padding-left: 1.5rem; }
  .legal-page li { margin: 0.4rem 0; }
  .legal-meta { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.78rem; letter-spacing: 0.16em; text-transform: uppercase; color: #6b6b6b; margin-bottom: 2rem; }
  .legal-page a { color: #B8651D; }
  .legal-page strong { color: #0E1B2C; }
  .legal-disclaimer { border-left: 3px solid #B8651D; padding: 0.75rem 1rem; margin: 1.5rem 0; background: rgba(184, 101, 29, 0.06); font-size: 0.92rem; }
`;

export default function TerminosClient() {
  const { locale } = useI18n();
  if (locale === "en") return <TerminosEN />;
  if (locale === "fr") return <TerminosFR />;
  return <TerminosES />;
}

function BackLink({ label }: { label: string }) {
  return (
    <Link href="/" className="legal-back">
      ← {label}
    </Link>
  );
}

function TerminosES() {
  return (
    <main data-surface="light" className="legal-page">
      <style>{SHARED_STYLES}</style>
      <BackLink label="Volver al inicio" />

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
        Términos. Si el visitante no está conforme, deberá abstenerse de
        utilizar el Sitio.
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
        profesional. La relación profesional se formaliza exclusivamente
        mediante carta de encargo o contrato de prestación de servicios
        profesionales firmado.
      </p>

      <h2>Cláusula Tercera. Propiedad intelectual</h2>
      <p>
        La totalidad de los contenidos del Sitio son propiedad del Titular del
        Sitio o se utilizan bajo licencia legítima. Queda expresamente
        prohibida la reproducción total o parcial, distribución, ingeniería
        inversa, <em>scraping</em> automatizado, entrenamiento de modelos de
        IA sobre el contenido, o cualquier forma de explotación comercial sin
        autorización previa por escrito.
      </p>

      <h2>Cláusula Cuarta. Uso aceptable</h2>
      <p>El visitante se compromete a no:</p>
      <ol type="a">
        <li>Acceder al Sitio por medios automatizados (bots, scrapers, agentes IA).</li>
        <li>Realizar pruebas de penetración o escaneo de vulnerabilidades.</li>
        <li>Suplantar la identidad del Titular o de cualquier otra persona.</li>
        <li>Transmitir contenidos ilícitos, difamatorios o que vulneren derechos.</li>
      </ol>

      <h2>Cláusula Quinta. Protección de datos personales</h2>
      <p>
        El tratamiento de los datos personales se rige por el{" "}
        <Link href="/privacidad">Aviso de Privacidad Integral</Link> y por la{" "}
        <Link href="/cookies">Política de Cookies</Link>.
      </p>

      <h2>Cláusula Sexta. Limitación de responsabilidad</h2>
      <p>
        El Titular no garantiza la continuidad ininterrumpida del Sitio, la
        exactitud exhaustiva de normativa o jurisprudencia, ni la idoneidad
        del contenido para el caso particular del visitante. En la máxima
        medida permitida por la ley, el Titular no será responsable de daños
        indirectos, lucro cesante o pérdida de oportunidades comerciales.
      </p>

      <h2>Cláusula Séptima. Enlaces a sitios de terceros</h2>
      <p>
        El Sitio puede contener enlaces a sitios operados por terceros. El
        Titular no controla su contenido ni asume responsabilidad por ellos.
      </p>

      <h2>Cláusula Octava. Modificación de los Términos</h2>
      <p>
        El Titular podrá modificar los Términos en cualquier momento. La
        versión vigente será la publicada en el Sitio con la fecha de última
        actualización al inicio del documento.
      </p>

      <h2>Cláusula Novena. Nulidad parcial</h2>
      <p>
        Si alguna disposición resultare nula por resolución firme de autoridad
        competente, dicha nulidad se entenderá circunscrita a esa disposición
        y no afectará el resto de los Términos.
      </p>

      <h2>Cláusula Décima. Ley aplicable y jurisdicción</h2>
      <p>
        Los Términos se rigen por las leyes federales de los Estados Unidos
        Mexicanos. Las partes se someten expresamente a la jurisdicción y
        competencia de los tribunales del <strong>Primer Partido Judicial
        del Estado de Jalisco, con sede en Guadalajara</strong>, renunciando a
        cualquier otro fuero. Tratándose de consumidores, lo anterior se
        entenderá sin perjuicio del fuero protector cuando resulte aplicable
        de manera imperativa.
      </p>

      <p style={{ marginTop: "2.5rem", fontSize: "0.85rem", color: "#6b6b6b" }}>
        Contacto: <code>contacto@delvayasociados.com</code>.
      </p>
    </main>
  );
}

function TerminosEN() {
  return (
    <main data-surface="light" className="legal-page">
      <style>{SHARED_STYLES}</style>
      <BackLink label="Back to home" />

      <h1>Terms of Use</h1>
      <p className="legal-meta">
        Delva & Asociados · Last updated: May 26, 2026 · v.1.1
      </p>

      <div className="legal-disclaimer">
        <strong>Courtesy translation.</strong> The legally binding Terms are
        the Spanish version at <Link href="/terminos">/terminos</Link>,
        governed by Mexican federal law. This English summary is for
        informational purposes only.
      </div>

      <h2>1. About the Site</h2>
      <p>
        <code>https://delvayasociados.com</code> is operated by{" "}
        <strong>Juan Emmanuel Delva Benavides</strong> (individual professional)
        under the commercial name <strong>Delva & Asociados</strong>. The Site
        is an informational and contact channel for the law firm.
      </p>
      <p>
        Using the Site implies full acceptance of these Terms. If you
        disagree, please refrain from using the Site.
      </p>

      <h2>2. Not legal advice</h2>
      <p>
        <strong>
          Information published on this Site is for informational purposes
          only and does NOT constitute legal advice, binding legal opinion, or
          individualized professional recommendation.
        </strong>
      </p>
      <p>
        Initial contact via the Site, email, WhatsApp or any other channel
        does NOT establish an attorney-client relationship or trigger
        professional confidentiality. The professional relationship is
        formalized exclusively via a signed engagement letter or services
        contract.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        All Site content is property of the Site Owner or used under valid
        license. Reproduction, distribution, reverse engineering, automated
        scraping, AI model training on the content, or any commercial
        exploitation without prior written authorization is{" "}
        <strong>strictly prohibited</strong>.
      </p>

      <h2>4. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Access the Site via automated means (bots, scrapers, AI agents).</li>
        <li>Conduct penetration testing or vulnerability scanning.</li>
        <li>Impersonate the Site Owner or any other person.</li>
        <li>Transmit illegal, defamatory, or rights-infringing content.</li>
      </ul>

      <h2>5. Data Protection</h2>
      <p>
        Processing of personal data is governed by our{" "}
        <Link href="/privacidad">Privacy Notice</Link> and{" "}
        <Link href="/cookies">Cookies Policy</Link>.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        We do not guarantee uninterrupted Site availability, exhaustive
        accuracy of legislation or case law, or the content's suitability for
        your particular case. To the maximum extent permitted by law, we are
        not liable for indirect, consequential, or business loss damages.
      </p>

      <h2>7. Third-party links</h2>
      <p>
        The Site may contain links to third-party sites. We do not control
        their content or assume responsibility for them.
      </p>

      <h2>8. Modifications</h2>
      <p>
        We may modify these Terms at any time. The current version is always
        the one published on the Site with the last-updated date at the top.
      </p>

      <h2>9. Severability</h2>
      <p>
        If any provision is held invalid, such invalidity affects only that
        provision; the remainder of the Terms remains in effect.
      </p>

      <h2>10. Governing Law and Jurisdiction</h2>
      <p>
        These Terms are governed by Mexican federal law. The parties expressly
        submit to the jurisdiction of the courts of the{" "}
        <strong>First Judicial Partido of the State of Jalisco, based in
        Guadalajara</strong>, waiving any other venue. For consumers, this is
        without prejudice to mandatory protective venues where applicable.
      </p>

      <p style={{ marginTop: "2.5rem", fontSize: "0.85rem", color: "#6b6b6b" }}>
        Contact: <code>contacto@delvayasociados.com</code>. For the full
        legally binding version, see the Spanish text at{" "}
        <Link href="/terminos">/terminos</Link>.
      </p>
    </main>
  );
}

function TerminosFR() {
  return (
    <main data-surface="light" className="legal-page">
      <style>{SHARED_STYLES}</style>
      <BackLink label="Retour à l'accueil" />

      <h1>Conditions d'Utilisation</h1>
      <p className="legal-meta">
        Delva & Asociados · Dernière mise à jour : 26 mai 2026 · v.1.1
      </p>

      <div className="legal-disclaimer">
        <strong>Traduction de courtoisie.</strong> Les Conditions
        juridiquement contraignantes sont la version espagnole à{" "}
        <Link href="/terminos">/terminos</Link>, régie par le droit fédéral
        mexicain. Ce résumé en français est à titre informatif uniquement.
      </div>

      <h2>1. À propos du Site</h2>
      <p>
        <code>https://delvayasociados.com</code> est exploité par{" "}
        <strong>Juan Emmanuel Delva Benavides</strong> (personne physique
        professionnelle) sous la dénomination commerciale{" "}
        <strong>Delva & Asociados</strong>. Le Site est un canal d'information
        et de contact du cabinet juridique.
      </p>
      <p>
        L'utilisation du Site implique l'acceptation pleine et entière de ces
        Conditions. En cas de désaccord, veuillez ne pas utiliser le Site.
      </p>

      <h2>2. Ne constitue pas un conseil juridique</h2>
      <p>
        <strong>
          Les informations publiées sur le Site sont à titre informatif
          uniquement et NE constituent PAS un conseil juridique, un avis
          juridique contraignant ni une recommandation professionnelle
          individualisée.
        </strong>
      </p>
      <p>
        Le contact initial via le Site, courriel, WhatsApp ou tout autre canal
        N'établit PAS de relation avocat-client ni de devoir de confidentialité
        professionnelle. La relation professionnelle se formalise uniquement
        via une lettre d'engagement ou un contrat de services signé.
      </p>

      <h2>3. Propriété intellectuelle</h2>
      <p>
        Tout le contenu du Site est la propriété du Titulaire ou utilisé sous
        licence valide. La reproduction, distribution, ingénierie inverse,{" "}
        <em>scraping</em> automatisé, entraînement de modèles d'IA sur le
        contenu, ou toute exploitation commerciale sans autorisation écrite
        préalable est <strong>strictement interdite</strong>.
      </p>

      <h2>4. Usage acceptable</h2>
      <p>Vous vous engagez à ne pas :</p>
      <ul>
        <li>Accéder au Site par des moyens automatisés (bots, scrapers, agents IA).</li>
        <li>Effectuer des tests de pénétration ou scan de vulnérabilités.</li>
        <li>Usurper l'identité du Titulaire ou de toute autre personne.</li>
        <li>Transmettre du contenu illégal, diffamatoire ou portant atteinte aux droits.</li>
      </ul>

      <h2>5. Protection des données</h2>
      <p>
        Le traitement des données personnelles est régi par notre{" "}
        <Link href="/privacidad">Avis de Confidentialité</Link> et notre{" "}
        <Link href="/cookies">Politique de Cookies</Link>.
      </p>

      <h2>6. Limitation de responsabilité</h2>
      <p>
        Nous ne garantissons pas la disponibilité ininterrompue du Site,
        l'exactitude exhaustive de la législation ou jurisprudence, ni
        l'adéquation du contenu à votre cas particulier. Dans la mesure
        maximale permise par la loi, nous ne sommes pas responsables des
        dommages indirects, consécutifs ou de perte commerciale.
      </p>

      <h2>7. Liens vers des tiers</h2>
      <p>
        Le Site peut contenir des liens vers des sites tiers. Nous ne
        contrôlons pas leur contenu ni n'assumons de responsabilité.
      </p>

      <h2>8. Modifications</h2>
      <p>
        Nous pouvons modifier ces Conditions à tout moment. La version
        applicable est celle publiée sur le Site avec la date de mise à jour.
      </p>

      <h2>9. Divisibilité</h2>
      <p>
        Si une disposition est invalidée, cette invalidité n'affecte que cette
        disposition ; le reste des Conditions reste en vigueur.
      </p>

      <h2>10. Droit applicable et juridiction</h2>
      <p>
        Ces Conditions sont régies par le droit fédéral mexicain. Les parties
        se soumettent expressément à la juridiction des tribunaux du{" "}
        <strong>Primer Partido Judicial de l'État de Jalisco, siégeant à
        Guadalajara</strong>, renonçant à tout autre for. Pour les
        consommateurs, sans préjudice du for protecteur impératif lorsqu'il
        s'applique.
      </p>

      <p style={{ marginTop: "2.5rem", fontSize: "0.85rem", color: "#6b6b6b" }}>
        Contact : <code>contacto@delvayasociados.com</code>. Pour la version
        juridiquement contraignante complète, voir le texte espagnol à{" "}
        <Link href="/terminos">/terminos</Link>.
      </p>
    </main>
  );
}
