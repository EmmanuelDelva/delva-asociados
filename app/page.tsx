import type { Metadata } from "next";
import Nav from "./components/Nav";
import Stage from "./components/Stage";
import Hero from "./components/Hero";
import AreasShowcase from "./components/AreasShowcase";
import AreasInteractivas from "./components/AreasInteractivas";
import Dominios from "./components/Dominios";
import FirmaCTA from "./components/FirmaCTA";
import Footer from "./components/Footer";

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
