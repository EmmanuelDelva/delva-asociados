import type { Metadata } from "next";
import DespachoPage from "../../despacho/page";

export const metadata: Metadata = {
  title: "Cabinet — Delva & Asociados",
  description:
    "À la barre : Juan Emmanuel Delva Benavides, Docteur en droit, chercheur et professeur.",
  alternates: {
    canonical: "/fr/despacho",
    languages: {
      es: "/despacho",
      en: "/en/despacho",
      fr: "/fr/despacho",
      "x-default": "/despacho"
    }
  },
  // openGraph parcial REEMPLAZA el del root (merge superficial de Next),
  // así que hay que declararlo completo o se hereda og:locale es_MX.
  openGraph: {
    title: "Cabinet — Delva & Asociados",
    description:
      "À la barre : Juan Emmanuel Delva Benavides, Docteur en droit, chercheur et professeur.",
    url: "/fr/despacho",
    type: "website",
    locale: "fr_FR",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabinet — Delva & Asociados",
    description:
      "À la barre : Juan Emmanuel Delva Benavides, Docteur en droit, chercheur et professeur."
  }
};

export default DespachoPage;
