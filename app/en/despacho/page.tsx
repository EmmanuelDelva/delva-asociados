import type { Metadata } from "next";
import DespachoPage from "../../despacho/page";

export const metadata: Metadata = {
  title: "About — Delva & Asociados",
  description:
    "At the helm: Juan Emmanuel Delva Benavides, Doctor of Laws, researcher and professor.",
  alternates: {
    canonical: "/en/despacho",
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
    title: "About — Delva & Asociados",
    description:
      "At the helm: Juan Emmanuel Delva Benavides, Doctor of Laws, researcher and professor.",
    url: "/en/despacho",
    type: "website",
    locale: "en_US",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Delva & Asociados",
    description:
      "At the helm: Juan Emmanuel Delva Benavides, Doctor of Laws, researcher and professor."
  }
};

export default DespachoPage;
