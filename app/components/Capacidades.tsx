import Marquee from "./Marquee";

const jurisdicciones = [
  "México",
  "Estados Unidos",
  "Suiza",
  "Singapur",
  "El Salvador",
  "Unión Europea",
  "Reino Unido",
  "Brasil",
  "Colombia",
  "Panamá"
];

const idiomas = [
  { code: "ES", label: "Español", level: "Nativo" },
  { code: "EN", label: "Inglés", level: "Profesional" },
  { code: "PT", label: "Portugués", level: "Profesional" },
  { code: "FR", label: "Francés", level: "Trabajo" }
];

const stack = [
  { k: "Solidity / EVM", v: "Auditoría legal de smart contracts" },
  { k: "ERC-721 · ERC-1155", v: "NFTs y propiedad digital" },
  { k: "DAO frameworks", v: "Aragon, Snapshot, Safe" },
  { k: "DeFi protocols", v: "DEX, lending, RWA" },
  { k: "Stablecoins · CBDC", v: "USDC, DAI, MXNB, ARS" },
  { k: "LLM stack", v: "OpenAI, Anthropic, Mistral" },
  { k: "Generative IP", v: "Stable Diffusion, Midjourney, Sora" },
  { k: "Compliance frameworks", v: "GDPR, LFPDPPP, AI Act, CNBV" }
];

export default function Capacidades() {
  return (
    <section
      id="capacidades"
      data-surface="dark"
      className="relative bg-forest text-bone py-32 md:py-44 overflow-hidden grain"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80vmin] h-[80vmin] rounded-full opacity-[0.07] blur-[140px]"
          style={{ background: "oklch(0.345 0.080 150)" }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-bone/55 reveal-init">
              § III / Capacidades
            </p>
          </div>
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <h2
              className="font-serif optical-display text-display-sm md:text-display-md text-balance reveal-init"
              style={{ fontWeight: 300 }}
            >
              Donde el{" "}
              <span className="italic" style={{ fontWeight: 400 }}>
                código
              </span>{" "}
              alcanza a la regla, llegamos antes.
            </h2>
            <p className="mt-8 font-serif italic text-bone/70 text-lg md:text-xl max-w-[52ch] reveal-init">
              Trabajamos con la misma fluidez en una sala de tribunal y en un
              repositorio. Lo que sigue es el inventario honesto de lo que
              dominamos.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 my-16 md:my-24 border-y border-bone/15 py-6 overflow-hidden">
        <Marquee items={jurisdicciones} />
      </div>

      <div className="relative z-10 px-6 md:px-10 lg:px-14 mt-20 md:mt-28">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-bone/55 reveal-init">
              Stack jurídico-técnico
            </p>
          </div>
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
              {stack.map((s, i) => (
                <li
                  key={s.k}
                  className="flex items-baseline justify-between gap-6 py-5 border-t border-bone/12 font-mono text-[12.5px] reveal-init"
                  style={{ transitionDelay: `${Math.min(i * 50, 400)}ms` }}
                >
                  <span className="text-bone uppercase tracking-[0.16em]">
                    {s.k}
                  </span>
                  <span className="text-bone/55 text-right normal-case">
                    {s.v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 md:px-10 lg:px-14 mt-24 md:mt-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-bone/55 reveal-init">
              Idiomas
            </p>
          </div>
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {idiomas.map((i) => (
                <li key={i.code} className="reveal-init">
                  <p className="font-serif text-5xl md:text-6xl" style={{ fontWeight: 300 }}>
                    {i.code}
                  </p>
                  <p className="font-sans text-sm text-bone/80 mt-2">{i.label}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-bone/45 mt-1">
                    {i.level}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
