import type { Metadata } from "next";
import ServiciosClient from "./ServiciosClient";

export const metadata: Metadata = {
  title: "Servicios — Delva & Asociados",
  description: "Doce áreas de práctica. Web3, IA, Herencia Digital, Diseño Web LegalTech, FinTech, Privacidad y más."
};

export default function ServiciosIndex() {
  return <ServiciosClient />;
}
