import type { Locale } from "../i18n/dict";

export type ServicioContent = {
  title: string;
  oneliner: string;
  problem: string;
  problemLong: string;
  solution: string[];
  tags: string[];
};

export type Servicio = {
  slug: string;
  num: string;
  accent: "ember" | "forest" | "gold";
  i18n: Record<Locale, ServicioContent>;
};

export const servicios: Servicio[] = [
  {
    slug: "web3-blockchain",
    num: "01",
    accent: "ember",
    i18n: {
      es: {
        title: "Web3, Blockchain & Tokenización",
        oneliner: "Tokens, DAOs y smart contracts con cobertura legal real.",
        problem: "Quieres lanzar un token. Tres jurisdicciones, dos legislaciones, una ronda al borde.",
        problemLong: "Tu protocolo opera en cinco países. Inversionistas piden opinión de no-security. Tu DAO necesita personalidad jurídica para firmar. Y la red, mientras tanto, sigue funcionando.",
        solution: [
          "Estructura corporativa multi-juris (foundation, LLC, asociación civil).",
          "Smart-contract legal review y opinión de no-security.",
          "Estatutos y gobernanza de DAOs operativas.",
          "Compliance VASP, registro CNBV/SAT, on-chain provenance."
        ],
        tags: ["Founders Web3", "DAOs", "Token issuers", "Inversionistas"]
      },
      en: {
        title: "Web3, Blockchain & Tokenization",
        oneliner: "Tokens, DAOs and smart contracts with real legal coverage.",
        problem: "You want to launch a token. Three jurisdictions, two legislations, a round on the edge.",
        problemLong: "Your protocol operates across five countries. Investors want a no-securities opinion. Your DAO needs legal personality to sign. And the network keeps running.",
        solution: [
          "Multi-juris corporate structure (foundation, LLC, asociación civil).",
          "Smart-contract legal review and no-security opinion.",
          "Bylaws and governance for operating DAOs.",
          "VASP compliance, CNBV/SAT registration, on-chain provenance."
        ],
        tags: ["Web3 founders", "DAOs", "Token issuers", "Investors"]
      },
      fr: {
        title: "Web3, Blockchain & Tokenisation",
        oneliner: "Jetons, DAO et smart contracts avec une couverture juridique réelle.",
        problem: "Vous voulez lancer un jeton. Trois juridictions, deux législations, un tour au bord.",
        problemLong: "Votre protocole opère dans cinq pays. Les investisseurs demandent une opinion no-securities. Votre DAO a besoin d'une personnalité juridique pour signer. Et le réseau, lui, continue.",
        solution: [
          "Structure d'entreprise multi-juridictionnelle (foundation, LLC, association).",
          "Revue juridique de smart contracts et opinion no-security.",
          "Statuts et gouvernance des DAO opérationnelles.",
          "Conformité VASP, enregistrement CNBV/SAT, provenance on-chain."
        ],
        tags: ["Fondateurs Web3", "DAOs", "Émetteurs de jetons", "Investisseurs"]
      }
    }
  },
  {
    slug: "inteligencia-artificial",
    num: "02",
    accent: "forest",
    i18n: {
      es: {
        title: "IA & Derechos Digitales",
        oneliner: "Quién es autor cuando autor también es la máquina.",
        problem: "Una IA generó tu portada. Otra hizo un deepfake de tu rostro. La ley aún titubea.",
        problemLong: "Si entrenas un modelo, te van a demandar por los datos. Si publicas con IA, alguien te va a demandar por estilo. Y si te suplantan, vas a necesitar quitar el video antes del lunes.",
        solution: [
          "Definición de autoría y titularidad sobre output de IA.",
          "Licenciamiento de modelos, datasets y prompts.",
          "Takedown de deepfakes y suplantación, denuncia INAI/FGR.",
          "Mapas de responsabilidad algorítmica para empresas."
        ],
        tags: ["Estudios", "Creadores", "Empresas con IA", "Víctimas de deepfake"]
      },
      en: {
        title: "AI & Digital Rights",
        oneliner: "Who is the author when the author is also the machine.",
        problem: "An AI generated your cover. Another made a deepfake of your face. The law still hesitates.",
        problemLong: "If you train a model, you'll be sued for the data. If you publish with AI, someone will sue you over style. And if you're impersonated, you'll need that video down before Monday.",
        solution: [
          "Authorship and ownership for AI output.",
          "Licensing of models, datasets and prompts.",
          "Deepfake and impersonation takedown, INAI/FGR filings.",
          "Algorithmic-responsibility mapping for enterprises."
        ],
        tags: ["Studios", "Creators", "AI-enabled companies", "Deepfake victims"]
      },
      fr: {
        title: "IA & Droits Numériques",
        oneliner: "Qui est l'auteur quand l'auteur est aussi la machine.",
        problem: "Une IA a généré votre couverture. Une autre a fait un deepfake de votre visage.",
        problemLong: "Si vous entraînez un modèle, on vous poursuivra pour les données. Si vous publiez avec IA, on vous poursuivra pour le style. Et si on vous usurpe, il faudra retirer la vidéo avant lundi.",
        solution: [
          "Définition de la paternité sur la production IA.",
          "Licences de modèles, jeux de données et prompts.",
          "Retrait de deepfakes et usurpation, signalement INAI/FGR.",
          "Cartographies de responsabilité algorithmique."
        ],
        tags: ["Studios", "Créateurs", "Entreprises avec IA", "Victimes de deepfake"]
      }
    }
  },
  {
    slug: "fintech-pagos",
    num: "03",
    accent: "gold",
    i18n: {
      es: {
        title: "FinTech & Pagos Digitales",
        oneliner: "Cuando el dinero se mueve más rápido que la regulación.",
        problem: "Tu wallet mueve dinero entre stablecoin, fiat y cripto. La CNBV mira.",
        problemLong: "Procesas pagos en tres países. Un usuario quiere retirar a su banco. Otro quiere mover USDC a su Binance. Tu KYC sigue siendo el mismo del MVP.",
        solution: [
          "Estructura completa Ley Fintech (IFPE / ITF).",
          "On/off-ramp cripto-fiat con compliance proporcional.",
          "KYC/AML y políticas anti-fraude operativas.",
          "Asesoría ante CNBV, Condusef, SAT y UIF."
        ],
        tags: ["Neobancos", "Wallets", "Procesadores", "Ramps cripto"]
      },
      en: {
        title: "FinTech & Digital Payments",
        oneliner: "When money moves faster than regulation.",
        problem: "Your wallet moves money between stablecoin, fiat and crypto. CNBV is watching.",
        problemLong: "You process payments in three countries. One user wants to withdraw to their bank. Another wants to move USDC to Binance. Your KYC is still the MVP one.",
        solution: [
          "Full Fintech Act structure (IFPE / ITF).",
          "Crypto-fiat on/off-ramp with proportional compliance.",
          "Operational KYC/AML and anti-fraud policies.",
          "Counsel before CNBV, Condusef, SAT and UIF."
        ],
        tags: ["Neobanks", "Wallets", "Processors", "Crypto ramps"]
      },
      fr: {
        title: "FinTech & Paiements Numériques",
        oneliner: "Quand l'argent va plus vite que la régulation.",
        problem: "Votre wallet bouge l'argent entre stablecoin, fiat et crypto. La CNBV observe.",
        problemLong: "Vous traitez des paiements dans trois pays. Un utilisateur veut retirer vers sa banque. Un autre veut envoyer de l'USDC sur Binance. Votre KYC est encore celui du MVP.",
        solution: [
          "Structure complète Ley Fintech (IFPE / ITF).",
          "Rampes crypto-fiat avec conformité proportionnelle.",
          "KYC/AML et politiques anti-fraude opérationnelles.",
          "Conseil devant CNBV, Condusef, SAT et UIF."
        ],
        tags: ["Néobanques", "Wallets", "Processeurs", "Rampes crypto"]
      }
    }
  },
  {
    slug: "economia-creadores",
    num: "04",
    accent: "ember",
    i18n: {
      es: {
        title: "Economía de Creadores",
        oneliner: "Tu cara, tu marca, tu ingreso, tu propiedad.",
        problem: "Cobras en cuatro plataformas, vives en dos países, tu marca es tu cara.",
        problemLong: "Subes a TikTok, Patreon, OnlyFans y YouTube. Recibes pagos en dólares, MXN y USDC. Una marca te ofrece un contrato que firma su abogado. Mientras tanto, alguien sube tu contenido sin permiso.",
        solution: [
          "Estructura corporativa para creators (LLC, S de RL, holdings).",
          "Contratos de marca, exclusividad, derechos de imagen.",
          "Optimización fiscal lícita multi-juris.",
          "Defensa contra rip-offs y reposteo no autorizado."
        ],
        tags: ["Creadores", "Talent agencies", "OnlyFans / Patreon", "YouTubers"]
      },
      en: {
        title: "Creator Economy",
        oneliner: "Your face, your brand, your income, your property.",
        problem: "You collect on four platforms, live in two countries, your brand is your face.",
        problemLong: "You post to TikTok, Patreon, OnlyFans and YouTube. You receive payments in USD, MXN and USDC. A brand offers a contract drafted by their lawyer. Meanwhile, someone reposts your content without consent.",
        solution: [
          "Creator-grade corporate structures (LLC, S de RL, holdings).",
          "Brand deals, exclusivity, image-rights agreements.",
          "Lawful multi-juris fiscal optimization.",
          "Defense against rip-offs and unauthorized reposts."
        ],
        tags: ["Creators", "Talent agencies", "OnlyFans / Patreon", "YouTubers"]
      },
      fr: {
        title: "Économie des Créateurs",
        oneliner: "Votre visage, votre marque, vos revenus, votre propriété.",
        problem: "Vous encaissez sur quatre plateformes, vous vivez dans deux pays, votre marque c'est votre visage.",
        problemLong: "Vous publiez sur TikTok, Patreon, OnlyFans et YouTube. Vous recevez en USD, MXN et USDC. Une marque vous propose un contrat rédigé par son avocat. Pendant ce temps, on reposte votre contenu sans permission.",
        solution: [
          "Structures d'entreprise pour créateurs (LLC, S de RL, holdings).",
          "Accords de marque, exclusivité, droit à l'image.",
          "Optimisation fiscale licite multi-juridictionnelle.",
          "Défense contre le rip-off et la republication non autorisée."
        ],
        tags: ["Créateurs", "Agences de talent", "OnlyFans / Patreon", "YouTubeurs"]
      }
    }
  },
  {
    slug: "propiedad-intelectual",
    num: "05",
    accent: "forest",
    i18n: {
      es: {
        title: "Propiedad Intelectual Digital",
        oneliner: "Lo que llamas tuyo. Demuéstralo.",
        problem: "Tu trabajo viaja por internet sin permiso. O alguien registró tu marca antes que tú.",
        problemLong: "Tu portafolio circula en Pinterest, Behance y Discord. Encuentras tu diseño en una camiseta. Una marca registró el nombre que llevas usando dos años. Y el cliente del NDA tampoco respetó el NDA.",
        solution: [
          "Registro de marca IMPI y vía Madrid para 130 países.",
          "Defensa, oposición y nulidad de marcas tomadas.",
          "Takedown DMCA y cease-and-desist transfronterizo.",
          "Cartera multimedia: música, video, software, NFT."
        ],
        tags: ["Estudios creativos", "Artistas", "Marcas DTC", "Diseñadores"]
      },
      en: {
        title: "Digital IP",
        oneliner: "What you call yours. Prove it.",
        problem: "Your work travels the internet without permission. Or someone registered your brand before you.",
        problemLong: "Your portfolio floats around Pinterest, Behance and Discord. You find your design on a t-shirt. A brand registered the name you've been using for two years. And the NDA client didn't respect the NDA.",
        solution: [
          "Trademark filing in Mexico (IMPI) and via Madrid for 130 countries.",
          "Defense, opposition and cancellation of squatted marks.",
          "Cross-border DMCA takedown and cease-and-desist.",
          "Multimedia portfolios: music, video, software, NFT."
        ],
        tags: ["Creative studios", "Artists", "DTC brands", "Designers"]
      },
      fr: {
        title: "Propriété Intellectuelle Numérique",
        oneliner: "Ce que vous dites à vous. Prouvez-le.",
        problem: "Votre travail circule sur internet sans permission. Ou quelqu'un a déposé votre marque avant vous.",
        problemLong: "Votre portfolio flotte sur Pinterest, Behance et Discord. Vous trouvez votre design sur un t-shirt. Une marque a déposé le nom que vous utilisez depuis deux ans. Et le client du NDA n'a pas respecté le NDA non plus.",
        solution: [
          "Dépôt de marque IMPI et via Madrid pour 130 pays.",
          "Défense, opposition et nullité des marques détournées.",
          "Takedown DMCA et mise en demeure transfrontalière.",
          "Portefeuilles multimédias : musique, vidéo, logiciel, NFT."
        ],
        tags: ["Studios créatifs", "Artistes", "Marques DTC", "Designers"]
      }
    }
  },
  {
    slug: "privacidad-datos",
    num: "06",
    accent: "gold",
    i18n: {
      es: {
        title: "Privacidad & Protección de Datos",
        oneliner: "El día que llame la autoridad, ya estará todo en orden.",
        problem: "Recoges datos. Un día hay un incidente. La autoridad llama.",
        problemLong: "Tu producto recoge datos de menores. Tu CRM cruza información sin propósito declarado. Un proveedor fue hackeado y se filtraron emails. INAI te pide aviso de privacidad y un programa demostrable.",
        solution: [
          "Programa integral LFPDPPP, GDPR, LGPD.",
          "Avisos de privacidad, DPAs y matriz de transferencias.",
          "Gestión de incidentes y notificación a autoridad.",
          "Defensa en procedimientos INAI."
        ],
        tags: ["SaaS", "AdTech", "Salud digital", "Plataformas con menores"]
      },
      en: {
        title: "Privacy & Data Protection",
        oneliner: "The day the regulator calls, everything is already in order.",
        problem: "You collect data. One day, there's an incident. The regulator calls.",
        problemLong: "Your product collects data on minors. Your CRM joins information without a declared purpose. A vendor was hacked and emails leaked. INAI requests a privacy notice and a demonstrable program.",
        solution: [
          "Comprehensive LFPDPPP, GDPR, LGPD program.",
          "Privacy notices, DPAs and transfer matrix.",
          "Incident handling and authority notification.",
          "Defense in INAI proceedings."
        ],
        tags: ["SaaS", "AdTech", "Digital health", "Minor-facing platforms"]
      },
      fr: {
        title: "Confidentialité & Protection des Données",
        oneliner: "Le jour où le régulateur appelle, tout est déjà en ordre.",
        problem: "Vous collectez des données. Un jour, il y a un incident. Le régulateur appelle.",
        problemLong: "Votre produit collecte des données de mineurs. Votre CRM croise des informations sans but déclaré. Un fournisseur a été piraté et des emails ont fuité. La CNIL ou l'INAI demande un avis de confidentialité et un programme démontrable.",
        solution: [
          "Programme intégral LFPDPPP, RGPD, LGPD.",
          "Avis de confidentialité, DPAs et matrice de transferts.",
          "Gestion d'incidents et notification aux autorités.",
          "Défense dans les procédures CNIL / INAI."
        ],
        tags: ["SaaS", "AdTech", "Santé numérique", "Plateformes pour mineurs"]
      }
    }
  },
  {
    slug: "gaming-metaverso",
    num: "07",
    accent: "ember",
    i18n: {
      es: {
        title: "Gaming, Metaverso & XR",
        oneliner: "Tu economía existe en un mundo virtual. La regulamos.",
        problem: "Tu economía existe en un mundo virtual. ¿Quién es dueño de qué?",
        problemLong: "Tu juego vende skins. Decentraland te alquila una parcela. Un jugador vendió en un mercado secundario un item que era tuyo. Y la AR de tu app cubre el rostro de una persona sin permiso.",
        solution: [
          "Propiedad virtual en mundos persistentes.",
          "Estructura de economías in-game (tokens, loot boxes).",
          "NFT wearables y propiedad sobre activos digitales.",
          "AR commerce y consentimiento sobre imagen."
        ],
        tags: ["Estudios de gaming", "Mundos virtuales", "AR apps", "Marketplaces in-game"]
      },
      en: {
        title: "Gaming, Metaverse & XR",
        oneliner: "Your economy exists in a virtual world. We regulate it.",
        problem: "Your economy lives in a virtual world. Who owns what?",
        problemLong: "Your game sells skins. Decentraland rents you a parcel. A player sold one of your items on a secondary market. And your AR app overlays a person's face without permission.",
        solution: [
          "Virtual property in persistent worlds.",
          "In-game economy structure (tokens, loot boxes).",
          "NFT wearables and digital-asset ownership.",
          "AR commerce and image consent."
        ],
        tags: ["Game studios", "Virtual worlds", "AR apps", "In-game marketplaces"]
      },
      fr: {
        title: "Gaming, Métaverse & XR",
        oneliner: "Votre économie existe dans un monde virtuel. Nous l'encadrons.",
        problem: "Votre économie vit dans un monde virtuel. À qui appartient quoi ?",
        problemLong: "Votre jeu vend des skins. Decentraland vous loue une parcelle. Un joueur a vendu un de vos items sur un marché secondaire. Et l'AR de votre app couvre le visage d'une personne sans permission.",
        solution: [
          "Propriété virtuelle dans les mondes persistants.",
          "Structure d'économies in-game (jetons, loot boxes).",
          "NFT wearables et propriété d'actifs numériques.",
          "AR commerce et consentement à l'image."
        ],
        tags: ["Studios de jeu", "Mondes virtuels", "Apps AR", "Marketplaces in-game"]
      }
    }
  },
  {
    slug: "ecommerce-marketplaces",
    num: "08",
    accent: "forest",
    i18n: {
      es: {
        title: "E-commerce & Marketplaces",
        oneliner: "Cuando la plataforma decide y tu negocio depende.",
        problem: "Vendes en un marketplace. Suspendieron tu cuenta sin explicación.",
        problemLong: "Tu tienda factura medio millón al mes. Un cliente reclama y la plataforma congela tus fondos. Otro reseller copia tu listado palabra por palabra. Y los nuevos términos del marketplace cambian tu comisión sin previo aviso.",
        solution: [
          "Términos, políticas, devoluciones y compliance plataforma.",
          "Defensa por suspensión arbitraria de cuenta.",
          "Modelos peer-to-peer y disputas de fees.",
          "Recuperación de fondos congelados."
        ],
        tags: ["Vendedores marketplace", "DTC", "Tiendas Shopify", "Distribuidores"]
      },
      en: {
        title: "E-commerce & Marketplaces",
        oneliner: "When the platform decides and your business depends.",
        problem: "You sell on a marketplace. Your account was suspended without explanation.",
        problemLong: "Your store bills half a million a month. A customer complains and the platform freezes your funds. Another reseller copies your listing word for word. And the marketplace updates its terms, changing your commission without notice.",
        solution: [
          "T&Cs, policies, returns and platform compliance.",
          "Defense against arbitrary account suspension.",
          "Peer-to-peer models and fee disputes.",
          "Recovery of frozen funds."
        ],
        tags: ["Marketplace sellers", "DTC", "Shopify stores", "Distributors"]
      },
      fr: {
        title: "E-commerce & Marketplaces",
        oneliner: "Quand la plateforme décide et que votre activité en dépend.",
        problem: "Vous vendez sur une marketplace. On a suspendu votre compte sans explication.",
        problemLong: "Votre boutique facture un demi-million par mois. Un client réclame et la plateforme gèle vos fonds. Un autre revendeur copie votre annonce mot pour mot. Et la marketplace change ses conditions, modifiant votre commission sans préavis.",
        solution: [
          "CGV, politiques, retours et conformité plateforme.",
          "Défense contre la suspension arbitraire de compte.",
          "Modèles peer-to-peer et litiges sur les frais.",
          "Récupération des fonds gelés."
        ],
        tags: ["Vendeurs marketplace", "DTC", "Boutiques Shopify", "Distributeurs"]
      }
    }
  },
  {
    slug: "internacional-nomadas",
    num: "09",
    accent: "gold",
    i18n: {
      es: {
        title: "Internacional & Nómadas Digitales",
        oneliner: "Trabajas en cualquier parte. Lo legalizamos en todas.",
        problem: "Trabajas desde Bali, cobras desde Delaware, declaras en México.",
        problemLong: "Eres residente fiscal en tres países sin saberlo. Tu cliente quiere facturar a tu LLC. El SAT te clasifica como residente. Y el visado caduca en seis meses.",
        solution: [
          "Análisis y resolución de residencia fiscal.",
          "Estructura para trabajo remoto multi-juris.",
          "Optimización fiscal lícita (CFC, transparencia).",
          "Visados de talento y permisos cross-border."
        ],
        tags: ["Nómadas digitales", "Founders", "Remote-first", "Consultores internacionales"]
      },
      en: {
        title: "International & Digital Nomads",
        oneliner: "You work anywhere. We legalize it everywhere.",
        problem: "You work from Bali, bill from Delaware, file in Mexico.",
        problemLong: "You're a tax resident of three countries without knowing it. Your client wants to bill your LLC. The SAT classifies you as a resident. And the visa expires in six months.",
        solution: [
          "Tax-residency analysis and resolution.",
          "Multi-juris remote-work structure.",
          "Lawful fiscal optimization (CFC, transparency).",
          "Talent visas and cross-border permits."
        ],
        tags: ["Digital nomads", "Founders", "Remote-first", "International consultants"]
      },
      fr: {
        title: "International & Nomades Numériques",
        oneliner: "Vous travaillez n'importe où. Nous le légalisons partout.",
        problem: "Vous travaillez depuis Bali, facturez depuis Delaware, déclarez au Mexique.",
        problemLong: "Vous êtes résident fiscal de trois pays sans le savoir. Votre client veut facturer votre LLC. Le SAT vous classe comme résident. Et le visa expire dans six mois.",
        solution: [
          "Analyse et résolution de la résidence fiscale.",
          "Structure de travail à distance multi-juridictionnelle.",
          "Optimisation fiscale licite (CFC, transparence).",
          "Visas talents et permis transfrontaliers."
        ],
        tags: ["Nomades numériques", "Fondateurs", "Remote-first", "Consultants internationaux"]
      }
    }
  }
];

export function getServicio(slug: string) {
  return servicios.find((s) => s.slug === slug);
}
