import Mark, { Wordmark } from "./Mark";

export default function Footer() {
  return (
    <footer
      data-surface="light"
      className="relative bg-bone text-ink pt-24 md:pt-32 pb-10 overflow-hidden"
    >
      <div className="px-6 md:px-10 lg:px-14">
        <div className="hairline-t border-ink/20 pt-12">
          <div className="grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-6">
              <div className="flex items-center gap-4">
                <Mark size={56} thin />
                <Wordmark className="text-2xl md:text-3xl" />
              </div>
              <p className="mt-6 max-w-[42ch] font-serif italic text-ink-soft text-lg leading-snug">
                Derecho diseñado para la próxima década, ejecutado con el rigor
                del que está antes.
              </p>
            </div>

            <div className="col-span-6 md:col-span-3 mt-10 md:mt-0">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute mb-4">
                Práctica
              </p>
              <ul className="space-y-2 font-sans text-sm text-ink-soft">
                <li><a href="#practica" className="hover:text-ink transition-colors">Web3 · Blockchain</a></li>
                <li><a href="#practica" className="hover:text-ink transition-colors">IA & Derechos Digitales</a></li>
                <li><a href="#practica" className="hover:text-ink transition-colors">FinTech & Pagos</a></li>
                <li><a href="#practica" className="hover:text-ink transition-colors">Economía de Creadores</a></li>
                <li><a href="#practica" className="hover:text-ink transition-colors">Privacidad & Datos</a></li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-3 mt-10 md:mt-0">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute mb-4">
                Despacho
              </p>
              <ul className="space-y-2 font-sans text-sm text-ink-soft">
                <li><a href="#manifiesto" className="hover:text-ink transition-colors">Manifiesto</a></li>
                <li><a href="#despacho" className="hover:text-ink transition-colors">Conducción</a></li>
                <li><a href="#capacidades" className="hover:text-ink transition-colors">Capacidades</a></li>
                <li><a href="#dialogo" className="hover:text-ink transition-colors">Diálogo</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-12 gap-6 items-end pb-2">
            <div className="col-span-12 md:col-span-6 font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute">
              © MMXXV — Delva &amp; Asociados · LegalTech Innovation
            </div>
            <div className="col-span-12 md:col-span-6 md:text-right font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute">
              Guadalajara · Jalisco · México
            </div>
          </div>

          <div className="relative mt-12 md:mt-20 -mb-6 md:-mb-12 overflow-hidden">
            <p
              className="font-serif optical-display leading-[0.85] text-ink select-none"
              style={{
                fontSize: "clamp(5rem, 22vw, 22rem)",
                fontWeight: 300,
                letterSpacing: "-0.045em",
                whiteSpace: "nowrap"
              }}
            >
              Delva <span className="italic font-normal">&amp;</span> Asociados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
