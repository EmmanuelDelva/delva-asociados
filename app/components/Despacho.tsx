const credenciales = [
  { k: "SNII", v: "Nivel I — Secihti" },
  { k: "Filiación", v: "CUCEA · Universidad de Guadalajara" },
  { k: "Investigación", v: "Cuerpo Académico UDEGCA-1236" },
  { k: "Foro", v: "Foro Internacional de Derecho y Tecnología" },
  { k: "Doctorado", v: "Derecho · IPIDT" },
  { k: "Idiomas docentes", v: "ES · EN · FR" }
];

export default function Despacho() {
  return (
    <section
      id="despacho"
      data-surface="light"
      className="relative bg-bone text-ink py-32 md:py-48 overflow-hidden"
    >
      <div className="px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute reveal-init">
              § IV / Despacho
            </p>
          </div>
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <h2
              className="font-serif optical-display text-display-sm md:text-display-md text-balance reveal-init"
              style={{ fontWeight: 300 }}
            >
              Conducción.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-4 md:col-start-1">
            <div className="relative aspect-[3/4] w-full max-w-[360px] reveal-init">
              <div className="absolute inset-0 bg-forest" />
              <div className="absolute inset-0 grain opacity-50" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-bone">
                <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-bone/70">
                  <span>Conducción</span>
                  <span>JEDB · MMXXV</span>
                </div>
                <div>
                  <p
                    className="font-serif italic leading-none"
                    style={{ fontSize: "min(28vw, 9rem)", fontWeight: 300, fontFeatureSettings: '"ss01"' }}
                  >
                    ED
                  </p>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-bone/70">
                    Juan E. Delva Benavides
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone/50">
                    Socio fundador
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <div className="space-y-6 font-serif text-[1.15rem] md:text-[1.25rem] leading-[1.6] text-ink-soft optical-text reveal-init">
              <p>
                <span className="font-medium text-ink">Juan Emmanuel Delva Benavides</span>{" "}
                es doctorando en derecho, investigador SNII Nivel I (Secihti) y
                profesor en el CUCEA de la Universidad de Guadalajara. Lleva una
                década en la intersección entre derecho, código y mercado:
                publica en revistas indexadas sobre IA, blockchain y FinTech;
                dirige el Foro Internacional de Derecho y Tecnología; y ejerce
                asesoría privada para clientes en cinco jurisdicciones.
              </p>
              <p>
                Su práctica combina dos disciplinas que rara vez conviven en una
                misma carrera: el rigor del jurista académico y la velocidad del
                operador en producto. Conoce los mecanismos formales del derecho
                mexicano y europeo, y también el ritmo real de un lanzamiento de
                token, una ronda de seed o el cierre de un trato con marca.
              </p>
              <p className="text-ink">
                Cada caso atendido por el despacho pasa por su mesa antes y
                después. No por trámite, sino por convicción.
              </p>
            </div>

            <dl className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0 border-t border-ink/15">
              {credenciales.map((c, i) => (
                <div
                  key={c.k}
                  className="flex items-baseline justify-between gap-6 py-4 border-b border-ink/15 font-mono text-[12px] reveal-init"
                  style={{ transitionDelay: `${Math.min(i * 50, 400)}ms` }}
                >
                  <dt className="uppercase tracking-[0.16em] text-ink-mute">{c.k}</dt>
                  <dd className="text-ink text-right normal-case">{c.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
