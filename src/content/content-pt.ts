import type {
  faqType,
  heroType,
  howItWorksType,
  seoConfigType,
  websiteSchemaType,
  WhyChooseUsType,
} from "./content";

export const seoConfig: seoConfigType = {
  title: "Chamadas internacionais baratas em todo o mundo | GlobaCheap",
  description:
    "Faça chamadas internacionais acessíveis com a GlobaCheap. Ligue para amigos e familiares em qualquer telefone fixo ou móvel no mundo com tarifas baixas. Cadastre-se hoje em GlobaCheap.com",
  openGraph: {
    url: "https://www.globacheap.com/pt",
    title: "Chamadas internacionais baratas em todo o mundo | GlobaCheap",
    description:
      "Faça chamadas internacionais acessíveis com a GlobaCheap. Ligue para amigos e familiares em qualquer telefone fixo ou móvel no mundo com tarifas baixas. Cadastre-se hoje em GlobaCheap.com",
    images: [
      {
        url: "https://www.globacheap.com/images/globacheap-pt.png",
        width: 1200,
        height: 630,
        alt: "GlobaCheap - Chamadas internacionais baratas em todo o mundo",
        type: "image/png",
      },
    ],
    site_name: "GlobaCheap",
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    handle: "@globacheap",
    site: "@globacheap",
    cardType: "summary_large_image",
  },
  footerTitle: "Confiável para chamadas internacionais fáceis e acessíveis",
};

export const websiteSchema: websiteSchemaType = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GlobaCheap",
  alternateName: "Serviço de chamadas internacionais GlobaCheap",
  url: "https://www.globacheap.com",
  description:
    "Faça chamadas internacionais econômicas com a GlobaCheap. Ligue para qualquer celular ou telefone fixo no mundo todo com qualidade de voz cristalina, sem contratos e tarifas a partir de apenas $0,01 por minuto.",
  inLanguage: "pt-PT",
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
      contactType: "Atendimento ao Cliente",
      email: "support@globacheap.com",
      availableLanguage: [
        "Inglês",
        "Espanhol",
        "Francês",
        "Árabe",
        "Hindi",
        "Chinês",
        "Alemão",
        "Indonésio",
        "Russo",
        "Bengali",
        "Português",
      ],
    },
  },
  offers: {
    "@type": "AggregateOffer",
    priceRange: "$0.01 - $0.50",
    priceCurrency: "USD",
    description: "Tarifas de chamadas internacionais por minuto",
  },
};

export const hero: heroType = {
  title:
    "Faça chamadas internacionais baratas para qualquer celular ou telefone fixo em todo o mundo",
  description:
    "Mantenha-se conectado com entes queridos em qualquer lugar do mundo. Ligue para qualquer número de celular ou telefone fixo com tarifas baixas — sem contratos, sem taxas ocultas. Qualidade cristalina garantida.",
  buttonText: "Comece a Ligar Agora",
  trustIndicators: [
    "Sem contratos ou cobranças ocultas",
    "Qualidade de chamada cristalina",
    "Ligue para qualquer celular ou telefone fixo",
  ],
  image: {
    src: "/images/phone-calling-interface.png",
    alt: "Aplicativo GlobaCheap de chamadas internacionais mostrando interface de telefone",
  },
};

// Portuguese (pt)
export const whyChooseUsContent: WhyChooseUsType = {
  heading: "Por que escolher GlobaCheap?",
  subheading:
    "Você não deve perder a oportunidade de falar com amigos, família, colegas ou qualquer outra pessoa porque é caro demais!",
  features: [
    {
      icon: "phone",
      title: "Alta Qualidade",
      description:
        "Faça chamadas cristalinas com qualidade de voz HD que faz cada conversa parecer que você está na mesma sala.",
    },
    {
      icon: "dollar",
      title: "Acessível",
      description:
        "Ligue para qualquer lugar com tarifas baixas. Sem cobranças surpresa, sem contratos—apenas chamadas internacionais honestas e baratas.",
    },
    {
      icon: "zap",
      title: "Simples",
      description:
        "Alcance pessoas e empresas instantaneamente! Nenhum app necessário do lado deles—basta discar e conectar em segundos.",
    },
  ],
};

export const howItWorksContent: howItWorksType = {
  heading: "Como Fazer Chamadas Internacionais em 3 Passos Simples",
  subheading:
    "Comece a ligar para amigos e família em todo o mundo em menos de 2 minutos",
  steps: [
    {
      icon: "user",
      title: "Crie Sua Conta",
      description:
        "Cadastre-se em segundos apenas com seu e-mail. Sem verificação de telefone, sem configuração complicada—apenas registro rápido e fácil.",
      benefits: [
        "Nenhuma autenticação necessária",
        "Nenhum número de telefone necessário",
        "100% grátis para se registrar",
      ],
    },
    {
      icon: "credit",
      title: "Adicione Créditos de Chamada",
      description:
        "Compre créditos a taxas acessíveis e pague apenas pelos minutos que você realmente usa. Sem taxas mensais ou cobranças surpresa.",
      benefits: [
        "Preços por uso",
        "Sem assinaturas ou contratos",
        "Taxas baixas transparentes",
      ],
    },
    {
      icon: "phone",
      title: "Comece a Ligar para o Mundo",
      description:
        "Disque qualquer número de celular ou fixo diretamente do seu navegador. Qualidade de voz cristalina para mais de 200 países.",
      benefits: [
        "Ligue para qualquer telefone no mundo",
        "Qualidade de voz HD",
        "Funciona em qualquer dispositivo",
      ],
    },
  ],
  ctaText: "Comece Agora",
};

export const faQ: faqType = {
  heading: "Perguntas frequentes",
  contactCTA: {
    text: "Ainda tem dúvidas? Estamos aqui para ajudar!",
    buttonText: "Contato com Suporte",
  },
  subheading:
    "Tudo o que você precisa saber sobre chamadas internacionais com GlobaCheap",
  questions: [
    {
      question: "Como fazer uma chamada internacional?",
      answer:
        "Fazer uma chamada internacional é simples: Primeiro, crie sua conta gratuita e adicione créditos. Em seguida, disque o código do país seguido do número que deseja chamar. Nosso sistema roteia automaticamente sua chamada para a melhor qualidade e tarifas mais baixas. Não é necessário configuração especial ou apps no lado do destinatário.",
    },
    {
      question: "Quais são as suas tarifas de chamadas internacionais?",
      answer:
        "Nossas tarifas começam a partir de US$ 0,01 por minuto, dependendo do país que você está chamando. Oferecemos preços de pagamento por uso sem taxas mensais, assinaturas ou cobranças ocultas. Você paga apenas pelos minutos que realmente usa. Verifique nossa página de tarifas para preços específicos por país.",
    },
    {
      question: "Preciso baixar um app para fazer chamadas?",
      answer:
        "Nenhum download de app necessário! Você pode fazer chamadas internacionais diretamente do seu navegador web em qualquer dispositivo. A pessoa que você está chamando também não precisa instalar nada—ela recebe uma chamada telefônica normal no celular ou telefone fixo.",
    },
    {
      question: "Posso ligar para telefones móveis e fixos?",
      answer:
        "Sim! Você pode ligar para qualquer número de celular ou fixo em todo o mundo em mais de 200 países. Nosso serviço funciona com todos os tipos de telefone, e a pessoa que você está chamando recebe uma chamada telefônica normal—nenhuma conexão com a internet necessária no lado dela.",
    },
    {
      question: "Há uma assinatura mensal ou contrato?",
      answer:
        "Sem assinaturas, sem contratos, sem compromissos. Oferecemos preços simples de pagamento por uso, onde você adiciona créditos à sua conta e paga apenas pelos minutos que usa. Não há taxas mensais, taxas de ativação ou penalidades de cancelamento.",
    },
    {
      question: "Como é a qualidade das chamadas?",
      answer:
        "Fornecemos qualidade de voz HD cristalina para todas as chamadas internacionais. Nossa tecnologia de roteamento avançada garante a melhor conexão possível com latência mínima. As chamadas são roteadas por meio de redes seguras e confiáveis para áudio de alta qualidade consistente.",
    },
    {
      question: "Como adicionar créditos à minha conta?",
      answer:
        "Adicionar créditos é fácil e seguro. Basta fazer login na sua conta e usar qualquer cartão de crédito principal, débito ou PayPal. Seus créditos são adicionados instantaneamente e nunca expiram. Você pode adicionar qualquer quantia—não há compra mínima exigida.",
    },
    {
      question: "Há taxas ocultas ou cobranças extras?",
      answer:
        "Absolutamente não. Acreditamos em preços transparentes sem taxas ocultas, taxas de conexão ou custos surpresa. A tarifa que você vê é a que você paga. Sem contratos ou taxas mensais—apenas chamadas internacionais honestas e acessíveis.",
    },
  ],
};
