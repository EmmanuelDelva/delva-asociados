import type { Metadata } from "next";
import PrivacidadPage from "../../privacidad/page";

export const metadata: Metadata = {
  title: "Avis de Confidentialité — Delva & Asociados",
  description:
    "Avis de Confidentialité Intégral conforme à la nouvelle LFPDPPP mexicaine (DOF 20-mars-2025) et au RGPD. Cabinet juridique digital Delva & Asociados.",
  alternates: {
    canonical: "/fr/privacidad",
    languages: {
      es: "/privacidad",
      en: "/en/privacidad",
      fr: "/fr/privacidad",
      "x-default": "/privacidad"
    }
  }
};

export default PrivacidadPage;
