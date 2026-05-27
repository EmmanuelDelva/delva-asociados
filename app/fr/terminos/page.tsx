import type { Metadata } from "next";
import TerminosPage from "../../terminos/page";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation — Delva & Asociados",
  description:
    "Conditions Générales d'Utilisation du site delvayasociados.com. Disclaimer professionnel, propriété intellectuelle, juridiction de Guadalajara.",
  alternates: {
    canonical: "/fr/terminos",
    languages: {
      es: "/terminos",
      en: "/en/terminos",
      fr: "/fr/terminos",
      "x-default": "/terminos"
    }
  }
};

export default TerminosPage;
