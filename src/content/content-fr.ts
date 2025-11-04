import type {
  faqType,
  heroType,
  howItWorksType,
  seoConfigType,
  websiteSchemaType,
  WhyChooseUsType,
} from "./content";

export const seoConfig: seoConfigType = {
  title: "Appels internationaux bon marché dans le monde entier | GlobaCheap",
  description:
    "Passez des appels internationaux à prix abordable avec GlobaCheap. Appelez vos amis et votre famille sur tout téléphone fixe ou mobile dans le monde à bas prix. Inscrivez-vous dès aujourd'hui sur GlobaCheap.com",
  openGraph: {
    url: "https://www.globacheap.com/fr",
    title: "Appels internationaux bon marché dans le monde entier | GlobaCheap",
    description:
      "Passez des appels internationaux à prix abordable avec GlobaCheap. Appelez vos amis et votre famille sur tout téléphone fixe ou mobile dans le monde à bas prix. Inscrivez-vous dès aujourd'hui sur GlobaCheap.com",
    images: [
      {
        url: "https://www.globacheap.com/images/globacheap-fr.png",
        width: 1200,
        height: 630,
        alt: "GlobaCheap - Appels internationaux bon marché dans le monde entier",
        type: "image/png",
      },
    ],
    site_name: "GlobaCheap",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    handle: "@globacheap",
    site: "@globacheap",
    cardType: "summary_large_image",
  },
  footerTitle: "Fiable pour des appels internationaux simples et à faible coût",
};

export const websiteSchema: websiteSchemaType = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GlobaCheap",
  alternateName: "Service d'appels internationaux GlobaCheap",
  url: "https://www.globacheap.com/fr",
  description:
    "Passez des appels internationaux abordables vers tout téléphone mobile ou fixe dans le monde entier. Qualité sonore claire, sans contrat, tarifs à partir de 0,01 $ la minute.",
  inLanguage: "fr-FR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.globacheap.com/fr/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "GlobaCheap",
    url: "https://www.globacheap.com/fr",
    logo: {
      "@type": "ImageObject",
      url: "https://www.globacheap.com/images/icons/logo.svg",
      width: 512,
      height: 512,
    },
    sameAs: [
      "https://twitter.com/globacheap",
      "https://www.facebook.com/globacheap",
      "https://www.linkedin.com/company/globacheap",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Support client",
      email: "support@globacheap.com",
      availableLanguage: [
        "Français",
        "Anglais",
        "Espagnol",
        "Arabe",
        "Hindi",
        "Chinois",
        "Allemand",
        "Indonésien",
        "Russe",
        "Bengali",
        "Portugais",
      ],
    },
  },
  offers: {
    "@type": "AggregateOffer",
    priceRange: "$0.01 - $0.50",
    priceCurrency: "USD",
    description: "Tarifs d’appels internationaux par minute",
  },
};

export const hero: heroType = {
  title:
    "Faites des appels internationaux bon marché vers n'importe quel mobile ou fixe dans le monde",
  description:
    "Restez connecté avec vos proches n'importe où dans le monde. Appelez n'importe quel numéro de mobile ou de fixe à des tarifs bas — sans contrats, sans frais cachés. Qualité cristalline garantie.",
  buttonText: "Commencer à appeler maintenant",
  trustIndicators: [
    "Pas de contrats ni frais cachés",
    "Qualité d'appel cristalline",
    "Appelez n'importe quel mobile ou fixe",
  ],
  image: {
    src: "/images/phone-calling-interface.png",
    alt: "Application d'appels internationaux bon marché GlobaCheap montrant l'interface téléphonique",
  },
};

export const whyChooseUsContent: WhyChooseUsType = {
  heading: "Pourquoi choisir GlobaCheap ?",
  subheading:
    "Vous ne devriez pas manquer une opportunité de parler à vos amis, votre famille, vos collègues ou quiconque d'autre parce que c'est trop cher !",
  features: [
    {
      icon: "phone",
      title: "Haute Qualité",
      description:
        "Passez des appels cristallins avec une qualité vocale HD qui rend chaque conversation comme si vous étiez dans la même pièce.",
    },
    {
      icon: "dollar",
      title: "Abordable",
      description:
        "Appelez littéralement n'importe où à des tarifs bas. Pas de frais surprises, pas de contrats – juste des appels internationaux honnêtes et bon marché.",
    },
    {
      icon: "zap",
      title: "Simple",
      description:
        "Contactez des personnes et des entreprises instantanément ! Aucune application requise de leur côté – composez simplement et connectez-vous en quelques secondes.",
    },
  ],
};

export const howItWorksContent: howItWorksType = {
  heading: "Comment passer des appels internationaux en 3 étapes simples",
  subheading:
    "Commencez à appeler vos amis et votre famille dans le monde entier en moins de 2 minutes",
  steps: [
    {
      icon: "user",
      title: "Créez votre compte",
      description:
        "Inscrivez-vous en quelques secondes avec seulement votre e-mail. Pas de vérification téléphonique, pas d'installation compliquée – juste une inscription rapide et facile.",
      benefits: [
        "Aucune authentification requise",
        "Aucun numéro de téléphone nécessaire",
        "100 % gratuit pour s'inscrire",
      ],
    },
    {
      icon: "credit",
      title: "Ajoutez des crédits d'appel",
      description:
        "Achetez des crédits à des tarifs abordables et ne payez que pour les minutes que vous utilisez réellement. Pas de frais mensuels ni de frais surprises.",
      benefits: [
        "Tarification au forfait",
        "Pas d'abonnements ni de contrats",
        "Tarifs bas transparents",
      ],
    },
    {
      icon: "phone",
      title: "Commencez à appeler dans le monde entier",
      description:
        "Composez n'importe quel numéro de mobile ou fixe directement depuis votre navigateur. Qualité vocale cristalline vers plus de 200 pays.",
      benefits: [
        "Appelez n'importe quel téléphone dans le monde",
        "Qualité vocale HD",
        "Fonctionne sur n'importe quel appareil",
      ],
    },
  ],
  ctaText: "Commencez maintenant",
};

export const faQ: faqType = {
  heading: "Questions fréquemment posées",
  contactCTA: {
    text: "Vous avez encore des questions ? Nous sommes là pour vous aider !",
    buttonText: "Contacter le support",
  },
  subheading:
    "Tout ce que vous devez savoir sur les appels internationaux avec GlobaCheap",
  questions: [
    {
      question: "Comment passer un appel international ?",
      answer:
        "Passer un appel international est simple : Créez d'abord votre compte gratuit et ajoutez des crédits. Ensuite, composez l'indicatif du pays suivi du numéro que vous souhaitez joindre. Notre système route automatiquement votre appel pour la meilleure qualité et les tarifs les plus bas. Aucune configuration spéciale ou application nécessaire du côté du destinataire.",
    },
    {
      question: "Quels sont vos tarifs pour les appels internationaux ?",
      answer:
        "Nos tarifs commencent à partir de 0,01 $ par minute selon le pays que vous appelez. Nous proposons une tarification au forfait sans frais mensuels, abonnements ou frais cachés. Vous ne payez que pour les minutes que vous utilisez réellement. Consultez notre page des tarifs pour les prix spécifiques par pays.",
    },
    {
      question:
        "Ai-je besoin de télécharger une application pour passer des appels ?",
      answer:
        "Aucun téléchargement d'application requis ! Vous pouvez passer des appels internationaux directement depuis votre navigateur web sur n'importe quel appareil. La personne que vous appelez n'a pas besoin d'installer quoi que ce soit non plus – elle reçoit un appel téléphonique normal sur son mobile ou fixe.",
    },
    {
      question: "Puis-je appeler à la fois les téléphones mobiles et fixes ?",
      answer:
        "Oui ! Vous pouvez appeler n'importe quel numéro de mobile ou fixe dans le monde entier dans plus de 200 pays. Notre service fonctionne avec tous les types de téléphones, et la personne que vous appelez reçoit un appel téléphonique normal – aucune connexion internet requise de son côté.",
    },
    {
      question: "Y a-t-il un abonnement mensuel ou un contrat ?",
      answer:
        "Aucun abonnement, aucun contrat, aucun engagement. Nous proposons une tarification simple au forfait où vous ajoutez des crédits à votre compte et ne payez que pour les minutes que vous utilisez. Il n'y a pas de frais mensuels, de frais d'activation ou de pénalités d'annulation.",
    },
    {
      question: "Quelle est la qualité des appels ?",
      answer:
        "Nous fournissons une qualité vocale HD cristalline pour tous les appels internationaux. Notre technologie de routage avancée assure la meilleure connexion possible avec une latence minimale. Les appels sont routés via des réseaux sécurisés et fiables pour un audio de haute qualité constant.",
    },
    {
      question: "Comment ajouter des crédits à mon compte ?",
      answer:
        "Ajouter des crédits est facile et sécurisé. Connectez-vous simplement à votre compte et utilisez n'importe quelle carte de crédit principale, carte de débit ou PayPal. Vos crédits sont ajoutés instantanément et n'expirent jamais. Vous pouvez ajouter n'importe quel montant – il n'y a pas de montant minimum d'achat.",
    },
    {
      question: "Y a-t-il des frais cachés ou des frais supplémentaires ?",
      answer:
        "Absolument pas. Nous croyons en une tarification transparente sans frais cachés, frais de connexion ou coûts surprises. Le tarif que vous voyez est celui que vous payez. Pas de contrats ni de frais mensuels – juste des appels internationaux honnêtes et abordables.",
    },
  ],
};
