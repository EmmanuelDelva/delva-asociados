import type { Metadata } from "next";
import CookiesPage from "../../cookies/page";

export const metadata: Metadata = {
  title: "Politique de Cookies — Delva & Asociados",
  description:
    "Politique de Cookies du site delvayasociados.com conforme à la nouvelle LFPDPPP (DOF 20-mars-2025), au RGPD et au CPRA. Analytique sans cookies.",
  alternates: {
    canonical: "/fr/cookies",
    languages: {
      es: "/cookies",
      en: "/en/cookies",
      fr: "/fr/cookies",
      "x-default": "/cookies"
    }
  }
};

export default CookiesPage;
