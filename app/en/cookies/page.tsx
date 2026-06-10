import type { Metadata } from "next";
import CookiesPage from "../../cookies/page";

export const metadata: Metadata = {
  title: "Cookies Policy — Delva & Asociados",
  description:
    "Cookies Policy of delvayasociados.com under the new LFPDPPP (DOF 20-Mar-2025), GDPR and CPRA. Cookieless analytics.",
  alternates: {
    canonical: "/en/cookies",
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
    title: "Cookies Policy — Delva & Asociados",
    description:
      "Cookies Policy of delvayasociados.com under the new LFPDPPP (DOF 20-Mar-2025), GDPR and CPRA. Cookieless analytics.",
    url: "/en/cookies",
    type: "website",
    locale: "en_US",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookies Policy — Delva & Asociados",
    description:
      "Cookies Policy of delvayasociados.com under the new LFPDPPP (DOF 20-Mar-2025), GDPR and CPRA. Cookieless analytics."
  }
};

export default CookiesPage;
