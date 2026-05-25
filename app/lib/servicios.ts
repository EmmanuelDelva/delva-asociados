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
  scene: SceneType;
  avatar?: "biblioteca" | "portrait" | "mxoffice" | "crypto" | "tmec";
  image?: string;
  i18n: Partial<Record<Locale, AreaContent>>;
  problematicas: Problematica[];
};

export function getAreaContent(a: Area, locale: Locale): AreaContent {
  return a.i18n[locale] ?? a.i18n.es!;
}

export function getProblematicaContent(p: Problematica, locale: Locale): ProblematicaContent {
  return p.i18n[locale] ?? p.i18n.es!;
}

const A_HERENCIA: Area = {
  slug: "herencia-digital",
  num: "01",
  accent: "gold",
  scene: "estate",
  avatar: "biblioteca",
  i18n: {
    es: { title: "Herencia y Testamento Digital", short: "Tu vida digital también se hereda. La planeamos antes y la rescatamos después.", intro: "Bitcoin, cuentas de redes, dominios, fotos en la nube, suscripciones, propiedad virtual. Todo eso es patrimonio. Y rara vez está en un testamento." },
    en: { title: "Digital Inheritance & Will", short: "Your digital life is also inherited. We plan it before, and we rescue it after.", intro: "Bitcoin, social accounts, domains, cloud photos, subscriptions, virtual property. All of that is estate. And it's rarely in a will." },
    fr: { title: "Héritage et Testament Numérique", short: "Votre vie numérique s'hérite aussi. Nous la planifions avant, nous la récupérons après.", intro: "Bitcoin, comptes, domaines, photos cloud, abonnements, propriété virtuelle. Tout cela est patrimoine. Et c'est rarement dans un testament." }
  },
  problematicas: [
    {
      id: "papa-fallecio-cripto", scene: "estate",
      i18n: {
        es: { title: "Mi papá falleció y dejó cripto, cuentas y fotos. No podemos entrar a nada.", hook: "Las claves murieron con él. Ahora viene la parte legal — y la emocional.",
          examples: ["Tu papá tenía Bitcoin en un exchange y nadie en la familia sabe qué exchange ni qué correo usaba.", "Encontraron en su escritorio un papel con palabras separadas que parecen ser una seed phrase, pero falta una.", "Hay un iPad con Face ID que tenía todos los recuerdos de los últimos años y nadie lo puede desbloquear.", "Su Instagram tiene fotos de la familia que ya no existen en ningún otro lado."],
          consequence: "Cada día que pasa sin acción legal formal reduce las opciones. Los exchanges archivan KYC. Las claves se confunden. La familia se desgasta.",
          solution: ["Investigación forense de claves y wallets a partir de evidencia parcial.", "Acreditación sucesoria internacional.", "Gestión con exchanges para liberación de fondos a herederos.", "Solicitudes formales a Meta, Google, Apple para acceso y memorialization."] },
        en: { title: "My father passed away and left crypto, accounts and photos. We can't access anything.", hook: "The keys died with him. Now comes the legal part — and the emotional one.",
          examples: ["Your father held Bitcoin on an exchange and no one knows which one or which email he used.", "On his desk they found a paper with seed-phrase-like words, but one is missing.", "There is an iPad with Face ID holding all the recent memories and no one can unlock it.", "His Instagram has family photos that exist nowhere else."],
          consequence: "Every day without formal legal action narrows the options. Exchanges archive KYC. Keys get confused. The family wears out.",
          solution: ["Forensic key and wallet investigation from partial evidence.", "International estate certification.", "Negotiation with exchanges for fund release to heirs.", "Formal requests to Meta, Google, Apple for access and memorialization."] },
        fr: { title: "Mon père est décédé et a laissé de la crypto, des comptes et des photos. Nous ne pouvons accéder à rien.", hook: "Les clés sont mortes avec lui. Vient maintenant la partie juridique — et l'émotionnelle.",
          examples: ["Votre père détenait du Bitcoin sur un exchange et personne ne sait lequel.", "Sur son bureau, un papier avec des mots qui ressemblent à une seed phrase, mais il en manque un.", "Un iPad avec Face ID contenant tous les souvenirs récents et personne ne peut le déverrouiller.", "Son Instagram contient des photos de famille qui n'existent nulle part ailleurs."],
          consequence: "Chaque jour sans action juridique formelle réduit les options.",
          solution: ["Investigation forensique des clés et wallets.", "Certification successorale internationale.", "Négociation avec exchanges pour libération de fonds.", "Demandes formelles à Meta, Google, Apple."] }
      }
    },
    {
      id: "planear-ahora-no-anciano", scene: "vault",
      i18n: {
        es: { title: "No quiero esperar a viejo. Quiero dejar todo en orden ahora.", hook: "Tienes 35 años, una wallet seria, dos hijos. Si mañana no estás, ¿qué pasa?",
          examples: ["Tienes 300 mil USD en una Ledger y dos hijos menores. Quieres que reciban su parte cuando cumplan 25, no antes.", "Tu pareja no sabe nada de cripto y tú no quieres dejarle una carga técnica si te pasa algo.", "Tu negocio digital factura medio millón al mes desde un correo personal.", "Tienes cuentas de redes con cientos de miles de seguidores que son patrimonio real."],
          consequence: "Sin instrumentos modernos, ese patrimonio o se pierde, o termina en un proceso judicial doloroso para tu familia.",
          solution: ["Testamento digital con anexo técnico custodiado.", "Estructura de multi-firma con liberación condicional verificable.", "Fideicomiso de operación para activos digitales productivos.", "Instrucciones notariales coordinadas con custodios técnicos."] },
        en: { title: "I don't want to wait until I'm old. I want everything in order now.", hook: "You're 35, you hold a serious wallet, you have two kids. If you're not here tomorrow, what happens?",
          examples: ["You hold 300k USD on a Ledger and have two minor children. You want them to receive their share at 25.", "Your partner doesn't know crypto and you don't want to leave them a technical burden.", "Your digital business bills half a million a month from a personal email.", "You hold accounts with hundreds of thousands of followers that are real estate."],
          consequence: "Without modern instruments, that estate is either lost or ends in a painful court process for your family.",
          solution: ["Digital will with custodied technical annex.", "Multi-sig structure with verifiable conditional release.", "Operational trust for productive digital assets.", "Notarial instructions coordinated with technical custodians."] },
        fr: { title: "Je ne veux pas attendre la vieillesse. Je veux tout mettre en ordre maintenant.", hook: "Vous avez 35 ans, un wallet sérieux, deux enfants. Si demain vous n'êtes plus là, que se passe-t-il ?",
          examples: ["Vous détenez 300k USD sur un Ledger et avez deux enfants mineurs.", "Votre partenaire ne connaît rien à la crypto.", "Votre activité numérique facture un demi-million par mois depuis un email personnel.", "Vous avez des comptes avec des centaines de milliers d'abonnés."],
          consequence: "Sans instruments modernes, ce patrimoine se perd ou finit dans une procédure douloureuse.",
          solution: ["Testament numérique avec annexe technique gardée.", "Structure multi-signature à libération conditionnelle.", "Fiducie opérationnelle pour actifs numériques productifs.", "Instructions notariales coordonnées avec gardiens techniques."] }
      }
    },
    {
      id: "negocio-digital-sucesion", scene: "estate",
      i18n: {
        es: { title: "Mi negocio digital depende de mí. ¿Qué pasa si no estoy?", hook: "Tu canal, tu tienda, tu agencia: todo eso vale mucho. Si depende de un correo personal, vale cero el día que falles.",
          examples: ["Eres creador con 800 mil seguidores y un equipo de 5 personas que dependen del income.", "Tu tienda de Shopify factura medio millón al mes desde tu correo personal.", "Tu agencia tiene contratos firmados a tu nombre, no a una sociedad.", "Tu portafolio cripto está disperso en seis exchanges y tres wallets."],
          consequence: "Sin estructura, tu equipo queda en limbo, tus clientes sin proveedor, tu familia sin acceso al patrimonio.",
          solution: ["Estructura corporativa que sobreviva al fundador.", "Sucesión documentada con poderes de continuidad.", "Vault operativo con accesos críticos custodiados.", "Plan de continuidad ejecutable en 48 horas."] },
        en: { title: "My digital business depends on me. What happens if I'm not here?", hook: "Your channel, your store, your agency: it's worth a lot. If it depends on a personal email, it's worth zero the day you fail.",
          examples: ["You're a creator with 800k followers and a 5-person team that depends on the income.", "Your Shopify store bills half a million a month from your personal email.", "Your agency has contracts signed in your name, not a company's.", "Your crypto portfolio is spread across six exchanges and three wallets."],
          consequence: "Without structure, your team is in limbo, your clients without a provider, your family without access.",
          solution: ["Corporate structure that survives the founder.", "Documented succession with continuity powers.", "Operational vault with custodied critical access.", "48-hour executable continuity plan."] },
        fr: { title: "Mon activité numérique dépend de moi. Que se passe-t-il si je ne suis pas là ?", hook: "Votre chaîne, votre boutique, votre agence : tout cela vaut beaucoup. Si ça dépend d'un email personnel, ça vaut zéro le jour où vous tombez.",
          examples: ["Créateur avec 800k abonnés et une équipe de 5 personnes.", "Votre boutique Shopify facture un demi-million par mois depuis votre email personnel.", "Votre agence a des contrats signés à votre nom.", "Votre portefeuille crypto est dispersé sur six exchanges et trois wallets."],
          consequence: "Sans structure, votre équipe est en suspens, vos clients sans fournisseur, votre famille sans accès.",
          solution: ["Structure d'entreprise qui survit au fondateur.", "Succession documentée avec pouvoirs de continuité.", "Vault opérationnel avec accès critiques gardés.", "Plan de continuité exécutable en 48 heures."] }
      }
    },
    {
      id: "cuentas-redes-fallecido", scene: "broken-chain",
      i18n: {
        es: { title: "Recuperar las cuentas y memorias de un familiar fallecido", hook: "Facebook no responde. El correo bloqueado. Las fotos atrapadas adentro.",
          examples: ["Quieres recuperar el Instagram de tu hermana fallecida con fotos irrepetibles.", "Tu mamá tenía un PayPal con saldo y los hijos no pueden retirarlo.", "Un familiar dejó su iCloud sin contraseña y ahí están todos los documentos importantes.", "Un suplantador está usando la cuenta de tu padre fallecido."],
          consequence: "Las plataformas responden por procedimiento. Sin la documentación correcta, te tardan meses — o nunca responden.",
          solution: ["Solicitudes formales a Meta, Google, Apple, X con paquete legal certificado.", "Acta sucesoria internacional cuando aplique.", "Memorialization o cierre digno de cuentas.", "Defensa de derecho post-mortem a la imagen y memoria."] },
        en: { title: "Recovering accounts and memories of a deceased family member", hook: "Facebook won't respond. The email is locked. The photos trapped inside.",
          examples: ["You want to recover your late sister's Instagram with irreplaceable photos.", "Your mother had a PayPal balance and the children can't withdraw it.", "A relative left their iCloud password-locked.", "An impersonator is using the account of your deceased father."],
          consequence: "Platforms respond by procedure. Without correct documentation, they take months — or never respond.",
          solution: ["Formal requests to Meta, Google, Apple, X with certified legal package.", "International estate certification when applicable.", "Memorialization or dignified account closure.", "Post-mortem image and memory rights defense."] },
        fr: { title: "Récupérer les comptes et souvenirs d'un proche décédé", hook: "Facebook ne répond pas. L'email est bloqué. Les photos prisonnières.",
          examples: ["Vous voulez récupérer l'Instagram de votre sœur défunte.", "Votre mère avait un solde PayPal que les enfants ne peuvent retirer.", "Un proche a laissé son iCloud verrouillé.", "Un usurpateur utilise le compte de votre père décédé."],
          consequence: "Les plateformes répondent par procédure. Sans la documentation correcte, des mois — voire jamais.",
          solution: ["Demandes formelles à Meta, Google, Apple, X avec paquet juridique certifié.", "Certification successorale internationale.", "Memorialization ou clôture digne.", "Défense du droit post-mortem à l'image."] }
      }
    },
    {
      id: "wallet-multifirma-familia", scene: "vault",
      i18n: {
        es: { title: "Quiero que mi familia pueda acceder a la cripto solo bajo ciertas condiciones", hook: "Ni en vida con acceso total. Ni en muerte sin acceso ninguno. Algo en medio, escrito.",
          examples: ["Quieres que tu esposa reciba acceso solo si te pasa algo, sin que pueda usarlo en vida.", "Quieres que tus hijos reciban su parte cuando cumplan 25, no antes.", "Quieres un mecanismo que se active si no respondes en 90 días, sin testamento clásico."],
          consequence: "Las soluciones DIY (papel en caja fuerte, una sola seed compartida) son las que más fallan en el momento crítico.",
          solution: ["Custodia jurídica multi-firma profesional.", "Dead-man switch con verificación periódica.", "Liberación condicional verificable.", "Instrucciones notariales sincronizadas con el setup técnico."] },
        en: { title: "I want my family to access my crypto only under certain conditions", hook: "Not full access during life. Not zero access in death. Something in between, written down.",
          examples: ["You want your spouse to gain access only if something happens, without using it while alive.", "You want your kids to receive their share at 25, not before.", "You want a mechanism triggered if you don't respond in 90 days, without classic will."],
          consequence: "DIY solutions (paper in a safe, a single shared seed) fail most at the critical moment.",
          solution: ["Professional multi-sig legal custody.", "Dead-man switch with periodic verification.", "Verifiable conditional release.", "Notarial instructions synced with technical setup."] },
        fr: { title: "Je veux que ma famille accède à la crypto sous conditions", hook: "Ni accès total en vie. Ni aucun accès en mort. Quelque chose entre les deux, écrit.",
          examples: ["Votre conjoint n'accède que s'il vous arrive quelque chose, sans l'utiliser en vie.", "Vos enfants reçoivent leur part à 25 ans.", "Un mécanisme qui s'active si vous ne répondez pas dans 90 jours."],
          consequence: "Les solutions DIY échouent le plus au moment critique.",
          solution: ["Custodie juridique multi-signature professionnelle.", "Dead-man switch avec vérification périodique.", "Libération conditionnelle vérifiable.", "Instructions notariales synchronisées avec le setup technique."] }
      }
    },
    {
      id: "saldos-atrapados", scene: "wallet",
      i18n: {
        es: { title: "Hay saldos atrapados en PayPal, Mercado Libre, exchanges, plataformas", hook: "El dinero está. Pero alguien decidió que no es tuyo hasta probar lo contrario.",
          examples: ["PayPal congeló 4 mil USD de un familiar fallecido y pide documentación imposible.", "Un creador difunto dejó saldo en su cuenta de YouTube que la familia no puede retirar.", "Una herencia incluye una cuenta de Binance bloqueada por KYC vencido."],
          consequence: "La plataforma esperará para siempre. Tú no.",
          solution: ["Paquete legal específico por plataforma.", "Negociación documental y técnica con cumplimiento KYC póstumo.", "Escalado a regulador cuando aplica.", "Recuperación judicial como último recurso."] },
        en: { title: "Balances trapped in PayPal, Mercado Libre, exchanges, platforms", hook: "The money is there. But someone decided it's not yours until you prove otherwise.",
          examples: ["PayPal froze 4k USD of a deceased relative and asks for impossible documentation.", "A late creator left a YouTube balance the family can't withdraw.", "An estate includes a Binance account blocked by expired KYC."],
          consequence: "The platform will wait forever. You won't.",
          solution: ["Platform-specific legal package.", "Documentary and technical negotiation with posthumous KYC.", "Escalation to regulator when applicable.", "Judicial recovery as last resort."] },
        fr: { title: "Soldes coincés sur PayPal, exchanges, plateformes", hook: "L'argent est là. Mais quelqu'un a décidé que ce n'est pas à vous jusqu'à preuve du contraire.",
          examples: ["PayPal a gelé 4k USD d'un proche décédé.", "Un créateur défunt a laissé un solde YouTube.", "Une succession inclut un compte Binance bloqué."],
          consequence: "La plateforme attendra pour toujours. Pas vous.",
          solution: ["Paquet juridique spécifique par plateforme.", "Négociation documentaire avec KYC posthume.", "Escalade au régulateur si applicable.", "Récupération judiciaire en dernier recours."] }
      }
    }
  ]
};

const A_DISENO_WEB: Area = {
  slug: "diseno-web", num: "02", accent: "forest", scene: "browser",
  i18n: {
    es: { title: "Diseño Web y LegalTech", short: "Construimos tu sitio listo para vender y para cumplir.", intro: "Si tu negocio vive en internet, tu sitio web es tu fachada y tu contrato simultáneamente. Hacemos sitios que venden y que ya cumplen con LFPDPPP, GDPR, T&C reales, cookies y compliance desde origen." },
    en: { title: "Web Design & LegalTech", short: "We build your site ready to sell and ready to comply.", intro: "If your business lives online, your website is both your facade and your contract. We build sites that sell and that comply with data law from day one." },
    fr: { title: "Design Web et LegalTech", short: "Nous construisons votre site prêt à vendre et à se conformer.", intro: "Si votre activité vit en ligne, votre site est à la fois votre façade et votre contrat." }
  },
  problematicas: [
    {
      id: "sitio-listo-cumplir", scene: "browser",
      i18n: {
        es: { title: "Necesito un sitio web profesional para mi negocio digital", hook: "No quieres un sitio bonito que te demanden. Quieres uno que venda y proteja.",
          examples: ["Estás lanzando una marca de joyería online y necesitas tienda + privacidad + términos reales.", "Tu negocio de consultoría requiere captar leads cumpliendo LFPDPPP desde el primer formulario.", "Tu startup necesita landing premium y políticas alineadas al servicio."],
          consequence: "Un sitio sin compliance es una demanda esperando ocurrir.",
          solution: ["Diseño y desarrollo del sitio (Next.js + Vercel).", "Aviso de privacidad redactado al modelo.", "Términos y condiciones reales, no plantilla.", "Cookie banner con consent management."] },
        en: { title: "I need a professional website for my digital business", hook: "You don't want a pretty site that gets sued. You want one that sells and protects.",
          examples: ["You're launching an online jewelry brand.", "Your consulting needs to capture leads compliant with data law.", "Your startup needs premium landing and aligned policies."],
          consequence: "A non-compliant site is a lawsuit waiting to happen.",
          solution: ["Site design and development (Next.js + Vercel).", "Privacy notice for your business model.", "Real T&Cs, not template.", "Cookie banner with consent management."] },
        fr: { title: "J'ai besoin d'un site web professionnel", hook: "Vous voulez un site qui vend et qui protège.",
          examples: ["Vous lancez une marque de bijouterie en ligne.", "Votre activité de conseil doit capter des leads conformes.", "Votre startup a besoin d'une landing premium."],
          consequence: "Un site non conforme est un procès en attente.",
          solution: ["Design et développement (Next.js + Vercel).", "Avis de confidentialité sur votre modèle.", "CGV réelles.", "Bannière cookies avec gestion du consentement."] }
      }
    },
    {
      id: "terminos-reales", scene: "scroll",
      i18n: {
        es: { title: "Mis términos y condiciones son una plantilla genérica", hook: "El día que tengas un problema, esa plantilla no te va a defender.",
          examples: ["Tu T&C dice 'jurisdicción California' y operas solo en México.", "Tu política de privacidad menciona derechos que tu app no respeta.", "Tus T&C limitan responsabilidad de forma que la ley no permite."],
          solution: ["Auditoría de T&C actuales contra tu operación real.", "Redacción a la medida del modelo.", "Política de privacidad alineada a flujo de datos real.", "Versionado y registro de aceptación."] },
        en: { title: "My terms are a generic template", hook: "The day you have a problem, that template won't defend you.",
          examples: ["Your T&Cs say 'California jurisdiction' but you only operate in Mexico.", "Your privacy policy mentions rights your app doesn't respect.", "Your T&Cs limit liability in ways the law doesn't allow."],
          solution: ["T&C audit against your real operation.", "Custom drafting to business model.", "Privacy policy aligned to real data flow.", "Versioning and acceptance log."] },
        fr: { title: "Mes CGV sont un modèle générique", hook: "Le jour où vous avez un problème, ce modèle ne vous défendra pas.",
          examples: ["Vos CGV disent 'juridiction Californie' mais vous opérez au Mexique.", "Votre politique de confidentialité mentionne des droits que votre app ne respecte pas.", "Vos CGV limitent la responsabilité de façon non permise."],
          solution: ["Audit des CGV contre l'opération réelle.", "Rédaction sur mesure.", "Politique de confidentialité alignée au flux réel.", "Versionnage et registre d'acceptation."] }
      }
    },
    {
      id: "ecommerce-multi-juris", scene: "globe",
      i18n: {
        es: { title: "Mi e-commerce vende a varios países y no sé qué reglas seguir", hook: "Cada país tiene su consumer law. Y todos quieren ser jurisdicción.",
          examples: ["Tu Shopify vende a México, USA y España y no sabes cómo redactar tus T&C.", "Vendes contenido digital a UE y debes cumplir IVA OSS.", "Un cliente en Brasil quiere devolver fuera de plazo y reclama LGPD."],
          solution: ["Estructura multi-juris de T&C y privacidad.", "Plan de cumplimiento fiscal y de consumo.", "Plantillas de respuesta a reclamos por mercado.", "Defensa ante autoridades de consumo."] },
        en: { title: "My e-commerce sells to several countries and I don't know which rules apply", hook: "Each country has its consumer law. And all want to be jurisdiction.",
          examples: ["Your Shopify sells to Mexico, USA, Spain.", "You sell digital content to EU and must comply with VAT OSS.", "A Brazilian client wants late return and claims LGPD."],
          solution: ["Multi-juris T&C and privacy structure.", "Tax and consumer compliance plan.", "Per-market complaint response templates.", "Defense before consumer authorities."] },
        fr: { title: "Mon e-commerce vend dans plusieurs pays et je ne connais pas les règles", hook: "Chaque pays a sa loi consommation. Et tous veulent être juridiction.",
          examples: ["Votre Shopify vend au Mexique, USA, Espagne.", "Vous vendez du contenu numérique à l'UE et devez TVA OSS.", "Un client brésilien veut retour hors délai."],
          solution: ["Structure multi-juridictionnelle de CGV et confidentialité.", "Plan de conformité fiscale et consommation.", "Modèles de réponse par marché.", "Défense devant autorités de consommation."] }
      }
    },
    {
      id: "cookies-consent", scene: "shield",
      i18n: {
        es: { title: "Necesito un banner de cookies que sí funcione legalmente", hook: "El banner de cookies es lo primero que ve tu cliente. Y lo primero que audita el regulador.",
          examples: ["Tu banner actual dice 'usamos cookies' y un solo botón 'aceptar'. Eso no cumple GDPR.", "Recibiste denuncia INAI por tracking sin consentimiento.", "Tu cliente europeo te exige consent management certificado."],
          solution: ["CMP con categorías reales.", "Mapeo técnico de scripts vs categorías.", "Logs de consentimiento por usuario.", "Política de cookies escrita."] },
        en: { title: "I need a cookie banner that actually works legally", hook: "The cookie banner is the first thing your client sees. And the first the regulator audits.",
          examples: ["Your current banner says 'we use cookies' with one 'accept' button. That doesn't comply with GDPR.", "You received an INAI complaint for tracking without consent.", "Your European client demands certified consent management."],
          solution: ["CMP with real categories.", "Technical mapping of scripts vs categories.", "Per-user consent logs.", "Written cookie policy."] },
        fr: { title: "J'ai besoin d'une bannière cookies qui fonctionne juridiquement", hook: "La bannière cookies est la première chose que voit votre client. Et la première qu'auditе le régulateur.",
          examples: ["Votre bannière actuelle ne respecte pas le RGPD.", "Vous avez reçu une plainte pour tracking sans consentement.", "Votre client européen exige un consent management certifié."],
          solution: ["CMP avec catégories réelles.", "Cartographie technique scripts/catégories.", "Logs de consentement par utilisateur.", "Politique cookies écrite."] }
      }
    }
  ]
};

const A_IA_APLICADA: Area = {
  slug: "ia-aplicada", num: "03", accent: "ember", scene: "robot",
  i18n: {
    es: { title: "IA Aplicada y Automatizaciones", short: "Implementamos IA en tu negocio con guardrails legales.", intro: "Más allá de la regulación: te ayudamos a usar IA, agentes y automatizaciones para hacer tu negocio más eficiente, sin abrirte a demandas. Capacitamos a tu equipo y armamos los procesos." },
    en: { title: "Applied AI & Automation", short: "We deploy AI in your business with legal guardrails.", intro: "Beyond regulation: we help you use AI, agents and automation to make your business more efficient, without exposing you to lawsuits." },
    fr: { title: "IA Appliquée et Automatisations", short: "Nous déployons l'IA dans votre activité avec des garde-fous juridiques.", intro: "Au-delà de la régulation : nous vous aidons à utiliser l'IA, les agents et l'automatisation." }
  },
  problematicas: [
    {
      id: "capacitacion-ia-equipo", scene: "robot",
      i18n: {
        es: { title: "Quiero capacitar a mi equipo en uso responsable de IA", hook: "Tu equipo ya usa ChatGPT. La pregunta es si lo hace sin filtrar datos confidenciales.",
          examples: ["Tus abogados pegan contratos confidenciales en ChatGPT consumer.", "Tu equipo de marketing genera assets con IA sin saber sobre derechos.", "Tu equipo de finanzas usa IA para analizar datos sensibles."],
          solution: ["Capacitación in-house por área.", "Política interna por rol.", "Setup técnico enterprise.", "Auditoría semestral."] },
        en: { title: "I want to train my team on responsible AI use", hook: "Your team already uses ChatGPT. The question is if they do it without leaking confidential data.",
          examples: ["Your lawyers paste confidential contracts into consumer ChatGPT.", "Marketing generates AI assets without knowing rights.", "Finance uses AI on sensitive client data."],
          solution: ["In-house training by area.", "Internal policy by role.", "Enterprise technical setup.", "Semestral audit."] },
        fr: { title: "Je veux former mon équipe à l'usage responsable de l'IA", hook: "Votre équipe utilise déjà ChatGPT. Sans fuiter des données ?",
          examples: ["Vos avocats collent des contrats confidentiels dans ChatGPT.", "Marketing génère des assets IA sans connaître les droits.", "Finance utilise l'IA sur données sensibles."],
          solution: ["Formation interne par domaine.", "Politique interne par rôle.", "Setup technique entreprise.", "Audit semestriel."] }
      }
    },
    {
      id: "implementar-ia-empresa", scene: "robot",
      i18n: {
        es: { title: "Quiero implementar IA en mis operaciones sin meterme en problemas", hook: "Hay un caso de uso real. Hay un modelo. Falta el envoltorio legal y operativo.",
          examples: ["Quieres un chatbot que responda preguntas con base en tu documentación.", "Quieres automatizar revisión preliminar de contratos con IA.", "Quieres usar IA para scoring crediticio interno."],
          solution: ["Diseño del caso de uso con compliance integrado.", "Selección de vendor con due diligence.", "Guardrails técnicos y legales.", "Documentación para auditoría y reguladores."] },
        en: { title: "I want to deploy AI in operations without getting into trouble", hook: "There's a real use case. There's a model. What's missing is the legal and operational wrapper.",
          examples: ["You want a chatbot answering questions from your docs.", "You want to automate preliminary contract review with AI.", "You want AI for internal credit scoring."],
          solution: ["Use-case design with built-in compliance.", "Vendor selection with due diligence.", "Technical and legal guardrails.", "Documentation for audit and regulators."] },
        fr: { title: "Je veux déployer l'IA dans mes opérations sans problèmes", hook: "Il y a un vrai cas d'usage. Un modèle. Il manque l'enveloppe juridique.",
          examples: ["Un chatbot qui répond depuis votre documentation.", "Automatiser la revue préliminaire de contrats.", "IA pour scoring crédit interne."],
          solution: ["Conception du cas avec conformité intégrée.", "Sélection vendeur avec due diligence.", "Garde-fous techniques et juridiques.", "Documentation pour audit."] }
      }
    },
    {
      id: "automatizaciones-workflow", scene: "network",
      i18n: {
        es: { title: "Necesito automatizar procesos repetitivos en mi negocio", hook: "Cada hora ahorrada en operación es una hora más para vender.",
          examples: ["Tu equipo dedica 20 horas/semana a clasificar emails y CRM.", "Procesas facturas manualmente cuando podrías automatizar 80%.", "Tu onboarding de clientes toma 5 días y debería tomar 1."],
          solution: ["Diagnóstico de procesos.", "Diseño con n8n, Make, Zapier o stack custom.", "Integración con sistemas existentes.", "Compliance LFPDPPP/GDPR de los flujos."] },
        en: { title: "I need to automate repetitive processes", hook: "Every operational hour saved is another hour to sell.",
          examples: ["Your team spends 20 hours/week classifying emails and CRM.", "You process invoices manually when you could automate 80%.", "Client onboarding takes 5 days and should take 1."],
          solution: ["Process diagnostic.", "Design with n8n, Make, Zapier or custom stack.", "Integration with existing systems.", "GDPR-compliant automated flows."] },
        fr: { title: "J'ai besoin d'automatiser des processus répétitifs", hook: "Chaque heure opérationnelle économisée est une heure pour vendre.",
          examples: ["Votre équipe passe 20h/semaine à classer emails et CRM.", "Vous traitez les factures manuellement.", "L'onboarding client prend 5 jours."],
          solution: ["Diagnostic des processus.", "Conception avec n8n, Make, Zapier.", "Intégration aux systèmes existants.", "Conformité RGPD des flux automatisés."] }
      }
    },
    {
      id: "agente-ia-cliente", scene: "robot",
      i18n: {
        es: { title: "Quiero un agente IA que atienda a mis clientes", hook: "El agente puede atender 24/7. Pero también puede decir tonterías legalmente costosas.",
          examples: ["Tu app de salud quiere un asistente IA que oriente síntomas.", "Tu fintech quiere un agente que ayude con dudas de productos.", "Tu legal-services quiere un primer filtro IA antes de pasar a humano."],
          solution: ["Diseño del scope del agente.", "Guardrails y disclaimers efectivos.", "Log de conversaciones para auditoría.", "Plan de escalado a humano."] },
        en: { title: "I want an AI agent serving my clients", hook: "The agent runs 24/7. It can also say legally expensive nonsense.",
          examples: ["Your health app wants an AI assistant for symptoms.", "Your fintech wants an agent for product questions.", "Your legal services want an AI first-pass before human."],
          solution: ["Agent scope design.", "Effective guardrails and disclaimers.", "Conversation logs for audit.", "Human escalation plan."] },
        fr: { title: "Je veux un agent IA qui sert mes clients", hook: "L'agent fonctionne 24/7. Il peut aussi dire des bêtises juridiquement coûteuses.",
          examples: ["Votre app santé veut un assistant IA.", "Votre fintech veut un agent pour les questions produits.", "Votre service juridique veut un premier filtre IA."],
          solution: ["Conception du scope de l'agent.", "Garde-fous et disclaimers effectifs.", "Logs de conversations.", "Plan d'escalade humaine."] }
      }
    },
    {
      id: "auditoria-ia-actual", scene: "shield",
      i18n: {
        es: { title: "Ya uso IA y quiero saber si estoy expuesto", hook: "Si llevas más de un año usando IA y nunca lo revisaste, hay deuda técnica-legal.",
          examples: ["Tu equipo lleva 18 meses usando IA en producción sin auditoría.", "Tu vendor de IA cambió T&C y nadie revisó.", "Tu CISO quiere un assessment formal de riesgos IA."],
          solution: ["Auditoría de uso actual por proceso.", "Mapa de riesgos legales y operativos.", "Plan de remediación priorizado.", "Reporte para junta directiva."] },
        en: { title: "I already use AI and want to know if I'm exposed", hook: "If you've used AI for over a year without review, there's technical-legal debt.",
          examples: ["Your team has used AI in production 18 months without audit.", "Your AI vendor changed T&Cs and no one reviewed.", "Your CISO wants a formal AI risk assessment."],
          solution: ["Per-process usage audit.", "Legal and operational risk map.", "Prioritized remediation plan.", "Board report."] },
        fr: { title: "J'utilise déjà l'IA et veux savoir si je suis exposé", hook: "Plus d'un an d'IA sans audit ? Il y a dette technico-juridique.",
          examples: ["Votre équipe utilise l'IA en production depuis 18 mois sans audit.", "Votre vendeur IA a changé ses CGV.", "Votre CISO veut une évaluation formelle."],
          solution: ["Audit d'usage par processus.", "Carte des risques.", "Plan de remédiation priorisé.", "Rapport pour conseil d'administration."] }
      }
    }
  ]
};

const A_REDES_REPUTACION: Area = {
  slug: "redes-reputacion", num: "04", accent: "ember", scene: "broken-chain", avatar: "portrait",
  i18n: {
    es: { title: "Redes Sociales y Reputación Digital", short: "Cuentas robadas, deepfakes, suplantación y limpieza de reputación.", intro: "Tu cuenta con miles de seguidores es patrimonio. Tu rostro circula sin tu permiso. Una nota antigua te persigue. Esto también se resuelve." },
    en: { title: "Social Media & Digital Reputation", short: "Stolen accounts, deepfakes, impersonation and reputation cleanup.", intro: "Your account with thousands of followers is estate. Your face circulates without permission. An old post follows you. This also gets resolved." },
    fr: { title: "Réseaux Sociaux et Réputation Numérique", short: "Comptes volés, deepfakes, usurpation et nettoyage de réputation.", intro: "Votre compte avec des milliers d'abonnés est patrimoine. Votre visage circule sans permission. Cela se résout aussi." }
  },
  problematicas: [
    {
      id: "cuenta-robada-seguidores", scene: "broken-chain",
      i18n: {
        es: { title: "Me robaron la cuenta de Instagram / TikTok con miles de seguidores", hook: "Tu cuenta es patrimonio. Cuando la roban, no se pierde solo el acceso — se pierde el negocio.",
          examples: ["Phishing y ahora un tercero usa tu cuenta con 80 mil seguidores para vender estafas.", "Tu cuenta de YouTube con 250k subs fue tomada y monetiza contenido cripto fraudulento.", "Tu IG profesional fue clonado en una cuenta hermana."],
          consequence: "Cada día perdido es reputación destruida, audiencia migrada, monetización perdida.",
          solution: ["Reporte urgente y escalado a contactos directos en Meta, TikTok, Google.", "Paquete legal de propiedad de la cuenta.", "Negociación con el atacante cuando hay vía.", "Acción civil y penal por suplantación.", "Comunicación pública para preservar reputación."] },
        en: { title: "They stole my Instagram / TikTok with thousands of followers", hook: "Your account is estate. When stolen, it's not just access lost — it's the business.",
          examples: ["Phishing and now a third party uses your 80k-follower account for scams.", "Your 250k YouTube was taken and monetizes fraudulent crypto content.", "Your professional IG was cloned in a sibling account."],
          consequence: "Every day lost is reputation destroyed, audience migrated, monetization lost.",
          solution: ["Urgent report escalated to direct contacts at Meta, TikTok, Google.", "Legal account-ownership package.", "Negotiation with attacker when possible.", "Civil and criminal action for impersonation.", "Public communication to preserve reputation."] },
        fr: { title: "On m'a volé le compte Instagram / TikTok avec des milliers d'abonnés", hook: "Votre compte est patrimoine. Quand on le vole, ce n'est pas seulement l'accès — c'est l'activité.",
          examples: ["Phishing et un tiers utilise votre compte de 80k abonnés pour des arnaques.", "Votre YouTube de 250k a été pris et monétise du contenu crypto frauduleux.", "Votre IG professionnel a été cloné."],
          consequence: "Chaque jour perdu est réputation détruite, audience migrée, monétisation perdue.",
          solution: ["Rapport urgent escaladé aux contacts directs.", "Paquet juridique de propriété.", "Négociation avec l'attaquant.", "Action civile et pénale.", "Communication publique."] }
      }
    },
    {
      id: "deepfake-takedown", scene: "face",
      i18n: {
        es: { title: "Hicieron un deepfake conmigo y necesito que baje YA", hook: "Necesitas que ese video desaparezca antes del lunes. Lo entendemos.",
          examples: ["Apareciste en un video porno deepfake circulando en WhatsApp y un compañero de trabajo lo vio.", "Una pareja ex publica audios falsos tuyos clonados con IA.", "Una empresa usó tu rostro en publicidad sin consentimiento.", "Un creador te clonó la voz y usa tu nombre para vender cursos."],
          consequence: "Mientras más rápido, mejor. Los videos virales tardan días en bajarse. Tu reputación tarda meses en recuperarse.",
          solution: ["Takedown urgente plataforma por plataforma.", "Denuncia ante INAI, FGR y autoridades análogas.", "Medidas de protección y orden de no acercamiento.", "Indemnización civil por daño moral.", "Estrategia de comunicación pública si es necesario."] },
        en: { title: "They made a deepfake of me and I need it down NOW", hook: "You need that video gone before Monday. We get it.",
          examples: ["You appear in a deepfake porn video on WhatsApp and a coworker saw it.", "An ex publishes AI-cloned fake audios.", "A company used your face in advertising without consent.", "A creator cloned your voice and uses your name to sell courses."],
          consequence: "The faster, the better. Viral videos take days to remove. Your reputation takes months to recover.",
          solution: ["Urgent platform-by-platform takedown.", "Filings with INAI, FGR, equivalent authorities.", "Protection measures and restraining orders.", "Civil compensation for moral damages.", "Public communication strategy when needed."] },
        fr: { title: "On a fait un deepfake de moi et il faut qu'il disparaisse MAINTENANT", hook: "Il faut que cette vidéo disparaisse avant lundi. Nous comprenons.",
          examples: ["Vidéo deepfake porno qui circule sur WhatsApp.", "Un ex publie de faux audios clonés par IA.", "Une entreprise a utilisé votre visage en publicité.", "Un créateur a cloné votre voix."],
          consequence: "Plus vite, mieux. Les vidéos virales prennent des jours à retirer.",
          solution: ["Retrait urgent plateforme par plateforme.", "Signalements aux autorités.", "Mesures de protection.", "Indemnisation civile.", "Stratégie de communication publique."] }
      }
    },
    {
      id: "suplantacion-identidad", scene: "face",
      i18n: {
        es: { title: "Alguien creó perfiles falsos con mi identidad", hook: "Tu nombre, tus fotos, tu vida — usadas por alguien más para estafar.",
          examples: ["Hay tres cuentas de Tinder con tus fotos contactando gente.", "Una página de Facebook usa tu nombre y foto para vender productos falsos.", "Un perfil en LinkedIn se hace pasar por ti."],
          consequence: "Cada víctima del suplantador puede demandarte a ti por confusión.",
          solution: ["Takedown coordinado multi-plataforma.", "Investigación de origen.", "Denuncia penal por usurpación.", "Comunicación pública defensiva."] },
        en: { title: "Someone created fake profiles with my identity", hook: "Your name, your photos, your life — used by someone else to scam.",
          examples: ["Three Tinder accounts with your photos contacting people.", "A Facebook page uses your name and photo to sell fake products.", "A LinkedIn profile poses as you and messages your professional contacts."],
          consequence: "Each victim of the impersonator can sue you for confusion.",
          solution: ["Coordinated multi-platform takedown.", "Origin investigation.", "Criminal complaint for identity theft.", "Defensive public communication."] },
        fr: { title: "On a créé de faux profils avec mon identité", hook: "Votre nom, vos photos, votre vie — utilisés par quelqu'un d'autre pour escroquer.",
          examples: ["Trois comptes Tinder avec vos photos.", "Une page Facebook utilise votre nom pour vendre des produits faux.", "Un profil LinkedIn se fait passer pour vous."],
          consequence: "Chaque victime de l'usurpateur peut vous poursuivre pour confusion.",
          solution: ["Retrait coordonné multi-plateforme.", "Investigation d'origine.", "Plainte pénale.", "Communication défensive."] }
      }
    },
    {
      id: "contenido-difamatorio", scene: "shield",
      i18n: {
        es: { title: "Hay contenido difamatorio sobre mí que no se va", hook: "Una nota mentirosa. Un thread viral. Un foro que no modera. Todo eso es manejable.",
          examples: ["Un blog publicó información falsa sobre tu negocio y aparece en la primera página de Google.", "Un thread de X con 500k vistas te acusa sin pruebas.", "Un foro especializado tiene un hilo activo de hace tres años hablando mal de ti."],
          consequence: "El contenido difamatorio sin respuesta legal se vuelve verdad de Google.",
          solution: ["Cease and desist al autor y a la plataforma.", "Demanda civil por daño moral.", "SEO inverso y derecho al olvido.", "Estrategia de contenido propio para reposicionar."] },
        en: { title: "There's defamatory content about me that won't go away", hook: "A lying article. A viral thread. An unmoderated forum. All manageable.",
          examples: ["A blog published false info on your business and it ranks first on Google.", "An X thread with 500k views accuses you without evidence.", "A specialized forum has an active 3-year-old thread trashing you."],
          consequence: "Defamatory content without legal response becomes Google truth.",
          solution: ["Cease and desist to author and platform.", "Civil lawsuit for moral damages.", "Reverse SEO and right to be forgotten.", "Owned-content strategy to reposition."] },
        fr: { title: "Il y a du contenu diffamatoire sur moi qui ne disparaît pas", hook: "Un article mensonger. Un thread viral. Un forum non modéré. Tout cela se gère.",
          examples: ["Un blog a publié des fausses infos sur votre activité.", "Un thread X de 500k vues vous accuse sans preuves.", "Un forum spécialisé a un fil actif depuis 3 ans."],
          consequence: "Le contenu diffamatoire sans réponse devient vérité Google.",
          solution: ["Mise en demeure à l'auteur et plateforme.", "Action civile.", "SEO inverse et droit à l'oubli.", "Stratégie de contenu propre."] }
      }
    },
    {
      id: "fotos-comprometedoras", scene: "shield",
      i18n: {
        es: { title: "Bajar fotos/videos íntimos publicados sin consentimiento", hook: "Revenge porn, sextorsión, contenido íntimo filtrado. Hay vías legales — y son urgentes.",
          examples: ["Una ex pareja publicó fotos íntimas en un sitio para adultos.", "Te están extorsionando con material íntimo y piden cripto.", "Un grupo de Telegram comparte fotos tuyas obtenidas por phishing."],
          consequence: "Cada hora cuenta. Cada plataforma tiene procedimientos específicos urgentes.",
          solution: ["Takedown urgente vía protocolos especializados (NCII, StopNCII).", "Denuncia penal (Ley Olimpia y análogas).", "Medidas cautelares y protección.", "Soporte psicojurídico y discreción absoluta."] },
        en: { title: "Take down intimate photos/videos published without consent", hook: "Revenge porn, sextortion, leaked intimate content. There are legal paths — and they're urgent.",
          examples: ["An ex published intimate photos on an adult site.", "You're being extorted with intimate material and they ask for crypto.", "A Telegram group shares photos of you obtained by phishing."],
          consequence: "Every hour counts. Each platform has specific urgent procedures we know.",
          solution: ["Urgent takedown via specialized protocols (NCII, StopNCII).", "Criminal complaint (Olimpia Law and equivalents).", "Protective measures.", "Psycho-legal support and absolute discretion."] },
        fr: { title: "Retirer photos/vidéos intimes publiées sans consentement", hook: "Revenge porn, sextorsion, contenu intime fuité. Il y a des voies juridiques — urgentes.",
          examples: ["Un ex a publié des photos intimes.", "On vous extorque avec du matériel intime en demandant de la crypto.", "Un groupe Telegram partage vos photos."],
          consequence: "Chaque heure compte.",
          solution: ["Retrait urgent via protocoles spécialisés.", "Plainte pénale.", "Mesures protectrices.", "Support psychojuridique et discrétion absolue."] }
      }
    },
    {
      id: "negociacion-cuenta", scene: "broken-chain",
      i18n: {
        es: { title: "Quiero negociar la recuperación de una cuenta que vendieron sin mi consentimiento", hook: "Tu cuenta fue tomada y revendida. Sí hay forma de recuperarla — incluso negociando.",
          examples: ["Tu cuenta de TikTok fue vendida en un mercado de cuentas y el nuevo dueño ya tiene 30k más seguidores.", "Un empleado tuyo se quedó con la cuenta corporativa al irse.", "Una cuenta de gaming con valor real fue tomada por un compañero de gremio."],
          consequence: "Sin respuesta, la cuenta sigue generando valor para quien la tomó.",
          solution: ["Negociación documentada con quien tiene posesión.", "Reporte coordinado a plataforma con evidencia de origen.", "Acción civil y penal según corresponda.", "Recuperación o compensación negociada."] },
        en: { title: "I want to negotiate recovery of an account sold without my consent", hook: "Your account was taken and resold. There is a way back — even by negotiating.",
          examples: ["Your TikTok was sold on an account market and the new owner has 30k more followers.", "An employee kept the corporate account on leaving.", "A high-value gaming account was taken by a guild member."],
          consequence: "Without response, the account keeps generating value for whoever took it.",
          solution: ["Documented negotiation with current possessor.", "Coordinated platform report with origin evidence.", "Civil and criminal action as applicable.", "Negotiated recovery or compensation."] },
        fr: { title: "Je veux négocier la récupération d'un compte vendu sans mon consentement", hook: "Votre compte a été pris et revendu. Il y a un chemin — même en négociant.",
          examples: ["Votre TikTok a été vendu sur un marché de comptes.", "Un employé a gardé le compte corporatif.", "Un compte gaming de grande valeur a été pris."],
          consequence: "Sans réponse, le compte continue à générer de la valeur.",
          solution: ["Négociation documentée.", "Rapport coordonné à la plateforme.", "Action civile et pénale.", "Récupération ou compensation négociée."] }
      }
    }
  ]
};

const A_IA_DERECHOS: Area = {
  slug: "inteligencia-artificial", num: "05", accent: "forest", scene: "face",
  i18n: {
    es: { title: "IA y Derechos Digitales", short: "Quién es autor cuando autor también es la máquina.", intro: "La IA cambia todo lo que toca: autoría, responsabilidad, contratos, prueba. Trabajamos con creadores, estudios y empresas para que la IA sea una ventaja, no una demanda." },
    en: { title: "AI & Digital Rights", short: "Who is the author when the author is also the machine.", intro: "AI changes everything it touches: authorship, liability, contracts, evidence. We work with creators, studios and companies so AI becomes an advantage, not a lawsuit." },
    fr: { title: "IA et Droits Numériques", short: "Qui est l'auteur quand l'auteur est aussi la machine.", intro: "L'IA change tout ce qu'elle touche : paternité, responsabilité, contrats, preuve. Nous travaillons pour que l'IA soit un avantage, pas un procès." }
  },
  problematicas: [
    {
      id: "ia-genero-mi-contenido", scene: "robot",
      i18n: {
        es: { title: "Una IA generó algo demasiado parecido a lo mío", hook: "Tu estilo es identificable. Y ahora cualquiera lo puede replicar con un prompt.",
          examples: ["Una marca usó Midjourney con tu nombre como prompt y publicó la imagen.", "Un youtuber clonó tu voz con ElevenLabs.", "Un servicio entrenó su modelo con tus textos publicados.", "Un cliente te dejó de contratar porque usa IA con tu nombre como referencia."],
          solution: ["Notificación formal a plataforma y entrenador.", "Cease-and-desist técnico y legal.", "Registro defensivo de estilo, voz y marca asociada.", "Demanda por daño moral y patrimonial."] },
        en: { title: "An AI generated something too similar to mine", hook: "Your style is identifiable. Now anyone can replicate it with a prompt.",
          examples: ["A brand used Midjourney with your name as prompt.", "A youtuber cloned your voice with ElevenLabs.", "A service trained its model with your published texts.", "A client stopped hiring you because they use AI with your name as reference."],
          solution: ["Formal notice to platform and trainer.", "Technical and legal cease-and-desist.", "Defensive registration of style, voice, associated brand.", "Lawsuit for moral and patrimonial damages."] },
        fr: { title: "Une IA a généré quelque chose trop similaire au mien", hook: "Votre style est identifiable. Maintenant n'importe qui peut le répliquer avec un prompt.",
          examples: ["Une marque a utilisé Midjourney avec votre nom.", "Un youtuber a cloné votre voix.", "Un service a entraîné son modèle avec vos textes.", "Un client a cessé de vous engager car il utilise l'IA avec votre nom."],
          solution: ["Notification formelle.", "Mise en demeure.", "Enregistrement défensif.", "Poursuite pour dommages."] }
      }
    },
    {
      id: "uso-empresa-ia", scene: "robot",
      i18n: {
        es: { title: "Mi empresa usa IA y tengo miedo de que nos demanden", hook: "Generaste con IA. ¿Quién es dueño? ¿Y si el output infringe?",
          examples: ["Tu agencia entrega assets generados con IA. El cliente quiere garantía de no infracción.", "Tu chatbot dio información incorrecta y la empresa quiere demandarte.", "Tu equipo entrena un modelo con datos públicos y un competidor amenaza."],
          solution: ["Política de uso de IA por rol.", "Contratos de licencia e indemnización con vendors.", "Due diligence técnica-legal de modelos.", "Mapa de responsabilidad por uso."] },
        en: { title: "My company uses AI and I fear being sued", hook: "You generated with AI. Who owns it? What if the output infringes?",
          examples: ["Your agency delivers AI-generated assets. The client wants non-infringement warranty.", "Your chatbot gave wrong info and the company wants to sue.", "Your team trains a model with public data and a competitor threatens."],
          solution: ["AI use policy by role.", "License and indemnification contracts with vendors.", "Technical-legal due diligence of models.", "Liability map by use."] },
        fr: { title: "Mon entreprise utilise l'IA et craint un procès", hook: "Vous avez généré avec IA. Qui en est propriétaire ?",
          examples: ["Votre agence livre des assets IA. Le client veut une garantie.", "Votre chatbot a donné une fausse info.", "Votre équipe entraîne un modèle et un concurrent menace."],
          solution: ["Politique d'usage par rôle.", "Contrats de licence et indemnisation.", "Due diligence technico-juridique.", "Carte de responsabilité."] }
      }
    },
    {
      id: "autoria-ia", scene: "scroll",
      i18n: {
        es: { title: "Hice algo con IA y quiero protegerlo legalmente", hook: "IMPI e INPI no registran obras hechas por máquinas. Pero hay vías.",
          examples: ["Diseñaste una marca con Midjourney y quieres registrarla.", "Escribiste un libro asistido por IA y la editorial pregunta cuánto es IA.", "Tu música tiene voces clonadas con IA y el label no sabe cómo licenciarla."],
          solution: ["Estrategia de autoría híbrida documentada.", "Registro de la parte humana (proceso, selecciones, edits).", "Contratos de cesión y co-autoría.", "Marca asociada al output como protección colateral."] },
        en: { title: "I made something with AI and want to protect it legally", hook: "IMPI and INPI don't register machine-made works. But there are paths.",
          examples: ["You designed a brand with Midjourney and want to register it.", "You wrote an AI-assisted book and the publisher asks how much is AI.", "Your music has AI-cloned voices and the label doesn't know how to license."],
          solution: ["Documented hybrid authorship strategy.", "Registration of the human part (process, selections, edits).", "Assignment and co-authorship contracts.", "Brand associated with output as collateral protection."] },
        fr: { title: "J'ai créé avec l'IA et veux le protéger juridiquement", hook: "L'IMPI et l'INPI n'enregistrent pas les œuvres faites par machines. Mais il y a des voies.",
          examples: ["Vous avez conçu une marque avec Midjourney.", "Vous avez écrit un livre assisté par IA.", "Votre musique a des voix clonées."],
          solution: ["Stratégie de paternité hybride documentée.", "Enregistrement de la partie humaine.", "Contrats de cession et coproduction.", "Marque associée comme protection collatérale."] }
      }
    },
    {
      id: "denuncia-deepfake", scene: "face",
      i18n: {
        es: { title: "Quiero denunciar penalmente un deepfake en mi contra", hook: "No solo bajar el contenido. Que haya consecuencias para quien lo hizo.",
          examples: ["Un deepfake porno tuyo circula y quieres identificar al autor.", "Una imagen falsificada se usó en una campaña política con tu cara.", "Tu marca personal está siendo dañada por contenido sintético dirigido."],
          solution: ["Investigación forense del origen.", "Denuncia penal con narrativa técnica.", "Coordinación con autoridades cibernéticas.", "Acción civil paralela por daño patrimonial y moral."] },
        en: { title: "I want to criminally report a deepfake against me", hook: "Not just take it down. Make consequences for whoever did it.",
          examples: ["A deepfake porn of you circulates and you want to ID the author.", "A fake image was used in a political campaign with your face.", "Your personal brand is damaged by targeted synthetic content."],
          solution: ["Forensic origin investigation.", "Criminal complaint with technical narrative.", "Coordination with cyber authorities.", "Parallel civil action for damages."] },
        fr: { title: "Je veux porter plainte au pénal contre un deepfake", hook: "Pas seulement retirer. Avec des conséquences pour son auteur.",
          examples: ["Un deepfake porno circule.", "Image falsifiée dans une campagne politique.", "Votre marque personnelle endommagée par du contenu synthétique ciblé."],
          solution: ["Investigation forensique.", "Plainte pénale avec narrative technique.", "Coordination avec autorités cyber.", "Action civile parallèle."] }
      }
    },
    {
      id: "regulacion-ia-empresa", scene: "regulation",
      i18n: {
        es: { title: "Mi empresa va a usar IA seriamente y necesita compliance", hook: "El AI Act europeo y los marcos análogos llegan. Mejor preparados que sorprendidos.",
          examples: ["Tu producto SaaS implementará IA y vende en UE, México y Brasil.", "Tu IA toma decisiones que afectan a usuarios (scoring, recomendaciones, moderación).", "Tu equipo va a entrenar modelos con datos personales."],
          solution: ["Mapeo AI Act / marcos análogos por jurisdicción.", "Clasificación de riesgo del sistema.", "Documentación técnica obligatoria y registro.", "Política interna y entrenamiento del equipo."] },
        en: { title: "My company will use AI seriously and needs compliance", hook: "The EU AI Act and analogous frameworks arrive. Better ready than surprised.",
          examples: ["Your SaaS will implement AI and sell in EU, Mexico, Brazil.", "Your AI makes decisions affecting users (scoring, recommendations, moderation).", "Your team will train models with personal data."],
          solution: ["AI Act / analog framework mapping by jurisdiction.", "System risk classification.", "Mandatory technical documentation and registration.", "Internal policy and team training."] },
        fr: { title: "Mon entreprise va utiliser l'IA sérieusement et a besoin de conformité", hook: "L'AI Act européen et cadres analogues arrivent. Mieux préparés que surpris.",
          examples: ["Votre SaaS implémentera l'IA et vend en UE, Mexique, Brésil.", "Votre IA prend des décisions affectant les utilisateurs.", "Votre équipe entraînera des modèles avec données personnelles."],
          solution: ["Cartographie AI Act / cadres analogues.", "Classification de risque.", "Documentation technique obligatoire.", "Politique interne et formation."] }
      }
    }
  ]
};

const A_WEB3: Area = {
  slug: "web3-cripto", num: "06", accent: "ember", scene: "network", avatar: "crypto",
  i18n: {
    es: { title: "Web3, Cripto y Tokenización", short: "Tokens, DAOs y smart contracts con cobertura legal real.", intro: "Desde una idea de token hasta una respuesta a la CNBV. Trabajamos con fundadores, fondos, DAOs y plataformas en la frontera donde el código se encuentra con la regulación." },
    en: { title: "Web3, Crypto & Tokenization", short: "Tokens, DAOs and smart contracts with real legal coverage.", intro: "From a token idea to a CNBV response. We work with founders, funds, DAOs and platforms at the border where code meets regulation." },
    fr: { title: "Web3, Crypto et Tokenisation", short: "Jetons, DAO et smart contracts avec une couverture juridique réelle.", intro: "D'une idée de jeton à une réponse à la CNBV. Nous travaillons avec fondateurs, fonds, DAO et plateformes." }
  },
  problematicas: [
    {
      id: "lanzamiento-token", scene: "network",
      i18n: {
        es: { title: "Quieres lanzar un token y no sabes si es security", hook: "Tres jurisdicciones, dos legislaciones, una ronda al borde.",
          examples: ["Eres un equipo de cuatro fundadores en Guadalajara que va a lanzar un token utilitario.", "Tu protocolo DeFi quiere abrir liquidez al público latinoamericano.", "Vas a hacer un airdrop a tu comunidad y no sabes si eso te convierte en oferente público de valores."],
          consequence: "Sin opinión clara, el inversionista no firma. Con una mala estructura, te demandan en Delaware con el primer usuario molesto.",
          solution: ["Análisis Howey/Reves del token específico.", "Estructura corporativa multi-juris.", "Opinión legal de no-security firmada.", "Plan de distribución y airdrop con compliance proactivo."] },
        en: { title: "You want to launch a token and don't know if it's a security", hook: "Three jurisdictions, two legislations, a round on the edge.",
          examples: ["Four founders in Guadalajara launching a utility token.", "Your DeFi protocol wants to open liquidity to LatAm.", "You're running an airdrop and don't know if that makes you a public securities offeror."],
          consequence: "Without a clear opinion, the investor won't sign. Bad structure gets you sued in Delaware on the first angry user.",
          solution: ["Howey/Reves analysis of the specific token.", "Multi-juris corporate structure.", "Signed no-security legal opinion.", "Distribution and airdrop plan with proactive compliance."] },
        fr: { title: "Vous voulez lancer un jeton et ne savez s'il est valeur mobilière", hook: "Trois juridictions, deux législations, un tour au bord.",
          examples: ["Quatre fondateurs à Guadalajara lancent un jeton utilitaire.", "Votre protocole DeFi veut ouvrir la liquidité au public latino.", "Vous faites un airdrop et ne savez si ça vous transforme en émetteur public."],
          consequence: "Sans opinion claire, l'investisseur ne signe pas.",
          solution: ["Analyse Howey/Reves.", "Structure d'entreprise multi-juridictionnelle.", "Opinion juridique no-security signée.", "Plan de distribution conforme."] }
      }
    },
    {
      id: "dao-personalidad", scene: "scroll",
      i18n: {
        es: { title: "Tu DAO necesita firmar contratos y abrir cuentas", hook: "La red gobierna, pero alguien tiene que poder ir a tribunales.",
          examples: ["Tu DAO ya tiene tesorería en USDC pero ningún proveedor acepta facturarte.", "Un colaborador desapareció con fondos y no sabes contra quién litigar.", "Quieres contratar un desarrollador de tiempo completo y no puedes ofrecer contrato laboral."],
          consequence: "Sin personalidad jurídica, tu DAO no puede ni cobrar IVA acreditable ni demandar al que se llevó el dinero.",
          solution: ["Vehículo legal por encima del protocolo.", "Estatutos espejo de la gobernanza on-chain.", "Setup operativo: bancos, contabilidad, contratos laborales.", "Plan de gestión de tesorería y reportes."] },
        en: { title: "Your DAO needs to sign contracts and open accounts", hook: "The network governs, but someone must be able to go to court.",
          examples: ["Your DAO holds USDC treasury but no vendor will invoice you.", "A contributor disappeared with funds and you don't know who to sue.", "You want to hire a full-time dev and can't offer a labor contract."],
          consequence: "Without legal personality, your DAO can't deduct VAT or sue who took the money.",
          solution: ["Legal vehicle above the protocol.", "Bylaws mirroring on-chain governance.", "Operational setup: banks, accounting, labor contracts.", "Treasury management and reporting plan."] },
        fr: { title: "Votre DAO doit signer des contrats et ouvrir des comptes", hook: "Le réseau gouverne, mais quelqu'un doit pouvoir aller en justice.",
          examples: ["Votre DAO a une trésorerie USDC mais aucun fournisseur ne veut facturer.", "Un contributeur a disparu avec des fonds.", "Vous voulez embaucher un dev à plein temps."],
          consequence: "Sans personnalité juridique, votre DAO ne peut ni déduire la TVA ni poursuivre.",
          solution: ["Véhicule juridique au-dessus du protocole.", "Statuts miroirs de la gouvernance on-chain.", "Setup opérationnel.", "Plan de gestion de trésorerie."] }
      }
    },
    {
      id: "smart-contract-bug", scene: "network",
      i18n: {
        es: { title: "Tu smart contract tuvo un bug y un usuario perdió dinero", hook: "Cuando el código falla, el código fuente no es eximente.",
          examples: ["Hubo un exploit en tu pool y un usuario perdió 80 mil USDC.", "Tu oráculo falló y liquidaste posiciones que no debían liquidarse.", "Un fork no autorizado de tu contrato está estafando gente."],
          consequence: "Sin estrategia rápida, los reclamos escalan. Un usuario en EEUU puede convertir esto en class action.",
          solution: ["Defensa contractual y deslinde técnico-legal.", "Plan de comunicación pública.", "Gestión escalonada de reclamos.", "Auditoría retrospectiva y blindaje futuro."] },
        en: { title: "Your smart contract had a bug and a user lost money", hook: "When code fails, source code isn't a defense.",
          examples: ["Your pool was exploited and a user lost 80k USDC.", "Your oracle failed and you liquidated wrong positions.", "An unauthorized fork is scamming people."],
          consequence: "Without rapid strategy, claims escalate. A US user can turn this into class action.",
          solution: ["Contractual defense and technical-legal disclaimer.", "Public communication plan.", "Tiered claim management.", "Retrospective audit and future hardening."] },
        fr: { title: "Votre smart contract a eu un bug et un utilisateur a perdu de l'argent", hook: "Quand le code échoue, le code source n'est pas une excuse.",
          examples: ["Exploit dans votre pool et un utilisateur a perdu 80k USDC.", "Votre oracle a échoué.", "Un fork non autorisé arnaque les gens."],
          consequence: "Sans stratégie rapide, les réclamations escaladent.",
          solution: ["Défense contractuelle.", "Plan de communication.", "Gestion étagée des réclamations.", "Audit rétrospectif."] }
      }
    },
    {
      id: "vasp-regulador", scene: "regulation",
      i18n: {
        es: { title: "La CNBV o el regulador te identificó como VASP", hook: "Te llegó un oficio. Tienes 15 días.",
          examples: ["Tu exchange cripto opera en México sin licencia y recibiste oficio CNBV.", "Tu wallet custodial supera los umbrales y ahora aplica Ley Antilavado.", "Tu plataforma facilita compras de NFT con tarjeta y eso te puso en el radar de la UIF."],
          consequence: "Una respuesta floja te lleva a multa millonaria o cierre operativo.",
          solution: ["Análisis y respuesta formal en plazo.", "Plan de regularización.", "Programa AML/KYC proporcional.", "Defensa en procedimiento sancionador."] },
        en: { title: "The CNBV or regulator identified you as VASP", hook: "An official notice arrived. You have 15 days.",
          examples: ["Your crypto exchange operates in Mexico without license.", "Your custodial wallet exceeds AML thresholds.", "Your platform facilitates NFT card purchases putting you on UIF radar."],
          consequence: "A weak response leads to massive fine or operational closure.",
          solution: ["On-time analysis and formal response.", "Regularization plan.", "Proportional AML/KYC program.", "Defense in sanctions proceedings."] },
        fr: { title: "La CNBV ou le régulateur vous a identifié comme VASP", hook: "Un avis officiel est arrivé. Vous avez 15 jours.",
          examples: ["Votre exchange crypto opère au Mexique sans licence.", "Votre wallet custodial dépasse les seuils.", "Votre plateforme facilite des achats NFT par carte."],
          consequence: "Une réponse faible mène à une amende massive.",
          solution: ["Analyse et réponse formelle dans les délais.", "Plan de régularisation.", "Programme AML/KYC proportionnel.", "Défense dans la procédure."] }
      }
    },
    {
      id: "tokenizacion-rwa", scene: "vault",
      i18n: {
        es: { title: "Quieres tokenizar un activo real (inmueble, arte, fondo)", hook: "El activo es físico. El comprobante es un token. Y entre ambos vive el derecho.",
          examples: ["Tu fondo quiere tokenizar una cartera inmobiliaria de 40 millones MXN.", "Una galería quiere fraccionar un cuadro en NFTs con derechos económicos pero no de uso.", "Un agricultor quiere financiar su cosecha tokenizando contratos forward."],
          consequence: "Sin marco legal sólido, el token es bonito pero no es nada.",
          solution: ["Diseño legal-financiero de la tokenización.", "Vehículo SPV con respaldo registral o fiduciario.", "Smart contract de gobernanza y derechos.", "Plan de cumplimiento bursátil cuando aplica."] },
        en: { title: "You want to tokenize a real asset (real estate, art, fund)", hook: "The asset is physical. The receipt is a token. Law lives between them.",
          examples: ["Your fund wants to tokenize a 40M MXN real-estate portfolio.", "A gallery wants to fractionalize a painting in NFTs with economic but not use rights.", "A farmer wants to finance the harvest tokenizing forward contracts."],
          consequence: "Without solid legal framework, the token is pretty but nothing.",
          solution: ["Legal-financial design of tokenization.", "SPV vehicle with registry or fiduciary backing.", "Governance and rights smart contract.", "Securities compliance plan when applicable."] },
        fr: { title: "Vous voulez tokeniser un actif réel (immobilier, art, fonds)", hook: "L'actif est physique. Le justificatif est un jeton. Le droit vit entre les deux.",
          examples: ["Votre fonds veut tokeniser un portefeuille immobilier de 40M MXN.", "Une galerie veut fractionner un tableau en NFTs.", "Un agriculteur veut financer sa récolte."],
          consequence: "Sans cadre juridique solide, le jeton est beau mais ce n'est rien.",
          solution: ["Conception juridico-financière.", "Véhicule SPV.", "Smart contract de gouvernance.", "Plan de conformité boursière."] }
      }
    },
    {
      id: "mica-cumplimiento", scene: "regulation",
      i18n: {
        es: { title: "Tu proyecto cripto opera en Europa y aplica MiCA", hook: "Si tu mercado es europeo, MiCA es tu nuevo lenguaje.",
          examples: ["Tu exchange con sede en EEUU quiere abrir en España, Alemania y Países Bajos.", "Emites una stablecoin que se distribuye en la UE y necesitas CASP autorizado.", "Tu wallet no-custodial empieza a hacer features custodiales y MiCA aplica."],
          consequence: "Sin licencia CASP, no puedes ofrecer servicios cripto a residentes UE legalmente desde 2025.",
          solution: ["Análisis de aplicabilidad MiCA por servicio.", "Estructura de entidad europea y licencia CASP.", "Whitepaper conforme + reportes de transparencia.", "Coordinación con autoridades nacionales."] },
        en: { title: "Your crypto project operates in Europe and MiCA applies", hook: "If your market is European, MiCA is your new language.",
          examples: ["Your US-based exchange wants to open in Spain, Germany, Netherlands.", "You issue a stablecoin distributed in EU and need authorized CASP.", "Your non-custodial wallet starts custodial features and MiCA applies."],
          consequence: "Without CASP license, you can't legally offer crypto services to EU residents since 2025.",
          solution: ["MiCA applicability analysis by service.", "European entity structure and CASP license.", "Compliant whitepaper + transparency reports.", "Coordination with national authorities."] },
        fr: { title: "Votre projet crypto opère en Europe et MiCA s'applique", hook: "Si votre marché est européen, MiCA est votre nouveau langage.",
          examples: ["Votre exchange basé aux USA veut ouvrir en Espagne, Allemagne, Pays-Bas.", "Vous émettez une stablecoin distribuée dans l'UE.", "Votre wallet non-custodial commence des features custodiales."],
          consequence: "Sans licence CASP, vous ne pouvez offrir des services crypto aux résidents UE légalement depuis 2025.",
          solution: ["Analyse d'applicabilité MiCA.", "Structure d'entité européenne et licence CASP.", "Whitepaper conforme.", "Coordination avec autorités nationales."] }
      }
    }
  ]
};

const A_CREADORES: Area = {
  slug: "creadores", num: "07", accent: "ember", scene: "marketplace",
  i18n: {
    es: { title: "Creadores y Economía Digital", short: "Tu cara, tu marca, tu ingreso, tu propiedad.", intro: "TikTok, OnlyFans, YouTube, Substack, Twitch, Patreon. Tu negocio es tu identidad. Y eso necesita estructura legal específica." },
    en: { title: "Creators & Digital Economy", short: "Your face, your brand, your income, your property.", intro: "TikTok, OnlyFans, YouTube, Substack, Twitch, Patreon. Your business is your identity. That needs specific legal structure." },
    fr: { title: "Créateurs et Économie Numérique", short: "Votre visage, votre marque, vos revenus, votre propriété.", intro: "TikTok, OnlyFans, YouTube, Substack, Twitch, Patreon. Votre activité est votre identité." }
  },
  problematicas: [
    {
      id: "estructura-creator", scene: "scroll",
      i18n: {
        es: { title: "Quiero estructurarme como empresa pero sigo siendo yo", hook: "Cobras como persona física y pierdes la mitad. Hay forma legal de no perderla.",
          examples: ["Facturas 200 mil USD/año en YouTube y AdSense te paga a tu RFC personal.", "Tu manager te dice que armes una S.A. pero no sabes si te conviene.", "Vives entre México y Madrid y no sabes dónde declarar."],
          solution: ["Estructura corporativa optimizada (LLC, S de RL, holding).", "Planeación fiscal lícita.", "Tratados de doble tributación aplicados.", "Plan de movilidad si aplica."] },
        en: { title: "I want to incorporate but still be me", hook: "You bill as individual and lose half. There's a legal way not to.",
          examples: ["You bill 200k USD/year on YouTube and AdSense pays your personal tax ID.", "Your manager says set up an S.A. but you don't know if it suits.", "You live between Mexico and Madrid and don't know where to file."],
          solution: ["Optimized corporate structure (LLC, S de RL, holding).", "Lawful tax planning.", "Applied double-taxation treaties.", "Mobility plan when applicable."] },
        fr: { title: "Je veux me structurer en entreprise sans cesser d'être moi", hook: "Vous facturez en personne physique et perdez la moitié.",
          examples: ["Vous facturez 200k USD/an sur YouTube.", "Votre manager dit de monter une S.A.", "Vous vivez entre Mexico et Madrid."],
          solution: ["Structure d'entreprise optimisée.", "Planification fiscale licite.", "Conventions de double imposition.", "Plan de mobilité."] }
      }
    },
    {
      id: "deal-marca-trampa", scene: "scroll",
      i18n: {
        es: { title: "Una marca me ofreció un deal con un contrato trampa", hook: "Exclusividad de 5 años. Cesión perpetua de imagen. Lo viste por encima.",
          examples: ["Te ofrecen 80 mil USD por una campaña pero te quitan derechos sobre tu rostro de por vida.", "El contrato dice 'territorio mundial' y tu agencia local también quería usarlo.", "Te ponen non-compete con cualquier marca del sector — incluso después de terminar."],
          solution: ["Revisión y renegociación del contrato.", "Contraoferta de términos justos.", "Defensa post-firma si ya firmaste.", "Plantilla propia para futuros deals."] },
        en: { title: "A brand offered a deal with a trap contract", hook: "5-year exclusivity. Perpetual image assignment. You skimmed it.",
          examples: ["80k USD offered but they take your face rights for life.", "Contract says 'worldwide territory' and your local agency wanted it.", "Non-compete with any sector brand — even after termination."],
          solution: ["Contract review and renegotiation.", "Fair-terms counteroffer.", "Post-signature defense if already signed.", "Own template for future deals."] },
        fr: { title: "Une marque m'a proposé un deal avec un contrat piège", hook: "Exclusivité 5 ans. Cession perpétuelle d'image. Vous l'avez survolé.",
          examples: ["80k USD proposés mais ils prennent vos droits à l'image à vie.", "Contrat 'territoire mondial'.", "Non-concurrence avec toute marque du secteur."],
          solution: ["Revue et renégociation.", "Contre-offre.", "Défense post-signature.", "Modèle propre pour futurs deals."] }
      }
    },
    {
      id: "robo-contenido", scene: "marketplace",
      i18n: {
        es: { title: "Me están reposteando contenido sin permiso", hook: "Cuentas grandes lo bajan en horas. Las pequeñas pueden tomar meses.",
          examples: ["Una página fan de Instagram repostea tus reels y monetiza con ellos.", "Un creador de Brasil traduce tus videos y los sube como propios.", "Una agencia usa tus fotos en su portfolio sin pagarte."],
          solution: ["DMCA estratégico.", "Takedowns plataforma por plataforma.", "Demandas cuando aplica.", "Watermarking estratégico futuro."] },
        en: { title: "They're reposting my content without permission", hook: "Big accounts take hours. Small ones can take months.",
          examples: ["An Instagram fan page reposts your reels and monetizes.", "A Brazilian creator translates your videos as their own.", "An agency uses your photos in portfolio unpaid."],
          solution: ["Strategic DMCA.", "Platform-by-platform takedowns.", "Suits when applicable.", "Future strategic watermarking."] },
        fr: { title: "On reposte mon contenu sans permission", hook: "Les grands comptes prennent des heures. Les petits, des mois.",
          examples: ["Une page fan Instagram reposte vos reels.", "Un créateur brésilien traduit vos vidéos comme siennes.", "Une agence utilise vos photos sans payer."],
          solution: ["DMCA stratégique.", "Retraits plateforme par plateforme.", "Poursuites si applicable.", "Watermarking futur."] }
      }
    },
    {
      id: "onlyfans-fiscal", scene: "wallet",
      i18n: {
        es: { title: "Mi contenido es +18 y la fiscalización está complicada", hook: "Bancos cierran. SAT audita. Plataformas exigen W-8BEN. Pasa.",
          examples: ["Vives en México, cobras en USD de OnlyFans, y el SAT te quiere fiscalizar como exportadora de servicios.", "Tu banco cerró tu cuenta sin explicar — sospechan por el origen del dinero.", "Quieres declarar correctamente pero ningún contador acepta el modelo."],
          solution: ["Estructura fiscal específica para creators +18.", "Defensa bancaria documentada.", "Defensa SAT con narrativa de servicios.", "Normalización con flujo internacional."] },
        en: { title: "My content is +18 and tax handling is complicated", hook: "Banks close. SAT audits. Platforms require W-8BEN. It happens.",
          examples: ["You live in Mexico, get paid in USD from OnlyFans, SAT wants to audit as services exporter.", "Your bank closed your account without explanation.", "You want to file correctly but no accountant accepts the model."],
          solution: ["+18-specific tax structure.", "Documented bank defense.", "SAT defense with services narrative.", "Normalization with international flow."] },
        fr: { title: "Mon contenu est +18 et la fiscalisation est compliquée", hook: "Les banques ferment. Le fisc audite. Les plateformes exigent W-8BEN.",
          examples: ["Vous vivez au Mexique, êtes payée en USD par OnlyFans.", "Votre banque a fermé votre compte.", "Vous voulez déclarer correctement."],
          solution: ["Structure fiscale spécifique +18.", "Défense bancaire documentée.", "Défense fiscale avec narrative de services.", "Normalisation avec flux international."] }
      }
    }
  ]
};

const A_PROPIEDAD_INTELECTUAL: Area = {
  slug: "propiedad-intelectual", num: "08", accent: "forest", scene: "scroll",
  i18n: {
    es: { title: "Propiedad Intelectual Digital", short: "Lo que llamas tuyo. Demuéstralo.", intro: "Marca, autor, multimedia, NFT. La PI digital es más rica y más vulnerable que la tradicional. La defendemos y la registramos a la medida de tu modelo." },
    en: { title: "Digital Intellectual Property", short: "What you call yours. Prove it.", intro: "Trademark, copyright, multimedia, NFT. Digital IP is richer and more vulnerable than traditional. We defend and register it to fit your model." },
    fr: { title: "Propriété Intellectuelle Numérique", short: "Ce que vous appelez à vous. Prouvez-le.", intro: "Marque, auteur, multimédia, NFT. La PI numérique est plus riche et vulnérable que la traditionnelle." }
  },
  problematicas: [
    {
      id: "marca-tomada", scene: "marketplace",
      i18n: {
        es: { title: "Alguien registró mi marca antes que yo", hook: "Tu marca lleva años en redes. Hoy aparece registrada por otro.",
          examples: ["Tu estudio creativo vendía con un nombre y un troll registró la marca para revenderla.", "Tu startup en operación tres años recibió cease-and-desist de una marca registrada después.", "Un competidor de mala fe registró tu nombre con leves variantes."],
          solution: ["Oposición y nulidad ante IMPI/INPI.", "Prueba de uso anterior documentada.", "Recuperación o transacción estratégica.", "Registro defensivo simultáneo."] },
        en: { title: "Someone registered my brand before me", hook: "Your brand has been on social media for years. Today it appears registered by another.",
          examples: ["Your creative studio sold under a name and a troll registered the mark to resell.", "Your three-year operating startup received cease-and-desist from a later-registered mark.", "A bad-faith competitor registered your name with slight variants."],
          solution: ["Opposition and nullity before IMPI/INPI.", "Documented prior-use proof.", "Recovery or strategic transaction.", "Simultaneous defensive registration."] },
        fr: { title: "Quelqu'un a enregistré ma marque avant moi", hook: "Votre marque est sur les réseaux depuis des années. Aujourd'hui elle apparaît enregistrée par un autre.",
          examples: ["Votre studio créatif vendait sous un nom et un troll a enregistré la marque.", "Votre startup en activité depuis trois ans a reçu une mise en demeure.", "Un concurrent de mauvaise foi a enregistré votre nom."],
          solution: ["Opposition et nullité.", "Preuve d'antériorité documentée.", "Récupération ou transaction.", "Enregistrement défensif simultané."] }
      }
    },
    {
      id: "registro-multimedia", scene: "scroll",
      i18n: {
        es: { title: "Quiero registrar algo que no es 'marca tradicional'", hook: "Sonido. Color. Movimiento. NFT. El IMPI lo permite — si sabes pedirlo.",
          examples: ["Tu jingle es reconocible y quieres registrarlo como marca sonora.", "Tu color corporativo es identitario y temes que lo copien.", "Tu personaje animado debe protegerse como obra plus marca."],
          solution: ["Estrategia de registro multimedia.", "Marcas no tradicionales (sonora, tridimensional, movimiento).", "Derecho de autor combinado.", "Protección internacional vía Madrid."] },
        en: { title: "I want to register something that isn't a 'traditional brand'", hook: "Sound. Color. Motion. NFT. IMPI allows it — if you know how to ask.",
          examples: ["Your jingle is recognizable and you want to register it as sound mark.", "Your corporate color is identity-defining and you fear copying.", "Your animated character should be protected as work plus mark."],
          solution: ["Multimedia registration strategy.", "Non-traditional marks (sound, 3D, motion).", "Combined copyright.", "International protection via Madrid."] },
        fr: { title: "Je veux enregistrer quelque chose qui n'est pas 'marque traditionnelle'", hook: "Son. Couleur. Mouvement. NFT. L'IMPI le permet — si vous savez demander.",
          examples: ["Votre jingle est reconnaissable.", "Votre couleur d'entreprise est identitaire.", "Votre personnage animé."],
          solution: ["Stratégie d'enregistrement multimédia.", "Marques non traditionnelles.", "Droit d'auteur combiné.", "Protection internationale via Madrid."] }
      }
    },
    {
      id: "uso-no-autorizado", scene: "marketplace",
      i18n: {
        es: { title: "Encontré mi trabajo en otro lado", hook: "Tu diseño en una camiseta. Tu foto en un anuncio. Tu canción en TikTok.",
          examples: ["Una marca DTC vende camisetas con tu ilustración sin licencia.", "Una agencia de Brasil usa tus fotos como contenido orgánico.", "Una marca importante samplea tu canción sin acuerdo."],
          solution: ["Cease and desist.", "Licenciamiento retroactivo cuando hay vía.", "Demanda civil con cálculo de daños.", "Estrategia de monitoreo continuo."] },
        en: { title: "I found my work somewhere else", hook: "Your design on a shirt. Your photo in an ad. Your song on TikTok.",
          examples: ["A DTC brand sells shirts with your illustration unlicensed.", "A Brazilian agency uses your photos as organic content.", "A major brand samples your song without agreement."],
          solution: ["Cease and desist.", "Retroactive licensing when possible.", "Civil lawsuit with damages calculation.", "Continuous monitoring strategy."] },
        fr: { title: "J'ai trouvé mon travail ailleurs", hook: "Votre design sur un t-shirt. Votre photo dans une pub. Votre chanson sur TikTok.",
          examples: ["Une marque DTC vend des t-shirts avec votre illustration.", "Une agence brésilienne utilise vos photos.", "Une marque importante sample votre chanson."],
          solution: ["Mise en demeure.", "Licence rétroactive.", "Action civile avec calcul de dommages.", "Stratégie de monitoring continu."] }
      }
    },
    {
      id: "nft-derecho-autor", scene: "vault",
      i18n: {
        es: { title: "Quiero minar mi obra como NFT (o ya lo hicieron sin mí)", hook: "Mintear no es lo mismo que tener derechos. Y a veces alguien mintea lo tuyo.",
          examples: ["Quieres tokenizar tu colección de arte y necesitas claridad sobre qué transfiere el NFT.", "Alguien minteó tu obra en OpenSea sin tu permiso y está vendiendo.", "Tu música está minteada por un fan que cobra royalties."],
          solution: ["Smart-contract de royalties propio.", "Takedown OpenSea/Rarible/Magic Eden.", "Plan de minteo defensivo.", "Recuperación de regalías cuando aplica."] },
        en: { title: "I want to mint my work as NFT (or someone already did without me)", hook: "Minting isn't the same as having rights. Sometimes someone mints yours.",
          examples: ["You want to tokenize your art collection and need clarity on what the NFT transfers.", "Someone minted your work on OpenSea without permission and is selling.", "Your music is minted by a fan collecting royalties."],
          solution: ["Own royalty smart contract.", "OpenSea/Rarible/Magic Eden takedown.", "Defensive minting plan.", "Royalty recovery when applicable."] },
        fr: { title: "Je veux minter mon œuvre comme NFT (ou on l'a déjà fait sans moi)", hook: "Minter n'est pas avoir les droits. Parfois quelqu'un mint la vôtre.",
          examples: ["Vous voulez tokeniser votre collection d'art.", "Quelqu'un a minté votre œuvre sur OpenSea sans permission.", "Votre musique est mintée par un fan qui touche des royalties."],
          solution: ["Smart-contract de royalties propre.", "Retrait OpenSea/Rarible.", "Plan de mint défensif.", "Récupération de royalties."] }
      }
    }
  ]
};

const A_PRIVACIDAD: Area = {
  slug: "privacidad-datos", num: "09", accent: "gold", scene: "shield",
  i18n: {
    es: { title: "Privacidad y Protección de Datos", short: "LFPDPPP, GDPR, MiCA, LGPD: cumplimiento real.", intro: "El día que llame el regulador, ya estará todo en orden. Antes, también." },
    en: { title: "Privacy & Data Protection", short: "LFPDPPP, GDPR, MiCA, LGPD: real compliance.", intro: "The day the regulator calls, everything is already in order. Before, too." },
    fr: { title: "Confidentialité et Protection des Données", short: "LFPDPPP, RGPD, MiCA, LGPD : conformité réelle.", intro: "Le jour où le régulateur appelle, tout est déjà en ordre." }
  },
  problematicas: [
    {
      id: "fuga-datos", scene: "shield",
      i18n: {
        es: { title: "Tuve una fuga de datos", hook: "El reloj corre. 72 horas para notificar.",
          examples: ["Tu CRM se filtró y 40 mil clientes están en un foro.", "Un ex empleado se llevó la base a la competencia.", "Un hacker pide rescate y la junta no sabe qué hacer."],
          solution: ["Plan de respuesta inmediato.", "Notificación INAI o regulador análogo.", "Comunicación con afectados.", "Defensa procedimental."] },
        en: { title: "I had a data breach", hook: "The clock is ticking. 72 hours to notify.",
          examples: ["Your CRM leaked and 40k clients are on a forum.", "A former employee took the database to a competitor.", "A hacker demands ransom and the board doesn't know what to do."],
          solution: ["Immediate response plan.", "INAI or equivalent regulator notification.", "Communication with affected.", "Procedural defense."] },
        fr: { title: "J'ai eu une fuite de données", hook: "L'horloge tourne. 72 heures pour notifier.",
          examples: ["Votre CRM a fui et 40k clients sont sur un forum.", "Un ex-employé a pris la base.", "Un hacker demande une rançon."],
          solution: ["Plan de réponse immédiat.", "Notification CNIL ou régulateur analogue.", "Communication aux affectés.", "Défense procédurale."] }
      }
    },
    {
      id: "aviso-privacidad", scene: "scroll",
      i18n: {
        es: { title: "Mi aviso de privacidad es genérico y peligroso", hook: "Copia y pega de hace 5 años. No cubre lo que haces hoy.",
          examples: ["Tu app recolecta ubicación pero el aviso dice 'datos necesarios'.", "Compartes datos con proveedores de USA sin cláusula de transferencia.", "Procesas datos de menores sin consentimiento parental."],
          solution: ["Aviso correcto y específico al flujo real.", "Mapa de transferencias.", "DPAs con proveedores.", "Política de menores documentada."] },
        en: { title: "My privacy notice is generic and dangerous", hook: "Copy-paste from 5 years ago. It doesn't cover what you do today.",
          examples: ["Your app collects location but the notice says 'necessary data'.", "You share data with US providers without transfer clause.", "You process minors' data without parental consent."],
          solution: ["Correct notice specific to real flow.", "Transfer map.", "DPAs with providers.", "Documented minors policy."] },
        fr: { title: "Mon avis de confidentialité est générique et dangereux", hook: "Copier-coller d'il y a 5 ans.",
          examples: ["Votre app collecte la localisation mais l'avis dit 'données nécessaires'.", "Vous partagez des données avec fournisseurs US sans clause.", "Vous traitez des données de mineurs sans consentement parental."],
          solution: ["Avis correct et spécifique.", "Carte des transferts.", "DPA avec fournisseurs.", "Politique mineurs documentée."] }
      }
    },
    {
      id: "lfpdppp-mexicana", scene: "regulation",
      i18n: {
        es: { title: "Necesito cumplir LFPDPPP en serio (no en papel)", hook: "La ley mexicana es exigente. Y el INAI ya audita en serio.",
          examples: ["Tu negocio digital crece en México y el INAI te puede mirar pronto.", "Tu cliente B2B te exige LFPDPPP demostrable.", "Sufriste una denuncia INAI y necesitas defensa más programa real."],
          solution: ["Programa integral LFPDPPP documentado.", "DPO o equivalente designado.", "Política, avisos, DPAs, registros.", "Capacitación al equipo y simulacro de incidente."] },
        en: { title: "I need to comply with LFPDPPP for real (not on paper)", hook: "The Mexican law is demanding. And INAI now audits seriously.",
          examples: ["Your digital business grows in Mexico and INAI may look at you soon.", "Your B2B client requires demonstrable LFPDPPP.", "You suffered an INAI complaint and need defense plus real program."],
          solution: ["Comprehensive documented LFPDPPP program.", "DPO or equivalent designated.", "Policy, notices, DPAs, records.", "Team training and incident simulation."] },
        fr: { title: "J'ai besoin de respecter LFPDPPP sérieusement", hook: "La loi mexicaine est exigeante. Et l'INAI audite sérieusement.",
          examples: ["Votre activité numérique grandit au Mexique.", "Votre client B2B exige LFPDPPP démontrable.", "Vous avez subi une plainte INAI."],
          solution: ["Programme intégral LFPDPPP documenté.", "DPO ou équivalent désigné.", "Politique, avis, DPA, registres.", "Formation équipe et simulation d'incident."] }
      }
    },
    {
      id: "gdpr-europa", scene: "globe",
      i18n: {
        es: { title: "Vendo en Europa y necesito GDPR de verdad", hook: "GDPR no es una checklist. Es un sistema operativo.",
          examples: ["Tu SaaS empezó a tener clientes en España e Italia.", "Tu app móvil tiene usuarios europeos y nunca pediste consentimiento granular.", "Recibiste una solicitud de portabilidad y no sabes cómo responder."],
          solution: ["Programa GDPR end-to-end.", "Representante UE cuando aplica.", "DPAs con sub-procesadores.", "Defensa ante autoridades nacionales."] },
        en: { title: "I sell in Europe and need real GDPR", hook: "GDPR isn't a checklist. It's an operating system.",
          examples: ["Your SaaS started getting clients in Spain and Italy.", "Your mobile app has European users and you never asked granular consent.", "You received a portability request and don't know how to respond."],
          solution: ["End-to-end GDPR program.", "EU representative when applicable.", "DPAs with sub-processors.", "Defense before national authorities."] },
        fr: { title: "Je vends en Europe et j'ai besoin de vrai RGPD", hook: "Le RGPD n'est pas une checklist. C'est un système d'exploitation.",
          examples: ["Votre SaaS a commencé à avoir des clients en Espagne et Italie.", "Votre app mobile a des utilisateurs européens.", "Vous avez reçu une demande de portabilité."],
          solution: ["Programme RGPD end-to-end.", "Représentant UE.", "DPA avec sous-traitants.", "Défense devant autorités nationales."] }
      }
    },
    {
      id: "multi-pais-datos", scene: "globe",
      i18n: {
        es: { title: "Operamos en varios países y cumplimiento se ramificó", hook: "GDPR, LGPD, LFPDPPP, CCPA. Diferentes reglas, mismo cliente.",
          examples: ["Eres SaaS B2B con clientes en España y México.", "Tu app de salud opera en Brasil y los datos sensibles están en EEUU.", "Tienes matriz EU y subsidiaria mexicana y el flujo te complica."],
          solution: ["Política unificada multi-juris.", "Roles y responsabilidades documentados.", "Transferencias internacionales con marco legal.", "Defensa coordinada cuando aplica."] },
        en: { title: "We operate in several countries and compliance forked", hook: "GDPR, LGPD, LFPDPPP, CCPA. Different rules, same client.",
          examples: ["You're B2B SaaS with clients in Spain and Mexico.", "Your health app operates in Brazil and sensitive data sits in the US.", "You have an EU parent and Mexican subsidiary and the flow complicates."],
          solution: ["Unified multi-juris policy.", "Documented roles and responsibilities.", "International transfers with legal framework.", "Coordinated defense when applicable."] },
        fr: { title: "Nous opérons dans plusieurs pays et la conformité s'est ramifiée", hook: "RGPD, LGPD, LFPDPPP, CCPA. Règles différentes, même client.",
          examples: ["Vous êtes SaaS B2B avec clients en Espagne et Mexique.", "Votre app santé opère au Brésil et données sensibles aux USA.", "Vous avez maison-mère UE et filiale mexicaine."],
          solution: ["Politique unifiée multi-juridictionnelle.", "Rôles et responsabilités documentés.", "Transferts internationaux encadrés.", "Défense coordonnée."] }
      }
    }
  ]
};

const A_FINTECH: Area = {
  slug: "fintech-pagos", num: "10", accent: "gold", scene: "wallet",
  i18n: {
    es: { title: "FinTech y Pagos Digitales", short: "Cuando el dinero se mueve más rápido que la regulación.", intro: "Wallets, ramps, stablecoins, neobancos, procesadores. La línea entre tecnología financiera y servicios regulados es delgada. Trabajamos del lado de los que la cruzan a propósito." },
    en: { title: "FinTech & Digital Payments", short: "When money moves faster than regulation.", intro: "Wallets, ramps, stablecoins, neobanks, processors. The line between fintech and regulated services is thin. We work on the side of those who cross it on purpose." },
    fr: { title: "FinTech et Paiements Numériques", short: "Quand l'argent va plus vite que la régulation.", intro: "Wallets, ramps, stablecoins, néobanques, processeurs. La ligne entre fintech et services régulés est fine." }
  },
  problematicas: [
    {
      id: "ley-fintech-aplica", scene: "regulation",
      i18n: {
        es: { title: "Mi app de pagos creció y ahora aplica Ley Fintech", hook: "Pasaste los umbrales sin darte cuenta. Eres ITF, IFPE o ambos.",
          examples: ["Tu wallet de pagos tiene 500 mil usuarios y la CNBV te llamó.", "Permites comprar cripto con tarjeta y eres VASP sin saberlo.", "Procesas remesas internacionales sin licencia de transmisor."],
          solution: ["Análisis de modelo y umbrales.", "Registro IFPE/ITF o estructura alternativa.", "Programa AML/KYC operativo.", "Asesoría continua CNBV/Banxico/UIF."] },
        en: { title: "My payments app grew and now Fintech Law applies", hook: "You crossed the thresholds without noticing.",
          examples: ["Your payment wallet has 500k users and CNBV called.", "You let crypto purchases by card and you're VASP unknowingly.", "You process international remittances without transmitter license."],
          solution: ["Model and threshold analysis.", "IFPE/ITF registration or alternative structure.", "Operational AML/KYC program.", "Continuous CNBV/Banxico/UIF advisory."] },
        fr: { title: "Mon app de paiements a grandi et la Loi Fintech s'applique", hook: "Vous avez franchi les seuils sans le remarquer.",
          examples: ["Votre wallet de paiements a 500k utilisateurs.", "Vous permettez l'achat de crypto par carte.", "Vous traitez des transferts internationaux sans licence."],
          solution: ["Analyse du modèle.", "Enregistrement IFPE/ITF.", "Programme AML/KYC.", "Conseil continu."] }
      }
    },
    {
      id: "cuentas-congeladas", scene: "broken-chain",
      i18n: {
        es: { title: "Me congelaron una cuenta (banco, exchange, procesador)", hook: "Alguien decidió y tú no. Esto se pelea.",
          examples: ["Binance congeló tu cuenta porque sospechan KYC y no responden.", "Tu banco te bloqueó depósitos por movimientos 'inusuales' con cripto.", "Stripe cortó tu pasarela sin explicación y dejó tu negocio sin cobrar."],
          solution: ["Defensa documental.", "Escalado interno y a compliance.", "Denuncia regulatoria cuando aplica.", "Recuperación de fondos vía judicial."] },
        en: { title: "My account was frozen (bank, exchange, processor)", hook: "Someone decided and not you. This is fought.",
          examples: ["Binance froze your account suspecting KYC and won't respond.", "Your bank blocked deposits over 'unusual' crypto movements.", "Stripe cut your gateway without explanation."],
          solution: ["Documentary defense.", "Internal and compliance escalation.", "Regulatory complaint when applicable.", "Judicial fund recovery."] },
        fr: { title: "Mon compte a été gelé (banque, exchange, processeur)", hook: "Quelqu'un a décidé et pas vous. Ça se combat.",
          examples: ["Binance a gelé votre compte sur soupçon KYC.", "Votre banque a bloqué des dépôts.", "Stripe a coupé votre passerelle."],
          solution: ["Défense documentaire.", "Escalade interne.", "Plainte régulatoire.", "Récupération judiciaire des fonds."] }
      }
    },
    {
      id: "ramp-cripto-fiat", scene: "wallet",
      i18n: {
        es: { title: "Quiero operar un on/off-ramp cripto-fiat", hook: "La parte técnica está. La parte legal cambia cada trimestre.",
          examples: ["Tu app convierte USDT a MXN y necesitas saber qué licencia aplica.", "Tu OTC P2P creció y un cliente te denunció por intermediación.", "Tu plataforma de stablecoins quiere abrir Brasil, Colombia y Chile."],
          solution: ["Estructura multi-juris.", "Compliance KYC/AML proporcional.", "Registro y operación coordinada.", "Defensa ante reclamos."] },
        en: { title: "I want to operate a crypto-fiat on/off-ramp", hook: "The tech is ready. The legal changes every quarter.",
          examples: ["Your app converts USDT to MXN and you need to know which license applies.", "Your P2P OTC grew and a client reported you for intermediation.", "Your stablecoin platform wants to open Brazil, Colombia, Chile."],
          solution: ["Multi-juris structure.", "Proportional KYC/AML compliance.", "Coordinated registration and operation.", "Defense against claims."] },
        fr: { title: "Je veux opérer un on/off-ramp crypto-fiat", hook: "La technique est prête. Le juridique change chaque trimestre.",
          examples: ["Votre app convertit USDT en MXN.", "Votre OTC P2P a grandi.", "Votre plateforme de stablecoins veut ouvrir Brésil, Colombie, Chili."],
          solution: ["Structure multi-juridictionnelle.", "Conformité KYC/AML proportionnelle.", "Enregistrement coordonné.", "Défense contre réclamations."] }
      }
    },
    {
      id: "stablecoin-emision", scene: "vault",
      i18n: {
        es: { title: "Quiero emitir una stablecoin local", hook: "MXN-pegged, ARS-pegged, COP-pegged: el reto no es técnico.",
          examples: ["Quieres lanzar un peso digital respaldado 1:1 con MXN en custodia.", "Tu fondo quiere tokenizar activos en stablecoin propia.", "Un banco te pidió opinión de viabilidad legal de stablecoin de marca blanca."],
          solution: ["Estructura legal de reserva.", "Opinión regulatoria.", "Autorización CNBV/Banxico cuando aplica.", "Integración legal-técnica con auditoría continua."] },
        en: { title: "I want to issue a local stablecoin", hook: "MXN-pegged, ARS-pegged, COP-pegged: the challenge isn't technical.",
          examples: ["You want to launch a digital peso backed 1:1 with MXN in custody.", "Your fund wants to tokenize assets in own stablecoin.", "A bank asked for legal feasibility opinion of white-label stablecoin."],
          solution: ["Reserve legal structure.", "Regulatory opinion.", "CNBV/Banxico authorization when applicable.", "Legal-technical integration with continuous audit."] },
        fr: { title: "Je veux émettre un stablecoin local", hook: "MXN-pegged, ARS-pegged, COP-pegged : le défi n'est pas technique.",
          examples: ["Vous voulez lancer un peso numérique adossé 1:1.", "Votre fonds veut tokeniser des actifs en stablecoin propre.", "Une banque a demandé une opinion de faisabilité."],
          solution: ["Structure juridique de réserve.", "Opinion régulatoire.", "Autorisation CNBV/Banxico.", "Intégration juridico-technique avec audit continu."] }
      }
    }
  ]
};

const A_GAMING: Area = {
  slug: "gaming-esports", num: "11", accent: "ember", scene: "trophy",
  i18n: {
    es: { title: "Gaming, Metaverso y eSports", short: "Tu economía y tu equipo existen en mundos virtuales. Los regulamos.", intro: "Estudios, jugadores profesionales, equipos eSports, plataformas, casters, propietarios virtuales. Aquí hay derecho — y mucho dinero." },
    en: { title: "Gaming, Metaverse & eSports", short: "Your economy and your team exist in virtual worlds. We regulate them.", intro: "Studios, pro players, eSports teams, platforms, casters, virtual owners. There's law here — and a lot of money." },
    fr: { title: "Gaming, Métaverse et eSports", short: "Votre économie et votre équipe existent dans des mondes virtuels.", intro: "Studios, joueurs pros, équipes eSports, plateformes, casters, propriétaires virtuels." }
  },
  problematicas: [
    {
      id: "propiedad-virtual", scene: "world",
      i18n: {
        es: { title: "Conflicto sobre propiedad virtual", hook: "El terreno es código. El derecho no lo es. Sí hay forma.",
          examples: ["Compraste una parcela en Decentraland y la plataforma la transfiere por error.", "Tu colección de skins fue 'devuelta' por el juego sin notificación.", "Tu avatar fue suspendido por reportes injustificados en VRChat."],
          solution: ["Reclamación contractual a plataforma.", "Defensa de propiedad virtual con evidencia técnica.", "Recuperación negociada o judicial.", "Documentación preventiva futura."] },
        en: { title: "Conflict over virtual property", hook: "The land is code. The law isn't. There is a way.",
          examples: ["You bought a Decentraland parcel and the platform transferred it by mistake.", "Your skin collection was 'returned' by the game without notice.", "Your avatar was suspended over unjustified reports on VRChat."],
          solution: ["Contractual claim to platform.", "Virtual property defense with technical evidence.", "Negotiated or judicial recovery.", "Future preventive documentation."] },
        fr: { title: "Conflit sur la propriété virtuelle", hook: "Le terrain est code. Le droit ne l'est pas.",
          examples: ["Vous avez acheté une parcelle Decentraland et la plateforme l'a transférée par erreur.", "Votre collection de skins a été 'rendue' par le jeu.", "Votre avatar a été suspendu sur VRChat."],
          solution: ["Réclamation contractuelle.", "Défense de propriété virtuelle.", "Récupération négociée ou judiciaire.", "Documentation préventive future."] }
      }
    },
    {
      id: "contrato-jugador-esports", scene: "trophy",
      i18n: {
        es: { title: "Soy jugador profesional y me pasan un contrato", hook: "Hay cláusulas estándar en eSports que son tóxicas para el jugador.",
          examples: ["Te ofrecen entrar a equipo top-tier con cláusula de exclusividad de 4 años.", "El contrato cede streaming, image rights y NFT por una sola firma.", "Te ponen non-compete con cualquier equipo del sector tras salida."],
          solution: ["Revisión exhaustiva del contrato.", "Renegociación de cláusulas tóxicas.", "Estructura de ingresos (sueldo, premios, sponsors, streaming).", "Plan de salida documentado."] },
        en: { title: "I'm a pro player and they sent me a contract", hook: "There are standard eSports clauses that are toxic for the player.",
          examples: ["You're offered to join top-tier team with 4-year exclusivity clause.", "The contract assigns streaming, image rights and NFTs in one signature.", "Non-compete with any sector team after leaving."],
          solution: ["Exhaustive contract review.", "Renegotiation of toxic clauses.", "Income structure (salary, prizes, sponsors, streaming).", "Documented exit plan."] },
        fr: { title: "Je suis joueur pro et on me passe un contrat", hook: "Des clauses standard eSports sont toxiques pour le joueur.",
          examples: ["On vous propose d'entrer en équipe top avec exclusivité 4 ans.", "Le contrat cède streaming, droits à l'image et NFT.", "Non-concurrence avec toute équipe du secteur."],
          solution: ["Revue exhaustive.", "Renégociation des clauses toxiques.", "Structure de revenus.", "Plan de sortie documenté."] }
      }
    },
    {
      id: "marca-equipo-esports", scene: "trophy",
      i18n: {
        es: { title: "Tengo un equipo eSports y necesito proteger la marca", hook: "Tu logo, tu jersey, tu roster: todo eso es valor que se protege.",
          examples: ["Estás formando un equipo amateur que quiere pasar a pro y necesita registro de marca.", "Tu equipo tiene seguidores y temes que un troll te tome el nombre.", "Quieres vender jerseys y mercancía protegida."],
          solution: ["Registro de marca por clases relevantes.", "Contratos de imagen con jugadores.", "Protección internacional vía Madrid.", "Estructura corporativa del equipo."] },
        en: { title: "I have an eSports team and need to protect the brand", hook: "Your logo, your jersey, your roster: all value that's protected.",
          examples: ["You're forming an amateur team going pro and need trademark registration.", "Your team has followers and you fear a troll taking the name.", "You want to sell protected jerseys and merch."],
          solution: ["Trademark registration in relevant classes.", "Image contracts with players.", "International protection via Madrid.", "Team corporate structure."] },
        fr: { title: "J'ai une équipe eSports et dois protéger la marque", hook: "Votre logo, votre jersey, votre roster : tout cela est de la valeur.",
          examples: ["Vous formez une équipe amateur qui passe pro.", "Votre équipe a des abonnés et craint un troll.", "Vous voulez vendre des jerseys."],
          solution: ["Dépôt de marque.", "Contrats d'image avec joueurs.", "Protection internationale via Madrid.", "Structure d'entreprise de l'équipe."] }
      }
    },
    {
      id: "patrocinios-esports", scene: "scroll",
      i18n: {
        es: { title: "Estoy negociando un patrocinio (como equipo o jugador)", hook: "Los sponsors eSports vienen con expectativas que no siempre son razonables.",
          examples: ["Una marca de energéticos te ofrece patrocinio con exclusividad sectorial estricta.", "Un sponsor pide derechos sobre tus clips de gameplay.", "Una marca exige que tu jugador no juegue ciertos títulos."],
          solution: ["Revisión y negociación del acuerdo.", "Estructura de pagos (fijo, performance, bonos).", "Cláusulas de salida y de incumplimiento.", "Protección de derechos de contenido."] },
        en: { title: "I'm negotiating a sponsorship (as team or player)", hook: "eSports sponsors come with expectations that aren't always reasonable.",
          examples: ["An energy drink brand offers sponsorship with strict sectoral exclusivity.", "A sponsor asks rights over your gameplay clips.", "A brand demands your player not play certain titles."],
          solution: ["Agreement review and negotiation.", "Payment structure (fixed, performance, bonuses).", "Exit and breach clauses.", "Content rights protection."] },
        fr: { title: "Je négocie un sponsoring", hook: "Les sponsors eSports viennent avec des attentes pas toujours raisonnables.",
          examples: ["Une marque d'énergisants propose un sponsoring avec exclusivité sectorielle stricte.", "Un sponsor demande des droits sur vos clips.", "Une marque exige que votre joueur ne joue pas certains titres."],
          solution: ["Revue et négociation.", "Structure de paiements.", "Clauses de sortie.", "Protection des droits de contenu."] }
      }
    },
    {
      id: "economia-in-game", scene: "vault",
      i18n: {
        es: { title: "Quiero lanzar economía dentro de mi juego", hook: "Loot boxes, mercados secundarios, tokens. Cada cosa con regla distinta.",
          examples: ["Tu juego tendrá market secundario de items.", "Quieres vender loot boxes y Bélgica/Holanda los prohíben.", "Tus tokens in-game son tradeables fuera del juego."],
          solution: ["Diseño legal de la economía in-game.", "Opinión multi-juris.", "T&C robustos y AML proporcional.", "Documentación para auditoría."] },
        en: { title: "I want to launch an in-game economy", hook: "Loot boxes, secondary markets, tokens. Each with its own rule.",
          examples: ["Your game will have secondary item market.", "You want to sell loot boxes and Belgium/Netherlands ban them.", "Your in-game tokens are tradeable outside the game."],
          solution: ["Legal design of in-game economy.", "Multi-juris opinion.", "Robust T&Cs and proportional AML.", "Audit documentation."] },
        fr: { title: "Je veux lancer une économie dans mon jeu", hook: "Loot boxes, marchés secondaires, jetons. Chacun sa règle.",
          examples: ["Votre jeu aura un marché secondaire d'items.", "Vous voulez vendre des loot boxes interdites en Belgique/Pays-Bas.", "Vos jetons in-game sont échangeables hors jeu."],
          solution: ["Conception juridique de l'économie in-game.", "Opinion multi-juridictionnelle.", "CGV robustes et AML proportionnel.", "Documentation d'audit."] }
      }
    },
    {
      id: "ar-imagen-consentimiento", scene: "face",
      i18n: {
        es: { title: "Mi app de AR captura rostros sin consentimiento explícito", hook: "Apuntas la cámara. Identifica. Sube datos. Hay regla para todo eso.",
          examples: ["Tu app de moda AR mide rostros para recomendar productos.", "Tu Snap filter usa landmarks faciales sin aviso claro.", "Tu solución de retail captura clientes en tienda sin consentimiento."],
          solution: ["Aviso específico biométrico.", "Consentimiento granular.", "Limitación de uso y plazos.", "Política específica de biométricos."] },
        en: { title: "My AR app captures faces without explicit consent", hook: "You point the camera. It identifies. Uploads data. There are rules.",
          examples: ["Your fashion AR app measures faces to recommend products.", "Your Snap filter uses facial landmarks without clear notice.", "Your retail solution captures in-store clients without consent."],
          solution: ["Specific biometric notice.", "Granular consent.", "Use and retention limitation.", "Biometric-specific policy."] },
        fr: { title: "Mon app AR capture des visages sans consentement explicite", hook: "Vous pointez la caméra. Ça identifie. Ça téléverse des données.",
          examples: ["Votre app mode AR mesure des visages.", "Votre filtre Snap utilise des landmarks faciaux sans avis clair.", "Votre solution retail capture des clients en magasin."],
          solution: ["Avis biométrique spécifique.", "Consentement granulaire.", "Limitation d'usage et de rétention.", "Politique biométrique spécifique."] }
      }
    }
  ]
};

const A_INTERNACIONAL: Area = {
  slug: "internacional", num: "12", accent: "gold", scene: "globe", avatar: "tmec",
  i18n: {
    es: { title: "Transfronterizo y Nómadas Digitales", short: "Trabajas en cualquier parte. Lo legalizamos en todas.", intro: "Residencia fiscal, movilidad, T-MEC, OFAC, sanciones, capítulos de inversión. El mundo es la jurisdicción." },
    en: { title: "Cross-Border & Digital Nomads", short: "You work anywhere. We legalize it everywhere.", intro: "Tax residency, mobility, USMCA, OFAC, sanctions, investment chapters. The world is the jurisdiction." },
    fr: { title: "Transfrontalier et Nomades Numériques", short: "Vous travaillez partout. Nous le légalisons partout.", intro: "Résidence fiscale, mobilité, T-MEC, OFAC, sanctions, chapitres d'investissement." }
  },
  problematicas: [
    {
      id: "residencia-fiscal", scene: "globe",
      i18n: {
        es: { title: "No sé dónde soy residente fiscal y todos quieren cobrarme", hook: "Y los tres países que crees, te quieren clasificar.",
          examples: ["Vives 5 meses en México y 7 en Portugal. ¿Dónde declaras?", "Tu LLC de Delaware factura, tú vives en CDMX.", "Cobras en USD y los movimientos a tu banco MX te marcan."],
          solution: ["Análisis CDI por país.", "Certificados de residencia.", "Defensa fiscal proactiva.", "Plan de movilidad documentado."] },
        en: { title: "I don't know where I'm tax resident and everyone wants to charge me", hook: "And the three countries you suspect want to classify you.",
          examples: ["You live 5 months in Mexico and 7 in Portugal. Where do you file?", "Your Delaware LLC invoices, you live in CDMX.", "You bill in USD and movements to your MX bank flag you."],
          solution: ["DTA analysis per country.", "Residency certificates.", "Proactive tax defense.", "Documented mobility plan."] },
        fr: { title: "Je ne sais où je suis résident fiscal et tous veulent me facturer", hook: "Et les trois pays auxquels vous pensez veulent vous classer.",
          examples: ["Vous vivez 5 mois au Mexique et 7 au Portugal.", "Votre LLC Delaware facture, vous vivez à CDMX.", "Vous facturez en USD."],
          solution: ["Analyse CDI par pays.", "Certificats de résidence.", "Défense fiscale proactive.", "Plan de mobilité documenté."] }
      }
    },
    {
      id: "ronda-transfronteriza", scene: "network",
      i18n: {
        es: { title: "Mi ronda seed cruza varios países y uno la prohíbe", hook: "Inversionistas USA, fundadores LatAm, vehículo Caymans. Y un país lo prohíbe.",
          examples: ["Tu fondo de Argentina quiere invertir en una startup Web3 con presencia en Cuba.", "Tu cap table incluye tokens y los abogados de tu lead investor están en pánico.", "Tu ronda incluye fondos con LP de Rusia y tienes preocupaciones de OFAC."],
          solution: ["Estructuración cap table multi-juris.", "Opinión OFAC y sanciones.", "Vehículos limpios.", "Coordinación con counsel de inversionista."] },
        en: { title: "My seed round crosses several countries and one forbids it", hook: "US investors, LatAm founders, Caymans vehicle. And one country forbids it.",
          examples: ["Your Argentine fund wants to invest in a Web3 startup with Cuba presence.", "Your cap table includes tokens and your lead investor's lawyers panic.", "Your round includes funds with Russian LPs and OFAC concerns."],
          solution: ["Multi-juris cap table structuring.", "OFAC and sanctions opinion.", "Clean vehicles.", "Coordination with investor counsel."] },
        fr: { title: "Mon tour seed traverse plusieurs pays et un l'interdit", hook: "Investisseurs US, fondateurs LatAm, véhicule Caymans. Et un pays l'interdit.",
          examples: ["Votre fonds argentin veut investir dans une startup Web3 avec présence à Cuba.", "Votre cap table inclut des jetons.", "Votre tour inclut des fonds avec LP russes."],
          solution: ["Structuration cap table multi-juridictionnelle.", "Opinion OFAC.", "Véhicules propres.", "Coordination avec conseil de l'investisseur."] }
      }
    },
    {
      id: "visado-talento", scene: "scroll",
      i18n: {
        es: { title: "Necesito o soy un visado de talento", hook: "O-1, EB-1, Talento mexicano, golden visa Portugal. Cada uno con su trampa.",
          examples: ["Tu CTO necesita O-1 en USA y tienen 6 meses para juntar evidencia.", "Quieres mover tu equipo de 12 ingenieros a Lisboa.", "Quieres aplicar Mexican Talent visa para un especialista IA."],
          solution: ["Estrategia migratoria por perfil.", "Recopilación de evidencia metodológica.", "Vehículo legal de soporte (empresa, contrato, sponsor).", "Follow-through hasta aprobación."] },
        en: { title: "I need or I am a talent visa", hook: "O-1, EB-1, Mexican Talent, Portugal golden visa. Each with its trap.",
          examples: ["Your CTO needs O-1 in the US and has 6 months to gather evidence.", "You want to move your 12-engineer team to Lisbon.", "You want to apply Mexican Talent visa for an AI specialist."],
          solution: ["Profile-based migration strategy.", "Methodological evidence gathering.", "Legal support vehicle (company, contract, sponsor).", "Follow-through to approval."] },
        fr: { title: "J'ai besoin ou je suis un visa de talent", hook: "O-1, EB-1, Talent mexicain, golden visa Portugal. Chacun avec son piège.",
          examples: ["Votre CTO a besoin du O-1 aux USA.", "Vous voulez déplacer votre équipe de 12 ingénieurs à Lisbonne.", "Vous voulez postuler au Mexican Talent visa."],
          solution: ["Stratégie migratoire par profil.", "Collecte de preuves méthodologique.", "Véhicule juridique support.", "Suivi jusqu'à l'approbation."] }
      }
    },
    {
      id: "tmec-comercio", scene: "globe",
      i18n: {
        es: { title: "Mi negocio cruza T-MEC y hay disputa", hook: "Cuando el tratado opera, sabe operar a tu favor.",
          examples: ["Importas componentes y un cambio arancelario te paralizó.", "Exportas a USA y la CBP te marcó por contenido regional.", "Una disputa comercial te tiene operando al 30%."],
          solution: ["Litigio T-MEC.", "Análisis arancelario y de contenido regional.", "Defensa comercial coordinada.", "Recuperación de pérdidas vía tratado."] },
        en: { title: "My business crosses USMCA and there's a dispute", hook: "When the treaty operates, it knows how to operate in your favor.",
          examples: ["You import components and a tariff change paralyzed you.", "You export to the US and CBP flagged you for regional content.", "A trade dispute has you operating at 30%."],
          solution: ["USMCA litigation.", "Tariff and regional content analysis.", "Coordinated trade defense.", "Loss recovery via treaty."] },
        fr: { title: "Mon activité traverse T-MEC et il y a un litige", hook: "Quand le traité opère, il sait opérer en votre faveur.",
          examples: ["Vous importez des composants et un changement tarifaire vous a paralysé.", "Vous exportez aux USA et la CBP vous a signalé.", "Un litige commercial vous fait opérer à 30%."],
          solution: ["Litige T-MEC.", "Analyse tarifaire et de contenu régional.", "Défense commerciale coordonnée.", "Récupération de pertes via traité."] }
      }
    }
  ]
};

const A_OTROS: Area = {
  slug: "otros-casos", num: "13", accent: "ember", scene: "scale",
  i18n: {
    es: { title: "Otros Casos Emergentes", short: "Nichos nuevos. Casos que cruzan áreas. Lo que aún no tiene nombre.", intro: "El médico cuya cesárea cobra a medias. El caso híbrido entre cuatro materias. El riesgo que apenas surgió ayer y todavía no tiene precedente. Aquí también estamos." },
    en: { title: "Other Emerging Cases", short: "New niches. Cases that cross areas. What still has no name.", intro: "The doctor whose c-section gets half-paid. The hybrid case across four matters. The risk that emerged yesterday and still has no precedent. We're here for that too." },
    fr: { title: "Autres Cas Émergents", short: "Nouveaux niches. Affaires qui croisent. Ce qui n'a pas encore de nom.", intro: "Le médecin dont la césarienne est payée à moitié. L'affaire hybride. Le risque apparu hier sans précédent. Nous sommes là aussi." }
  },
  problematicas: [
    {
      id: "honorarios-medicos-seguro", scene: "regulation",
      i18n: {
        es: { title: "Soy médico y mi paciente solo paga lo que cubre el seguro", hook: "Pactaste $20,000 por la cesárea. El seguro cubre $6,000. Tu paciente, ya operada, dice que no había nada más.",
          examples: ["Cobras $20,000 por una cesárea programada y el seguro de gastos médicos solo paga $6,000. La paciente se niega a cubrir los $14,000 de diferencia porque 'ya está operada'.", "Tu carta-compromiso es de palabra o un mensaje de WhatsApp. Cuando llega la factura, el paciente dice que el contrato solo incluye lo que cobra el seguro.", "Eres anestesiólogo, cirujano o especialista privado y tus honorarios quedan en zona gris frente a la aseguradora; cobrar el saldo se vuelve un litigio individual con cada paciente."],
          consequence: "Una vez hecho el procedimiento, el paciente sabe que ya no puedes echarte atrás. Sin contrato bien redactado antes, te conviertes en quien depende de su buena fe para cobrar lo tuyo.",
          solution: ["Contrato de prestación de servicios médicos firmado ANTES del procedimiento, con desglose claro de honorarios profesionales separados del paquete hospitalario y los deducibles.", "Cláusula expresa del saldo a cargo del paciente cuando la aseguradora cubre solo parcialmente, con reconocimiento de adeudo y consentimiento informado financiero.", "Pagaré o garantía que respalda la diferencia, exigible en vía mercantil si el paciente no paga.", "Cobranza extrajudicial estructurada y, cuando ya no hay opción, juicio oral mercantil para recuperar honorarios."] },
        en: { title: "I'm a doctor and my patient only pays what insurance covers", hook: "You agreed $20,000 for the c-section. Insurance paid $6,000. Your already-operated patient says there was nothing more.",
          examples: ["You charge $20,000 for a scheduled c-section and the medical expense insurance only pays $6,000. The patient refuses the $14,000 difference because 'she's already operated'.", "Your engagement letter is verbal or a WhatsApp message. When the invoice arrives, the patient says the contract only covers what insurance pays.", "You're an anesthesiologist, surgeon or private specialist, and your fees fall in a gray zone vis-à-vis the insurer; collecting the balance turns into individual litigation patient by patient."],
          consequence: "Once the procedure is done, the patient knows you can't go back. Without a properly drafted contract beforehand, you become dependent on their good faith to collect what's yours.",
          solution: ["Medical services agreement signed BEFORE the procedure, with clear breakdown of professional fees separate from the hospital package and deductibles.", "Express clause on the patient-borne balance when the insurer covers only partially, with debt acknowledgment and financial informed consent.", "Promissory note or guarantee backing the difference, enforceable through commercial proceedings.", "Structured out-of-court collection and, when there's no option, oral commercial trial to recover fees."] },
        fr: { title: "Je suis médecin et mon patient ne paie que ce que l'assurance couvre", hook: "Vous avez convenu 20 000 $ pour la césarienne. L'assurance en paie 6 000. Votre patiente déjà opérée dit qu'il n'y avait rien de plus.",
          examples: ["Vous facturez 20 000 $ pour une césarienne programmée et l'assurance ne paie que 6 000. La patiente refuse les 14 000 de différence car 'elle est déjà opérée'.", "Votre engagement est verbal ou par WhatsApp. À la facture, le patient dit que le contrat ne couvre que ce que paie l'assurance.", "Vous êtes anesthésiste, chirurgien ou spécialiste privé et vos honoraires tombent en zone grise face à l'assureur."],
          consequence: "Une fois la procédure faite, le patient sait que vous ne pouvez plus revenir. Sans contrat bien rédigé avant, vous dépendez de sa bonne foi pour percevoir ce qui vous revient.",
          solution: ["Contrat de prestation de services médicaux signé AVANT la procédure, avec décomposition claire des honoraires et franchises.", "Clause expresse du solde à charge du patient quand l'assureur couvre partiellement.", "Billet à ordre ou garantie pour la différence, exigible en voie commerciale.", "Recouvrement extrajudiciaire structuré et, à défaut, procès oral commercial."] }
      }
    },
    {
      id: "caso-cruza-varias-areas", scene: "network",
      i18n: {
        es: { title: "Mi caso cruza varias áreas y nadie quiere tomarlo entero", hook: "Un mismo asunto: cripto, datos, IA, marca y herencia. Y cada despacho te pasa con otro.",
          examples: ["Tu startup tiene componente Web3, base de datos europea, IA generativa y rebranding internacional — necesitas un solo interlocutor.", "Tu disputa involucra deepfake + propiedad intelectual + plataforma extranjera.", "Tu herencia incluye cripto + cuentas de redes + tokens de gaming + un negocio operativo."],
          consequence: "Cuando el caso se fragmenta entre proveedores, el cliente paga por las costuras.",
          solution: ["Mapa integral del caso y todos sus frentes.", "Coordinación de especialistas internos y corresponsales.", "Un solo interlocutor y un solo cronograma.", "Honorarios consolidados con transparencia."] },
        en: { title: "My case crosses several areas and no one wants to take it whole", hook: "One matter: crypto, data, AI, brand and inheritance. Each firm passes you on.",
          examples: ["Your startup has Web3 component, European database, generative AI and international rebrand — you need one interlocutor.", "Your dispute involves deepfake + IP + foreign platform.", "Your inheritance includes crypto + social accounts + gaming tokens + operating business."],
          consequence: "When the case fragments between providers, the client pays for the seams.",
          solution: ["Integral case map across all fronts.", "Coordination of internal specialists and correspondents.", "Single interlocutor and timeline.", "Consolidated fees with transparency."] },
        fr: { title: "Mon affaire croise plusieurs domaines et personne ne veut la prendre entière", hook: "Un même sujet : crypto, données, IA, marque et héritage. Et chaque cabinet vous renvoie.",
          examples: ["Votre startup a composant Web3, base de données européenne, IA générative et rebranding international.", "Votre litige implique deepfake + PI + plateforme étrangère.", "Votre héritage inclut crypto + comptes + jetons gaming."],
          consequence: "Quand l'affaire se fragmente, le client paie pour les coutures.",
          solution: ["Carte intégrale de l'affaire.", "Coordination de spécialistes.", "Un interlocuteur unique.", "Honoraires consolidés."] }
      }
    },
    {
      id: "problema-emergente-nuevo", scene: "scale",
      i18n: {
        es: { title: "Surgió un problema nuevo que nadie ha resuelto antes", hook: "La regla no existe. El precedente tampoco. Pero el caso es real y urgente.",
          examples: ["Tu modelo de negocio es legítimo pero no encaja en ninguna categoría regulatoria existente.", "Tu cliente te demandó por un daño causado por un agente IA autónomo y nadie sabe cómo se imputa.", "Eres la primera persona en tu país en enfrentar este tipo de caso."],
          consequence: "Esperar a que llegue la regla puede tardar 5 años. Mientras tanto, hay que actuar.",
          solution: ["Análisis de derecho comparado y soft-law aplicable.", "Estrategia jurídica de vanguardia documentada.", "Coordinación con academia y reguladores cuando aplica.", "Defensa preparada para crear precedente."] },
        en: { title: "A new problem emerged that no one has solved before", hook: "The rule doesn't exist. Neither does precedent. But the case is real and urgent.",
          examples: ["Your business model is legitimate but doesn't fit any existing regulatory category.", "Your client sued over damage caused by an autonomous AI agent and no one knows how to attribute it.", "You're the first person in your country to face this kind of case."],
          consequence: "Waiting for the rule may take 5 years. Meanwhile, we act.",
          solution: ["Comparative law and applicable soft-law analysis.", "Documented cutting-edge legal strategy.", "Coordination with academia and regulators when applicable.", "Precedent-setting defense prepared."] },
        fr: { title: "Un problème nouveau a émergé que personne n'a résolu", hook: "La règle n'existe pas. Le précédent non plus. Mais le cas est réel et urgent.",
          examples: ["Votre modèle d'affaires est légitime mais n'entre dans aucune catégorie réglementaire.", "Votre client vous a poursuivi pour dommage causé par un agent IA autonome.", "Vous êtes la première personne dans votre pays à affronter ce cas."],
          consequence: "Attendre la règle peut prendre 5 ans. En attendant, il faut agir.",
          solution: ["Analyse de droit comparé.", "Stratégie juridique d'avant-garde documentée.", "Coordination avec académie et régulateurs.", "Défense prête à créer précédent."] }
      }
    },
    {
      id: "proyecto-exploratorio", scene: "scroll",
      i18n: {
        es: { title: "Tengo un proyecto raro que necesita asesoría exploratoria", hook: "Antes de gastar 200 mil dólares en desarrollo, quieres saber si es viable legalmente.",
          examples: ["Tienes una idea para una plataforma que combina IA + cripto + redes sociales y quieres validar antes de invertir.", "Estás evaluando comprar un negocio digital y necesitas due diligence tech-legal completa.", "Tu fondo quiere entrar a un vertical nuevo y necesitas mapa regulatorio de 4 países."],
          consequence: "Una asesoría exploratoria de 4 semanas cuesta menos que un proyecto fallido por razones legales.",
          solution: ["Feasibility legal del modelo de negocio.", "Mapa regulatorio multi-juris.", "Identificación temprana de bloqueadores.", "Roadmap de cumplimiento gradual."] },
        en: { title: "I have a strange project that needs exploratory advice", hook: "Before spending 200k on dev, you want to know if it's legally viable.",
          examples: ["You have an idea for a platform combining AI + crypto + social and want to validate before investing.", "You're evaluating buying a digital business and need full tech-legal due diligence.", "Your fund wants to enter a new vertical and you need 4-country regulatory map."],
          consequence: "A 4-week exploratory advisory costs less than a failed project for legal reasons.",
          solution: ["Legal feasibility of business model.", "Multi-juris regulatory map.", "Early blocker identification.", "Gradual compliance roadmap."] },
        fr: { title: "J'ai un projet étrange qui a besoin de conseil exploratoire", hook: "Avant de dépenser 200k en développement, vous voulez savoir si c'est viable juridiquement.",
          examples: ["Vous avez une idée combinant IA + crypto + réseaux.", "Vous évaluez l'achat d'une entreprise numérique.", "Votre fonds veut entrer dans un nouveau vertical."],
          consequence: "Un conseil exploratoire de 4 semaines coûte moins qu'un projet raté.",
          solution: ["Feasibility juridique du modèle.", "Carte régulatoire multi-juridictionnelle.", "Identification précoce des bloqueurs.", "Roadmap de conformité graduelle."] }
      }
    },
    {
      id: "segunda-opinion", scene: "shield",
      i18n: {
        es: { title: "Necesito una segunda opinión jurídica especializada en tech", hook: "Tu despacho actual te dio una opinión. Antes de actuar, quieres una segunda mirada.",
          examples: ["Tu despacho corporativo te dijo que tu token es security. Quieres una segunda opinión especializada en cripto.", "Tu abogado de IP te recomendó una estrategia. Quieres validarla contra alguien que entienda multimedia y NFT.", "Estás por firmar un settlement y quieres una opinión independiente."],
          consequence: "Una segunda opinión cuesta horas. Un mal litigio cuesta años.",
          solution: ["Revisión independiente con criterio especializado.", "Opinión escrita formal cuando se requiere.", "Recomendación clara: confirmar, ajustar o disentir.", "Confidencialidad absoluta vis-à-vis tu despacho actual."] },
        en: { title: "I need a second tech-specialized legal opinion", hook: "Your current firm gave you an opinion. Before acting, you want a second look.",
          examples: ["Your corporate firm said your token is security. You want a second crypto-specialized opinion.", "Your IP lawyer recommended a strategy. You want to validate against multimedia/NFT expertise.", "You're about to sign a settlement and want an independent opinion."],
          consequence: "A second opinion costs hours. A bad lawsuit costs years.",
          solution: ["Independent review with specialized criterion.", "Formal written opinion when required.", "Clear recommendation: confirm, adjust or dissent.", "Absolute confidentiality vis-à-vis current firm."] },
        fr: { title: "J'ai besoin d'une seconde opinion juridique tech-spécialisée", hook: "Votre cabinet actuel a donné une opinion. Avant d'agir, une seconde vue.",
          examples: ["Votre cabinet corporatif a dit que votre jeton est valeur mobilière.", "Votre avocat PI a recommandé une stratégie.", "Vous allez signer un settlement."],
          consequence: "Une seconde opinion coûte des heures. Un mauvais procès coûte des années.",
          solution: ["Revue indépendante.", "Opinion écrite formelle.", "Recommandation claire.", "Confidentialité absolue."] }
      }
    },
    {
      id: "asesoria-prospectiva", scene: "globe",
      i18n: {
        es: { title: "Esto va a ser problema en 6 meses, lo quiero prevenir", hook: "Ves venir el regulador, el competidor, la disputa. Quieres llegar antes.",
          examples: ["Tu vertical está siendo regulado y faltan 6 meses para que aplique.", "Sabes que un competidor te va a demandar por marca y quieres anticipar la defensa.", "Una nueva ley en USA va a impactar tu modelo y quieres rediseñar antes del cambio."],
          solution: ["Monitoreo regulatorio activo del vertical.", "Plan de adaptación pre-vigencia.", "Defensas preparadas y archivos respaldados.", "Comité de gobernanza de cumplimiento."] },
        en: { title: "This will be a problem in 6 months, I want to prevent it", hook: "You see the regulator, competitor, dispute coming. You want to arrive first.",
          examples: ["Your vertical is being regulated and 6 months until it applies.", "You know a competitor will sue for trademark and want to anticipate defense.", "A new US law will impact your model and you want to redesign before the change."],
          solution: ["Active regulatory monitoring of vertical.", "Pre-effective adaptation plan.", "Prepared defenses and backed archives.", "Compliance governance committee."] },
        fr: { title: "Ce sera un problème dans 6 mois, je veux le prévenir", hook: "Vous voyez venir le régulateur, le concurrent, le litige. Vous voulez arriver avant.",
          examples: ["Votre vertical est en cours de régulation.", "Vous savez qu'un concurrent va vous poursuivre.", "Une nouvelle loi US va impacter votre modèle."],
          solution: ["Monitoring régulatoire actif.", "Plan d'adaptation pré-vigueur.", "Défenses préparées.", "Comité de gouvernance de conformité."] }
      }
    }
  ]
};

export const areas: Area[] = [
  A_HERENCIA,
  A_DISENO_WEB,
  A_IA_APLICADA,
  A_REDES_REPUTACION,
  A_IA_DERECHOS,
  A_WEB3,
  A_CREADORES,
  A_PROPIEDAD_INTELECTUAL,
  A_PRIVACIDAD,
  A_FINTECH,
  A_GAMING,
  A_INTERNACIONAL,
  A_OTROS
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
