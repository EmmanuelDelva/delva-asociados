import type { Metadata } from "next";
import TerminosPage from "../../terminos/page";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation — Delva & Asociados",
  description:
    "Conditions Générales d'Utilisation du site delvayasociados.com. Disclaimer professionnel, propriété intellectuelle, juridiction de Guadalajara.",
  alternates: {
    canonical: "/fr/terminos",
    languages: {
      es: "/terminos",
      en: "/en/terminos",
      fr: "/fr/terminos",
      "x-default": "/terminos"
    }
  },
  // openGraph parcial REEMPLAZA el del root (merge superficial de Next),
  // así que hay que declararlo completo o se hereda og:locale es_MX.
  openGraph: {
    title: "Conditions d'Utilisation — Delva & Asociados",
    description:
      "Conditions Générales d'Utilisation du site delvayasociados.com. Disclaimer professionnel, propriété intellectuelle, juridiction de Guadalajara.",
    url: "/fr/terminos",
    type: "website",
    locale: "fr_FR",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Conditions d'Utilisation — Delva & Asociados",
    description:
      "Conditions Générales d'Utilisation du site delvayasociados.com. Disclaimer professionnel, propriété intellectuelle, juridiction de Guadalajara."
  }
};

export default TerminosPage;
