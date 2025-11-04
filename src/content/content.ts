export type seoConfigType = typeof seoConfig;
export type websiteSchemaType = typeof websiteSchema;
export type heroType = typeof hero;
export type WhyChooseUsType = typeof whyChooseUsContent;
export type howItWorksType = typeof howItWorksContent;
export type faqType = typeof faQ;
export const seoConfig = {
  title: "Cheap International Calls Worldwide | GlobaCheap",
  description:
    "Make affordable international calls with GlobaCheap. Call friends and family on any landline or mobile phone worldwide with low rates. Sign up today at GlobaCheap.com",
  openGraph: {
    url: "https://www.globacheap.com/",
    title: "Cheap International Calls Worldwide | GlobaCheap",
    description:
      "Make affordable international calls with GlobaCheap. Call friends and family on any landline or mobile phone worldwide with low rates. Sign up today at GlobaCheap.com",
    images: [
      {
        // this should be globacheap-lang.png for each lang
        url: "https://www.globacheap.com/images/globacheap.png",
        width: 1200,
        height: 630,
        alt: "GlobaCheap - Cheap International Calls Worldwide",
        type: "image/png",
      },
    ],
    site_name: "GlobaCheap",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    handle: "@globacheap",
    site: "@globacheap",
    cardType: "summary_large_image",
  },
  footerTitle: "Reliable for easy and low-cost international calls",
};
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GlobaCheap",
  alternateName: "GlobaCheap International Calling Service",
  url: "https://www.globacheap.com",
  description:
    "Make affordable international calls to any mobile or landline worldwide. Crystal clear quality, no contracts, low rates starting from $0.01 per minute.",
  inLanguage: "en-US",
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
      contactType: "Customer Support",
      email: "support@globacheap.com",
      availableLanguage: [
        "English",
        "Spanish",
        "French",
        "Arabic",
        "Hindi",
        "Chinese",
        "German",
        "Indonesian",
        "Russian",
        "Bengali",
        "Portuguese",
      ],
    },
  },
  offers: {
    "@type": "AggregateOffer",
    priceRange: "$0.01 - $0.50",
    priceCurrency: "USD",
    description: "International calling rates per minute",
  },
};
export const hero = {
  title: "Make cheap international calls to any mobile or landline worldwide",
  description:
    "Stay connected with loved ones anywhere in the world. Call any mobile phone or landline number at low rates—no contracts, no hidden fees. Crystal clear quality guaranteed.",
  buttonText: "Start Calling Now",
  trustIndicators: [
    "No contracts or hidden charges",
    "Crystal clear call quality",
    "Call any mobile or landline",
  ],
  image: {
    src: "/images/phone-calling-interface.png",
    alt: "GlobaCheap international calling app showing phone interface",
  },
};
export const whyChooseUsContent = {
  heading: "Why Choose GlobaCheap?",
  subheading:
    "You shouldn't miss an opportunity to talk to your friends, family, colleagues or anyone else because it's too expensive!",
  features: [
    {
      icon: "phone",
      title: "High Quality",
      description:
        "Make crystal clear calls with HD voice quality that makes every conversation feel like you're in the same room.",
    },
    {
      icon: "dollar",
      title: "Affordable",
      description:
        "Call literally anywhere at low rates. No surprise charges, no contracts—just honest, cheap international calls.",
    },
    {
      icon: "zap",
      title: "Simple",
      description:
        "Reach people and businesses instantly! No apps required on their end—just dial and connect in seconds.",
    },
  ],
};

export const howItWorksContent = {
  heading: "How to Make International Calls in 3 Simple Steps",
  subheading:
    "Start calling friends and family worldwide in less than 2 minutes",
  steps: [
    {
      icon: "user",
      title: "Create Your Account",
      description:
        "Sign up in seconds with just your email. No phone verification, no complicated setup—just quick and easy registration.",
      benefits: [
        "No authentication required",
        "No phone number needed",
        "100% free to register",
      ],
    },
    {
      icon: "credit",
      title: "Add Calling Credits",
      description:
        "Purchase credits at affordable rates and only pay for the minutes you actually use. No monthly fees or surprise charges.",
      benefits: [
        "Pay-as-you-go pricing",
        "No subscriptions or contracts",
        "Transparent low rates",
      ],
    },
    {
      icon: "phone",
      title: "Start Calling Worldwide",
      description:
        "Dial any mobile or landline number directly from your browser. Crystal clear voice quality to over 200 countries.",
      benefits: [
        "Call any phone worldwide",
        "HD voice quality",
        "Works from any device",
      ],
    },
  ],
  ctaText: "Get Started Now",
};
export const faQ = {
  heading: "Frequently Asked Questions",
  contactCTA: {
    text: "Still have questions? We're here to help!",
    buttonText: "Contact Support",
  },
  subheading:
    "Everything you need to know about making international calls with GlobaCheap",
  questions: [
    {
      question: "How do I make an international call?",
      answer:
        "Making an international call is simple: First, create your free account and add credits. Then, dial the country code followed by the phone number you want to reach. Our system automatically routes your call for the best quality and lowest rates. No special setup or apps needed on the recipient's end.",
    },
    {
      question: "What are your international calling rates?",
      answer:
        "Our rates start as low as $0.01 per minute depending on the country you're calling. We offer pay-as-you-go pricing with no monthly fees, subscriptions, or hidden charges. You only pay for the minutes you actually use. Check our rates page for specific country pricing.",
    },
    {
      question: "Do I need to download an app to make calls?",
      answer:
        "No app download required! You can make international calls directly from your web browser on any device. The person you're calling doesn't need to install anything either—they receive a regular phone call on their mobile or landline.",
    },
    {
      question: "Can I call both mobile phones and landlines?",
      answer:
        "Yes! You can call any mobile phone or landline number worldwide in over 200 countries. Our service works with all phone types, and the person you're calling receives a regular phone call—no internet connection required on their end.",
    },
    {
      question: "Is there a monthly subscription or contract?",
      answer:
        "No subscriptions, no contracts, no commitments. We offer simple pay-as-you-go pricing where you add credits to your account and only pay for the minutes you use. There are no monthly fees, activation charges, or cancellation penalties.",
    },
    {
      question: "What is the call quality like?",
      answer:
        "We provide crystal clear HD voice quality for all international calls. Our advanced routing technology ensures the best possible connection with minimal latency. Calls are routed through secure, reliable networks for consistent high-quality audio.",
    },
    {
      question: "How do I add credits to my account?",
      answer:
        "Adding credits is easy and secure. Simply log into your account and use any major credit card, debit card, or PayPal. Your credits are added instantly and never expire. You can add any amount you want—there's no minimum purchase required.",
    },
    {
      question: "Are there any hidden fees or extra charges?",
      answer:
        "Absolutely not. We believe in transparent pricing with no hidden fees, no connection charges, and no surprise costs. The rate you see is the rate you pay. No contracts or monthly fees—just honest, affordable international calling.",
    },
  ],
};
