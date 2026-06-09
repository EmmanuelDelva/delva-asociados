import type { Metadata } from "next";
import ServiciosClient from "./ServiciosClient";

export const metadata: Metadata = {
  title: "Servicios — Delva & Asociados",
  description: "Áreas de práctica. Web3, IA, Herencia Digital, Diseño Web LegalTech, FinTech, Privacidad y más.",
  // Sin esto heredaba el canonical "/" del root layout y Google podía tratar
  // el hub de servicios como duplicado de la home.
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios — Delva & Asociados",
    description: "Áreas de práctica. Web3, IA, Herencia Digital, Diseño Web LegalTech, FinTech, Privacidad y más.",
    url: "/servicios",
    type: "website",
    locale: "es_MX",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios — Delva & Asociados",
    description: "Áreas de práctica. Web3, IA, Herencia Digital, Diseño Web LegalTech, FinTech, Privacidad y más."
  }
};

export default function ServiciosIndex() {
  return <ServiciosClient />;
}
