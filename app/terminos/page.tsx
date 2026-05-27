import type { Metadata } from "next";
import TerminosClient from "./TerminosClient";

export const metadata: Metadata = {
  title: "Términos de Uso — Delva & Asociados",
  description:
    "Términos y Condiciones de Uso del sitio delvayasociados.com. Disclaimer profesional, propiedad intelectual, jurisdicción de Guadalajara.",
  alternates: {
    canonical: "/terminos",
    languages: {
      es: "/terminos",
      en: "/en/terminos",
      fr: "/fr/terminos",
      "x-default": "/terminos"
    }
  },
  openGraph: {
    title: "Términos de Uso — Delva & Asociados",
    description:
      "Términos y Condiciones del sitio del despacho jurídico digital Delva & Asociados.",
    type: "article"
  },
  robots: { index: true, follow: true }
};

export default function TerminosPage() {
  return <TerminosClient />;
}
