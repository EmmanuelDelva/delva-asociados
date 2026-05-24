import type { Locale } from "../i18n/dict";

export type SceneType =
  | "vault"
  | "face"
  | "broken-chain"
  | "network"
  | "regulation"
  | "marketplace"
  | "shield"
  | "world"
  | "browser"
  | "robot"
  | "globe"
  | "trophy"
  | "scroll"
  | "scale"
  | "estate"
  | "wallet";

export type ProblematicaContent = {
  title: string;
  hook: string;
  examples: string[];
  consequence?: string;
  solution: string[];
};

export type Problematica = {
  id: string;
  scene: SceneType;
  i18n: Partial<Record<Locale, ProblematicaContent>>;
};

export type AreaContent = {
  title: string;
  short: string;
  intro: string;
};

export type Area = {
  slug: string;
  num: string;
  accent: "ember" | "forest" | "gold";
  avatar?: "biblioteca" | "portrait" | "mxoffice" | "crypto" | "tmec";
  i18n: Partial<Record<Locale, AreaContent>>;
  problematicas: Problematica[];
};

export function getAreaContent(a: Area, locale: Locale): AreaContent {
  return a.i18n[locale] ?? a.i18n.es!;
}

export function getProblematicaContent(p: Problematica, locale: Locale): ProblematicaContent {
  return p.i18n[locale] ?? p.i18n.es!;
}

const ES = "es" as const;
const EN = "en" as const;
const FR = "fr" as const;

export const areas: Area[] = [
  {
    slug: "web3-cripto",
    num: "01",
    accent: "ember",
    avatar: "crypto",
    i18n: {
      [ES]: {
        title: "Web3, Cripto y Tokenización",
        short: "Tokens, DAOs y smart contracts con cobertura legal real.",
        intro: "Desde una idea de token hasta una respuesta a la CNBV. Trabajamos con fundadores, fondos, DAOs y plataformas en la frontera donde el código se encuentra con la regulación."
      },
      [EN]: {
        title: "Web3, Crypto & Tokenization",
        short: "Tokens, DAOs and smart contracts with real legal coverage.",
        intro: "From a token idea to a CNBV response. We work with founders, funds, DAOs and platforms at the border where code meets regulation."
      },
      [FR]: {
        title: "Web3, Crypto et Tokenisation",
        short: "Jetons, DAO et smart contracts avec une couverture juridique réelle.",
        intro: "D'une idée de jeton à une réponse à la CNBV."
      }
    },
    problematicas: [
      {
        id: "lanzamiento-token",
        scene: "network",
        i18n: {
          [ES]: {
            title: "Quieres lanzar un token y no sabes si es security",
            hook: "Tres jurisdicciones, dos legislaciones, una ronda al borde.",
            examples: [
              "Eres un equipo de cuatro fundadores en Guadalajara que va a lanzar un token utilitario para su app. Tu inversionista en Estados Unidos pide opinión de no-security antes de firmar el SAFT.",
              "Tu protocolo DeFi quiere abrir liquidez al público latinoamericano y necesitas saber qué países te demandarían y cuáles no.",
              "Vas a hacer un airdrop a tu comunidad y no sabes si eso te convierte en oferente público de valores."
            ],
            consequence: "Sin opinión clara, el inversionista no firma. Con una mala estructura, te demandan en Delaware con el primer usuario molesto.",
            solution: [
              "Análisis Howey/Reves del token específico.",
              "Estructura corporativa multi-juris (foundation Suiza, LLC Wyoming, asociación civil MX).",
              "Opinión legal de no-security firmada.",
              "Plan de distribución y airdrop con compliance proactivo."
            ]
          },
          [EN]: {
            title: "You want to launch a token and don't know if it's a security",
            hook: "Three jurisdictions, two legislations, a round on the edge.",
            examples: [
              "Four founders in Guadalajara are launching a utility token. Your US investor demands a no-securities opinion before signing the SAFT.",
              "Your DeFi protocol wants to open liquidity to a Latin American audience and you need to know who would sue.",
              "You're running an airdrop and you don't know if that turns you into a public securities offeror."
            ],
            consequence: "Without a clear opinion, the investor won't sign. With a bad structure, you get sued in Delaware on the first angry user.",
            solution: [
              "Howey/Reves analysis on the specific token.",
              "Multi-juris corporate structure (Swiss foundation, Wyoming LLC, MX asociación civil).",
              "Signed no-security legal opinion.",
              "Distribution and airdrop plan with proactive compliance."
            ]
          }
        }
      },
      {
        id: "dao-personalidad",
        scene: "scroll",
        i18n: {
          [ES]: {
            title: "Tu DAO necesita firmar contratos y abrir cuentas",
            hook: "La red gobierna, pero alguien tiene que poder ir a tribunales.",
            examples: [
              "Tu DAO ya tiene tesorería en USDC pero ningún proveedor acepta facturarte porque no tienes RFC ni cuenta bancaria.",
              "Un colaborador desapareció con fondos y no sabes contra quién litigar — la DAO no es persona jurídica.",
              "Quieres contratar un desarrollador de tiempo completo y no puedes ofrecer contrato laboral."
            ],
            consequence: "Sin personalidad jurídica, tu DAO no puede ni cobrar IVA acreditable ni demandar al que se llevó el dinero.",
            solution: [
              "Vehículo legal por encima del protocolo (Swiss foundation, Wyoming DAO LLC, Cayman foundation).",
              "Estatutos espejo de la gobernanza on-chain.",
              "Setup operativo: bancos, contabilidad, contratos laborales.",
              "Plan de gestión de tesorería y reportes."
            ]
          }
        }
      },
      {
        id: "smart-contract-bug",
        scene: "network",
        i18n: {
          [ES]: {
            title: "Tu smart contract tuvo un bug y un usuario perdió dinero",
            hook: "Cuando el código falla, el código fuente no es eximente.",
            examples: [
              "Hubo un exploit en tu pool y un usuario perdió 80 mil USDC. Te exige reembolso aunque tus T&C dicen 'use at your own risk'.",
              "Tu oráculo falló y liquidaste posiciones que no debían liquidarse. Cinco usuarios te demandan en clase.",
              "Un fork no autorizado de tu contrato está estafando gente y te están atribuyendo la culpa."
            ],
            consequence: "Sin estrategia rápida, los reclamos escalan. Un usuario en EEUU puede convertir esto en class action.",
            solution: [
              "Defensa contractual y deslinde técnico-legal.",
              "Plan de comunicación pública (post-mortem técnico calibrado).",
              "Gestión escalonada de reclamos.",
              "Auditoría retrospectiva y blindaje futuro."
            ]
          }
        }
      },
      {
        id: "vasp-regulador",
        scene: "regulation",
        i18n: {
          [ES]: {
            title: "La CNBV o el regulador te identificó como VASP",
            hook: "Te llegó un oficio. Tienes 15 días.",
            examples: [
              "Tu exchange cripto opera en México sin licencia y recibiste oficio CNBV.",
              "Tu wallet custodial supera los umbrales y ahora aplica Ley Antilavado.",
              "Tu plataforma facilita compras de NFT con tarjeta y eso te puso en el radar de la UIF."
            ],
            consequence: "Una respuesta floja te lleva a multa millonaria o cierre operativo. Una respuesta sólida puede llevarte a regularización sin sanción.",
            solution: [
              "Análisis y respuesta formal en plazo.",
              "Plan de regularización (registro IFPE/ITF o estructura alternativa).",
              "Programa AML/KYC proporcional.",
              "Defensa en procedimiento sancionador si ya inició."
            ]
          }
        }
      },
      {
        id: "tokenizacion-rwa",
        scene: "vault",
        i18n: {
          [ES]: {
            title: "Quieres tokenizar un activo real (inmueble, arte, fondo)",
            hook: "El activo es físico. El comprobante es un token. Y entre ambos vive el derecho.",
            examples: [
              "Tu fondo quiere tokenizar una cartera inmobiliaria de 40 millones MXN para hacerla fraccionable.",
              "Una galería quiere fraccionar un cuadro en NFTs con derechos económicos pero no de uso.",
              "Un agricultor quiere financiar su cosecha tokenizando contratos forward."
            ],
            consequence: "Sin marco legal sólido, el token es bonito pero no es nada — y el comprador no puede ejecutar lo que cree haber comprado.",
            solution: [
              "Diseño legal-financiero de la tokenización.",
              "Vehículo SPV con respaldo registral o fiduciario.",
              "Smart contract de gobernanza y derechos.",
              "Plan de cumplimiento bursátil cuando aplica."
            ]
          }
        }
      },
      {
        id: "mica-cumplimiento",
        scene: "regulation",
        i18n: {
          [ES]: {
            title: "Tu proyecto cripto opera en Europa y aplica MiCA",
            hook: "Si tu mercado es europeo, MiCA es tu nuevo lenguaje.",
            examples: [
              "Tu exchange con sede en EEUU quiere abrir en España, Alemania y Países Bajos.",
              "Emites una stablecoin que se distribuye en la UE y necesitas CASP autorizado.",
              "Tu wallet no-custodial empieza a hacer features custodiales y MiCA aplica."
            ],
            consequence: "Sin licencia CASP, no puedes ofrecer servicios cripto a residentes UE legalmente desde 2025.",
            solution: [
              "Análisis de aplicabilidad MiCA por servicio.",
              "Estructura de entidad europea y licencia CASP.",
              "Whitepaper conforme + reportes de transparencia.",
              "Coordinación con autoridades nacionales (CNMV, BaFin, AFM)."
            ]
          }
        }
      }
    ]
  },
  {
    slug: "herencia-digital",
    num: "02",
    accent: "gold",
    avatar: "biblioteca",
    i18n: {
      [ES]: {
        title: "Herencia y Testamento Digital",
        short: "Tu vida digital también se hereda. La planeamos antes y la rescatamos después.",
        intro: "Bitcoin, cuentas de redes, dominios, fotos en la nube, suscripciones, propiedad virtual. Todo eso es patrimonio. Y rara vez está en un testamento."
      },
      [EN]: {
        title: "Digital Inheritance & Will",
        short: "Your digital life is also inherited. We plan it beforehand and rescue it after.",
        intro: "Bitcoin, social accounts, domains, cloud photos, subscriptions, virtual property. All of that is estate. And it's rarely in a will."
      }
    },
    problematicas: [
      {
        id: "papa-fallecio-cripto",
        scene: "estate",
        i18n: {
          [ES]: {
            title: "Mi papá falleció y dejó cripto, cuentas y fotos. No podemos entrar a nada.",
            hook: "Las claves murieron con él. Ahora viene la parte legal — y la emocional.",
            examples: [
              "Tu papá tenía Bitcoin en un exchange y nadie en la familia sabe qué exchange ni qué correo usaba. Vieron transacciones en sus extractos bancarios.",
              "Encontraron en su escritorio un papel con palabras separadas que parecen ser una seed phrase, pero falta una y no saben cuál wallet.",
              "Hay un iPad con Face ID que tenía todos los recuerdos de los últimos años y nadie lo puede desbloquear.",
              "Su Instagram tiene fotos de la familia que ya no existen en ningún otro lado, y Meta no responde a las solicitudes de la viuda."
            ],
            consequence: "Cada día que pasa sin acción legal formal reduce las opciones. Los exchanges archivan KYC. Las claves se confunden. La familia se desgasta.",
            solution: [
              "Investigación forense de claves y wallets a partir de evidencia parcial.",
              "Acreditación sucesoria internacional (México + jurisdicción del exchange).",
              "Gestión con exchanges para liberación de fondos a herederos.",
              "Solicitudes formales a Meta, Google, Apple para acceso a cuentas y memorialization.",
              "Cuando aplique, recuperación judicial."
            ]
          }
        }
      },
      {
        id: "planear-ahora-no-anciano",
        scene: "vault",
        i18n: {
          [ES]: {
            title: "No quiero esperar a viejo. Quiero dejar todo en orden ahora.",
            hook: "Tienes 35 años, una wallet seria, dos hijos. Si mañana no estás, ¿qué pasa?",
            examples: [
              "Tienes 300 mil USD en una Ledger y dos hijos menores. Quieres que reciban su parte cuando cumplan 25, no antes.",
              "Tu pareja no sabe nada de cripto y tú no quieres dejarle una carga técnica si te pasa algo.",
              "Tu negocio digital factura medio millón al mes desde un correo personal. Si te enfermas dos meses, se cae.",
              "Tienes cuentas de redes con cientos de miles de seguidores que son patrimonio real."
            ],
            consequence: "Sin instrumentos modernos, ese patrimonio o se pierde, o termina en un proceso judicial doloroso para tu familia.",
            solution: [
              "Testamento digital con anexo técnico custodiado.",
              "Estructura de multi-firma con liberación condicional verificable.",
              "Fideicomiso de operación para activos digitales productivos.",
              "Plan de transición operativa para negocios digitales.",
              "Instrucciones notariales coordinadas con custodios técnicos."
            ]
          }
        }
      },
      {
        id: "negocio-digital-sucesion",
        scene: "estate",
        i18n: {
          [ES]: {
            title: "Mi negocio digital depende de mí. ¿Qué pasa si no estoy?",
            hook: "Tu canal, tu tienda, tu agencia: todo eso vale mucho. Si depende de un correo personal, vale cero el día que falles.",
            examples: [
              "Eres creador con 800 mil seguidores y un equipo de 5 personas que dependen del income.",
              "Tu tienda de Shopify factura medio millón al mes desde tu correo personal y tu MFA.",
              "Tu agencia tiene contratos firmados a tu nombre, no a una sociedad.",
              "Tu portafolio cripto está disperso en seis exchanges y tres wallets."
            ],
            consequence: "Sin estructura, tu equipo queda en limbo, tus clientes sin proveedor, tu familia sin acceso al patrimonio que generaste.",
            solution: [
              "Estructura corporativa que sobreviva al fundador.",
              "Sucesión documentada con poderes de continuidad.",
              "Vault operativo con accesos críticos custodiados.",
              "Plan de continuidad ejecutable en 48 horas."
            ]
          }
        }
      },
      {
        id: "cuentas-redes-fallecido",
        scene: "broken-chain",
        i18n: {
          [ES]: {
            title: "Recuperar las cuentas y memorias de un familiar fallecido",
            hook: "Facebook no responde. El correo bloqueado. Las fotos atrapadas adentro.",
            examples: [
              "Quieres recuperar el Instagram de tu hermana fallecida con fotos irrepetibles y memorializarla con dignidad.",
              "Tu mamá tenía un PayPal con saldo y los hijos no pueden retirarlo.",
              "Un familiar dejó su iCloud sin contraseña y ahí están todos los documentos importantes.",
              "Un suplantador está usando la cuenta de tu padre fallecido."
            ],
            consequence: "Las plataformas responden por procedimiento. Sin la documentación correcta, te tardan meses — o nunca responden.",
            solution: [
              "Solicitudes formales a Meta, Google, Apple, X con paquete legal certificado.",
              "Acta sucesoria internacional cuando aplique.",
              "Memorialization o cierre digno de cuentas.",
              "Defensa de derecho post-mortem a la imagen y memoria."
            ]
          }
        }
      },
      {
        id: "wallet-multifirma-familia",
        scene: "vault",
        i18n: {
          [ES]: {
            title: "Quiero que mi familia pueda acceder a la cripto solo bajo ciertas condiciones",
            hook: "Ni en vida con acceso total. Ni en muerte sin acceso ninguno. Algo en medio, escrito.",
            examples: [
              "Quieres que tu esposa reciba acceso solo si te pasa algo, sin que pueda usarlo en vida.",
              "Quieres que tus hijos reciban su parte cuando cumplan 25, no antes.",
              "Quieres un mecanismo que se active si no respondes en 90 días, sin testamento clásico."
            ],
            consequence: "Las soluciones DIY (papel en caja fuerte, una sola seed compartida) son las que más fallan en el momento crítico.",
            solution: [
              "Custodia jurídica multi-firma profesional.",
              "Dead-man switch con verificación periódica.",
              "Liberación condicional verificable (cumpleaños, eventos, autoridad).",
              "Instrucciones notariales sincronizadas con el setup técnico."
            ]
          }
        }
      },
      {
        id: "saldos-atrapados",
        scene: "wallet",
        i18n: {
          [ES]: {
            title: "Hay saldos atrapados en PayPal, Mercado Libre, exchanges, plataformas",
            hook: "El dinero está. Pero alguien decidió que no es tuyo hasta probar lo contrario.",
            examples: [
              "PayPal congeló 4 mil USD de un familiar fallecido y pide documentación imposible.",
              "Un creador difunto dejó saldo en su cuenta de YouTube que la familia no puede retirar.",
              "Una herencia incluye una cuenta de Binance bloqueada por KYC vencido."
            ],
            consequence: "La plataforma esperará para siempre. Tú no.",
            solution: [
              "Paquete legal específico por plataforma.",
              "Negociación documental y técnica con cumplimiento KYC póstumo.",
              "Escalado a regulador cuando aplique.",
              "Recuperación judicial como último recurso."
            ]
          }
        }
      }
    ]
  },
  {
    slug: "redes-reputacion",
    num: "03",
    accent: "ember",
    avatar: "portrait",
    i18n: {
      [ES]: {
        title: "Redes Sociales y Reputación Digital",
        short: "Cuentas robadas, deepfakes, suplantación y limpieza de reputación.",
        intro: "Tu cuenta con miles de seguidores es patrimonio. Tu rostro circula sin tu permiso. Una nota antigua te persigue. Esto también se resuelve."
      }
    },
    problematicas: [
      {
        id: "cuenta-robada-seguidores",
        scene: "broken-chain",
        i18n: {
          [ES]: {
            title: "Me robaron la cuenta de Instagram / TikTok con miles de seguidores",
            hook: "Tu cuenta es patrimonio. Cuando la roban, no se pierde solo el acceso — se pierde el negocio.",
            examples: [
              "Phishing y ahora un tercero usa tu cuenta con 80 mil seguidores para vender estafas.",
              "Tu cuenta de YouTube con 250k subs fue tomada y monetiza contenido cripto fraudulento.",
              "Tu IG profesional fue clonado en una cuenta hermana con tus mismas fotos y nombre similar."
            ],
            consequence: "Cada día perdido es reputación destruida, audiencia migrada, monetización perdida.",
            solution: [
              "Reporte urgente y escalado a contactos directos en Meta, TikTok, Google.",
              "Paquete legal de propiedad de la cuenta (registros, posts originales, métricas históricas).",
              "Negociación con el atacante cuando hay vía.",
              "Acción civil y penal por suplantación y daño patrimonial.",
              "Comunicación pública para preservar reputación durante la recuperación."
            ]
          }
        }
      },
      {
        id: "deepfake-takedown",
        scene: "face",
        i18n: {
          [ES]: {
            title: "Hicieron un deepfake conmigo y necesito que baje YA",
            hook: "Necesitas que ese video desaparezca antes del lunes. Lo entendemos.",
            examples: [
              "Apareciste en un video porno deepfake circulando en WhatsApp y un compañero de trabajo lo vio.",
              "Una pareja ex publica audios falsos tuyos clonados con IA en redes sociales.",
              "Una empresa usó tu rostro en publicidad sin tu consentimiento, generada por IA.",
              "Un creador de contenido te clonó la voz y usa tu nombre para vender cursos."
            ],
            consequence: "Mientras más rápido, mejor. Los videos virales tardan días en bajarse. Tu reputación tarda meses en recuperarse.",
            solution: [
              "Takedown urgente plataforma por plataforma con paquete técnico de evidencia.",
              "Denuncia ante INAI, FGR y autoridades análogas internacionales.",
              "Medidas de protección y orden de no acercamiento cuando aplica.",
              "Indemnización civil por daño moral.",
              "Estrategia de comunicación pública si es necesario."
            ]
          }
        }
      },
      {
        id: "suplantacion-identidad",
        scene: "face",
        i18n: {
          [ES]: {
            title: "Alguien creó perfiles falsos con mi identidad",
            hook: "Tu nombre, tus fotos, tu vida — usadas por alguien más para estafar.",
            examples: [
              "Hay tres cuentas de Tinder con tus fotos contactando gente.",
              "Una página de Facebook usa tu nombre y foto para vender productos falsos.",
              "Un perfil en LinkedIn se hace pasar por ti y manda mensajes a tus contactos profesionales."
            ],
            consequence: "Cada víctima del suplantador puede demandarte a ti por confusión. Necesitas trazabilidad legal limpia.",
            solution: [
              "Takedown coordinado multi-plataforma.",
              "Investigación de origen para identificar al suplantador.",
              "Denuncia penal por usurpación de identidad.",
              "Comunicación pública defensiva."
            ]
          }
        }
      },
      {
        id: "contenido-difamatorio",
        scene: "shield",
        i18n: {
          [ES]: {
            title: "Hay contenido difamatorio sobre mí que no se va",
            hook: "Una nota mentirosa. Un thread viral. Un foro que no modera. Todo eso es manejable.",
            examples: [
              "Un blog publicó información falsa sobre tu negocio y aparece en la primera página de Google.",
              "Un thread de X con 500k vistas te acusa sin pruebas.",
              "Un foro especializado tiene un hilo activo de hace tres años hablando mal de ti."
            ],
            consequence: "El contenido difamatorio sin respuesta legal se vuelve verdad de Google. Lo que aparece en la primera página define tu reputación.",
            solution: [
              "Cease and desist al autor y a la plataforma.",
              "Demanda civil por daño moral.",
              "SEO inverso y derecho al olvido (Google, Bing).",
              "Estrategia de contenido propio para reposicionar."
            ]
          }
        }
      },
      {
        id: "fotos-comprometedoras",
        scene: "shield",
        i18n: {
          [ES]: {
            title: "Bajar fotos/videos íntimos publicados sin consentimiento",
            hook: "Revenge porn, sextorsión, contenido íntimo filtrado. Hay vías legales — y son urgentes.",
            examples: [
              "Una ex pareja publicó fotos íntimas en un sitio para adultos.",
              "Te están extorsionando con material íntimo y piden cripto.",
              "Un grupo de Telegram comparte fotos tuyas obtenidas por phishing."
            ],
            consequence: "Cada hora cuenta. Cada plataforma tiene procedimientos específicos urgentes que conocemos.",
            solution: [
              "Takedown urgente vía protocolos especializados (NCII, StopNCII).",
              "Denuncia penal por difusión íntima sin consentimiento (Ley Olimpia y análogas).",
              "Medidas cautelares y protección.",
              "Soporte psicojurídico y discreción absoluta."
            ]
          }
        }
      },
      {
        id: "negociacion-cuenta",
        scene: "broken-chain",
        i18n: {
          [ES]: {
            title: "Quiero negociar la recuperación de una cuenta que vendieron sin mi consentimiento",
            hook: "Tu cuenta fue tomada y revendida. Sí hay forma de recuperarla — incluso negociando.",
            examples: [
              "Tu cuenta de TikTok fue vendida en un mercado de cuentas y el nuevo dueño ya tiene 30k más seguidores.",
              "Un empleado tuyo se quedó con la cuenta corporativa al irse.",
              "Una cuenta de gaming con valor real fue tomada por un compañero de gremio."
            ],
            consequence: "Sin respuesta, la cuenta sigue generando valor para quien la tomó. Cada semana es más difícil revertir.",
            solution: [
              "Negociación documentada con quien tiene posesión actual.",
              "Reporte coordinado a plataforma con evidencia de origen.",
              "Acción civil y penal según corresponda.",
              "Recuperación o compensación negociada."
            ]
          }
        }
      }
    ]
  },
  {
    slug: "inteligencia-artificial",
    num: "04",
    accent: "forest",
    i18n: {
      [ES]: {
        title: "IA y Derechos Digitales",
        short: "Quién es autor cuando autor también es la máquina.",
        intro: "La IA cambia todo lo que toca: autoría, responsabilidad, contratos, prueba. Trabajamos con creadores, estudios y empresas para que la IA sea una ventaja, no una demanda."
      }
    },
    problematicas: [
      {
        id: "ia-genero-mi-contenido",
        scene: "robot",
        i18n: {
          [ES]: {
            title: "Una IA generó algo demasiado parecido a lo mío",
            hook: "Tu estilo es identificable. Y ahora cualquiera lo puede replicar con un prompt.",
            examples: [
              "Una marca usó Midjourney con tu nombre como prompt y publicó la imagen.",
              "Un youtuber clonó tu voz con ElevenLabs y narra videos como si fueras tú.",
              "Un servicio entrenó su modelo con tus textos publicados y ahora vende contenido derivado.",
              "Un cliente te dejó de contratar porque está usando IA con tu nombre como referencia."
            ],
            solution: [
              "Notificación formal a plataforma y entrenador.",
              "Cease-and-desist técnico y legal.",
              "Registro defensivo de estilo, voz y marca asociada.",
              "Demanda por daño moral y patrimonial."
            ]
          }
        }
      },
      {
        id: "uso-empresa-ia",
        scene: "robot",
        i18n: {
          [ES]: {
            title: "Mi empresa usa IA y tengo miedo de que nos demanden",
            hook: "Generaste con IA. ¿Quién es dueño? ¿Y si el output infringe?",
            examples: [
              "Tu agencia entrega assets generados con IA al cliente. El cliente quiere garantía de no infracción.",
              "Tu chatbot dio información incorrecta a un cliente y la empresa quiere demandarte.",
              "Tu equipo entrena un modelo con datos públicos y un competidor amenaza con denunciarte."
            ],
            solution: [
              "Política de uso de IA por rol.",
              "Contratos de licencia e indemnización con vendors.",
              "Due diligence técnica-legal de modelos.",
              "Mapa de responsabilidad por uso."
            ]
          }
        }
      },
      {
        id: "autoria-ia",
        scene: "scroll",
        i18n: {
          [ES]: {
            title: "Hice algo con IA y quiero protegerlo legalmente",
            hook: "IMPI e INPI no registran obras hechas por máquinas. Pero hay vías.",
            examples: [
              "Diseñaste una marca con Midjourney y quieres registrarla.",
              "Escribiste un libro asistido por IA y la editorial pregunta cuánto es IA y cuánto tuyo.",
              "Tu música tiene voces clonadas con IA y el label no sabe cómo licenciarla."
            ],
            solution: [
              "Estrategia de autoría híbrida documentada.",
              "Registro de la parte humana (proceso, selecciones, edits).",
              "Contratos de cesión y co-autoría con colaboradores y herramientas.",
              "Marca asociada al output como protección colateral."
            ]
          }
        }
      },
      {
        id: "denuncia-deepfake",
        scene: "face",
        i18n: {
          [ES]: {
            title: "Quiero denunciar penalmente un deepfake en mi contra",
            hook: "No solo bajar el contenido. Que haya consecuencias para quien lo hizo.",
            examples: [
              "Un deepfake porno tuyo circula y quieres identificar al autor.",
              "Una imagen falsificada se usó en una campaña política con tu cara.",
              "Tu marca personal está siendo dañada por contenido sintético dirigido."
            ],
            solution: [
              "Investigación forense del origen.",
              "Denuncia penal con narrativa técnica.",
              "Coordinación con autoridades cibernéticas.",
              "Acción civil paralela por daño patrimonial y moral."
            ]
          }
        }
      },
      {
        id: "regulacion-ia-empresa",
        scene: "regulation",
        i18n: {
          [ES]: {
            title: "Mi empresa va a usar IA seriamente y necesita compliance",
            hook: "El AI Act europeo y los marcos análogos llegan. Mejor preparados que sorprendidos.",
            examples: [
              "Tu producto SaaS implementará IA y vende en UE, México y Brasil.",
              "Tu IA toma decisiones que afectan a usuarios (scoring, recomendaciones, moderación).",
              "Tu equipo va a entrenar modelos con datos personales."
            ],
            solution: [
              "Mapeo AI Act / marcos análogos por jurisdicción.",
              "Clasificación de riesgo del sistema.",
              "Documentación técnica obligatoria y registro.",
              "Política interna y entrenamiento del equipo."
            ]
          }
        }
      }
    ]
  },
  {
    slug: "fintech-pagos",
    num: "05",
    accent: "gold",
    i18n: {
      [ES]: {
        title: "FinTech y Pagos Digitales",
        short: "Cuando el dinero se mueve más rápido que la regulación.",
        intro: "Wallets, ramps, stablecoins, neobancos, procesadores. La línea entre tecnología financiera y servicios regulados es delgada. Trabajamos del lado de los que la cruzan a propósito."
      }
    },
    problematicas: [
      {
        id: "ley-fintech-aplica",
        scene: "regulation",
        i18n: {
          [ES]: {
            title: "Mi app de pagos creció y ahora aplica Ley Fintech",
            hook: "Pasaste los umbrales sin darte cuenta. Eres ITF, IFPE o ambos.",
            examples: [
              "Tu wallet de pagos tiene 500 mil usuarios y la CNBV te llamó.",
              "Permites comprar cripto con tarjeta y eres VASP sin saberlo.",
              "Procesas remesas internacionales sin licencia de transmisor."
            ],
            solution: [
              "Análisis de modelo y umbrales.",
              "Registro IFPE/ITF o estructura alternativa.",
              "Programa AML/KYC operativo.",
              "Asesoría continua CNBV/Banxico/UIF."
            ]
          }
        }
      },
      {
        id: "cuentas-congeladas",
        scene: "broken-chain",
        i18n: {
          [ES]: {
            title: "Me congelaron una cuenta (banco, exchange, procesador)",
            hook: "Alguien decidió y tú no. Esto se pelea.",
            examples: [
              "Binance congeló tu cuenta porque sospechan KYC y no responden.",
              "Tu banco te bloqueó depósitos por movimientos 'inusuales' con cripto.",
              "Stripe cortó tu pasarela sin explicación y dejó tu negocio sin cobrar."
            ],
            solution: [
              "Defensa documental.",
              "Escalado interno y a compliance.",
              "Denuncia regulatoria cuando aplica (CONDUSEF, regulador local).",
              "Recuperación de fondos vía judicial."
            ]
          }
        }
      },
      {
        id: "ramp-cripto-fiat",
        scene: "wallet",
        i18n: {
          [ES]: {
            title: "Quiero operar un on/off-ramp cripto-fiat",
            hook: "La parte técnica está. La parte legal cambia cada trimestre.",
            examples: [
              "Tu app convierte USDT a MXN y necesitas saber qué licencia aplica.",
              "Tu OTC P2P creció y un cliente te denunció por intermediación.",
              "Tu plataforma de stablecoins quiere abrir Brasil, Colombia y Chile."
            ],
            solution: [
              "Estructura multi-juris.",
              "Compliance KYC/AML proporcional.",
              "Registro y operación coordinada.",
              "Defensa ante reclamos."
            ]
          }
        }
      },
      {
        id: "stablecoin-emision",
        scene: "vault",
        i18n: {
          [ES]: {
            title: "Quiero emitir una stablecoin local",
            hook: "MXN-pegged, ARS-pegged, COP-pegged: el reto no es técnico.",
            examples: [
              "Quieres lanzar un peso digital respaldado 1:1 con MXN en custodia.",
              "Tu fondo quiere tokenizar activos en stablecoin propia.",
              "Un banco te pidió opinión de viabilidad legal de stablecoin de marca blanca."
            ],
            solution: [
              "Estructura legal de reserva.",
              "Opinión regulatoria.",
              "Autorización CNBV/Banxico cuando aplica.",
              "Integración legal-técnica con auditoría continua."
            ]
          }
        }
      }
    ]
  },
  {
    slug: "diseno-web",
    num: "06",
    accent: "forest",
    i18n: {
      [ES]: {
        title: "Diseño Web y LegalTech",
        short: "Construimos tu sitio listo para vender y para cumplir.",
        intro: "Si tu negocio vive en internet, tu sitio web es tu fachada y tu contrato simultáneamente. Hacemos sitios que venden y que ya cumplen con LFPDPPP, GDPR, T&C reales, cookies y compliance desde origen."
      }
    },
    problematicas: [
      {
        id: "sitio-listo-cumplir",
        scene: "browser",
        i18n: {
          [ES]: {
            title: "Necesito un sitio web profesional para mi negocio digital",
            hook: "No quieres un sitio bonito que te demanden. Quieres uno que venda y proteja.",
            examples: [
              "Estás lanzando una marca de joyería online y necesitas tienda + privacidad + términos reales.",
              "Tu negocio de consultoría requiere captar leads cumpliendo LFPDPPP desde el primer formulario.",
              "Tu startup necesita landing premium y políticas alineadas al servicio."
            ],
            solution: [
              "Diseño y desarrollo del sitio (Next.js + Vercel o stack adecuado).",
              "Aviso de privacidad redactado al modelo de negocio.",
              "Términos y condiciones reales, no plantilla.",
              "Cookie banner con consent management.",
              "Implementación de tracking compliant."
            ]
          }
        }
      },
      {
        id: "terminos-reales",
        scene: "scroll",
        i18n: {
          [ES]: {
            title: "Mis términos y condiciones son una plantilla genérica",
            hook: "El día que tengas un problema, esa plantilla no te va a defender.",
            examples: [
              "Tu T&C dice 'jurisdicción California' y operas solo en México.",
              "Tu política de privacidad menciona derechos que tu app realmente no respeta.",
              "Tus T&C de servicio limitan responsabilidad de forma que la ley no permite."
            ],
            solution: [
              "Auditoría de T&C actuales contra tu operación real.",
              "Redacción a la medida del modelo de negocio.",
              "Política de privacidad alineada a flujo de datos real.",
              "Versionado y registro de aceptación."
            ]
          }
        }
      },
      {
        id: "ecommerce-multi-juris",
        scene: "globe",
        i18n: {
          [ES]: {
            title: "Mi e-commerce vende a varios países y no sé qué reglas seguir",
            hook: "Cada país tiene su consumer law. Y todos quieren ser jurisdicción.",
            examples: [
              "Tu Shopify vende a México, USA y España y no sabes cómo redactar tus T&C.",
              "Vendes contenido digital a UE y debes cumplir IVA OSS.",
              "Un cliente en Brasil quiere devolver fuera de plazo y reclama LGPD."
            ],
            solution: [
              "Estructura multi-juris de T&C y privacidad.",
              "Plan de cumplimiento fiscal y de consumo.",
              "Plantillas de respuesta a reclamos por mercado.",
              "Defensa ante autoridades de consumo."
            ]
          }
        }
      },
      {
        id: "cookies-consent",
        scene: "shield",
        i18n: {
          [ES]: {
            title: "Necesito un banner de cookies que sí funcione legalmente",
            hook: "El banner de cookies es lo primero que ve tu cliente. Y lo primero que audita el regulador.",
            examples: [
              "Tu banner actual dice 'usamos cookies' y un solo botón 'aceptar'. Eso no cumple GDPR.",
              "Recibiste denuncia INAI por tracking sin consentimiento.",
              "Tu cliente europeo te exige consent management certificado."
            ],
            solution: [
              "CMP (Consent Management Platform) con categorías reales.",
              "Mapeo técnico de scripts vs categorías.",
              "Logs de consentimiento por usuario.",
              "Política de cookies escrita."
            ]
          }
        }
      }
    ]
  },
  {
    slug: "ia-aplicada",
    num: "07",
    accent: "ember",
    i18n: {
      [ES]: {
        title: "IA Aplicada y Automatizaciones",
        short: "Implementamos IA en tu negocio con guardrails legales.",
        intro: "Más allá de la regulación: te ayudamos a usar IA, agentes y automatizaciones para hacer tu negocio más eficiente, sin abrirte a demandas. Capacitamos a tu equipo y armamos los procesos."
      }
    },
    problematicas: [
      {
        id: "capacitacion-ia-equipo",
        scene: "robot",
        i18n: {
          [ES]: {
            title: "Quiero capacitar a mi equipo en uso responsable de IA",
            hook: "Tu equipo ya usa ChatGPT. La pregunta es si lo hace sin filtrar datos confidenciales.",
            examples: [
              "Tus abogados pegan contratos confidenciales en ChatGPT consumer.",
              "Tu equipo de marketing genera assets con IA sin saber sobre derechos.",
              "Tu equipo de finanzas usa IA para analizar datos sensibles de clientes."
            ],
            solution: [
              "Capacitación in-house en uso responsable de IA por área.",
              "Política interna de uso de IA por rol.",
              "Setup técnico (proxies, tooling enterprise, no consumer).",
              "Auditoría semestral de uso."
            ]
          }
        }
      },
      {
        id: "implementar-ia-empresa",
        scene: "robot",
        i18n: {
          [ES]: {
            title: "Quiero implementar IA en mis operaciones sin meterme en problemas",
            hook: "Hay un caso de uso real. Hay un modelo. Falta el envoltorio legal y operativo.",
            examples: [
              "Quieres un chatbot que responda preguntas de clientes con base en tu documentación.",
              "Quieres automatizar revisión preliminar de contratos con IA.",
              "Quieres usar IA para scoring crediticio interno."
            ],
            solution: [
              "Diseño del caso de uso con compliance integrado.",
              "Selección de vendor con due diligence.",
              "Guardrails técnicos y legales.",
              "Documentación para auditoría y reguladores."
            ]
          }
        }
      },
      {
        id: "automatizaciones-workflow",
        scene: "network",
        i18n: {
          [ES]: {
            title: "Necesito automatizar procesos repetitivos en mi negocio",
            hook: "Cada hora ahorrada en operación es una hora más para vender.",
            examples: [
              "Tu equipo dedica 20 horas/semana a clasificar emails y CRM.",
              "Procesas facturas manualmente cuando podrías automatizar 80%.",
              "Tu onboarding de clientes toma 5 días y debería tomar 1."
            ],
            solution: [
              "Diagnóstico de procesos.",
              "Diseño de automatización con n8n, Make, Zapier o stack custom.",
              "Integración con tus sistemas existentes.",
              "Compliance LFPDPPP/GDPR de los flujos automatizados."
            ]
          }
        }
      },
      {
        id: "agente-ia-cliente",
        scene: "robot",
        i18n: {
          [ES]: {
            title: "Quiero un agente IA que atienda a mis clientes",
            hook: "El agente puede atender 24/7. Pero también puede decir tonterías legalmente costosas.",
            examples: [
              "Tu app de salud quiere un asistente IA que oriente síntomas.",
              "Tu fintech quiere un agente que ayude con dudas de productos.",
              "Tu legal-services quiere un primer filtro IA antes de pasar a humano."
            ],
            solution: [
              "Diseño del scope del agente.",
              "Guardrails y disclaimers efectivos.",
              "Log de conversaciones para auditoría.",
              "Plan de escalado a humano y fallback."
            ]
          }
        }
      },
      {
        id: "auditoria-ia-actual",
        scene: "shield",
        i18n: {
          [ES]: {
            title: "Ya uso IA y quiero saber si estoy expuesto",
            hook: "Si llevas más de un año usando IA y nunca lo revisaste, hay deuda técnica-legal.",
            examples: [
              "Tu equipo lleva 18 meses usando IA en producción sin auditoría.",
              "Tu vendor de IA cambió T&C y nadie revisó.",
              "Tu CISO quiere un assessment formal de riesgos IA."
            ],
            solution: [
              "Auditoría de uso actual por proceso.",
              "Mapa de riesgos legales y operativos.",
              "Plan de remediación priorizado.",
              "Reporte para junta directiva."
            ]
          }
        }
      }
    ]
  },
  {
    slug: "creadores",
    num: "08",
    accent: "ember",
    i18n: {
      [ES]: {
        title: "Creadores y Economía Digital",
        short: "Tu cara, tu marca, tu ingreso, tu propiedad.",
        intro: "TikTok, OnlyFans, YouTube, Substack, Twitch, Patreon. Tu negocio es tu identidad. Y eso necesita estructura legal específica."
      }
    },
    problematicas: [
      {
        id: "estructura-creator",
        scene: "scroll",
        i18n: {
          [ES]: {
            title: "Quiero estructurarme como empresa pero sigo siendo yo",
            hook: "Cobras como persona física y pierdes la mitad. Hay forma legal de no perderla.",
            examples: [
              "Facturas 200 mil USD/año en YouTube y AdSense te paga a tu RFC personal.",
              "Tu manager te dice que armes una S.A. pero no sabes si te conviene.",
              "Vives entre México y Madrid y no sabes dónde declarar."
            ],
            solution: [
              "Estructura corporativa optimizada (LLC, S de RL, holding).",
              "Planeación fiscal lícita.",
              "Tratados de doble tributación aplicados.",
              "Plan de movilidad si aplica."
            ]
          }
        }
      },
      {
        id: "deal-marca-trampa",
        scene: "scroll",
        i18n: {
          [ES]: {
            title: "Una marca me ofreció un deal con un contrato trampa",
            hook: "Exclusividad de 5 años. Cesión perpetua de imagen. Lo viste por encima.",
            examples: [
              "Te ofrecen 80 mil USD por una campaña pero te quitan derechos sobre tu rostro de por vida.",
              "El contrato dice 'territorio mundial' y tu agencia local también quería usarlo.",
              "Te ponen non-compete con cualquier marca del sector — incluso después de terminar."
            ],
            solution: [
              "Revisión y renegociación del contrato.",
              "Contraoferta de términos justos.",
              "Defensa post-firma si ya firmaste.",
              "Plantilla propia para futuros deals."
            ]
          }
        }
      },
      {
        id: "robo-contenido",
        scene: "marketplace",
        i18n: {
          [ES]: {
            title: "Me están reposteando contenido sin permiso",
            hook: "Cuentas grandes lo bajan en horas. Las pequeñas pueden tomar meses.",
            examples: [
              "Una página fan de Instagram repostea tus reels y monetiza con ellos.",
              "Un creador de Brasil traduce tus videos y los sube como propios.",
              "Una agencia usa tus fotos en su portfolio sin pagarte."
            ],
            solution: [
              "DMCA estratégico.",
              "Takedowns plataforma por plataforma.",
              "Demandas cuando aplica.",
              "Watermarking estratégico futuro."
            ]
          }
        }
      },
      {
        id: "onlyfans-fiscal",
        scene: "wallet",
        i18n: {
          [ES]: {
            title: "Mi contenido es +18 y la fiscalización está complicada",
            hook: "Bancos cierran. SAT audita. Plataformas exigen W-8BEN. Pasa.",
            examples: [
              "Vives en México, cobras en USD de OnlyFans, y el SAT te quiere fiscalizar como exportadora de servicios.",
              "Tu banco cerró tu cuenta sin explicar — sospechan por el origen del dinero.",
              "Quieres declarar correctamente pero ningún contador acepta el modelo."
            ],
            solution: [
              "Estructura fiscal específica para creators +18.",
              "Defensa bancaria documentada.",
              "Defensa SAT con narrativa de servicios.",
              "Normalización con flujo internacional."
            ]
          }
        }
      }
    ]
  },
  {
    slug: "propiedad-intelectual",
    num: "09",
    accent: "forest",
    i18n: {
      [ES]: {
        title: "Propiedad Intelectual Digital",
        short: "Lo que llamas tuyo. Demuéstralo.",
        intro: "Marca, autor, multimedia, NFT. La PI digital es más rica y más vulnerable que la tradicional. La defendemos y la registramos a la medida de tu modelo."
      }
    },
    problematicas: [
      {
        id: "marca-tomada",
        scene: "marketplace",
        i18n: {
          [ES]: {
            title: "Alguien registró mi marca antes que yo",
            hook: "Tu marca lleva años en redes. Hoy aparece registrada por otro.",
            examples: [
              "Tu estudio creativo vendía con un nombre y un troll registró la marca para revenderla.",
              "Tu startup en operación tres años recibió cease-and-desist de una marca registrada después.",
              "Un competidor de mala fe registró tu nombre con leves variantes."
            ],
            solution: [
              "Oposición y nulidad ante IMPI/INPI.",
              "Prueba de uso anterior documentada.",
              "Recuperación o transacción estratégica.",
              "Registro defensivo simultáneo."
            ]
          }
        }
      },
      {
        id: "registro-multimedia",
        scene: "scroll",
        i18n: {
          [ES]: {
            title: "Quiero registrar algo que no es 'marca tradicional'",
            hook: "Sonido. Color. Movimiento. NFT. El IMPI lo permite — si sabes pedirlo.",
            examples: [
              "Tu jingle es reconocible y quieres registrarlo como marca sonora.",
              "Tu color corporativo es identitario y temes que lo copien.",
              "Tu personaje animado debe protegerse como obra plus marca."
            ],
            solution: [
              "Estrategia de registro multimedia.",
              "Marcas no tradicionales (sonora, tridimensional, movimiento).",
              "Derecho de autor combinado.",
              "Protección internacional vía Madrid."
            ]
          }
        }
      },
      {
        id: "uso-no-autorizado",
        scene: "marketplace",
        i18n: {
          [ES]: {
            title: "Encontré mi trabajo en otro lado",
            hook: "Tu diseño en una camiseta. Tu foto en un anuncio. Tu canción en TikTok.",
            examples: [
              "Una marca DTC vende camisetas con tu ilustración sin licencia.",
              "Una agencia de Brasil usa tus fotos como contenido orgánico.",
              "Una marca importante samplea tu canción sin acuerdo."
            ],
            solution: [
              "Cease and desist.",
              "Licenciamiento retroactivo cuando hay vía.",
              "Demanda civil con cálculo de daños.",
              "Estrategia de monitoreo continuo."
            ]
          }
        }
      },
      {
        id: "nft-derecho-autor",
        scene: "vault",
        i18n: {
          [ES]: {
            title: "Quiero minar mi obra como NFT (o ya lo hicieron sin mí)",
            hook: "Mintear no es lo mismo que tener derechos. Y a veces alguien mintea lo tuyo.",
            examples: [
              "Quieres tokenizar tu colección de arte y necesitas claridad sobre qué transfiere el NFT.",
              "Alguien minteó tu obra en OpenSea sin tu permiso y está vendiendo.",
              "Tu música está minteada por un fan que cobra royalties."
            ],
            solution: [
              "Smart-contract de royalties propio.",
              "Takedown OpenSea/Rarible/Magic Eden.",
              "Plan de minteo defensivo.",
              "Recuperación de regalías cuando aplica."
            ]
          }
        }
      }
    ]
  },
  {
    slug: "privacidad-datos",
    num: "10",
    accent: "gold",
    i18n: {
      [ES]: {
        title: "Privacidad y Protección de Datos",
        short: "LFPDPPP, GDPR, MiCA, LGPD: cumplimiento real.",
        intro: "El día que llame el regulador, ya estará todo en orden. Antes, también."
      }
    },
    problematicas: [
      {
        id: "fuga-datos",
        scene: "shield",
        i18n: {
          [ES]: {
            title: "Tuve una fuga de datos",
            hook: "El reloj corre. 72 horas para notificar.",
            examples: [
              "Tu CRM se filtró y 40 mil clientes están en un foro.",
              "Un ex empleado se llevó la base a la competencia.",
              "Un hacker pide rescate y la junta no sabe qué hacer."
            ],
            solution: [
              "Plan de respuesta inmediato.",
              "Notificación INAI o regulador análogo.",
              "Comunicación con afectados.",
              "Defensa procedimental."
            ]
          }
        }
      },
      {
        id: "aviso-privacidad",
        scene: "scroll",
        i18n: {
          [ES]: {
            title: "Mi aviso de privacidad es genérico y peligroso",
            hook: "Copia y pega de hace 5 años. No cubre lo que haces hoy.",
            examples: [
              "Tu app recolecta ubicación pero el aviso dice 'datos necesarios'.",
              "Compartes datos con proveedores de USA sin cláusula de transferencia.",
              "Procesas datos de menores sin consentimiento parental."
            ],
            solution: [
              "Aviso correcto y específico al flujo real.",
              "Mapa de transferencias.",
              "DPAs con proveedores.",
              "Política de menores documentada."
            ]
          }
        }
      },
      {
        id: "lfpdppp-mexicana",
        scene: "regulation",
        i18n: {
          [ES]: {
            title: "Necesito cumplir LFPDPPP en serio (no en papel)",
            hook: "La ley mexicana es exigente. Y el INAI ya audita en serio.",
            examples: [
              "Tu negocio digital crece en México y el INAI te puede mirar pronto.",
              "Tu cliente B2B te exige LFPDPPP demostrable.",
              "Sufriste una denuncia INAI y necesitas defensa más programa real."
            ],
            solution: [
              "Programa integral LFPDPPP documentado.",
              "DPO o equivalente designado.",
              "Política, avisos, DPAs, registros.",
              "Capacitación al equipo y simulacro de incidente."
            ]
          }
        }
      },
      {
        id: "gdpr-europa",
        scene: "globe",
        i18n: {
          [ES]: {
            title: "Vendo en Europa y necesito GDPR de verdad",
            hook: "GDPR no es una checklist. Es un sistema operativo.",
            examples: [
              "Tu SaaS empezó a tener clientes en España e Italia.",
              "Tu app móvil tiene usuarios europeos y nunca pediste consentimiento granular.",
              "Recibiste una solicitud de portabilidad y no sabes cómo responder."
            ],
            solution: [
              "Programa GDPR end-to-end.",
              "Representante UE cuando aplica.",
              "DPAs con sub-procesadores.",
              "Defensa ante autoridades nacionales."
            ]
          }
        }
      },
      {
        id: "multi-pais-datos",
        scene: "globe",
        i18n: {
          [ES]: {
            title: "Operamos en varios países y cumplimiento se ramificó",
            hook: "GDPR, LGPD, LFPDPPP, CCPA. Diferentes reglas, mismo cliente.",
            examples: [
              "Eres SaaS B2B con clientes en España y México.",
              "Tu app de salud opera en Brasil y los datos sensibles están en EEUU.",
              "Tienes matriz EU y subsidiaria mexicana y el flujo te complica."
            ],
            solution: [
              "Política unificada multi-juris.",
              "Roles y responsabilidades documentados.",
              "Transferencias internacionales con marco legal.",
              "Defensa coordinada cuando aplica."
            ]
          }
        }
      }
    ]
  },
  {
    slug: "gaming-esports",
    num: "11",
    accent: "ember",
    i18n: {
      [ES]: {
        title: "Gaming, Metaverso y eSports",
        short: "Tu economía y tu equipo existen en mundos virtuales. Los regulamos.",
        intro: "Estudios, jugadores profesionales, equipos eSports, plataformas, casters, propietarios virtuales. Aquí hay derecho — y mucho dinero."
      }
    },
    problematicas: [
      {
        id: "propiedad-virtual",
        scene: "world",
        i18n: {
          [ES]: {
            title: "Conflicto sobre propiedad virtual",
            hook: "El terreno es código. El derecho no lo es. Sí hay forma.",
            examples: [
              "Compraste una parcela en Decentraland y la plataforma la transfiere por error.",
              "Tu colección de skins fue 'devuelta' por el juego sin notificación.",
              "Tu avatar fue suspendido por reportes injustificados en VRChat."
            ],
            solution: [
              "Reclamación contractual a plataforma.",
              "Defensa de propiedad virtual con evidencia técnica.",
              "Recuperación negociada o judicial.",
              "Documentación preventiva futura."
            ]
          }
        }
      },
      {
        id: "contrato-jugador-esports",
        scene: "trophy",
        i18n: {
          [ES]: {
            title: "Soy jugador profesional y me pasan un contrato",
            hook: "Hay cláusulas estándar en eSports que son tóxicas para el jugador.",
            examples: [
              "Te ofrecen entrar a equipo top-tier con cláusula de exclusividad de 4 años.",
              "El contrato cede streaming, image rights y NFT por una sola firma.",
              "Te ponen non-compete con cualquier equipo del sector tras salida."
            ],
            solution: [
              "Revisión exhaustiva del contrato.",
              "Renegociación de cláusulas tóxicas.",
              "Estructura de ingresos (sueldo, premios, sponsors, streaming).",
              "Plan de salida documentado."
            ]
          }
        }
      },
      {
        id: "marca-equipo-esports",
        scene: "trophy",
        i18n: {
          [ES]: {
            title: "Tengo un equipo eSports y necesito proteger la marca",
            hook: "Tu logo, tu jersey, tu roster: todo eso es valor que se protege.",
            examples: [
              "Estás formando un equipo amateur que quiere pasar a pro y necesita registro de marca.",
              "Tu equipo tiene seguidores y temes que un troll te tome el nombre.",
              "Quieres vender jerseys y mercancía protegida."
            ],
            solution: [
              "Registro de marca por clases relevantes (entretenimiento, vestimenta, software).",
              "Contratos de imagen con jugadores.",
              "Protección internacional vía Madrid.",
              "Estructura corporativa del equipo."
            ]
          }
        }
      },
      {
        id: "patrocinios-esports",
        scene: "scroll",
        i18n: {
          [ES]: {
            title: "Estoy negociando un patrocinio (como equipo o jugador)",
            hook: "Los sponsors eSports vienen con expectativas que no siempre son razonables.",
            examples: [
              "Una marca de energéticos te ofrece patrocinio con exclusividad sectorial estricta.",
              "Un sponsor pide derechos sobre tus clips de gameplay.",
              "Una marca exige que tu jugador no juegue ciertos títulos."
            ],
            solution: [
              "Revisión y negociación del acuerdo.",
              "Estructura de pagos (fijo, performance, bonos).",
              "Cláusulas de salida y de incumplimiento.",
              "Protección de derechos de contenido."
            ]
          }
        }
      },
      {
        id: "economia-in-game",
        scene: "vault",
        i18n: {
          [ES]: {
            title: "Quiero lanzar economía dentro de mi juego",
            hook: "Loot boxes, mercados secundarios, tokens. Cada cosa con regla distinta.",
            examples: [
              "Tu juego tendrá market secundario de items.",
              "Quieres vender loot boxes y Bélgica/Holanda los prohíben.",
              "Tus tokens in-game son tradeables fuera del juego."
            ],
            solution: [
              "Diseño legal de la economía in-game.",
              "Opinión multi-juris.",
              "T&C robustos y AML proporcional.",
              "Documentación para auditoría."
            ]
          }
        }
      },
      {
        id: "ar-imagen-consentimiento",
        scene: "face",
        i18n: {
          [ES]: {
            title: "Mi app de AR captura rostros sin consentimiento explícito",
            hook: "Apuntas la cámara. Identifica. Sube datos. Hay regla para todo eso.",
            examples: [
              "Tu app de moda AR mide rostros para recomendar productos.",
              "Tu Snap filter usa landmarks faciales sin aviso claro.",
              "Tu solución de retail captura clientes en tienda sin consentimiento."
            ],
            solution: [
              "Aviso específico biométrico.",
              "Consentimiento granular.",
              "Limitación de uso y plazos.",
              "Política específica de biométricos."
            ]
          }
        }
      }
    ]
  },
  {
    slug: "internacional",
    num: "12",
    accent: "gold",
    avatar: "tmec",
    i18n: {
      [ES]: {
        title: "Transfronterizo y Nómadas Digitales",
        short: "Trabajas en cualquier parte. Lo legalizamos en todas.",
        intro: "Residencia fiscal, movilidad, T-MEC, OFAC, sanciones, capítulos de inversión. El mundo es la jurisdicción."
      }
    },
    problematicas: [
      {
        id: "residencia-fiscal",
        scene: "globe",
        i18n: {
          [ES]: {
            title: "No sé dónde soy residente fiscal y todos quieren cobrarme",
            hook: "Y los tres países que crees, te quieren clasificar.",
            examples: [
              "Vives 5 meses en México y 7 en Portugal. ¿Dónde declaras?",
              "Tu LLC de Delaware factura, tú vives en CDMX. SAT te quiere clasificar como residente.",
              "Cobras en USD y los movimientos a tu banco MX te marcan."
            ],
            solution: [
              "Análisis CDI por país.",
              "Certificados de residencia.",
              "Defensa fiscal proactiva.",
              "Plan de movilidad documentado."
            ]
          }
        }
      },
      {
        id: "ronda-transfronteriza",
        scene: "network",
        i18n: {
          [ES]: {
            title: "Mi ronda seed cruza varios países y uno la prohíbe",
            hook: "Inversionistas USA, fundadores LatAm, vehículo Caymans. Y un país lo prohíbe.",
            examples: [
              "Tu fondo de Argentina quiere invertir en una startup Web3 con presencia en Cuba.",
              "Tu cap table incluye tokens y los abogados de tu lead investor están en pánico.",
              "Tu ronda incluye fondos con LP de Rusia y tienes preocupaciones de OFAC."
            ],
            solution: [
              "Estructuración cap table multi-juris.",
              "Opinión OFAC y sanciones.",
              "Vehículos limpios.",
              "Coordinación con counsel de inversionista."
            ]
          }
        }
      },
      {
        id: "visado-talento",
        scene: "scroll",
        i18n: {
          [ES]: {
            title: "Necesito o soy un visado de talento",
            hook: "O-1, EB-1, Talento mexicano, golden visa Portugal. Cada uno con su trampa.",
            examples: [
              "Tu CTO necesita O-1 en USA y tienen 6 meses para juntar evidencia.",
              "Quieres mover tu equipo de 12 ingenieros a Lisboa.",
              "Quieres aplicar Mexican Talent visa para un especialista IA."
            ],
            solution: [
              "Estrategia migratoria por perfil.",
              "Recopilación de evidencia metodológica.",
              "Vehículo legal de soporte (empresa, contrato, sponsor).",
              "Follow-through hasta aprobación."
            ]
          }
        }
      },
      {
        id: "tmec-comercio",
        scene: "globe",
        i18n: {
          [ES]: {
            title: "Mi negocio cruza T-MEC y hay disputa",
            hook: "Cuando el tratado opera, sabe operar a tu favor.",
            examples: [
              "Importas componentes y un cambio arancelario te paralizó.",
              "Exportas a USA y la CBP te marcó por contenido regional.",
              "Una disputa comercial te tiene operando al 30%."
            ],
            solution: [
              "Litigio T-MEC.",
              "Análisis arancelario y de contenido regional.",
              "Defensa comercial coordinada.",
              "Recuperación de pérdidas vía tratado."
            ]
          }
        }
      }
    ]
  }
];

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}

export function getProblematica(areaSlug: string, problemaId: string) {
  const area = getArea(areaSlug);
  if (!area) return null;
  const problema = area.problematicas.find((p) => p.id === problemaId);
  if (!problema) return null;
  return { area, problema };
}
