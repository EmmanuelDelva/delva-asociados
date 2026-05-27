import type { Metadata } from "next";
import CookiesClient from "./CookiesClient";

export const metadata: Metadata = {
  title: "Política de Cookies — Delva & Asociados",
  description:
    "Política de Cookies del sitio delvayasociados.com conforme a la nueva LFPDPPP (DOF 20-mar-2025), RGPD y CPRA. Analítica sin cookies.",
  alternates: {
    canonical: "/cookies",
    languages: {
      es: "/cookies",
      en: "/en/cookies",
      fr: "/fr/cookies",
      "x-default": "/cookies"
    }
  },
  openGraph: {
    title: "Política de Cookies — Delva & Asociados",
    description:
      "Tipos de cookies utilizadas, finalidades, duración y mecanismos de consentimiento.",
    type: "article"
  },
  robots: { index: true, follow: true }
};

export default function CookiesPage() {
  return <CookiesClient />;
}
