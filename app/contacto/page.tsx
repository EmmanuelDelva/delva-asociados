import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto — Delva & Asociados",
  description:
    "El primer diálogo no se cobra. Treinta minutos para entender tu caso. Correo, WhatsApp, agenda o reunión en metaverso.",
  alternates: {
    canonical: "/contacto",
    languages: {
      es: "/contacto",
      en: "/en/contacto",
      fr: "/fr/contacto",
      "x-default": "/contacto"
    }
  },
  // openGraph parcial REEMPLAZA el del root (merge superficial de Next),
  // así que hay que declararlo completo o se pierde og:image al compartir.
  openGraph: {
    title: "Contacto — Delva & Asociados",
    description:
      "El primer diálogo no se cobra. Treinta minutos para entender tu caso. Correo, WhatsApp, agenda o reunión en metaverso.",
    url: "/contacto",
    type: "website",
    locale: "es_MX",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto — Delva & Asociados",
    description:
      "El primer diálogo no se cobra. Treinta minutos para entender tu caso. Correo, WhatsApp, agenda o reunión en metaverso."
  }
};

export default function ContactoPage() {
  return <ContactoClient />;
}
