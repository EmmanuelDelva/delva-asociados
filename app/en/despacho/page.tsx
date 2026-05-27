import type { Metadata } from "next";
import DespachoPage from "../../despacho/page";

export const metadata: Metadata = {
  title: "About — Delva & Asociados",
  description:
    "At the helm: Juan Emmanuel Delva Benavides, Doctor of Laws, researcher and professor.",
  alternates: {
    canonical: "/en/despacho",
    languages: {
      es: "/despacho",
      en: "/en/despacho",
      fr: "/fr/despacho",
      "x-default": "/despacho"
    }
  }
};

export default DespachoPage;
