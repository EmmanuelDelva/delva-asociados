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
  }
};

export default function DespachoPage() {
  return <DespachoClient />;
}
