import type { Metadata } from "next";
import ManifiestoPage from "../../manifiesto/page";

export const metadata: Metadata = {
  title: "Manifesto — Delva & Asociados",
  description:
    "Law arrives late to almost everything new. When it arrives, it does so poorly. That's why we built this firm.",
  alternates: {
    canonical: "/en/manifiesto",
    languages: {
      es: "/manifiesto",
      en: "/en/manifiesto",
      fr: "/fr/manifiesto",
      "x-default": "/manifiesto"
    }
  },
  // openGraph parcial REEMPLAZA el del root (merge superficial de Next),
  // así que hay que declararlo completo o se hereda og:locale es_MX.
  openGraph: {
    title: "Manifesto — Delva & Asociados",
    description:
      "Law arrives late to almost everything new. When it arrives, it does so poorly. That's why we built this firm.",
    url: "/en/manifiesto",
    type: "website",
    locale: "en_US",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Manifesto — Delva & Asociados",
    description:
      "Law arrives late to almost everything new. When it arrives, it does so poorly. That's why we built this firm."
  }
};

export default ManifiestoPage;
