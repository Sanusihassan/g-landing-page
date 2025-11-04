import type {
  faqType,
  heroType,
  howItWorksType,
  seoConfigType,
  websiteSchemaType,
  WhyChooseUsType,
} from "./content";

export const seoConfig: seoConfigType = {
  title: "Llamadas internacionales baratas en todo el mundo | GlobaCheap",
  description:
    "Haz llamadas internacionales asequibles con GlobaCheap. Llama a tus amigos y familiares a cualquier teléfono fijo o móvil en todo el mundo con tarifas bajas. Regístrate hoy en GlobaCheap.com",
  openGraph: {
    url: "https://www.globacheap.com/es",
    title: "Llamadas internacionales baratas en todo el mundo | GlobaCheap",
    description:
      "Haz llamadas internacionales asequibles con GlobaCheap. Llama a tus amigos y familiares a cualquier teléfono fijo o móvil en todo el mundo con tarifas bajas. Regístrate hoy en GlobaCheap.com",
    images: [
      {
        url: "https://www.globacheap.com/images/globacheap-es.png",
        width: 1200,
        height: 630,
        alt: "GlobaCheap - Llamadas internacionales baratas en todo el mundo",
        type: "image/png",
      },
    ],
    site_name: "GlobaCheap",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    handle: "@globacheap",
    site: "@globacheap",
    cardType: "summary_large_image",
  },
  footerTitle: "Confiable para llamadas internacionales fáciles y económicas",
};

export const websiteSchema: websiteSchemaType = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GlobaCheap",
  alternateName: "Servicio de llamadas internacionales GlobaCheap",
  url: "https://www.globacheap.com",
  description:
    "Haz llamadas internacionales económicas con GlobaCheap. Llama a cualquier teléfono móvil o fijo en todo el mundo desde solo $0.01 por minuto. Calidad de voz nítida y sin contratos.",
  inLanguage: "es-ES",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.globacheap.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "GlobaCheap",
    url: "https://www.globacheap.com",
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
      contactType: "Atención al cliente",
      email: "support@globacheap.com",
      availableLanguage: [
        "Inglés",
        "Español",
        "Francés",
        "Árabe",
        "Hindi",
        "Chino",
        "Alemán",
        "Indonesio",
        "Ruso",
        "Bengalí",
        "Portugués",
      ],
    },
  },
  offers: {
    "@type": "AggregateOffer",
    priceRange: "$0.01 - $0.50",
    priceCurrency: "USD",
    description: "Tarifas internacionales por minuto",
  },
};

export const hero: heroType = {
  title:
    "Haz llamadas internacionales baratas a cualquier móvil o fijo en todo el mundo",
  description:
    "Mantente conectado con tus seres queridos en cualquier parte del mundo. Llama a cualquier número de móvil o fijo a tarifas bajas, sin contratos, sin tarifas ocultas. Calidad cristalina garantizada.",
  buttonText: "Comienza a Llamar Ahora",
  trustIndicators: [
    "Sin contratos ni cargos ocultos",
    "Calidad de llamada cristalina",
    "Llama a cualquier móvil o fijo",
  ],
  image: {
    src: "/images/phone-calling-interface.png",
    alt: "App de llamadas internacionales baratas GlobaCheap mostrando interfaz de teléfono",
  },
};

export const whyChooseUsContent: WhyChooseUsType = {
  heading: "¿Por qué elegir GlobaCheap?",
  subheading:
    "¡No deberías perder la oportunidad de hablar con tus amigos, familia, colegas o cualquier otra persona porque es demasiado caro!",
  features: [
    {
      icon: "phone",
      title: "Alta Calidad",
      description:
        "Realiza llamadas cristalinas con calidad de voz HD que hace que cada conversación se sienta como si estuvieras en la misma habitación.",
    },
    {
      icon: "dollar",
      title: "Asequible",
      description:
        "Llama literalmente a cualquier lugar a tarifas bajas. Sin cargos sorpresa, sin contratos—solo llamadas internacionales honestas y baratas.",
    },
    {
      icon: "zap",
      title: "Simple",
      description:
        "¡Llega a personas y negocios instantáneamente! No se requieren apps en su extremo—solo marca y conéctate en segundos.",
    },
  ],
};

export const howItWorksContent: howItWorksType = {
  heading: "Cómo Hacer Llamadas Internacionales en 3 Pasos Sencillos",
  subheading:
    "Comienza a llamar a amigos y familiares en todo el mundo en menos de 2 minutos",
  steps: [
    {
      icon: "user",
      title: "Crea Tu Cuenta",
      description:
        "Regístrate en segundos solo con tu correo electrónico. Sin verificación telefónica, sin configuración complicada—solo registro rápido y fácil.",
      benefits: [
        "Sin autenticación requerida",
        "Sin número de teléfono necesario",
        "100% gratis para registrarse",
      ],
    },
    {
      icon: "credit",
      title: "Agrega Créditos de Llamada",
      description:
        "Compra créditos a tarifas asequibles y paga solo por los minutos que realmente uses. Sin tarifas mensuales ni cargos sorpresa.",
      benefits: [
        "Precios por uso",
        "Sin suscripciones ni contratos",
        "Tarifas bajas transparentes",
      ],
    },
    {
      icon: "phone",
      title: "Comienza a Llamar al Mundo",
      description:
        "Marca cualquier número de móvil o fijo directamente desde tu navegador. Calidad de voz cristalina a más de 200 países.",
      benefits: [
        "Llama a cualquier teléfono en el mundo",
        "Calidad de voz HD",
        "Funciona en cualquier dispositivo",
      ],
    },
  ],
  ctaText: "Comienza Ahora",
};

export const faQ: faqType = {
  heading: "Preguntas frecuentes",
  contactCTA: {
    text: "¿Todavía tienes preguntas? ¡Estamos aquí para ayudar!",
    buttonText: "Contactar soporte",
  },
  subheading:
    "Todo lo que necesitas saber sobre llamadas internacionales con GlobaCheap",
  questions: [
    {
      question: "¿Cómo hago una llamada internacional?",
      answer:
        "Hacer una llamada internacional es simple: Primero, crea tu cuenta gratuita y agrega créditos. Luego, marca el código del país seguido del número que deseas llamar. Nuestro sistema ruta automáticamente tu llamada para la mejor calidad y las tarifas más bajas. No se necesita configuración especial ni apps en el lado del destinatario.",
    },
    {
      question: "¿Cuáles son tus tarifas de llamadas internacionales?",
      answer:
        "Nuestras tarifas comienzan desde tan bajo como $0.01 por minuto dependiendo del país al que llames. Ofrecemos precios de pago por uso sin tarifas mensuales, suscripciones o cargos ocultos. Solo pagas por los minutos que realmente usas. Revisa nuestra página de tarifas para precios específicos por país.",
    },
    {
      question: "¿Necesito descargar una app para hacer llamadas?",
      answer:
        "¡No se requiere descarga de app! Puedes hacer llamadas internacionales directamente desde tu navegador web en cualquier dispositivo. La persona a la que llamas tampoco necesita instalar nada—recibe una llamada telefónica normal en su móvil o fijo.",
    },
    {
      question: "¿Puedo llamar a teléfonos móviles y fijos?",
      answer:
        "¡Sí! Puedes llamar a cualquier número de móvil o fijo en todo el mundo en más de 200 países. Nuestro servicio funciona con todos los tipos de teléfonos, y la persona a la que llamas recibe una llamada telefónica normal—no se requiere conexión a internet en su lado.",
    },
    {
      question: "¿Hay una suscripción mensual o contrato?",
      answer:
        "Sin suscripciones, sin contratos, sin compromisos. Ofrecemos precios simples de pago por uso donde agregas créditos a tu cuenta y solo pagas por los minutos que usas. No hay tarifas mensuales, cargos de activación o penalizaciones por cancelación.",
    },
    {
      question: "¿Cómo es la calidad de las llamadas?",
      answer:
        "Proporcionamos calidad de voz HD cristalina para todas las llamadas internacionales. Nuestra tecnología de enrutamiento avanzada asegura la mejor conexión posible con latencia mínima. Las llamadas se enrutan a través de redes seguras y confiables para audio de alta calidad consistente.",
    },
    {
      question: "¿Cómo agrego créditos a mi cuenta?",
      answer:
        "Agregar créditos es fácil y seguro. Simplemente inicia sesión en tu cuenta y usa cualquier tarjeta de crédito principal, débito o PayPal. Tus créditos se agregan instantáneamente y nunca expiran. Puedes agregar cualquier cantidad—no hay compra mínima requerida.",
    },
    {
      question: "¿Hay tarifas ocultas o cargos adicionales?",
      answer:
        "Absolutamente no. Creemos en precios transparentes sin tarifas ocultas, cargos por conexión o costos sorpresa. La tarifa que ves es la que pagas. Sin contratos ni tarifas mensuales—solo llamadas internacionales honestas y asequibles.",
    },
  ],
};
