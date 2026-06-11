import type { Metadata } from "next";
import TerminosPage from "../../terminos/page";

export const metadata: Metadata = {
  title: "Terms of Use — Delva & Asociados",
  description:
    "Terms and Conditions of Use of delvayasociados.com. Professional disclaimer, intellectual property, Guadalajara jurisdiction.",
  alternates: {
    canonical: "/en/terminos",
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
    title: "Terms of Use — Delva & Asociados",
    description:
      "Terms and Conditions of Use of delvayasociados.com. Professional disclaimer, intellectual property, Guadalajara jurisdiction.",
    url: "/en/terminos",
    type: "website",
    locale: "en_US",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use — Delva & Asociados",
    description:
      "Terms and Conditions of Use of delvayasociados.com. Professional disclaimer, intellectual property, Guadalajara jurisdiction."
  }
};

export default TerminosPage;
