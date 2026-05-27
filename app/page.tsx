import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Nav from "./components/Nav";
import Stage from "./components/Stage";
import Hero from "./components/Hero";

// Below-the-fold: lazy-loaded para reducir JS inicial (LCP/TBT win).
// SSR sigue activo para SEO (Google ve el HTML pre-renderizado).
const AreasShowcase = dynamic(() => import("./components/AreasShowcase"));
const AreasInteractivas = dynamic(() => import("./components/AreasInteractivas"));
const Dominios = dynamic(() => import("./components/Dominios"));
const FirmaCTA = dynamic(() => import("./components/FirmaCTA"));
const Footer = dynamic(() => import("./components/Footer"));

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      en: "/en",
      fr: "/fr",
      "x-default": "/"
    }
  }
};

export default function Home() {
  return (
    <main className="relative overflow-x-hidden w-full max-w-full">
      <Stage />
      <Nav />
      <Hero />
      <AreasShowcase />
      <AreasInteractivas />
      <Dominios />
      <FirmaCTA />
      <Footer />
    </main>
  );
}
