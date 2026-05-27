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
  }
};

export default ContactoPage;
