import type { Metadata } from "next";
import DespachoClient from "./DespachoClient";

export const metadata: Metadata = {
  title: "Despacho — Delva & Asociados",
  description: "Conducción: Juan Emmanuel Delva Benavides, Doctor en Derecho, investigador y profesor."
};

export default function DespachoPage() {
  return <DespachoClient />;
}
