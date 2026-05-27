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
  }
};

export default ContactoPage;
