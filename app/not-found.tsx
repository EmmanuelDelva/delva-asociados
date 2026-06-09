import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada — Delva & Asociados",
  robots: { index: false, follow: false }
};

export default function NotFound() {
  return (
    <main
      data-surface="dark"
      className="relative min-h-screen bg-forest text-bone grain flex items-center justify-center px-6"
    >
      <div className="max-w-2xl text-center">
        <p className="font-serif text-[clamp(5rem,18vw,9rem)] leading-none" style={{ fontWeight: 400 }}>
          404
        </p>
        <div className="mt-6 mb-8 flex items-center justify-center gap-2 opacity-50">
          <span className="block w-10 h-px bg-bone" />
          <span className="block w-1 h-1 rounded-full bg-bone" />
          <span className="block w-10 h-px bg-bone" />
        </div>
        <h1 className="font-serif text-2xl md:text-3xl text-balance" style={{ fontWeight: 400 }}>
          Esta página no existe o cambió de lugar.
        </h1>
        <p className="mt-4 font-sans text-[15px] leading-[1.6] text-bone/70">
          Lo que buscas no está en esta dirección. Estos son los caminos de regreso.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-bone text-forest font-mono text-[11px] uppercase tracking-[0.2em] rounded-full px-5 py-3 hover:bg-ember transition-colors duration-500"
          >
            Inicio
          </Link>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] rounded-full px-5 py-3 border border-bone/30 hover:bg-bone hover:text-forest transition-colors duration-500"
          >
            Servicios
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] rounded-full px-5 py-3 border border-bone/30 hover:bg-bone hover:text-forest transition-colors duration-500"
          >
            Contacto
          </Link>
        </div>
      </div>
    </main>
  );
}
