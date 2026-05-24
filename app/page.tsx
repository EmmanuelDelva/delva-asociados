import Nav from "./components/Nav";
import Stage from "./components/Stage";
import Hero from "./components/Hero";
import Bento from "./components/Bento";
import Manifiesto from "./components/Manifiesto";
import ServiciosRail from "./components/ServiciosRail";
import Despacho from "./components/Despacho";
import Dialogo from "./components/Dialogo";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden w-full max-w-full">
      <Stage />
      <Nav />
      <Hero />
      <Bento />
      <Manifiesto />
      <ServiciosRail />
      <Despacho />
      <Dialogo />
      <Footer />
    </main>
  );
}
