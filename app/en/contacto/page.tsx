import type { Metadata } from "next";
import ContactoPage from "../../contacto/page";

export const metadata: Metadata = {
  title: "Contact — Delva & Asociados",
  description:
    "The first conversation is on us. Thirty minutes to understand your case. Email, WhatsApp, calendar or metaverse call.",
  alternates: {
    canonical: "/en/contacto",
    languages: {
      es: "/contacto",
      en: "/en/contacto",
      fr: "/fr/contacto",
      "x-default": "/contacto"
    }
  },
  // openGraph parcial REEMPLAZA el del root (merge superficial de Next),
  // así que hay que declararlo completo o se hereda og:locale es_MX.
  openGraph: {
    title: "Contact — Delva & Asociados",
    description:
      "The first conversation is on us. Thirty minutes to understand your case. Email, WhatsApp, calendar or metaverse call.",
    url: "/en/contacto",
    type: "website",
    locale: "en_US",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Delva & Asociados",
    description:
      "The first conversation is on us. Thirty minutes to understand your case. Email, WhatsApp, calendar or metaverse call."
  }
};

export default ContactoPage;
