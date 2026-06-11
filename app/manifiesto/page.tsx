import type { Metadata } from "next";
import ManifiestoClient from "./ManifiestoClient";

export const metadata: Metadata = {
  title: "Manifiesto — Delva & Asociados",
  description: "El derecho llega tarde a casi todo lo nuevo. Cuando llega, lo hace mal. Por eso construimos este despacho.",
  alternates: {
    canonical: "/manifiesto",
    languages: {
      es: "/manifiesto",
      en: "/en/manifiesto",
      fr: "/fr/manifiesto",
      "x-default": "/manifiesto"
    }
  },
  // openGraph parcial REEMPLAZA el del root (merge superficial de Next),
  // así que hay que declararlo completo o se pierde og:image al compartir.
  openGraph: {
    title: "Manifiesto — Delva & Asociados",
    description: "El derecho llega tarde a casi todo lo nuevo. Cuando llega, lo hace mal. Por eso construimos este despacho.",
    url: "/manifiesto",
    type: "website",
    locale: "es_MX",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Manifiesto — Delva & Asociados",
    description: "El derecho llega tarde a casi todo lo nuevo. Cuando llega, lo hace mal. Por eso construimos este despacho."
  }
};

export default function ManifiestoPage() {
  return <ManifiestoClient />;
}
