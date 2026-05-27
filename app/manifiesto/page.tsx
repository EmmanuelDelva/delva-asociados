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
  }
};

export default function ManifiestoPage() {
  return <ManifiestoClient />;
}
