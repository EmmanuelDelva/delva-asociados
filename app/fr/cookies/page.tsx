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
  },
  // openGraph parcial REEMPLAZA el del root (merge superficial de Next),
  // así que hay que declararlo completo o se hereda og:locale es_MX.
  openGraph: {
    title: "Politique de Cookies — Delva & Asociados",
    description:
      "Politique de Cookies du site delvayasociados.com conforme à la nouvelle LFPDPPP (DOF 20-mars-2025), au RGPD et au CPRA. Analytique sans cookies.",
    url: "/fr/cookies",
    type: "website",
    locale: "fr_FR",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique de Cookies — Delva & Asociados",
    description:
      "Politique de Cookies du site delvayasociados.com conforme à la nouvelle LFPDPPP (DOF 20-mars-2025), au RGPD et au CPRA. Analytique sans cookies."
  }
};

export default CookiesPage;
