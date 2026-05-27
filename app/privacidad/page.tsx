import type { Metadata } from "next";
import PrivacidadClient from "./PrivacidadClient";

export const metadata: Metadata = {
  title: "Aviso de Privacidad — Delva & Asociados",
  description:
    "Aviso de Privacidad Integral conforme a la nueva LFPDPPP (DOF 20-mar-2025) y al RGPD del despacho jurídico digital Delva & Asociados.",
  alternates: {
    canonical: "/privacidad",
    languages: {
      es: "/privacidad",
      en: "/en/privacidad",
      fr: "/fr/privacidad",
      "x-default": "/privacidad"
    }
  },
  openGraph: {
    title: "Aviso de Privacidad — Delva & Asociados",
    description:
      "Aviso integral de tratamiento de datos personales del sitio delvayasociados.com.",
    type: "article"
  },
  robots: { index: true, follow: true }
};

export default function PrivacidadPage() {
  return <PrivacidadClient />;
}
