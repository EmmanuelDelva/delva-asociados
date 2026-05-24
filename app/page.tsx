import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Manifiesto from "./components/Manifiesto";
import Practica from "./components/Practica";
import Capacidades from "./components/Capacidades";
import Despacho from "./components/Despacho";
import Dialogo from "./components/Dialogo";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Manifiesto />
      <Practica />
      <Capacidades />
      <Despacho />
      <Dialogo />
      <Footer />
    </main>
  );
}
