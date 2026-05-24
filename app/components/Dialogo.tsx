const canales = [
  {
    k: "Correo",
    v: "emmanueldelva@gmail.com",
    href: "mailto:emmanueldelva@gmail.com?subject=Diálogo%20—%20Delva%20%26%20Asociados",
    n: "01"
  },
  {
    k: "WhatsApp",
    v: "+52 33 1213 6004",
    href: "https://wa.me/523312136004?text=Hola%20Lic.%20Delva%2C%20quisiera%20agendar%20un%20diálogo.",
    n: "02"
  },
  {
    k: "Agenda",
    v: "Reservar 30 min",
    href: "https://calendar.google.com/calendar/u/0/r/eventedit?text=Dialogo+Delva+%26+Asociados",
    n: "03"
  },
  {
    k: "Sede",
    v: "Guadalajara, Jalisco · México",
    href: null,
    n: "04"
  }
];

export default function Dialogo() {
  return (
    <section
      id="dialogo"
      data-surface="dark"
      className="relative bg-forest text-bone py-32 md:py-44 overflow-hidden grain"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-[80vmin] h-[80vmin] rounded-full opacity-[0.12] blur-[160px]"
          style={{ background: "oklch(0.715 0.155 55)" }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-bone/55 reveal-init">
              § V / Diálogo
            </p>
          </div>
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <h2
              className="font-serif optical-display text-display-md md:text-display-lg text-balance reveal-init"
              style={{ fontWeight: 300, letterSpacing: "-0.04em" }}
            >
              El primer{" "}
              <span className="italic" style={{ fontWeight: 400 }}>
                diálogo
              </span>{" "}
              no se cobra.
            </h2>
            <p className="mt-8 max-w-[52ch] font-serif text-lg md:text-xl text-bone/75 leading-relaxed optical-text reveal-init">
              Treinta minutos para entender el caso, decir lo que vemos, sugerir
              próximos pasos y, sólo si tiene sentido para ambas partes, abrir
              expediente.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <ul className="border-t border-bone/15">
              {canales.map((c, i) => {
                const inner = (
                  <div className="grid grid-cols-12 gap-4 py-7 md:py-9 items-baseline">
                    <div className="col-span-2 md:col-span-1">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-bone/55">
                        {c.n}
                      </span>
                    </div>
                    <div className="col-span-10 md:col-span-3">
                      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/55">
                        {c.k}
                      </span>
                    </div>
                    <div className="col-span-12 md:col-span-7 md:col-start-5">
                      <span
                        className="font-serif text-2xl md:text-4xl"
                        style={{ fontWeight: 300, fontFeatureSettings: '"ss01"' }}
                      >
                        {c.v}
                      </span>
                    </div>
                    {c.href && (
                      <div className="col-span-1 hidden md:flex md:justify-end text-bone/45 group-hover:text-ember transition-colors duration-500">
                        <span aria-hidden className="text-2xl font-serif italic transition-transform duration-500 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    )}
                  </div>
                );
                return (
                  <li
                    key={c.n}
                    className="border-b border-bone/15 reveal-init"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group block transition-colors duration-500 hover:bg-forest-soft px-2 md:px-4 -mx-2 md:-mx-4"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="px-2 md:px-4 -mx-2 md:-mx-4">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-24 md:mt-32">
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <p className="font-serif italic text-xl md:text-2xl text-bone/65 max-w-[44ch] reveal-init">
              &ldquo;Not your keys, not your coins. Not your lawyer, not your
              protection.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
