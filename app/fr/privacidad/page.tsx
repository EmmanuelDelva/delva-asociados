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
  },
  // openGraph parcial REEMPLAZA el del root (merge superficial de Next),
  // así que hay que declararlo completo o se hereda og:locale es_MX.
  openGraph: {
    title: "Avis de Confidentialité — Delva & Asociados",
    description:
      "Avis de Confidentialité Intégral conforme à la nouvelle LFPDPPP mexicaine (DOF 20-mars-2025) et au RGPD. Cabinet juridique digital Delva & Asociados.",
    url: "/fr/privacidad",
    type: "website",
    locale: "fr_FR",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Avis de Confidentialité — Delva & Asociados",
    description:
      "Avis de Confidentialité Intégral conforme à la nouvelle LFPDPPP mexicaine (DOF 20-mars-2025) et au RGPD. Cabinet juridique digital Delva & Asociados."
  }
};

export default PrivacidadPage;
