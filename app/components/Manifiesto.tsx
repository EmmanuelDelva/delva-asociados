export default function Manifiesto() {
  return (
    <section
      id="manifiesto"
      data-surface="light"
      className="relative bg-bone text-ink py-32 md:py-48 lg:py-56 overflow-hidden"
    >
      <div className="px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute reveal-init">
              § I / Manifiesto
            </p>
          </div>

          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <h2 className="font-serif optical-display text-display-sm md:text-display-md leading-[0.95] tracking-tightest text-balance reveal-init"
                style={{ fontWeight: 300 }}>
              El derecho{" "}
              <span className="italic" style={{ fontWeight: 400 }}>llega tarde</span>{" "}
              a casi todo lo nuevo. Y cuando llega, lo hace mal.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-20 md:mt-32">
          <div className="col-span-12 md:col-span-6 md:col-start-4">
            <div className="space-y-7 font-serif text-[1.15rem] md:text-[1.28rem] leading-[1.55] text-ink-soft optical-text reveal-init">
              <p>
                Llega con vocabulario prestado de una economía que ya no existe,
                con jueces sin contexto técnico, y con reglas escritas para un
                contrato firmado en papel por dos personas en la misma sala.
              </p>
              <p>
                Tu contrato lo escribió un algoritmo. Tu marca vive en plataformas
                que cambian sus términos cada trimestre. Tu ingreso cruza tres
                jurisdicciones antes del desayuno. Tu propiedad puede ser un{" "}
                <span className="italic">token</span> que solo existe porque la
                red lo acuerda.
              </p>
              <p className="text-ink">
                Construimos un despacho para esa realidad. No un despacho
                tradicional con un departamento digital. Un despacho cuya práctica
                nació en y para la economía digital, y que conoce el código que
                te exigen firmar.
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-2 md:col-start-11 mt-12 md:mt-0">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute md:text-right reveal-init">
              <p className="mb-2">Lectura</p>
              <p className="text-ink/80">2 min</p>
              <div className="mt-6 md:ml-auto h-px w-12 bg-ink-mute" />
              <p className="mt-6 italic font-serif normal-case tracking-normal text-[14px] text-ink/70 leading-snug">
                &ldquo;Not your keys, not your coins.
                <br />
                Not your lawyer, not your protection.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

