import Nav from "./components/Nav";
import Stage from "./components/Stage";
import Hero from "./components/Hero";
import AreasInteractivas from "./components/AreasInteractivas";
import Dominios from "./components/Dominios";
import FirmaCTA from "./components/FirmaCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden w-full max-w-full">
      <Stage />
      <Nav />
      <Hero />
      <AreasInteractivas />
      <Dominios />
      <FirmaCTA />
      <Footer />
    </main>
  );
}
