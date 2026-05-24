import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto — Delva & Asociados",
  description:
    "El primer diálogo no se cobra. Treinta minutos para entender tu caso. Correo, WhatsApp, agenda o reunión en metaverso."
};

export default function ContactoPage() {
  return <ContactoClient />;
}
