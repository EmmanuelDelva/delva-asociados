import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-forest text-bone grain flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60vmin] h-[60vmin] rounded-full opacity-15 blur-[140px]"
          style={{ background: "oklch(0.72 0.155 50)" }}
        />
      </div>
      <div className="relative z-10">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.32em] text-bone/60 mb-6">
          404 — No encontrado
        </p>
        <h1 className="font-serif text-d-2 md:text-d-3 text-balance max-w-3xl" style={{ fontWeight: 400 }}>
          Lo que buscas <span className="italic">no existe</span> en este despacho.
        </h1>
        <p className="mt-6 font-serif text-lg md:text-xl text-bone/70 max-w-prose mx-auto">
          O el caso aún no tiene nombre. En cualquier caso, podemos atenderlo.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-10 bg-bone text-forest font-mono text-[11px] uppercase tracking-[0.22em] rounded-full px-5 py-3 hover:bg-ember transition-colors duration-500"
        >
          ← Volver al despacho
        </Link>
      </div>
    </main>
  );
}
