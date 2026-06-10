import type { Metadata } from "next";
import DespachoClient from "./DespachoClient";

export const metadata: Metadata = {
  title: "Despacho — Delva & Asociados",
  description: "Conducción: Juan Emmanuel Delva Benavides, Doctor en Derecho, investigador y profesor.",
  alternates: {
    canonical: "/despacho",
    languages: {
      es: "/despacho",
      en: "/en/despacho",
      fr: "/fr/despacho",
      "x-default": "/despacho"
    }
  },
  // openGraph parcial REEMPLAZA el del root (merge superficial de Next),
  // así que hay que declararlo completo o se pierde og:image al compartir.
  openGraph: {
    title: "Despacho — Delva & Asociados",
    description: "Conducción: Juan Emmanuel Delva Benavides, Doctor en Derecho, investigador y profesor.",
    url: "/despacho",
    type: "website",
    locale: "es_MX",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Despacho — Delva & Asociados",
    description: "Conducción: Juan Emmanuel Delva Benavides, Doctor en Derecho, investigador y profesor."
  }
};

export default function DespachoPage() {
  return <DespachoClient />;
}
