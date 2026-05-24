export type Locale = "es" | "en" | "fr";

export const locales: Locale[] = ["es", "en", "fr"];

export type Dict = {
  nav: {
    servicios: string;
    nosotros: string;
    contacto: string;
    cta: string;
    submenuExplore: string;
    submenuAll: string;
  };
  stage: { kicker: string; problems: string[]; reveal: string; skip: string };
  hero: { eyebrow: string; title: string; sub: string; ctaPrimary: string; ctaSecondary: string };
  areas: {
    kicker: string;
    title: string;
    sub: string;
    pick: string;
    open: string;
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
    manifiesto: string;
  };
  areaPage: {
    backHome: string;
    problemasTitle: string;
    problemasSub: string;
    enter: string;
    contactCta: string;
  };
  problemaPage: {
    breadcrumb: string;
    familiarTitle: string;
    examplesLabel: string;
    consequenceLabel: string;
    consequenceText: string;
    solutionLabel: string;
    ctaTitle: string;
    ctaSub: string;
    ctaButton: string;
    next: string;
    back: string;
  };
  nosotrosPage: {
    kicker: string;
    title: string;
    bio: string[];
    label: string;
    credCta: string;
  };
  manifiestoPage: {
    kicker: string;
    title: string;
    body: string[];
    pull: string;
  };
};

export const dict: Record<Locale, Dict> = {
  es: {
    nav: {
      servicios: "Servicios",
      nosotros: "Nosotros",
      contacto: "Contacto",
      cta: "Empezar",
      submenuExplore: "Explorar todas las áreas",
      submenuAll: "Ver todo"
    },
    stage: {
      kicker: "Establecido MMXXV",
      problems: [
        "Tu ronda seed cruza tres países. Una la prohíbe.",
        "Heredaste su Bitcoin. Las claves murieron con él.",
        "Te robaron la cuenta con miles de seguidores.",
        "Un deepfake firmó un contrato a tu nombre.",
        "Tu IA generó algo que es de alguien más.",
        "Tu marca apareció en un NFT que no autorizaste.",
        "Aún no sabes a quién dejarle tu vida digital."
      ],
      reveal: "Esto es lo que resolvemos. Y mucho más.",
      skip: "Saltar"
    },
    hero: {
      eyebrow: "Despacho jurídico digital",
      title: "Antes del prompt. Durante el incidente. Después de tu última sesión.",
      sub: "Asesoramos a personas y empresas en lo que pasa cuando tu vida o tu negocio ocurren en pantallas: cripto, IA, redes, herencia digital, mundos virtuales, eSports y todo lo que aún no tiene nombre legal pero ya tiene consecuencias.",
      ctaPrimary: "Empezar",
      ctaSecondary: "Ver servicios"
    },
    areas: {
      kicker: "Lo que más resolvemos",
      title: "Doce áreas. Una pregunta: ¿qué te pasó?",
      sub: "Toca cada área para ver de qué se trata.",
      pick: "Elige un área",
      open: "Entrar al área",
      cta: "¿No encaja en una sola? Es lo normal. Conversemos."
    },
    firma: {
      kicker: "Empezar",
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
      explore: "Servicios",
      contact: "Contacto",
      legal: "Aviso",
      legalLinks: ["Política de privacidad", "Términos de uso", "Cookies"],
      rights: "Todos los derechos reservados.",
      social: "Síguenos",
      manifiesto: "Manifiesto"
    },
    areaPage: {
      backHome: "Volver al inicio",
      problemasTitle: "Problemas que resolvemos en esta área",
      problemasSub: "Cada uno es una conversación distinta. Toca el que te suene familiar.",
      enter: "Ver detalle",
      contactCta: "Conversemos tu caso"
    },
    problemaPage: {
      breadcrumb: "Servicios",
      familiarTitle: "¿Te suena familiar?",
      examplesLabel: "Casos reales que atendemos",
      consequenceLabel: "Lo que pasa si no actúas",
      consequenceText: "El tiempo legal se mide distinto al tiempo digital. Lo que hoy es un mensaje, en seis meses es una sentencia.",
      solutionLabel: "Lo que hacemos",
      ctaTitle: "Resolvamos esto juntos",
      ctaSub: "El primer diálogo no se cobra.",
      ctaButton: "Iniciar diálogo",
      next: "Siguiente caso",
      back: "Ver toda el área"
    },
    nosotrosPage: {
      kicker: "Nosotros",
      title: "Quién está al frente.",
      bio: [
        "Juan Emmanuel Delva Benavides es Doctor en Derecho, investigador y profesor. Conoce los mecanismos formales del mercado americano, iberoamericano y europeo, y también el ritmo real de un lanzamiento de token, una ronda seed o el cierre de un trato con marca.",
        "Ejerce asesoría privada para usuarios y empresas."
      ],
      label: "Socio fundador",
      credCta: "Hablemos de tu caso"
    },
    manifiestoPage: {
      kicker: "Manifiesto",
      title: "El derecho llega tarde a casi todo lo nuevo. Cuando llega, lo hace mal.",
      body: [
        "Llega con vocabulario prestado de una economía que ya no existe, con jueces sin contexto técnico, y con reglas escritas para un contrato firmado en papel por dos personas en la misma sala.",
        "Tu contrato lo escribió un algoritmo. Tu marca vive en plataformas que cambian sus términos cada trimestre. Tu ingreso cruza tres jurisdicciones antes del desayuno. Tu propiedad puede ser un token que solo existe porque la red lo acuerda. Tu legado puede estar en una wallet a la que nadie en tu familia sabe entrar.",
        "Construimos un despacho para esa realidad. No tradicional con un departamento digital. Uno cuya práctica nació en y para la economía digital, y que conoce el código que te exigen firmar."
      ],
      pull: "No estamos esperando a que el legislador entienda. Trabajamos con lo que hay y, cuando hace falta, escribimos lo que debería haber."
    }
  },
  en: {
    nav: {
      servicios: "Services",
      nosotros: "About",
      contacto: "Contact",
      cta: "Get started",
      submenuExplore: "Explore all areas",
      submenuAll: "See all"
    },
    stage: {
      kicker: "Established MMXXV",
      problems: [
        "Your seed round spans three countries. One forbids it.",
        "You inherited his Bitcoin. The keys died with him.",
        "They stole your account with thousands of followers.",
        "A deepfake signed a contract in your name.",
        "Your AI generated something that belongs to someone else.",
        "Your brand appeared in an NFT you didn't authorize.",
        "You still don't know who should inherit your digital life."
      ],
      reveal: "This is what we resolve. And much more.",
      skip: "Skip"
    },
    hero: {
      eyebrow: "Digital law firm",
      title: "Before the prompt. During the incident. After your last session.",
      sub: "We advise people and companies on what happens when your life or business unfolds on screens: crypto, AI, social, digital legacy, virtual worlds, esports and everything that still has no legal name but already has consequences.",
      ctaPrimary: "Get started",
      ctaSecondary: "See services"
    },
    areas: {
      kicker: "What we resolve most",
      title: "Twelve areas. One question: what happened to you?",
      sub: "Tap each area to see what it's about.",
      pick: "Choose an area",
      open: "Open area",
      cta: "Doesn't fit a single area? That's normal. Let's talk."
    },
    firma: {
      kicker: "Get started",
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
      explore: "Services",
      contact: "Contact",
      legal: "Legal",
      legalLinks: ["Privacy policy", "Terms of use", "Cookies"],
      rights: "All rights reserved.",
      social: "Follow us",
      manifiesto: "Manifesto"
    },
    areaPage: {
      backHome: "Back to home",
      problemasTitle: "Problems we resolve in this area",
      problemasSub: "Each is a different conversation. Tap the one that sounds familiar.",
      enter: "See detail",
      contactCta: "Let's discuss your case"
    },
    problemaPage: {
      breadcrumb: "Services",
      familiarTitle: "Sound familiar?",
      examplesLabel: "Real cases we handle",
      consequenceLabel: "What happens if you don't act",
      consequenceText: "Legal time runs differently than digital time. What's a message today is a judgment in six months.",
      solutionLabel: "What we do",
      ctaTitle: "Let's resolve this together",
      ctaSub: "The first conversation is on us.",
      ctaButton: "Start dialogue",
      next: "Next case",
      back: "See the whole area"
    },
    nosotrosPage: {
      kicker: "About",
      title: "Who's at the helm.",
      bio: [
        "Juan Emmanuel Delva Benavides is a Doctor of Laws, researcher and professor. He understands the formal mechanisms of the American, Ibero-American and European markets, and also the real pace of a token launch, a seed round, or a brand deal.",
        "Provides private counsel to individuals and companies."
      ],
      label: "Founding partner",
      credCta: "Let's discuss your case"
    },
    manifiestoPage: {
      kicker: "Manifesto",
      title: "Law arrives late to almost everything new. When it arrives, it does so poorly.",
      body: [
        "It arrives with borrowed vocabulary from an economy that no longer exists, with judges lacking technical context, and rules written for a contract signed on paper by two people in the same room.",
        "Your contract was written by an algorithm. Your brand lives on platforms that change their terms each quarter. Your income crosses three jurisdictions before breakfast. Your property may be a token that exists only because the network agrees. Your legacy may sit in a wallet no one in your family knows how to access.",
        "We built a firm for that reality. Not a traditional firm with a digital department. One whose practice was born in and for the digital economy, and that understands the code they ask you to sign."
      ],
      pull: "We're not waiting for the legislator to catch up. We work with what exists and, when needed, write what should have existed."
    }
  },
  fr: {
    nav: {
      servicios: "Services",
      nosotros: "Cabinet",
      contacto: "Contact",
      cta: "Commencer",
      submenuExplore: "Explorer tous les domaines",
      submenuAll: "Tout voir"
    },
    stage: {
      kicker: "Établi MMXXV",
      problems: [
        "Votre tour de seed traverse trois pays. Un l'interdit.",
        "Vous avez hérité son Bitcoin. Les clés sont mortes avec lui.",
        "On vous a volé le compte avec des milliers d'abonnés.",
        "Un deepfake a signé un contrat en votre nom.",
        "Votre IA a généré quelque chose qui appartient à quelqu'un d'autre.",
        "Votre marque est apparue dans un NFT que vous n'avez pas autorisé.",
        "Vous ne savez pas encore à qui léguer votre vie numérique."
      ],
      reveal: "Voilà ce que nous résolvons. Et bien plus.",
      skip: "Passer"
    },
    hero: {
      eyebrow: "Cabinet juridique numérique",
      title: "Avant le prompt. Pendant l'incident. Après votre dernière session.",
      sub: "Nous conseillons particuliers et entreprises sur tout ce qui arrive quand votre vie ou votre activité se passe à l'écran : crypto, IA, réseaux, héritage numérique, mondes virtuels, esports et tout ce qui n'a pas encore de nom juridique mais déjà des conséquences.",
      ctaPrimary: "Commencer",
      ctaSecondary: "Voir les services"
    },
    areas: {
      kicker: "Là où nous intervenons le plus",
      title: "Douze domaines. Une question : que vous est-il arrivé ?",
      sub: "Touchez chaque domaine pour voir de quoi il s'agit.",
      pick: "Choisir un domaine",
      open: "Ouvrir",
      cta: "Votre cas ne tient pas dans un seul ? C'est la norme. Parlons-en."
    },
    firma: {
      kicker: "Commencer",
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
      explore: "Services",
      contact: "Contact",
      legal: "Mentions",
      legalLinks: ["Politique de confidentialité", "Conditions d'utilisation", "Cookies"],
      rights: "Tous droits réservés.",
      social: "Suivez-nous",
      manifiesto: "Manifeste"
    },
    areaPage: {
      backHome: "Retour à l'accueil",
      problemasTitle: "Problèmes que nous résolvons dans ce domaine",
      problemasSub: "Chacun est une conversation différente. Touchez celui qui vous parle.",
      enter: "Voir le détail",
      contactCta: "Discutons de votre cas"
    },
    problemaPage: {
      breadcrumb: "Services",
      familiarTitle: "Ça vous parle ?",
      examplesLabel: "Cas réels que nous traitons",
      consequenceLabel: "Ce qui arrive si vous n'agissez pas",
      consequenceText: "Le temps juridique ne se mesure pas comme le temps numérique. Ce qui est un message aujourd'hui devient un jugement dans six mois.",
      solutionLabel: "Ce que nous faisons",
      ctaTitle: "Résolvons ça ensemble",
      ctaSub: "Le premier échange est offert.",
      ctaButton: "Commencer",
      next: "Cas suivant",
      back: "Voir tout le domaine"
    },
    nosotrosPage: {
      kicker: "Cabinet",
      title: "Qui est à la barre.",
      bio: [
        "Juan Emmanuel Delva Benavides est Docteur en droit, chercheur et professeur. Il connaît les mécanismes formels des marchés américain, ibéro-américain et européen, ainsi que le rythme réel d'un lancement de jeton, d'un tour de seed ou de la clôture d'un accord de marque.",
        "Il exerce le conseil privé pour particuliers et entreprises."
      ],
      label: "Associé fondateur",
      credCta: "Discutons de votre cas"
    },
    manifiestoPage: {
      kicker: "Manifeste",
      title: "Le droit arrive en retard sur presque tout ce qui est nouveau. Et quand il arrive, il le fait mal.",
      body: [
        "Il arrive avec un vocabulaire emprunté à une économie qui n'existe plus, avec des juges sans contexte technique, et des règles écrites pour un contrat signé sur papier par deux personnes dans la même pièce.",
        "Votre contrat a été écrit par un algorithme. Votre marque vit sur des plateformes qui changent leurs conditions chaque trimestre. Vos revenus traversent trois juridictions avant le petit déjeuner. Votre propriété peut être un jeton qui n'existe que parce que le réseau l'accorde. Votre héritage peut se trouver dans un portefeuille auquel personne dans votre famille ne sait accéder.",
        "Nous avons construit un cabinet pour cette réalité. Pas un cabinet traditionnel avec un département numérique. Un cabinet dont la pratique est née dans et pour l'économie numérique, et qui connaît le code qu'on vous demande de signer."
      ],
      pull: "Nous n'attendons pas que le législateur comprenne. Nous travaillons avec ce qui existe et, lorsque nécessaire, nous écrivons ce qui aurait dû exister."
    }
  }
};
