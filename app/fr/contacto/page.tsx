import type { Metadata } from "next";
import ContactoPage from "../../contacto/page";

export const metadata: Metadata = {
  title: "Contact — Delva & Asociados",
  description:
    "Le premier échange est offert. Trente minutes pour comprendre votre affaire. Courriel, WhatsApp, agenda ou appel en métaverse.",
  alternates: {
    canonical: "/fr/contacto",
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
      "Le premier échange est offert. Trente minutes pour comprendre votre affaire. Courriel, WhatsApp, agenda ou appel en métaverse.",
    url: "/fr/contacto",
    type: "website",
    locale: "fr_FR",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Delva & Asociados",
    description:
      "Le premier échange est offert. Trente minutes pour comprendre votre affaire. Courriel, WhatsApp, agenda ou appel en métaverse."
  }
};

export default ContactoPage;
