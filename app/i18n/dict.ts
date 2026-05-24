export type Locale = "es" | "en" | "fr";

export const locales: Locale[] = ["es", "en", "fr"];

export type Dict = {
  nav: {
    practica: string;
    despacho: string;
    manifiesto: string;
    dialogo: string;
    cta: string;
    submenuExplore: string;
  };
  stage: { kicker: string; problems: string[]; reveal: string; skip: string };
  hero: { eyebrow: string; title: string; sub: string; ctaPrimary: string; ctaSecondary: string };
  areas: {
    kicker: string;
    title: string;
    sub: string;
    expand: string;
    collapse: string;
    detail: string;
    cta: string;
  };
  firma: {
    kicker: string;
    title: string;
    sub: string;
    optionEmail: string;
    optionWhatsapp: string;
    optionAgenda: string;
    optionMetaverso: string;
    optionMetaversoDetail: string;
  };
  footer: {
    tagline: string;
    explore: string;
    contact: string;
    legal: string;
    legalLinks: string[];
    rights: string;
    social: string;
  };
  servicePage: {
    backHome: string;
    problemasTitle: string;
    problemasSub: string;
    expandHint: string;
    solutionLabel: string;
    examplesLabel: string;
    contactCta: string;
    next: string;
  };
  manifestoPage: {
    kicker: string;
    title: string;
    body: string[];
    pull: string;
  };
  despachoPage: {
    kicker: string;
    title: string;
    bio: string[];
    label: string;
    credCta: string;
  };
};

export const dict: Record<Locale, Dict> = {
  es: {
    nav: {
      practica: "Práctica",
      despacho: "Despacho",
      manifiesto: "Manifiesto",
      dialogo: "Diálogo",
      cta: "Firmar con nosotros",
      submenuExplore: "Explorar las 9 áreas"
    },
    stage: {
      kicker: "Establecido MMXXV",
      problems: [
        "Tu ronda seed cruza tres países. Una la prohíbe.",
        "Heredaste su Bitcoin. Las claves murieron con él.",
        "Un deepfake firmó un contrato a tu nombre.",
        "Tu IA generó algo que es de alguien más.",
        "Tu avatar fue denunciado en un mundo que no existe.",
        "Tu marca apareció en un NFT que no autorizaste.",
        "Aún no sabes a quién dejarle tu vida digital."
      ],
      reveal: "Esto es lo que resolvemos. Y un poco más.",
      skip: "Saltar"
    },
    hero: {
      eyebrow: "Despacho jurídico boutique",
      title: "Antes de la firma. Durante el caso. Después de tu última sesión.",
      sub: "Asesoramos a personas y empresas en lo que pasa cuando tu vida ocurre en pantallas: cripto, IA, redes, plataformas, mundos virtuales y la herencia digital de todo lo anterior. Si pasa en una pantalla, hay un caso.",
      ctaPrimary: "Firmar con nosotros",
      ctaSecondary: "Ver áreas"
    },
    areas: {
      kicker: "Lo que más resolvemos",
      title: "Nueve áreas. Una hipótesis: tu vida digital tiene consecuencias jurídicas.",
      sub: "Toca cualquier área para ver ejemplos reales y cercanos. Cada una es una práctica completa.",
      expand: "Ver",
      collapse: "Cerrar",
      detail: "Entrar al área",
      cta: "¿Tu caso no encaja en una sola? Lo normal. Hablemos."
    },
    firma: {
      kicker: "Firmar",
      title: "Cuando estés listo, hay varias formas de empezar.",
      sub: "El primer diálogo no se cobra. Treinta minutos para entender el caso y decirte qué vemos. Después, tú decides.",
      optionEmail: "Correo",
      optionWhatsapp: "WhatsApp",
      optionAgenda: "Reservar 30 min",
      optionMetaverso: "Llamada en metaverso",
      optionMetaversoDetail: "Vía Immersed o Meta Workrooms — para casos Web3, gaming, XR o cuando prefieras conversar en un espacio inmersivo."
    },
    footer: {
      tagline: "Derecho diseñado para la próxima década.",
      explore: "Explorar",
      contact: "Contacto",
      legal: "Aviso",
      legalLinks: ["Política de privacidad", "Términos de uso", "Cookies"],
      rights: "Todos los derechos reservados.",
      social: "Síguenos"
    },
    servicePage: {
      backHome: "Volver al despacho",
      problemasTitle: "Problemáticas que resolvemos",
      problemasSub: "Toca cualquier tarjeta para ver ejemplos cercanos y lo que hacemos al respecto.",
      expandHint: "Toca para ejemplos",
      solutionLabel: "Lo que hacemos",
      examplesLabel: "Casos reales que atendemos",
      contactCta: "Conversemos tu caso",
      next: "Siguiente área"
    },
    manifestoPage: {
      kicker: "Manifiesto",
      title: "El derecho llega tarde a casi todo lo nuevo. Cuando llega, lo hace mal.",
      body: [
        "Llega con vocabulario prestado de una economía que ya no existe, con jueces sin contexto técnico, y con reglas escritas para un contrato firmado en papel por dos personas en la misma sala.",
        "Tu contrato lo escribió un algoritmo. Tu marca vive en plataformas que cambian sus términos cada trimestre. Tu ingreso cruza tres jurisdicciones antes del desayuno. Tu propiedad puede ser un token que solo existe porque la red lo acuerda. Tu legado puede estar en una wallet a la que nadie en tu familia sabe entrar.",
        "Construimos un despacho para esa realidad. No tradicional con un departamento digital. Uno cuya práctica nació en y para la economía digital, y que conoce el código que te exigen firmar."
      ],
      pull: "No estamos esperando a que el legislador entienda. Trabajamos con lo que hay y, cuando hace falta, escribimos lo que debería haber."
    },
    despachoPage: {
      kicker: "Conducción",
      title: "Conducción.",
      bio: [
        "Juan Emmanuel Delva Benavides es Doctor en Derecho, investigador y profesor. Conoce los mecanismos formales del mercado americano, iberoamericano y europeo, y también el ritmo real de un lanzamiento de token, una ronda seed o el cierre de un trato con marca.",
        "Ejerce asesoría privada para usuarios y empresas."
      ],
      label: "Socio fundador",
      credCta: "Hablemos de tu caso"
    }
  },
  en: {
    nav: {
      practica: "Practice",
      despacho: "Firm",
      manifiesto: "Manifesto",
      dialogo: "Dialogue",
      cta: "Engage us",
      submenuExplore: "Explore the 9 areas"
    },
    stage: {
      kicker: "Established MMXXV",
      problems: [
        "Your seed round spans three countries. One forbids it.",
        "You inherited his Bitcoin. The keys died with him.",
        "A deepfake signed a contract in your name.",
        "Your AI generated something that belongs to someone else.",
        "Your avatar was reported in a world that doesn't exist.",
        "Your brand appeared in an NFT you didn't authorize.",
        "You still don't know who should inherit your digital life."
      ],
      reveal: "This is what we resolve. And a little more.",
      skip: "Skip"
    },
    hero: {
      eyebrow: "Boutique law firm",
      title: "Before the signature. During the case. After your last session.",
      sub: "We advise individuals and companies on what happens when your life unfolds on screens: crypto, AI, social, platforms, virtual worlds and the digital legacy of all of the above. If it happens on a screen, there's a case.",
      ctaPrimary: "Engage us",
      ctaSecondary: "See areas"
    },
    areas: {
      kicker: "Where we work most",
      title: "Nine areas. One hypothesis: your digital life has legal consequences.",
      sub: "Tap any area to see real, everyday examples. Each one is a full practice.",
      expand: "See",
      collapse: "Close",
      detail: "Open the area",
      cta: "Doesn't fit a single area? That's normal. Let's talk."
    },
    firma: {
      kicker: "Engage",
      title: "When you're ready, there are several ways to start.",
      sub: "The first conversation is on us. Thirty minutes to understand the case and tell you what we see. Then it's your call.",
      optionEmail: "Email",
      optionWhatsapp: "WhatsApp",
      optionAgenda: "Book 30 min",
      optionMetaverso: "Metaverse call",
      optionMetaversoDetail: "Via Immersed or Meta Workrooms — for Web3, gaming, XR cases, or whenever you prefer an immersive room."
    },
    footer: {
      tagline: "Law designed for the next decade.",
      explore: "Explore",
      contact: "Contact",
      legal: "Legal",
      legalLinks: ["Privacy policy", "Terms of use", "Cookies"],
      rights: "All rights reserved.",
      social: "Follow us"
    },
    servicePage: {
      backHome: "Back to firm",
      problemasTitle: "Problems we resolve",
      problemasSub: "Tap any card for examples and what we do about it.",
      expandHint: "Tap for examples",
      solutionLabel: "What we do",
      examplesLabel: "Real cases we handle",
      contactCta: "Let's discuss your case",
      next: "Next area"
    },
    manifestoPage: {
      kicker: "Manifesto",
      title: "Law arrives late to almost everything new. When it arrives, it does so poorly.",
      body: [
        "It arrives with borrowed vocabulary from an economy that no longer exists, with judges lacking technical context, and rules written for a contract signed on paper by two people in the same room.",
        "Your contract was written by an algorithm. Your brand lives on platforms that change their terms each quarter. Your income crosses three jurisdictions before breakfast. Your property may be a token that exists only because the network agrees. Your legacy may sit in a wallet no one in your family knows how to access.",
        "We built a firm for that reality. Not a traditional firm with a digital department. One whose practice was born in and for the digital economy, and that understands the code they ask you to sign."
      ],
      pull: "We're not waiting for the legislator to catch up. We work with what exists and, when needed, write what should have existed."
    },
    despachoPage: {
      kicker: "Leadership",
      title: "Leadership.",
      bio: [
        "Juan Emmanuel Delva Benavides is a Doctor of Laws, researcher and professor. He understands the formal mechanisms of the American, Ibero-American and European markets, and also the real pace of a token launch, a seed round, or a brand deal.",
        "Provides private counsel to individuals and companies."
      ],
      label: "Founding partner",
      credCta: "Let's discuss your case"
    }
  },
  fr: {
    nav: {
      practica: "Pratique",
      despacho: "Cabinet",
      manifiesto: "Manifeste",
      dialogo: "Dialogue",
      cta: "Travailler avec nous",
      submenuExplore: "Explorer les 9 domaines"
    },
    stage: {
      kicker: "Établi MMXXV",
      problems: [
        "Votre tour de seed traverse trois pays. Un l'interdit.",
        "Vous avez hérité son Bitcoin. Les clés sont mortes avec lui.",
        "Un deepfake a signé un contrat en votre nom.",
        "Votre IA a généré quelque chose qui appartient à quelqu'un d'autre.",
        "Votre avatar a été dénoncé dans un monde qui n'existe pas.",
        "Votre marque est apparue dans un NFT que vous n'avez pas autorisé.",
        "Vous ne savez pas encore à qui léguer votre vie numérique."
      ],
      reveal: "Voilà ce que nous résolvons. Et un peu plus.",
      skip: "Passer"
    },
    hero: {
      eyebrow: "Cabinet juridique boutique",
      title: "Avant la signature. Pendant l'affaire. Après votre dernière session.",
      sub: "Nous conseillons particuliers et entreprises sur tout ce qui arrive quand votre vie se passe à l'écran : crypto, IA, réseaux, plateformes, mondes virtuels et l'héritage numérique de tout cela. Si ça se passe à l'écran, il y a une affaire.",
      ctaPrimary: "Travailler avec nous",
      ctaSecondary: "Voir les domaines"
    },
    areas: {
      kicker: "Là où nous intervenons le plus",
      title: "Neuf domaines. Une hypothèse : votre vie numérique a des conséquences juridiques.",
      sub: "Touchez un domaine pour voir des exemples concrets. Chacun est une pratique complète.",
      expand: "Voir",
      collapse: "Fermer",
      detail: "Ouvrir le domaine",
      cta: "Votre cas ne tient pas dans un seul ? C'est la norme. Parlons-en."
    },
    firma: {
      kicker: "Engager",
      title: "Quand vous êtes prêt, plusieurs façons de commencer.",
      sub: "Le premier échange est offert. Trente minutes pour comprendre l'affaire et vous dire ce que nous voyons. Ensuite, c'est vous qui décidez.",
      optionEmail: "Courriel",
      optionWhatsapp: "WhatsApp",
      optionAgenda: "Réserver 30 min",
      optionMetaverso: "Appel en métaverse",
      optionMetaversoDetail: "Via Immersed ou Meta Workrooms — pour les affaires Web3, gaming, XR, ou quand vous préférez une salle immersive."
    },
    footer: {
      tagline: "Du droit conçu pour la prochaine décennie.",
      explore: "Explorer",
      contact: "Contact",
      legal: "Mentions",
      legalLinks: ["Politique de confidentialité", "Conditions d'utilisation", "Cookies"],
      rights: "Tous droits réservés.",
      social: "Suivez-nous"
    },
    servicePage: {
      backHome: "Retour au cabinet",
      problemasTitle: "Problèmes que nous résolvons",
      problemasSub: "Touchez une carte pour voir des exemples et ce que nous faisons.",
      expandHint: "Touchez pour des exemples",
      solutionLabel: "Ce que nous faisons",
      examplesLabel: "Cas réels que nous traitons",
      contactCta: "Discutons de votre cas",
      next: "Domaine suivant"
    },
    manifestoPage: {
      kicker: "Manifeste",
      title: "Le droit arrive en retard sur presque tout ce qui est nouveau. Et quand il arrive, il le fait mal.",
      body: [
        "Il arrive avec un vocabulaire emprunté à une économie qui n'existe plus, avec des juges sans contexte technique, et des règles écrites pour un contrat signé sur papier par deux personnes dans la même pièce.",
        "Votre contrat a été écrit par un algorithme. Votre marque vit sur des plateformes qui changent leurs conditions chaque trimestre. Vos revenus traversent trois juridictions avant le petit déjeuner. Votre propriété peut être un jeton qui n'existe que parce que le réseau l'accorde. Votre héritage peut se trouver dans un portefeuille auquel personne dans votre famille ne sait accéder.",
        "Nous avons construit un cabinet pour cette réalité. Pas un cabinet traditionnel avec un département numérique. Un cabinet dont la pratique est née dans et pour l'économie numérique, et qui connaît le code qu'on vous demande de signer."
      ],
      pull: "Nous n'attendons pas que le législateur comprenne. Nous travaillons avec ce qui existe et, lorsque nécessaire, nous écrivons ce qui aurait dû exister."
    },
    despachoPage: {
      kicker: "Direction",
      title: "Direction.",
      bio: [
        "Juan Emmanuel Delva Benavides est Docteur en droit, chercheur et professeur. Il connaît les mécanismes formels des marchés américain, ibéro-américain et européen, ainsi que le rythme réel d'un lancement de jeton, d'un tour de seed ou de la clôture d'un accord de marque.",
        "Il exerce le conseil privé pour particuliers et entreprises."
      ],
      label: "Associé fondateur",
      credCta: "Discutons de votre cas"
    }
  }
};
