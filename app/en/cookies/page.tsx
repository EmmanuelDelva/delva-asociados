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
  }
};

export default CookiesPage;
