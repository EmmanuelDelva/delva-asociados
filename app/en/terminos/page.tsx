import type { Metadata } from "next";
import TerminosPage from "../../terminos/page";

export const metadata: Metadata = {
  title: "Terms of Use — Delva & Asociados",
  description:
    "Terms and Conditions of Use of delvayasociados.com. Professional disclaimer, intellectual property, Guadalajara jurisdiction.",
  alternates: {
    canonical: "/en/terminos",
    languages: {
      es: "/terminos",
      en: "/en/terminos",
      fr: "/fr/terminos",
      "x-default": "/terminos"
    }
  }
};

export default TerminosPage;
