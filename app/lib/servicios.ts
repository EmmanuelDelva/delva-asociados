import type { Locale } from "../i18n/dict";

export type Problematica = {
  id: string;
  title: string;
  hook: string;
  examples: string[];
  solution: string;
};

export type ServicioContent = {
  title: string;
  short: string;
  closeExample: string;
  problematicas: Problematica[];
};

export type Servicio = {
  slug: string;
  num: string;
  accent: "ember" | "forest" | "gold";
  avatar?: "biblioteca" | "portrait" | "mxoffice" | "crypto" | "tmec";
  i18n: Record<Locale, ServicioContent>;
};

export const servicios: Servicio[] = [
  {
    slug: "web3-blockchain",
    num: "01",
    accent: "ember",
    avatar: "crypto",
    i18n: {
      es: {
        title: "Web3, Blockchain y Tokenización",
        short: "Tokens, DAOs y smart contracts con cobertura legal real.",
        closeExample: "Quieres lanzar un token y nadie te da una respuesta clara sobre si es valor o no.",
        problematicas: [
          {
            id: "lanzamiento-token",
            title: "Quieres lanzar un token",
            hook: "Tres jurisdicciones, dos legislaciones, una ronda al borde.",
            examples: [
              "Eres un equipo de 4 fundadores en Guadalajara que va a lanzar un token utilitario para su app. Tu inversionista en Estados Unidos pide una opinión legal de que no es un security.",
              "Tu protocolo DeFi quiere abrir liquidez al público latinoamericano y necesitas saber qué países te demandarían y cuáles no.",
              "Vas a hacer un airdrop a tu comunidad y no sabes si eso te convierte en oferente público de valores."
            ],
            solution: "Estructura corporativa multi-juris (foundation, LLC, asociación civil), opinión de no-security, plan de distribución compliance-first."
          },
          {
            id: "dao-personalidad",
            title: "Tu DAO necesita firmar",
            hook: "La red gobierna, pero alguien tiene que poder demandar en tribunales.",
            examples: [
              "Tu DAO ya tiene tesorería en USDC pero ningún proveedor acepta facturarte porque no tienes RFC ni cuenta bancaria.",
              "Un colaborador desapareció con fondos y no sabes contra quién litigar — la DAO no es persona jurídica.",
              "Quieres contratar un desarrollador de tiempo completo pero no puedes ofrecer contrato laboral."
            ],
            solution: "Vehículo legal por encima del protocolo (asociación, LLC Wyoming, foundation suiza/Cayman) con estatutos espejo de la gobernanza on-chain."
          },
          {
            id: "smart-contract-bug",
            title: "Tu smart contract tiene un bug y alguien perdió dinero",
            hook: "Cuando el código falla, el código fuente no es un eximente.",
            examples: [
              "Hubo un exploit en tu pool y un usuario perdió 80 mil USDC. Te exige reembolso aunque tus T&C dicen 'use at your own risk'.",
              "Tu oráculo falló y liquidaste posiciones que no debían liquidarse. Cinco usuarios te demandan.",
              "Un fork no autorizado de tu contrato está estafando gente, te están atribuyendo la culpa."
            ],
            solution: "Defensa contractual, deslinde técnico-legal, gestión de reclamación de usuarios, comunicación pública."
          },
          {
            id: "vasp-cnbv",
            title: "La CNBV o el regulador te identificó como VASP",
            hook: "Te llegó un oficio. Tienes 15 días.",
            examples: [
              "Tu exchange cripto opera en México sin licencia y recibiste oficio CNBV.",
              "Tu wallet custodial supera los umbrales y ahora aplica Ley Antilavado.",
              "Tu plataforma facilita compras de NFT con tarjeta y eso te puso en el radar de la UIF."
            ],
            solution: "Respuesta formal, plan de regularización, registro CNBV/UIF/SAT, defensa en procedimiento."
          }
        ]
      },
      en: {
        title: "Web3, Blockchain & Tokenization",
        short: "Tokens, DAOs and smart contracts with real legal coverage.",
        closeExample: "You want to launch a token and no one gives you a clear answer on whether it's a security.",
        problematicas: [
          {
            id: "lanzamiento-token",
            title: "You want to launch a token",
            hook: "Three jurisdictions, two legislations, a round on the edge.",
            examples: [
              "Four founders in Guadalajara are launching a utility token. Your US investor demands a no-securities legal opinion.",
              "Your DeFi protocol wants to open liquidity to a Latin American audience and you need to know who would sue and who wouldn't.",
              "You're running an airdrop to your community and you don't know if that turns you into a public securities offeror."
            ],
            solution: "Multi-juris corporate structure (foundation, LLC, asociación civil), no-security opinion, compliance-first distribution plan."
          },
          {
            id: "dao-personalidad",
            title: "Your DAO needs to sign",
            hook: "The network governs, but someone has to be able to sue in court.",
            examples: [
              "Your DAO holds USDC in treasury but no vendor will invoice you because you have no tax ID.",
              "A contributor disappeared with funds and you can't figure out who to sue — the DAO isn't a legal person.",
              "You want to hire a full-time developer but you can't offer an employment contract."
            ],
            solution: "Legal vehicle over the protocol (association, Wyoming LLC, Swiss/Cayman foundation) with bylaws mirroring on-chain governance."
          },
          {
            id: "smart-contract-bug",
            title: "Your smart contract has a bug and someone lost money",
            hook: "When the code fails, source code isn't a defense.",
            examples: [
              "Your pool was exploited and a user lost 80k USDC. They demand a refund despite your 'use at your own risk' T&Cs.",
              "Your oracle failed and you liquidated positions that shouldn't have been liquidated. Five users are suing.",
              "An unauthorized fork of your contract is scamming people and they're blaming you."
            ],
            solution: "Contractual defense, technical-legal disclaimer, user-claim management, public communications."
          },
          {
            id: "vasp-cnbv",
            title: "The regulator flagged you as a VASP",
            hook: "An official notice arrived. You have 15 days.",
            examples: [
              "Your crypto exchange operates in Mexico without a license and you received a CNBV notice.",
              "Your custodial wallet exceeds the AML threshold.",
              "Your platform facilitates NFT purchases by card and now you're on UIF's radar."
            ],
            solution: "Formal response, regularization plan, CNBV/UIF/SAT registration, procedural defense."
          }
        ]
      },
      fr: {
        title: "Web3, Blockchain et Tokenisation",
        short: "Jetons, DAO et smart contracts avec couverture juridique réelle.",
        closeExample: "Vous voulez lancer un jeton et personne ne peut dire clairement si c'est une valeur mobilière.",
        problematicas: [
          {
            id: "lanzamiento-token",
            title: "Vous voulez lancer un jeton",
            hook: "Trois juridictions, deux législations, un tour au bord.",
            examples: [
              "Quatre fondateurs à Guadalajara lancent un jeton utilitaire. Votre investisseur américain exige une opinion juridique no-securities.",
              "Votre protocole DeFi veut ouvrir la liquidité au public latino-américain et vous devez savoir qui pourrait vous poursuivre.",
              "Vous faites un airdrop à votre communauté et ne savez pas si cela vous transforme en émetteur public."
            ],
            solution: "Structure d'entreprise multi-juridictionnelle, opinion no-security, plan de distribution conforme."
          },
          {
            id: "dao-personalidad",
            title: "Votre DAO doit signer",
            hook: "Le réseau gouverne, mais quelqu'un doit pouvoir attaquer en justice.",
            examples: [
              "Votre DAO détient de l'USDC mais aucun fournisseur n'accepte de vous facturer faute d'identifiant fiscal.",
              "Un contributeur a disparu avec des fonds et la DAO n'est pas une personne juridique.",
              "Vous voulez embaucher un développeur à plein temps sans pouvoir offrir un contrat de travail."
            ],
            solution: "Véhicule juridique au-dessus du protocole (association, LLC Wyoming, fondation suisse/Cayman) avec statuts miroir de la gouvernance on-chain."
          },
          {
            id: "smart-contract-bug",
            title: "Votre smart contract a un bug et quelqu'un a perdu de l'argent",
            hook: "Quand le code échoue, le code source n'est pas une excuse.",
            examples: [
              "Votre pool a été exploité et un utilisateur a perdu 80k USDC. Il exige remboursement malgré vos CGV 'use at your own risk'.",
              "Votre oracle a échoué et vous avez liquidé des positions à tort. Cinq utilisateurs vous poursuivent.",
              "Un fork non autorisé de votre contrat arnaque des gens et on vous tient pour responsable."
            ],
            solution: "Défense contractuelle, déclinaison technico-juridique, gestion des réclamations, communication publique."
          },
          {
            id: "vasp-cnbv",
            title: "Le régulateur vous a qualifié de VASP",
            hook: "Un avis officiel est arrivé. Vous avez 15 jours.",
            examples: [
              "Votre exchange opère au Mexique sans licence et la CNBV vous a notifié.",
              "Votre wallet custodial dépasse le seuil anti-blanchiment.",
              "Votre plateforme facilite l'achat de NFT par carte et vous voilà sur le radar de l'UIF."
            ],
            solution: "Réponse formelle, plan de régularisation, enregistrement CNBV/UIF/SAT, défense procédurale."
          }
        ]
      }
    }
  },
  {
    slug: "herencia-digital",
    num: "02",
    accent: "gold",
    avatar: "biblioteca",
    i18n: {
      es: {
        title: "Herencia y Testamento Digital",
        short: "Tu vida digital también se hereda. La planeamos antes y la rescatamos después.",
        closeExample: "Tu padre falleció con Bitcoin, cuentas, fotos y dominios. Nadie sabe entrar a nada.",
        problematicas: [
          {
            id: "testamento-cripto",
            title: "Quieres dejarle tu cripto a alguien — pero seguro",
            hook: "Ni quieres que se pierda. Ni quieres que un familiar lo vea antes de tiempo.",
            examples: [
              "Tienes 300 mil USD en una Ledger y dos hijos menores. Quieres que reciban su parte cuando cumplan 25, no antes.",
              "Tu negocio depende de claves que solo tú conoces y un accidente sería suficiente para perder todo.",
              "Quieres que tu esposa reciba acceso solo si te pasa algo, sin que pueda usarlo en vida."
            ],
            solution: "Custodia jurídica multi-firma, instrucciones notariales, vehículo testamentario digital con liberación condicional verificable."
          },
          {
            id: "heredaste-cripto",
            title: "Heredaste cripto pero no tienes las claves",
            hook: "Las claves murieron con él. Ahora viene la parte legal.",
            examples: [
              "Tu papá tenía Bitcoin en un exchange y nadie en la familia sabe qué exchange ni qué correo usaba.",
              "Encontraron un papel con palabras pero parecen estar incompletas. ¿Hay forma de recuperarlas?",
              "Tu hermano dejó NFTs valiosos en su wallet pero nunca dijo dónde está la seed."
            ],
            solution: "Investigación forense de claves, gestión con exchanges, acreditación sucesoria, eventual recuperación judicial."
          },
          {
            id: "cuentas-redes-fallecido",
            title: "Cuentas y redes de un familiar fallecido",
            hook: "Facebook no responde. El correo bloqueado. Las fotos atrapadas adentro.",
            examples: [
              "Quieres recuperar el Instagram de tu hermana fallecida con fotos irrepetibles.",
              "Tu mamá tenía un PayPal con saldo y los hijos no pueden retirarlo.",
              "Un familiar dejó su iCloud sin contraseña y ahí están todos los documentos importantes."
            ],
            solution: "Solicitudes formales a plataformas, acta sucesoria internacional, defensa de derecho post-mortem a la imagen y memoria."
          },
          {
            id: "negocio-digital-mortis",
            title: "Tu negocio digital cuando ya no estés",
            hook: "Tu canal, tu cuenta de Amazon, tu cartera de criptomonedas: todo eso es patrimonio.",
            examples: [
              "Eres creador con 800 mil seguidores y un equipo. Si te pasa algo, ¿quién hereda y opera la cuenta?",
              "Tu tienda de Shopify factura medio millón al mes y depende de un correo personal.",
              "Tu portafolio cripto está disperso en seis exchanges y tres wallets."
            ],
            solution: "Plan de continuidad patrimonial digital, fideicomiso de operación, sucesión empresarial documentada."
          }
        ]
      },
      en: {
        title: "Digital Inheritance & Will",
        short: "Your digital life is also inherited. We plan it beforehand and rescue it after.",
        closeExample: "Your father passed away with Bitcoin, accounts, photos and domains. No one can access anything.",
        problematicas: [
          {
            id: "testamento-cripto",
            title: "You want to leave your crypto to someone — safely",
            hook: "You don't want it lost. You don't want it accessed too early.",
            examples: [
              "You hold 300k USD in a Ledger and have two minor children. You want them to receive their share at 25, not before.",
              "Your business depends on keys only you know — one accident would wipe it out.",
              "You want your spouse to gain access only if something happens to you, not while you live."
            ],
            solution: "Legal multi-sig custody, notarial instructions, digital will vehicle with verifiable conditional release."
          },
          {
            id: "heredaste-cripto",
            title: "You inherited crypto but you don't have the keys",
            hook: "The keys died with him. Now comes the legal part.",
            examples: [
              "Your father had Bitcoin on an exchange and no one in the family knows which one or which email he used.",
              "They found a paper with words but they seem incomplete. Is there a way to recover them?",
              "Your brother left valuable NFTs in his wallet but never said where the seed is."
            ],
            solution: "Forensic key investigation, exchange negotiations, estate certification, judicial recovery when needed."
          },
          {
            id: "cuentas-redes-fallecido",
            title: "Accounts and social media of a deceased family member",
            hook: "Facebook won't respond. The email is locked. The photos trapped inside.",
            examples: [
              "You want to recover your late sister's Instagram with irreplaceable photos.",
              "Your mother had a PayPal balance and the children can't withdraw it.",
              "A relative left their iCloud password-locked and all the important documents are inside."
            ],
            solution: "Formal platform requests, international estate certification, defense of post-mortem image and memory rights."
          },
          {
            id: "negocio-digital-mortis",
            title: "Your digital business when you're no longer here",
            hook: "Your channel, your Amazon store, your wallet: all of that is estate.",
            examples: [
              "You're a creator with 800k followers and a team. If something happens, who inherits and runs the account?",
              "Your Shopify store bills half a million a month and depends on a personal email.",
              "Your crypto portfolio is spread across six exchanges and three wallets."
            ],
            solution: "Digital estate continuity plan, operational trust, documented business succession."
          }
        ]
      },
      fr: {
        title: "Héritage et Testament Numérique",
        short: "Votre vie numérique s'hérite aussi. Nous la planifions et la récupérons.",
        closeExample: "Votre père est décédé avec du Bitcoin, des comptes, des photos et des domaines. Personne ne peut accéder à rien.",
        problematicas: [
          {
            id: "testamento-cripto",
            title: "Vous voulez léguer votre crypto — en sécurité",
            hook: "Ni vous ne voulez la perdre. Ni qu'un proche y accède trop tôt.",
            examples: [
              "Vous avez 300k USD dans un Ledger et deux enfants mineurs. Vous voulez qu'ils héritent à 25 ans.",
              "Votre activité dépend de clés que seul vous connaissez.",
              "Vous voulez que votre conjoint accède seulement s'il vous arrive quelque chose."
            ],
            solution: "Custodie juridique multi-signature, instructions notariales, véhicule testamentaire numérique avec libération conditionnelle vérifiable."
          },
          {
            id: "heredaste-cripto",
            title: "Vous avez hérité de la crypto sans avoir les clés",
            hook: "Les clés sont mortes avec lui. La partie juridique commence.",
            examples: [
              "Votre père avait du Bitcoin sur un exchange et personne ne sait lequel ni quel email il utilisait.",
              "On a trouvé un papier avec des mots mais ils semblent incomplets.",
              "Votre frère a laissé des NFT précieux dans son wallet sans dire où est la seed."
            ],
            solution: "Investigation forensique des clés, négociation avec exchanges, certification successorale, récupération judiciaire si nécessaire."
          },
          {
            id: "cuentas-redes-fallecido",
            title: "Comptes et réseaux d'un proche décédé",
            hook: "Facebook ne répond pas. L'email est bloqué. Les photos sont prisonnières.",
            examples: [
              "Vous voulez récupérer l'Instagram de votre sœur défunte avec des photos irremplaçables.",
              "Votre mère avait un solde PayPal que les enfants ne peuvent pas retirer.",
              "Un proche a laissé son iCloud verrouillé avec tous les documents importants."
            ],
            solution: "Demandes formelles aux plateformes, certification successorale internationale, défense du droit post-mortem à l'image."
          },
          {
            id: "negocio-digital-mortis",
            title: "Votre entreprise numérique quand vous ne serez plus là",
            hook: "Votre chaîne, votre boutique Amazon, votre portefeuille : tout cela est patrimoine.",
            examples: [
              "Vous êtes créateur avec 800k abonnés et une équipe. Qui hérite et opère le compte ?",
              "Votre boutique Shopify facture un demi-million par mois et dépend d'un email personnel.",
              "Votre portefeuille crypto est dispersé sur six exchanges et trois wallets."
            ],
            solution: "Plan de continuité patrimoniale numérique, fiducie d'opération, succession entrepreneuriale documentée."
          }
        ]
      }
    }
  },
  {
    slug: "inteligencia-artificial",
    num: "03",
    accent: "forest",
    i18n: {
      es: {
        title: "Inteligencia Artificial y Derechos Digitales",
        short: "Quién es autor cuando autor también es la máquina.",
        closeExample: "Una IA generó una imagen igual a la tuya y la marca que te contrató la prefiere.",
        problematicas: [
          {
            id: "deepfake-suplantacion",
            title: "Hicieron un deepfake con tu cara",
            hook: "Necesitas que el video baje antes del lunes.",
            examples: [
              "Apareciste en un video porno deepfake circulando en WhatsApp y un compañero de trabajo lo vio.",
              "Una pareja ex publica audios falsos tuyos clonados con IA en redes sociales.",
              "Una empresa usó tu rostro en publicidad sin tu consentimiento, generada por IA."
            ],
            solution: "Takedown urgente plataforma por plataforma, denuncia ante INAI/FGR, indemnización civil, ordenes de protección."
          },
          {
            id: "ia-genero-mi-contenido",
            title: "Una IA generó algo demasiado parecido a lo tuyo",
            hook: "Tu estilo es identificable. Y ahora cualquiera lo puede replicar.",
            examples: [
              "Una marca usó Midjourney con tu nombre como prompt y publicó la imagen.",
              "Un youtuber clonó tu voz con ElevenLabs y narra videos como si fueras tú.",
              "Un servicio entrenó su modelo con tus textos publicados y ahora vende contenido derivado."
            ],
            solution: "Notificación formal a plataforma y entrenador, cease-and-desist, registro defensivo, eventual demanda por daño moral."
          },
          {
            id: "uso-empresa-ia",
            title: "Tu empresa usa IA y tienes miedo de que te demanden",
            hook: "Generaste con IA. ¿Quién es el dueño? ¿Y si el output infringe?",
            examples: [
              "Tu agencia entrega assets generados con IA al cliente. El cliente quiere garantía de no infracción.",
              "Tu chatbot dio información incorrecta a un cliente y la empresa quiere demandarte.",
              "Tu equipo entrena un modelo con datos públicos y un competidor amenaza con denunciarte."
            ],
            solution: "Política de uso de IA, contratos de licencia y indemnización, due diligence de modelos, mapa de responsabilidad."
          },
          {
            id: "autoria-ia",
            title: "Hiciste algo con IA y quieres protegerlo",
            hook: "El IMPI no registra obras hechas por máquinas. Pero hay vías.",
            examples: [
              "Diseñaste una marca con Midjourney y quieres registrarla. ¿Es tuya?",
              "Escribiste un libro asistido por IA y la editorial pregunta cuánto es IA y cuánto tuyo.",
              "Tu música tiene voces clonadas con IA — y el label no sabe cómo licenciarla."
            ],
            solution: "Estrategia de autoría híbrida, registro de la parte humana, contratos de cesión, marca asociada al output."
          }
        ]
      },
      en: {
        title: "AI & Digital Rights",
        short: "Who is the author when the author is also the machine.",
        closeExample: "An AI generated an image identical to yours and the client preferred it.",
        problematicas: [
          {
            id: "deepfake-suplantacion",
            title: "They made a deepfake with your face",
            hook: "You need that video down before Monday.",
            examples: [
              "You appear in a deepfake porn video circulating on WhatsApp and a coworker saw it.",
              "An ex partner publishes AI-cloned fake audios of you on social media.",
              "A company used your AI-generated face in advertising without consent."
            ],
            solution: "Urgent takedown across platforms, INAI/FGR filing, civil compensation, protective orders."
          },
          {
            id: "ia-genero-mi-contenido",
            title: "An AI generated something too similar to yours",
            hook: "Your style is identifiable. Now anyone can replicate it.",
            examples: [
              "A brand used Midjourney with your name as a prompt and published the result.",
              "A youtuber cloned your voice with ElevenLabs.",
              "A service trained its model with your published texts."
            ],
            solution: "Formal notice to platform and trainer, cease-and-desist, defensive registration, eventual moral damages claim."
          },
          {
            id: "uso-empresa-ia",
            title: "Your company uses AI and fears being sued",
            hook: "You generated with AI. Who owns it? What if it infringes?",
            examples: [
              "Your agency delivers AI-generated assets and the client wants infringement warranty.",
              "Your chatbot gave wrong information and the company wants to sue you.",
              "Your team trains a model with public data and a competitor threatens to report you."
            ],
            solution: "AI use policy, license and indemnification contracts, model due diligence, responsibility mapping."
          },
          {
            id: "autoria-ia",
            title: "You made something with AI and want to protect it",
            hook: "IMPI doesn't register machine-made works. But there are paths.",
            examples: [
              "You designed a brand with Midjourney and want to register it.",
              "You wrote an AI-assisted book and the publisher wants to know how much is AI.",
              "Your music has AI-cloned voices and the label doesn't know how to license it."
            ],
            solution: "Hybrid authorship strategy, registration of human component, assignment contracts, trademark linked to output."
          }
        ]
      },
      fr: {
        title: "IA et Droits Numériques",
        short: "Qui est l'auteur quand l'auteur est aussi la machine.",
        closeExample: "Une IA a généré une image identique à la vôtre et le client l'a préférée.",
        problematicas: [
          {
            id: "deepfake-suplantacion",
            title: "On a fait un deepfake avec votre visage",
            hook: "Il faut que cette vidéo disparaisse avant lundi.",
            examples: [
              "Vous apparaissez dans une vidéo deepfake circulant sur WhatsApp et un collègue l'a vue.",
              "Un ex-partenaire publie de faux audios clonés par IA sur les réseaux.",
              "Une entreprise a utilisé votre visage généré par IA sans consentement."
            ],
            solution: "Retrait urgent multi-plateformes, signalement CNIL/INAI, indemnisation, ordonnances de protection."
          },
          {
            id: "ia-genero-mi-contenido",
            title: "Une IA a généré quelque chose trop similaire au vôtre",
            hook: "Votre style est identifiable. Désormais réplicable.",
            examples: [
              "Une marque a utilisé Midjourney avec votre nom comme prompt.",
              "Un youtuber a cloné votre voix avec ElevenLabs.",
              "Un service a entraîné son modèle avec vos textes publiés."
            ],
            solution: "Notification formelle, mise en demeure, enregistrement défensif, action en dommages moraux."
          },
          {
            id: "uso-empresa-ia",
            title: "Votre entreprise utilise l'IA et craint d'être poursuivie",
            hook: "Vous avez généré avec l'IA. Qui en est propriétaire ?",
            examples: [
              "Votre agence livre des assets IA et le client veut une garantie.",
              "Votre chatbot a donné une mauvaise information et la société veut vous poursuivre.",
              "Votre équipe entraîne un modèle et un concurrent menace de vous dénoncer."
            ],
            solution: "Politique d'usage IA, contrats de licence et garantie, due diligence des modèles, cartographie de responsabilité."
          },
          {
            id: "autoria-ia",
            title: "Vous avez créé avec l'IA et voulez le protéger",
            hook: "L'INPI/IMPI n'enregistre pas les œuvres faites par machines. Mais il y a des voies.",
            examples: [
              "Vous avez conçu une marque avec Midjourney et voulez la déposer.",
              "Vous avez écrit un livre assisté par IA.",
              "Votre musique contient des voix clonées par IA."
            ],
            solution: "Stratégie d'auteur hybride, dépôt de la partie humaine, contrats de cession, marque liée à la sortie."
          }
        ]
      }
    }
  },
  {
    slug: "fintech-pagos",
    num: "04",
    accent: "gold",
    i18n: {
      es: {
        title: "FinTech y Pagos Digitales",
        short: "Cuando el dinero se mueve más rápido que la regulación.",
        closeExample: "Tu wallet mueve millones entre cripto y fiat. La CNBV te acaba de mandar un oficio.",
        problematicas: [
          {
            id: "ley-fintech",
            title: "Tu app de pagos creció. Ahora aplica Ley Fintech",
            hook: "Pasaste los umbrales sin darte cuenta. Eres ITF, IFPE o ambos.",
            examples: [
              "Tu wallet de pagos tiene 500 mil usuarios y la CNBV te llamó.",
              "Permites comprar cripto con tarjeta y eres VASP sin saberlo.",
              "Procesas remesas internacionales sin licencia de transmisor."
            ],
            solution: "Análisis de modelo, registro IFPE/ITF, programa AML/KYC, asesoría continua CNBV."
          },
          {
            id: "cuentas-congeladas",
            title: "Te congelaron una cuenta",
            hook: "Banco, exchange o procesador: alguien decidió y tú no.",
            examples: [
              "Binance congeló tu cuenta porque sospechan KYC y no responden.",
              "Tu banco te bloqueó depósitos por movimientos 'inusuales' con cripto.",
              "Stripe cortó tu pasarela sin explicación y dejó tu negocio sin cobrar."
            ],
            solution: "Defensa documental, escalado interno, denuncia regulatoria, recuperación de fondos."
          },
          {
            id: "ramp-cripto",
            title: "Quieres operar un on/off-ramp cripto-fiat",
            hook: "La parte técnica está. La parte legal cambia cada trimestre.",
            examples: [
              "Tu app convierte USDT a MXN y necesitas saber qué licencia aplica.",
              "Tu OTC P2P creció y un cliente te denunció por intermediación.",
              "Tu plataforma de stablecoins quiere abrir Brasil, Colombia y Chile."
            ],
            solution: "Estructura multi-juris, compliance KYC/AML proporcional, registro y operación."
          },
          {
            id: "stablecoin-emision",
            title: "Quieres emitir una stablecoin local",
            hook: "MXN-pegged, ARS-pegged, COP-pegged: el reto no es técnico.",
            examples: [
              "Quieres lanzar un peso digital respaldado 1:1 con MXN en custodia.",
              "Tu fondo quiere tokenizar activos en stablecoin propia.",
              "Un banco te pidió una opinión de viabilidad legal de stablecoin de marca blanca."
            ],
            solution: "Estructura legal de reserva, opinión regulatoria, autorización CNBV/Banxico, integración legal-técnica."
          }
        ]
      },
      en: {
        title: "FinTech & Digital Payments",
        short: "When money moves faster than regulation.",
        closeExample: "Your wallet moves millions between crypto and fiat. CNBV just notified you.",
        problematicas: [
          {
            id: "ley-fintech",
            title: "Your payments app grew. Now Fintech law applies",
            hook: "You crossed the threshold without noticing.",
            examples: [
              "Your wallet has 500k users and CNBV called.",
              "You let users buy crypto with card and you're a VASP without realizing.",
              "You process international remittances without a transmitter license."
            ],
            solution: "Model analysis, IFPE/ITF filing, AML/KYC program, ongoing CNBV counsel."
          },
          {
            id: "cuentas-congeladas",
            title: "Your account was frozen",
            hook: "Bank, exchange, processor: someone decided, not you.",
            examples: [
              "Binance froze your account over KYC suspicion and won't respond.",
              "Your bank blocked deposits over 'unusual' crypto movements.",
              "Stripe cut your gateway without explanation."
            ],
            solution: "Documentary defense, internal escalation, regulatory complaint, fund recovery."
          },
          {
            id: "ramp-cripto",
            title: "You want to run a crypto-fiat on/off-ramp",
            hook: "The technical side is ready. The legal changes each quarter.",
            examples: [
              "Your app converts USDT to MXN.",
              "Your P2P OTC grew and a client reported you.",
              "Your stablecoin platform wants to open Brazil, Colombia, Chile."
            ],
            solution: "Multi-juris structure, proportional KYC/AML, registration and operation."
          },
          {
            id: "stablecoin-emision",
            title: "You want to issue a local stablecoin",
            hook: "The challenge isn't technical.",
            examples: [
              "You want to launch a digital MXN backed 1:1.",
              "Your fund wants to tokenize assets via its own stablecoin.",
              "A bank asked you for a white-label feasibility opinion."
            ],
            solution: "Reserve legal structure, regulatory opinion, CNBV/Banxico authorization, legal-tech integration."
          }
        ]
      },
      fr: {
        title: "FinTech et Paiements Numériques",
        short: "Quand l'argent va plus vite que la régulation.",
        closeExample: "Votre wallet bouge des millions entre crypto et fiat. La CNBV vient de vous notifier.",
        problematicas: [
          {
            id: "ley-fintech",
            title: "Votre app de paiements a grandi. La loi Fintech s'applique",
            hook: "Vous avez franchi le seuil sans le voir.",
            examples: [
              "Votre wallet a 500k utilisateurs et la CNBV vous a appelé.",
              "Vous permettez d'acheter de la crypto par carte et êtes VASP.",
              "Vous traitez des envois internationaux sans licence de transmetteur."
            ],
            solution: "Analyse du modèle, dépôt IFPE/ITF, programme AML/KYC, conseil CNBV continu."
          },
          {
            id: "cuentas-congeladas",
            title: "Votre compte a été gelé",
            hook: "Banque, exchange, processeur : quelqu'un a décidé, pas vous.",
            examples: [
              "Binance a gelé votre compte et ne répond pas.",
              "Votre banque a bloqué des dépôts pour mouvements 'inhabituels'.",
              "Stripe a coupé votre passerelle sans explication."
            ],
            solution: "Défense documentaire, escalade interne, plainte régulatoire, récupération de fonds."
          },
          {
            id: "ramp-cripto",
            title: "Vous voulez opérer une rampe crypto-fiat",
            hook: "La technique est prête. Le juridique change chaque trimestre.",
            examples: [
              "Votre app convertit USDT en MXN.",
              "Votre OTC P2P a grandi et un client vous a dénoncé.",
              "Votre plateforme de stablecoins veut ouvrir le Brésil, la Colombie, le Chili."
            ],
            solution: "Structure multi-juridictionnelle, KYC/AML proportionnel, enregistrement et opération."
          },
          {
            id: "stablecoin-emision",
            title: "Vous voulez émettre un stablecoin local",
            hook: "Le défi n'est pas technique.",
            examples: [
              "Vous voulez lancer un MXN numérique adossé 1:1.",
              "Votre fonds veut tokeniser des actifs via stablecoin propre.",
              "Une banque demande une opinion de faisabilité white-label."
            ],
            solution: "Structure juridique de réserve, opinion régulatoire, autorisation CNBV/Banxico, intégration juridico-technique."
          }
        ]
      }
    }
  },
  {
    slug: "economia-creadores",
    num: "05",
    accent: "ember",
    avatar: "portrait",
    i18n: {
      es: {
        title: "Economía de Creadores",
        short: "Tu cara, tu marca, tu ingreso, tu propiedad.",
        closeExample: "Vives de TikTok y OnlyFans. Cobras en cuatro países. Tu marca eres tú.",
        problematicas: [
          {
            id: "estructura-creator",
            title: "Quieres estructurarte como empresa pero sigues siendo tú",
            hook: "Cobras como persona física y pierdes la mitad. Hay forma legal de no perderla.",
            examples: [
              "Facturas 200 mil dólares al año en YouTube y AdSense te paga a tu RFC personal.",
              "Tu manager te dice que armes una S.A. pero no sabes si te conviene.",
              "Vives entre México y Madrid y no sabes dónde declarar."
            ],
            solution: "Estructura corporativa optimizada (LLC, S de RL, holding), planeación fiscal lícita, tratados de doble tributación."
          },
          {
            id: "deal-marca",
            title: "Una marca te ofreció un deal y su contrato es trampa",
            hook: "Cláusula de exclusividad de 5 años. Cesión perpetua de imagen. Lo viste por encima.",
            examples: [
              "Te ofrecen 80 mil USD por una campaña pero te quitan derechos sobre tu rostro de por vida.",
              "El contrato dice 'territorio mundial' y tu agencia local también quería usarlo.",
              "Te ponen non-compete con cualquier marca del sector — incluso después de terminar."
            ],
            solution: "Revisión y renegociación de contratos, contraoferta de términos, defensa post-firma si ya firmaste."
          },
          {
            id: "robo-contenido",
            title: "Te están reposteando contenido sin permiso",
            hook: "Cuentas grandes lo bajan en horas. Las pequeñas pueden tomar meses.",
            examples: [
              "Una página fan de Instagram repostea tus reels y monetiza con ellos.",
              "Un creador de Brasil traduce tus videos y los sube como propios.",
              "Una agencia usa tus fotos en su portfolio sin pagarte."
            ],
            solution: "DMCA, takedowns plataforma por plataforma, demandas cuando aplica, watermarking estratégico."
          },
          {
            id: "onlyfans-fiscal",
            title: "Tu contenido es +18 y la fiscalización es complicada",
            hook: "Bancos te cierran. SAT te audita. Plataformas te exigen W-8BEN. Pasa.",
            examples: [
              "Vives en México, cobras en USD de OnlyFans, y el SAT te quiere fiscalizar como exportadora de servicios.",
              "Tu banco cerró tu cuenta sin explicar — sospechan por el origen del dinero.",
              "Quieres declarar correctamente pero ningún contador acepta el modelo."
            ],
            solution: "Estructura fiscal específica, defensa bancaria, defensa SAT, normalización con flujo internacional."
          }
        ]
      },
      en: {
        title: "Creator Economy",
        short: "Your face, your brand, your income, your property.",
        closeExample: "You live off TikTok and OnlyFans. You bill in four countries. Your brand is you.",
        problematicas: [
          {
            id: "estructura-creator",
            title: "You want to incorporate but you're still you",
            hook: "You bill as individual and lose half. There's a legal way not to.",
            examples: [
              "You bill 200k USD/year on YouTube and AdSense pays your personal tax ID.",
              "Your manager says set up an entity but you don't know if it fits.",
              "You live between Mexico and Madrid and don't know where to file."
            ],
            solution: "Optimized corporate structure (LLC, S de RL, holding), lawful tax planning, treaty use."
          },
          {
            id: "deal-marca",
            title: "A brand offered a deal and the contract is a trap",
            hook: "5-year exclusivity. Perpetual image assignment. You skimmed it.",
            examples: [
              "Offered 80k USD for a campaign but you lose your face rights for life.",
              "Contract says 'worldwide' and your local agency also wanted it.",
              "Non-compete with the entire sector — even after termination."
            ],
            solution: "Contract review and renegotiation, counter-terms, post-signing defense."
          },
          {
            id: "robo-contenido",
            title: "They're reposting your content without permission",
            hook: "Big accounts take hours. Small ones can take months.",
            examples: [
              "An Instagram fan page reposts your reels and monetizes them.",
              "A creator in Brazil translates your videos as their own.",
              "An agency uses your photos in their portfolio without paying."
            ],
            solution: "DMCA, takedowns across platforms, suits when applicable, strategic watermarking."
          },
          {
            id: "onlyfans-fiscal",
            title: "Your content is +18 and tax is complicated",
            hook: "Banks close. SAT audits. Platforms require W-8BEN. We've seen it.",
            examples: [
              "You live in Mexico, get paid USD from OnlyFans, SAT wants to audit you as a service exporter.",
              "Your bank closed your account without explanation.",
              "You want to file correctly but no accountant accepts the model."
            ],
            solution: "Specific tax structure, bank defense, SAT defense, normalization with international flow."
          }
        ]
      },
      fr: {
        title: "Économie des Créateurs",
        short: "Votre visage, votre marque, vos revenus, votre propriété.",
        closeExample: "Vous vivez de TikTok et OnlyFans. Vous facturez dans quatre pays.",
        problematicas: [
          {
            id: "estructura-creator",
            title: "Vous voulez vous structurer en société",
            hook: "Vous facturez en personne physique et perdez la moitié.",
            examples: [
              "Vous facturez 200k USD/an sur YouTube payés sur votre identifiant fiscal personnel.",
              "Votre manager veut une société mais vous hésitez.",
              "Vous vivez entre le Mexique et Madrid et ne savez où déclarer."
            ],
            solution: "Structure d'entreprise optimisée (LLC, holding), planification fiscale licite, conventions fiscales."
          },
          {
            id: "deal-marca",
            title: "Une marque vous a proposé un deal et le contrat est un piège",
            hook: "Exclusivité 5 ans. Cession perpétuelle. Vous l'avez survolé.",
            examples: [
              "On vous propose 80k USD mais on garde vos droits à l'image à vie.",
              "Le contrat dit 'territoire mondial'.",
              "Non-concurrence avec tout le secteur — même après résiliation."
            ],
            solution: "Revue et renégociation, contre-propositions, défense post-signature."
          },
          {
            id: "robo-contenido",
            title: "On reposte votre contenu sans permission",
            hook: "Les grands comptes : quelques heures. Les petits : des mois.",
            examples: [
              "Une page fan Instagram reposte vos reels et les monétise.",
              "Un créateur au Brésil traduit vos vidéos comme siennes.",
              "Une agence utilise vos photos dans son portfolio sans payer."
            ],
            solution: "DMCA, retraits multi-plateformes, poursuites quand applicable, watermarking stratégique."
          },
          {
            id: "onlyfans-fiscal",
            title: "Votre contenu est +18 et le fiscal est compliqué",
            hook: "Les banques ferment. Le fisc audite. Les plateformes exigent W-8BEN.",
            examples: [
              "Vous vivez au Mexique, êtes payée en USD par OnlyFans.",
              "Votre banque a fermé votre compte sans explication.",
              "Vous voulez déclarer correctement mais aucun comptable n'accepte le modèle."
            ],
            solution: "Structure fiscale spécifique, défense bancaire, défense fiscale, normalisation des flux internationaux."
          }
        ]
      }
    }
  },
  {
    slug: "propiedad-intelectual",
    num: "06",
    accent: "forest",
    i18n: {
      es: {
        title: "Propiedad Intelectual Digital",
        short: "Lo que llamas tuyo. Demuéstralo.",
        closeExample: "Llevas dos años usando un nombre y alguien acaba de registrarlo en el IMPI.",
        problematicas: [
          {
            id: "marca-tomada",
            title: "Alguien registró tu marca antes que tú",
            hook: "Tu marca lleva años en redes. Hoy aparece registrada por otro.",
            examples: [
              "Tu pequeño estudio creativo vendía con un nombre y un troll registró la marca para revenderla.",
              "Tu startup en operación tres años recibió cease-and-desist de una marca registrada después.",
              "Un competidor de mala fe registró tu nombre con leves variantes."
            ],
            solution: "Oposición, nulidad, prueba de uso anterior, recuperación o transacción estratégica."
          },
          {
            id: "registro-multimedia",
            title: "Quieres registrar algo que no es 'marca tradicional'",
            hook: "Sonido. Color. Movimiento. NFT. El IMPI lo permite — si sabes pedirlo.",
            examples: [
              "Tu jingle es reconocible y quieres registrarlo como marca sonora.",
              "Tu color corporativo es identitario y temes que lo copien.",
              "Tu personaje animado debe protegerse como obra plus marca."
            ],
            solution: "Estrategia de registro multimedia, marcas no tradicionales, derecho de autor combinado."
          },
          {
            id: "uso-no-autorizado",
            title: "Encontraste tu trabajo en otro lado",
            hook: "Tu diseño en una camiseta. Tu foto en un anuncio. Tu canción en TikTok.",
            examples: [
              "Una marca DTC vende camisetas con tu ilustración sin licencia.",
              "Una agencia de Brasil usa tus fotos como contenido orgánico.",
              "Una marca importante samplea tu canción sin acuerdo."
            ],
            solution: "Cese y desista, licenciamiento retroactivo, demanda civil con cálculo de daños."
          },
          {
            id: "nft-derecho-autor",
            title: "Quieres minar tu obra como NFT (o ya lo hicieron sin ti)",
            hook: "Mintear no es lo mismo que tener derechos. Y a veces alguien mintea lo tuyo.",
            examples: [
              "Quieres tokenizar tu colección de arte y necesitas claridad sobre qué transfiere el NFT.",
              "Alguien minteó tu obra en OpenSea sin tu permiso y está vendiendo.",
              "Tu música está minteada por un fan que cobra royalties."
            ],
            solution: "Smart-contract de royalties propio, takedown OpenSea/Rarible, plan de minteo defensivo."
          }
        ]
      },
      en: {
        title: "Digital IP",
        short: "What you call yours. Prove it.",
        closeExample: "You've used a name for two years and someone just registered it at the trademark office.",
        problematicas: [
          {
            id: "marca-tomada",
            title: "Someone registered your brand before you",
            hook: "Your brand has been online for years. Today it's registered by someone else.",
            examples: [
              "Your small creative studio sold under a name and a troll registered the mark.",
              "Your three-year-old startup got a cease-and-desist from a later-registered mark.",
              "A bad-faith competitor registered your name with light variants."
            ],
            solution: "Opposition, cancellation, prior-use proof, recovery or strategic settlement."
          },
          {
            id: "registro-multimedia",
            title: "You want to register something that isn't a 'traditional mark'",
            hook: "Sound. Color. Motion. NFT. Possible — if you know how to file.",
            examples: [
              "Your jingle is recognizable and you want a sound mark.",
              "Your corporate color is identity-defining.",
              "Your animated character needs work + mark protection."
            ],
            solution: "Multimedia registration strategy, non-traditional marks, combined copyright."
          },
          {
            id: "uso-no-autorizado",
            title: "You found your work somewhere else",
            hook: "Your design on a shirt. Your photo in an ad. Your song on TikTok.",
            examples: [
              "A DTC brand sells shirts with your illustration unlicensed.",
              "An agency in Brazil uses your photos as organic content.",
              "A major brand samples your song without an agreement."
            ],
            solution: "Cease and desist, retroactive licensing, civil suit with damages."
          },
          {
            id: "nft-derecho-autor",
            title: "You want to mint your work as NFT (or someone did it for you)",
            hook: "Minting isn't owning rights. And sometimes someone mints yours.",
            examples: [
              "You want to tokenize your collection and need clarity on what the NFT transfers.",
              "Someone minted your work on OpenSea without permission.",
              "Your music is minted by a fan collecting royalties."
            ],
            solution: "Custom royalty smart contract, OpenSea/Rarible takedown, defensive mint plan."
          }
        ]
      },
      fr: {
        title: "Propriété Intellectuelle Numérique",
        short: "Ce que vous dites à vous. Prouvez-le.",
        closeExample: "Vous utilisez un nom depuis deux ans et quelqu'un vient de le déposer.",
        problematicas: [
          {
            id: "marca-tomada",
            title: "Quelqu'un a déposé votre marque avant vous",
            hook: "Votre marque existe en ligne depuis des années. Aujourd'hui, elle appartient à un autre.",
            examples: [
              "Votre studio créatif vendait sous un nom et un troll a déposé la marque.",
              "Votre startup de trois ans a reçu une mise en demeure d'une marque déposée après.",
              "Un concurrent de mauvaise foi a déposé votre nom avec variantes."
            ],
            solution: "Opposition, nullité, preuve d'antériorité, récupération ou transaction stratégique."
          },
          {
            id: "registro-multimedia",
            title: "Vous voulez déposer quelque chose qui n'est pas une 'marque classique'",
            hook: "Son. Couleur. Mouvement. NFT. Possible si vous savez le demander.",
            examples: [
              "Votre jingle est reconnaissable et vous voulez le déposer.",
              "Votre couleur d'entreprise est identitaire.",
              "Votre personnage animé doit être protégé comme œuvre et marque."
            ],
            solution: "Stratégie de dépôt multimédia, marques non traditionnelles, droit d'auteur combiné."
          },
          {
            id: "uso-no-autorizado",
            title: "Vous avez retrouvé votre travail ailleurs",
            hook: "Votre design sur un t-shirt. Votre photo dans une pub. Votre musique sur TikTok.",
            examples: [
              "Une marque DTC vend des t-shirts avec votre illustration sans licence.",
              "Une agence au Brésil utilise vos photos.",
              "Une grande marque sample votre musique sans accord."
            ],
            solution: "Mise en demeure, licence rétroactive, action civile avec dommages."
          },
          {
            id: "nft-derecho-autor",
            title: "Vous voulez minter votre œuvre en NFT (ou on l'a fait sans vous)",
            hook: "Minter n'est pas avoir les droits.",
            examples: [
              "Vous voulez tokeniser votre collection.",
              "Quelqu'un a minté votre œuvre sur OpenSea sans permission.",
              "Votre musique est mintée par un fan qui touche les royalties."
            ],
            solution: "Smart contract de royalties propre, retrait OpenSea/Rarible, plan de mint défensif."
          }
        ]
      }
    }
  },
  {
    slug: "privacidad-datos",
    num: "07",
    accent: "gold",
    i18n: {
      es: {
        title: "Privacidad y Protección de Datos",
        short: "El día que llame la autoridad, ya estará todo en orden.",
        closeExample: "Tu app guarda fotos de menores. Un papá te demandó. Ahora INAI llama.",
        problematicas: [
          {
            id: "incidente-datos",
            title: "Tuviste una fuga de datos",
            hook: "El reloj corre. 72 horas para notificar. Y la prensa puede llegar antes.",
            examples: [
              "Tu CRM se filtró y los datos de 40 mil clientes están en un foro.",
              "Un ex empleado se llevó la base de datos a la competencia.",
              "Un hacker pide rescate y la junta no sabe qué hacer."
            ],
            solution: "Plan de respuesta inmediato, notificación INAI, comunicación con afectados, defensa procedimental."
          },
          {
            id: "aviso-privacidad",
            title: "Tu aviso de privacidad es genérico (y peligroso)",
            hook: "Copia y pega de hace 5 años. El que firmaste no cubre lo que haces hoy.",
            examples: [
              "Tu app recolecta ubicación pero el aviso dice 'datos necesarios para el servicio'.",
              "Compartes datos con proveedores de USA sin cláusula de transferencia.",
              "Procesas datos de menores y no tienes consentimiento parental."
            ],
            solution: "Aviso correcto y específico, mapa de transferencias, DPAs con proveedores, política de menores."
          },
          {
            id: "menores-plataforma",
            title: "Tu plataforma tiene usuarios menores de edad",
            hook: "Regla extra. Consentimiento parental. Y atención del regulador.",
            examples: [
              "Tu app educativa recibe niños de 8 años con permiso de papá.",
              "Tu juego permite chat entre menores y desconocidos.",
              "Tu red social tiene perfiles 'de 13 años' que claramente son menores."
            ],
            solution: "Protocolo COPPA/LFPDPPP, validación parental, moderación, defensa proactiva."
          },
          {
            id: "internacional-datos",
            title: "Operas en varios países y tu cumplimiento se ramificó",
            hook: "GDPR, LGPD, LFPDPPP, CCPA. Diferentes reglas, mismo cliente.",
            examples: [
              "Eres SaaS B2B con clientes en España y México.",
              "Tu app de salud opera en Brasil y los datos sensibles están en EEUU.",
              "Tienes una matriz EU y subsidiaria mexicana — el flujo de datos te complica."
            ],
            solution: "Política unificada multi-juris, encargados/responsables, transferencias documentadas, defensa coordinada."
          }
        ]
      },
      en: {
        title: "Privacy & Data Protection",
        short: "The day the regulator calls, everything is already in order.",
        closeExample: "Your app stores photos of minors. A parent sued. Now the regulator is calling.",
        problematicas: [
          {
            id: "incidente-datos",
            title: "You had a data breach",
            hook: "The clock is ticking. 72 hours to notify.",
            examples: [
              "Your CRM was leaked and 40k client records are in a forum.",
              "A former employee took the database to a competitor.",
              "A hacker demands ransom and the board doesn't know what to do."
            ],
            solution: "Immediate response plan, regulator notice, affected-user communication, procedural defense."
          },
          {
            id: "aviso-privacidad",
            title: "Your privacy notice is generic (and dangerous)",
            hook: "Copy-pasted 5 years ago. It doesn't cover what you do today.",
            examples: [
              "Your app collects location but the notice says 'data needed for service'.",
              "You share data with US providers without a transfer clause.",
              "You process minors' data without parental consent."
            ],
            solution: "Correct notice, transfer map, provider DPAs, minors policy."
          },
          {
            id: "menores-plataforma",
            title: "Your platform has underage users",
            hook: "Extra rules. Parental consent. Regulator attention.",
            examples: [
              "Your edu app onboards 8-year-olds with parent permission.",
              "Your game allows chat between minors and strangers.",
              "Your social network has '13' profiles that are obviously younger."
            ],
            solution: "COPPA/LFPDPPP protocol, parental validation, moderation, proactive defense."
          },
          {
            id: "internacional-datos",
            title: "You operate across countries and compliance forked",
            hook: "GDPR, LGPD, LFPDPPP, CCPA. Different rules, same customer.",
            examples: [
              "You're a B2B SaaS with clients in Spain and Mexico.",
              "Your health app operates in Brazil with data in the US.",
              "You have an EU parent and Mexican sub — data flow complicates things."
            ],
            solution: "Unified multi-juris policy, controller/processor mapping, documented transfers, coordinated defense."
          }
        ]
      },
      fr: {
        title: "Confidentialité et Données",
        short: "Le jour où le régulateur appelle, tout est déjà en ordre.",
        closeExample: "Votre app stocke des photos de mineurs. Un parent vous a poursuivi.",
        problematicas: [
          {
            id: "incidente-datos",
            title: "Vous avez subi une fuite de données",
            hook: "L'horloge tourne. 72 heures pour notifier.",
            examples: [
              "Votre CRM a fui et 40k clients sont sur un forum.",
              "Un ex-employé a pris la base.",
              "Un hacker demande une rançon."
            ],
            solution: "Plan de réponse immédiat, notification CNIL/INAI, communication aux victimes, défense procédurale."
          },
          {
            id: "aviso-privacidad",
            title: "Votre avis de confidentialité est générique (et dangereux)",
            hook: "Copié-collé il y a 5 ans.",
            examples: [
              "Votre app collecte la localisation mais l'avis dit 'données nécessaires'.",
              "Vous partagez des données avec des fournisseurs US sans clause.",
              "Vous traitez des données de mineurs sans consentement parental."
            ],
            solution: "Avis correct, cartographie des transferts, DPAs, politique mineurs."
          },
          {
            id: "menores-plataforma",
            title: "Votre plateforme a des utilisateurs mineurs",
            hook: "Règles supplémentaires. Consentement parental.",
            examples: [
              "Votre app éducative accueille des enfants de 8 ans.",
              "Votre jeu permet le chat entre mineurs et inconnus.",
              "Votre réseau social a des profils '13 ans' clairement plus jeunes."
            ],
            solution: "Protocole RGPD/COPPA, validation parentale, modération, défense proactive."
          },
          {
            id: "internacional-datos",
            title: "Vous opérez dans plusieurs pays",
            hook: "RGPD, LGPD, LFPDPPP, CCPA. Mêmes clients, règles différentes.",
            examples: [
              "Vous êtes SaaS B2B avec clients en Espagne et au Mexique.",
              "Votre app santé opère au Brésil avec données aux USA.",
              "Vous avez une mère UE et filiale mexicaine."
            ],
            solution: "Politique unifiée multi-juridictionnelle, cartographie responsable/sous-traitant, transferts documentés."
          }
        ]
      }
    }
  },
  {
    slug: "gaming-metaverso",
    num: "08",
    accent: "ember",
    i18n: {
      es: {
        title: "Gaming, Metaverso y XR",
        short: "Tu economía existe en un mundo virtual. La regulamos.",
        closeExample: "Eres dueño de una parcela en Decentraland y otro avatar dice que es suya.",
        problematicas: [
          {
            id: "propiedad-virtual",
            title: "Conflicto sobre propiedad virtual",
            hook: "El terreno es código. El derecho no lo es. Sí hay forma.",
            examples: [
              "Compraste una parcela en Decentraland y la plataforma la transfiere por error.",
              "Tu colección de skins fue 'devuelta' por el juego sin notificación.",
              "Tu avatar fue suspendido por reportes injustificados en VRChat."
            ],
            solution: "Reclamación contractual, defensa de propiedad virtual, recuperación negociada o judicial."
          },
          {
            id: "economia-in-game",
            title: "Quieres lanzar economía en tu juego",
            hook: "Loot boxes, mercados secundarios, tokens. Cada cosa con regla distinta.",
            examples: [
              "Tu juego tendrá market secundario de items y necesitas saber qué regulación aplica.",
              "Quieres vender loot boxes y Bélgica/Holanda los prohíben.",
              "Tus tokens in-game son tradeables fuera del juego."
            ],
            solution: "Diseño legal de economía, opinión multi-juris, T&C robustos, AML proporcional."
          },
          {
            id: "ar-imagen",
            title: "Tu app de AR captura rostros sin consentimiento",
            hook: "Apuntas la cámara. Identifica. Sube datos. Hay regla para todo eso.",
            examples: [
              "Tu app de moda AR mide rostros para recomendar productos.",
              "Tu Snap filter usa landmarks faciales sin aviso claro.",
              "Tu solución de retail captura clientes en tienda sin consentimiento."
            ],
            solution: "Aviso específico, consentimiento granular, limitación de uso, política específica de biométricos."
          },
          {
            id: "menores-metaverso",
            title: "Tu mundo virtual atrae a menores",
            hook: "Donde hay menores hay reglas adicionales. Y hay que verlas antes.",
            examples: [
              "Roblox-style platform donde aparecen niños con dinero virtual.",
              "Tu mundo permite chat libre entre cualquier usuario.",
              "Tienes economía real y menores pueden comprar."
            ],
            solution: "Verificación de edad, segmentación, política COPPA, controles parentales."
          }
        ]
      },
      en: {
        title: "Gaming, Metaverse & XR",
        short: "Your economy exists in a virtual world. We regulate it.",
        closeExample: "You own a parcel in Decentraland and another avatar claims it's theirs.",
        problematicas: [
          {
            id: "propiedad-virtual",
            title: "Virtual property dispute",
            hook: "The land is code. The law isn't. There's a way.",
            examples: [
              "You bought a parcel in Decentraland and the platform transferred it by error.",
              "Your skin collection was 'returned' by the game without notice.",
              "Your avatar was suspended in VRChat over false reports."
            ],
            solution: "Contractual claim, virtual-property defense, negotiated or judicial recovery."
          },
          {
            id: "economia-in-game",
            title: "You want to launch an in-game economy",
            hook: "Loot boxes, secondary markets, tokens. Each one with its own rule.",
            examples: [
              "Your game will have a secondary item market.",
              "You want to sell loot boxes — Belgium/Netherlands forbid them.",
              "Your in-game tokens are tradeable outside."
            ],
            solution: "Legal economy design, multi-juris opinion, robust T&Cs, proportional AML."
          },
          {
            id: "ar-imagen",
            title: "Your AR app captures faces without consent",
            hook: "You aim the camera. It identifies. Data is uploaded. Rules apply.",
            examples: [
              "Your fashion AR app measures faces.",
              "Your Snap filter uses facial landmarks without clear notice.",
              "Your retail solution captures customers in-store without consent."
            ],
            solution: "Specific notice, granular consent, use limitation, biometric-specific policy."
          },
          {
            id: "menores-metaverso",
            title: "Your virtual world attracts minors",
            hook: "Where there are minors, additional rules apply.",
            examples: [
              "Roblox-style platform with kids holding virtual currency.",
              "Open chat between any users.",
              "Real-money economy with minor access."
            ],
            solution: "Age verification, segmentation, COPPA policy, parental controls."
          }
        ]
      },
      fr: {
        title: "Gaming, Métaverse et XR",
        short: "Votre économie existe dans un monde virtuel.",
        closeExample: "Vous possédez une parcelle dans Decentraland et un autre avatar la revendique.",
        problematicas: [
          {
            id: "propiedad-virtual",
            title: "Litige sur la propriété virtuelle",
            hook: "Le terrain est du code. Le droit non.",
            examples: [
              "Vous avez acheté une parcelle dans Decentraland transférée par erreur.",
              "Votre collection de skins a été 'rendue' par le jeu.",
              "Votre avatar a été suspendu sur VRChat à tort."
            ],
            solution: "Réclamation contractuelle, défense de propriété virtuelle, récupération."
          },
          {
            id: "economia-in-game",
            title: "Vous voulez lancer une économie in-game",
            hook: "Loot boxes, marchés secondaires, jetons.",
            examples: [
              "Votre jeu aura un marché secondaire d'items.",
              "Vous voulez vendre des loot boxes interdites en Belgique.",
              "Vos jetons in-game sont échangeables à l'extérieur."
            ],
            solution: "Conception juridique de l'économie, opinion multi-juridictionnelle, CGV robustes, AML proportionnel."
          },
          {
            id: "ar-imagen",
            title: "Votre app AR capture des visages sans consentement",
            hook: "Vous pointez la caméra. Elle identifie. Des données partent.",
            examples: [
              "Votre app mode AR mesure les visages.",
              "Votre filtre Snap utilise des points faciaux sans avis clair.",
              "Votre solution retail capture les clients en magasin."
            ],
            solution: "Avis spécifique, consentement granulaire, limitation d'usage, politique biométrique."
          },
          {
            id: "menores-metaverso",
            title: "Votre monde virtuel attire des mineurs",
            hook: "Avec des mineurs, des règles supplémentaires.",
            examples: [
              "Plateforme type Roblox avec enfants et monnaie virtuelle.",
              "Chat libre entre tous les utilisateurs.",
              "Économie réelle accessible aux mineurs."
            ],
            solution: "Vérification d'âge, segmentation, politique COPPA, contrôles parentaux."
          }
        ]
      }
    }
  },
  {
    slug: "internacional-trafico",
    num: "09",
    accent: "gold",
    avatar: "tmec",
    i18n: {
      es: {
        title: "Transfronterizo y Nómadas Digitales",
        short: "Trabajas en cualquier parte. Lo legalizamos en todas.",
        closeExample: "Trabajas desde Bali, cobras desde Delaware, declaras en México. ¿Cuál es tu residencia?",
        problematicas: [
          {
            id: "residencia-fiscal",
            title: "No sabes dónde eres residente fiscal",
            hook: "Y los tres países que crees, te quieren cobrar.",
            examples: [
              "Vives 5 meses en México y 7 en Portugal. ¿Dónde declaras?",
              "Tu LLC de Delaware factura, tú vives en CDMX. SAT te quiere clasificar como residente.",
              "Cobras en USD y los movimientos a tu banco MX te marcan."
            ],
            solution: "Análisis CDI, certificados de residencia, defensa fiscal proactiva, plan de movilidad."
          },
          {
            id: "ronda-transfronteriza",
            title: "Tu ronda seed cruza varios países",
            hook: "Inversionistas USA, fundadores LatAm, vehículo Caymans. Y un país lo prohíbe.",
            examples: [
              "Tu fondo de Argentina quiere invertir en una startup Web3 con presencia en Cuba.",
              "Tu cap table incluye tokens y los abogados de tu lead investor están en pánico.",
              "Tu ronda incluye fondos con LP de Rusia y tienes preocupaciones de OFAC."
            ],
            solution: "Estructuración cap table multi-juris, opinión OFAC/sanciones, vehículos limpios."
          },
          {
            id: "visado-talento",
            title: "Necesitas o eres un visado de talento",
            hook: "O-1, EB-1, talento mexicano, golden visa Portugal. Cada uno con su trampa.",
            examples: [
              "Tu CTO necesita O-1 en USA y tienen 6 meses para juntar evidencia.",
              "Quieres mover tu equipo de 12 ingenieros a Lisboa.",
              "Quieres aplicar Mexican Talent visa para un especialista IA."
            ],
            solution: "Estrategia migratoria, recopilación de evidencia, vehículo legal de soporte, follow-through."
          },
          {
            id: "tmec-comercio",
            title: "Tu negocio cruza T-MEC y hay disputa",
            hook: "Cuando el tratado opera, sabe operar a tu favor.",
            examples: [
              "Importas componentes y un cambio arancelario te paralizó.",
              "Exportas a USA y la CBP te marcó por contenido regional.",
              "Una disputa comercial te tiene operando al 30%."
            ],
            solution: "Litigio T-MEC, análisis arancelario, defensa comercial, recuperación de pérdidas."
          }
        ]
      },
      en: {
        title: "Cross-border & Digital Nomads",
        short: "You work anywhere. We legalize it everywhere.",
        closeExample: "You work from Bali, bill from Delaware, file in Mexico. Where do you reside?",
        problematicas: [
          {
            id: "residencia-fiscal",
            title: "You don't know where you're a tax resident",
            hook: "And all three countries you suspect want to bill you.",
            examples: [
              "You live 5 months in Mexico and 7 in Portugal.",
              "Your Delaware LLC bills, you live in Mexico City. SAT wants to classify you as resident.",
              "You collect USD and Mexican bank transfers flag you."
            ],
            solution: "Tax treaty analysis, residence certificates, proactive defense, mobility plan."
          },
          {
            id: "ronda-transfronteriza",
            title: "Your seed round crosses several countries",
            hook: "US investors, LatAm founders, Cayman vehicle. One country forbids it.",
            examples: [
              "Your Argentinian fund wants to invest in a Web3 startup with Cuba presence.",
              "Your cap table includes tokens and your lead investor's lawyers are panicking.",
              "Your round includes funds with Russian LPs — OFAC concerns."
            ],
            solution: "Multi-juris cap table structuring, OFAC/sanctions opinion, clean vehicles."
          },
          {
            id: "visado-talento",
            title: "You need or are a talent visa",
            hook: "O-1, EB-1, Mexican talent visa, Portugal golden visa.",
            examples: [
              "Your CTO needs O-1 in the US and has 6 months to gather evidence.",
              "You want to move your 12-engineer team to Lisbon.",
              "You want a Mexican Talent visa for an AI specialist."
            ],
            solution: "Migration strategy, evidence gathering, legal support vehicle, follow-through."
          },
          {
            id: "tmec-comercio",
            title: "Your business crosses USMCA and there's a dispute",
            hook: "When the treaty operates, it knows how to operate in your favor.",
            examples: [
              "You import components and a tariff change paralyzed you.",
              "You export to the US and CBP flagged you for regional content.",
              "A trade dispute has you operating at 30%."
            ],
            solution: "USMCA litigation, tariff analysis, trade defense, loss recovery."
          }
        ]
      },
      fr: {
        title: "Transfrontalier et Nomades Numériques",
        short: "Vous travaillez partout. Nous le légalisons partout.",
        closeExample: "Vous travaillez depuis Bali, facturez depuis Delaware, déclarez au Mexique.",
        problematicas: [
          {
            id: "residencia-fiscal",
            title: "Vous ne savez où vous êtes résident fiscal",
            hook: "Et les trois pays que vous soupçonnez veulent vous facturer.",
            examples: [
              "Vous vivez 5 mois au Mexique et 7 au Portugal.",
              "Votre LLC Delaware facture, vous vivez à Mexico.",
              "Vous encaissez en USD et votre banque mexicaine vous signale."
            ],
            solution: "Analyse convention fiscale, certificats de résidence, défense proactive, plan de mobilité."
          },
          {
            id: "ronda-transfronteriza",
            title: "Votre tour de seed traverse plusieurs pays",
            hook: "Investisseurs US, fondateurs LatAm, véhicule Caymans.",
            examples: [
              "Votre fonds argentin veut investir dans une startup Web3 avec présence à Cuba.",
              "Votre cap table inclut des jetons.",
              "Votre tour inclut des LP russes — préoccupations OFAC."
            ],
            solution: "Structuration cap table multi-juridictionnelle, opinion OFAC/sanctions, véhicules propres."
          },
          {
            id: "visado-talento",
            title: "Vous êtes (ou cherchez) un visa de talent",
            hook: "O-1, EB-1, talent mexicain, golden visa Portugal.",
            examples: [
              "Votre CTO a besoin du O-1 aux USA.",
              "Vous voulez déplacer votre équipe de 12 ingénieurs à Lisbonne.",
              "Vous voulez le Mexican Talent visa pour un spécialiste IA."
            ],
            solution: "Stratégie migratoire, rassemblement de preuves, véhicule juridique support."
          },
          {
            id: "tmec-comercio",
            title: "Votre activité traverse l'ACEUM et il y a litige",
            hook: "Quand le traité opère, il sait opérer en votre faveur.",
            examples: [
              "Vous importez des composants et un changement tarifaire vous paralyse.",
              "Vous exportez aux USA et la CBP vous a signalé.",
              "Un litige commercial vous fait opérer à 30%."
            ],
            solution: "Litige ACEUM, analyse tarifaire, défense commerciale, récupération des pertes."
          }
        ]
      }
    }
  }
];

export function getServicio(slug: string) {
  return servicios.find((s) => s.slug === slug);
}
