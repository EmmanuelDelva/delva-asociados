import type { Metadata } from "next";
import DespachoPage from "../../despacho/page";

export const metadata: Metadata = {
  title: "Cabinet — Delva & Asociados",
  description:
    "À la barre : Juan Emmanuel Delva Benavides, Docteur en droit, chercheur et professeur.",
  alternates: {
    canonical: "/fr/despacho",
    languages: {
      es: "/despacho",
      en: "/en/despacho",
      fr: "/fr/despacho",
      "x-default": "/despacho"
    }
  }
};

export default DespachoPage;
