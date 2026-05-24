const areas = [
  {
    n: "01",
    title: "Web3, Blockchain & Tokenización",
    body: "Smart contracts, DAOs, NFTs, regulación DeFi, estructuración cross-border, compliance VASP.",
    tags: ["DAOs", "Smart contracts", "Cross-border"]
  },
  {
    n: "02",
    title: "Inteligencia Artificial & Derechos Digitales",
    body: "Autoría de contenido generado por IA, deepfakes, licenciamiento de modelos, responsabilidad algorítmica.",
    tags: ["AI Act", "Deepfakes", "Licencias"]
  },
  {
    n: "03",
    title: "FinTech & Pagos Digitales",
    body: "Pasarelas, wallets, stablecoins, Ley Fintech CNBV, neobancos, on/off-ramps cripto-fiat.",
    tags: ["CNBV", "Wallets", "Stablecoins"]
  },
  {
    n: "04",
    title: "Economía de Creadores",
    body: "Estructura corporativa para creators, contratos de marca, derechos de imagen, monetización transfronteriza.",
    tags: ["OnlyFans", "Patreon", "Brand deals"]
  },
  {
    n: "05",
    title: "Propiedad Intelectual Digital",
    body: "Registro de marca, derecho de autor, marca multimedia, licencias, defensa de portafolios digitales.",
    tags: ["IMPI", "Madrid", "Multimedia"]
  },
  {
    n: "06",
    title: "Privacidad & Protección de Datos",
    body: "LFPDPPP, GDPR, LGPD, programas de ciberseguridad, auditoría de DPAs, gestión de incidentes.",
    tags: ["GDPR", "INAI", "Incidentes"]
  },
  {
    n: "07",
    title: "Gaming, Metaverso & XR",
    body: "Propiedad virtual (Decentraland, Sandbox), economías in-game, NFTs wearables, AR commerce.",
    tags: ["Metaverso", "XR", "In-game"]
  },
  {
    n: "08",
    title: "E-commerce & Marketplaces",
    body: "Términos, políticas, compliance plataforma, disputa de fees, modelos peer-to-peer.",
    tags: ["T&C", "Compliance", "P2P"]
  },
  {
    n: "09",
    title: "Internacional & Nómadas Digitales",
    body: "Residencia, trabajo remoto multi-jurisdicción, optimización fiscal lícita, visados de talento.",
    tags: ["Residencia", "Talent visa", "Multi-juris"]
  }
];

export default function Practica() {
  return (
    <section
      id="practica"
      data-surface="light"
      className="relative bg-bone text-ink py-32 md:py-44 overflow-hidden"
    >
      <div className="px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute reveal-init">
              § II / Práctica
            </p>
          </div>
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <h2
              className="font-serif optical-display text-display-sm md:text-display-md text-balance reveal-init"
              style={{ fontWeight: 300 }}
            >
              Nueve áreas. Una sola{" "}
              <span className="italic" style={{ fontWeight: 400 }}>
                hipótesis
              </span>
              : el riesgo legal contemporáneo es técnico.
            </h2>
          </div>
        </div>

        <ol className="border-t border-ink/15">
          {areas.map((a, i) => (
            <li
              key={a.n}
              className="group hairline-b border-ink/15 reveal-init"
              style={{ transitionDelay: `${Math.min(i * 60, 540)}ms` }}
            >
              <div className="grid grid-cols-12 gap-4 md:gap-6 py-7 md:py-10 items-baseline transition-colors duration-500 hover:bg-bone-soft px-2 md:px-4 -mx-2 md:-mx-4">
                <div className="col-span-2 md:col-span-1">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink-mute">
                    {a.n}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-6">
                  <h3
                    className="font-serif text-2xl md:text-[2.4rem] leading-[1.05] tracking-tight"
                    style={{ fontWeight: 400 }}
                  >
                    {a.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-4 md:col-start-8 mt-3 md:mt-0">
                  <p className="font-sans text-[0.95rem] md:text-base leading-relaxed text-ink-soft max-w-[42ch]">
                    {a.body}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {a.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-widest text-ink-mute border border-ink/15 rounded-full px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-span-1 md:col-span-1 md:col-start-12 hidden md:flex md:justify-end items-center text-ink/35 group-hover:text-ember transition-colors duration-500">
                  <span aria-hidden className="text-2xl font-serif italic translate-y-[-2px] transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="grid grid-cols-12 gap-6 mt-16 md:mt-24">
          <div className="col-span-12 md:col-span-6 md:col-start-4">
            <p className="font-serif italic text-xl md:text-2xl text-ink-soft text-balance reveal-init">
              ¿Tu caso no encaja en una sola línea? Eso es lo esperable. La mayoría
              de los proyectos contemporáneos cruzan tres o cuatro áreas a la vez.
            </p>
            <a
              href="#dialogo"
              className="inline-flex items-center gap-3 mt-6 font-mono text-[11px] uppercase tracking-widest border border-ink/40 rounded-full px-5 py-3 hover:bg-ink hover:text-bone transition-colors duration-500 group reveal-init"
            >
              Plantear el caso
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
