import type {
  faqType,
  heroType,
  howItWorksType,
  seoConfigType,
  websiteSchemaType,
  WhyChooseUsType,
} from "./content";

export const seoConfig: seoConfigType = {
  title: "Günstige internationale Anrufe weltweit | GlobaCheap",
  description:
    "Führen Sie mit GlobaCheap kostengünstige internationale Anrufe. Rufen Sie Freunde und Familie weltweit auf Festnetz- oder Mobiltelefonen zu niedrigen Tarifen an. Melden Sie sich noch heute auf GlobaCheap.com an.",
  openGraph: {
    url: "https://www.globacheap.com/de",
    title: "Günstige internationale Anrufe weltweit | GlobaCheap",
    description:
      "Führen Sie mit GlobaCheap kostengünstige internationale Anrufe. Rufen Sie Freunde und Familie weltweit auf Festnetz- oder Mobiltelefonen zu niedrigen Tarifen an. Melden Sie sich noch heute auf GlobaCheap.com an.",
    images: [
      {
        url: "https://www.globacheap.com/images/globacheap-de.png",
        width: 1200,
        height: 630,
        alt: "GlobaCheap - Günstige internationale Anrufe weltweit",
        type: "image/png",
      },
    ],
    site_name: "GlobaCheap",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    handle: "@globacheap",
    site: "@globacheap",
    cardType: "summary_large_image",
  },
  footerTitle: "Zuverlässig für einfache und kostengünstige Auslandsgespräche",
};

export const websiteSchema: websiteSchemaType = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GlobaCheap",
  alternateName: "GlobaCheap Internationaler Telefondienst",
  url: "https://www.globacheap.com/de",
  description:
    "Führen Sie günstige internationale Anrufe zu jedem Mobil- oder Festnetztelefon weltweit. Kristallklare Qualität, keine Verträge und niedrige Tarife ab 0,01 USD pro Minute.",
  inLanguage: "de-DE",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.globacheap.com/de/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "GlobaCheap",
    url: "https://www.globacheap.com/de",
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
      contactType: "Kundensupport",
      email: "support@globacheap.com",
      availableLanguage: [
        "Deutsch",
        "Englisch",
        "Spanisch",
        "Französisch",
        "Arabisch",
        "Hindi",
        "Chinesisch",
        "Russisch",
        "Indonesisch",
        "Bengalisch",
        "Portugiesisch",
      ],
    },
  },
  offers: {
    "@type": "AggregateOffer",
    priceRange: "$0.01 - $0.50",
    priceCurrency: "USD",
    description: "Internationale Gesprächstarife pro Minute",
  },
};

export const hero: heroType = {
  title:
    "Günstige internationale Anrufe zu jedem Mobiltelefon oder Festnetzanschluss weltweit tätigen",
  description:
    "Bleiben Sie überall auf der Welt mit Ihren Liebsten in Verbindung. Rufen Sie jede Mobiltelefon- oder Festnetznummer zu niedrigen Tarifen an – keine Verträge, keine versteckten Gebühren. Kristallklarer Klang garantiert.",
  buttonText: "Jetzt Anrufe tätigen",
  trustIndicators: [
    "Keine Verträge oder versteckte Gebühren",
    "Kristallklarer Anrufqualität",
    "Anruf zu jedem Mobiltelefon oder Festnetzanschluss",
  ],
  image: {
    src: "/images/phone-calling-interface.png",
    alt: "GlobaCheap internationale Anruf-App, die Telefonoberfläche zeigt",
  },
};

export const whyChooseUsContent: WhyChooseUsType = {
  heading: "Warum GlobaCheap wählen?",
  subheading:
    "Sie sollten keine Gelegenheit verpassen, mit Freunden, Familie, Kollegen oder sonst wem zu sprechen, nur weil es zu teuer ist!",
  features: [
    {
      icon: "phone",
      title: "Hohe Qualität",
      description:
        "Führen Sie kristallklare Anrufe mit HD-Sprachqualität durch, die jedes Gespräch so wirken lässt, als wären Sie im selben Raum.",
    },
    {
      icon: "dollar",
      title: "Günstig",
      description:
        "Rufen Sie buchstäblich überall zu niedrigen Tarifen an. Keine Überraschungsgebühren, keine Verträge – nur ehrliche, günstige internationale Anrufe.",
    },
    {
      icon: "zap",
      title: "Einfach",
      description:
        "Erreichen Sie Personen und Unternehmen sofort! Keine Apps auf ihrer Seite erforderlich – wählen Sie einfach und verbinden Sie sich in Sekunden.",
    },
  ],
};

export const howItWorksContent: howItWorksType = {
  heading: "Internationale Anrufe in 3 einfachen Schritten tätigen",
  subheading:
    "Beginnen Sie, Freunde und Familie weltweit anzurufen, in weniger als 2 Minuten",
  steps: [
    {
      icon: "user",
      title: "Erstellen Sie Ihr Konto",
      description:
        "Melden Sie sich in Sekunden mit nur Ihrer E-Mail an. Keine Telefonverifizierung, kein kompliziertes Setup – nur schnelle und einfache Registrierung.",
      benefits: [
        "Keine Authentifizierung erforderlich",
        "Keine Telefonnummer benötigt",
        "100% kostenlos zur Registrierung",
      ],
    },
    {
      icon: "credit",
      title: "Anrufguthaben hinzufügen",
      description:
        "Kaufen Sie Guthaben zu erschwinglichen Preisen und zahlen Sie nur für die Minuten, die Sie tatsächlich nutzen. Keine monatlichen Gebühren oder Überraschungskosten.",
      benefits: [
        "Preisgestaltung nach Nutzung",
        "Keine Abonnements oder Verträge",
        "Transparente niedrige Preise",
      ],
    },
    {
      icon: "phone",
      title: "Weltweit anrufen starten",
      description:
        "Wählen Sie direkt aus Ihrem Browser jede Mobil- oder Festnetznummer. Kristallklare Sprachqualität in über 200 Ländern.",
      benefits: [
        "Rufen Sie jedes Telefon weltweit an",
        "HD-Sprachqualität",
        "Funktioniert auf jedem Gerät",
      ],
    },
  ],
  ctaText: "Jetzt starten",
};

// German (de)
export const faQ: faqType = {
  heading: "Häufig gestellte Fragen",
  contactCTA: {
    text: "Haben Sie immer noch Fragen? Wir sind hier, um zu helfen!",
    buttonText: "Support kontaktieren",
  },
  subheading:
    "Alles, was Sie über internationale Anrufe mit GlobaCheap wissen müssen",
  questions: [
    {
      question: "Wie mache ich einen internationalen Anruf?",
      answer:
        "Internationale Anrufe sind einfach: Erstellen Sie zuerst Ihr kostenloses Konto und fügen Sie Guthaben hinzu. Wählen Sie dann die Ländervorwahl gefolgt von der Nummer, die Sie anrufen möchten. Unser System leitet Ihren Anruf automatisch für die beste Qualität und niedrigsten Tarife weiter. Keine spezielle Einrichtung oder Apps auf der Seite des Empfängers erforderlich.",
    },
    {
      question: "Was sind Ihre internationalen Anruftarife?",
      answer:
        "Unsere Tarife beginnen bei so niedrig wie 0,01 $ pro Minute, je nach Land, das Sie anrufen. Wir bieten Preise nach Nutzung ohne monatliche Gebühren, Abonnements oder versteckte Kosten. Sie zahlen nur für die Minuten, die Sie tatsächlich nutzen. Überprüfen Sie unsere Tarifseite für spezifische Ländertarife.",
    },
    {
      question: "Muss ich eine App herunterladen, um Anrufe zu tätigen?",
      answer:
        "Keine App-Download erforderlich! Sie können internationale Anrufe direkt aus Ihrem Webbrowser auf jedem Gerät tätigen. Die Person, die Sie anrufen, muss nichts installieren – sie erhält einen normalen Telefonanruf auf ihrem Mobil- oder Festnetztelefon.",
    },
    {
      question:
        "Kann ich sowohl Mobiltelefone als auch Festnetztelefone anrufen?",
      answer:
        "Ja! Sie können weltweit jede Mobil- oder Festnetznummer in über 200 Ländern anrufen. Unser Service funktioniert mit allen Telefontypen, und die Person, die Sie anrufen, erhält einen normalen Telefonanruf – keine Internetverbindung auf ihrer Seite erforderlich.",
    },
    {
      question: "Gibt es ein monatliches Abonnement oder einen Vertrag?",
      answer:
        "Keine Abonnements, keine Verträge, keine Verpflichtungen. Wir bieten einfache Preise nach Nutzung, bei denen Sie Guthaben zu Ihrem Konto hinzufügen und nur für die Minuten zahlen, die Sie nutzen. Es gibt keine monatlichen Gebühren, Aktivierungskosten oder Kündigungsstrafen.",
    },
    {
      question: "Wie ist die Anrufqualität?",
      answer:
        "Wir bieten kristallklare HD-Sprachqualität für alle internationalen Anrufe. Unsere fortschrittliche Routing-Technologie gewährleistet die beste mögliche Verbindung mit minimaler Latenz. Anrufe werden über sichere, zuverlässige Netzwerke geleitet für konsistent hochwertigen Ton.",
    },
    {
      question: "Wie füge ich Guthaben zu meinem Konto hinzu?",
      answer:
        "Das Hinzufügen von Guthaben ist einfach und sicher. Melden Sie sich einfach in Ihrem Konto an und verwenden Sie jede gängige Kreditkarte, Debitkarte oder PayPal. Ihr Guthaben wird sofort hinzugefügt und läuft nie ab. Sie können jeden Betrag hinzufügen – es gibt kein Mindestkaufvolumen.",
    },
    {
      question: "Gibt es versteckte Gebühren oder Extrakosten?",
      answer:
        "Absolut nicht. Wir glauben an transparente Preise ohne versteckte Gebühren, Anschlusskosten oder Überraschungskosten. Der Tarif, den Sie sehen, ist der, den Sie zahlen. Keine Verträge oder monatlichen Gebühren – nur ehrliche, günstige internationale Anrufe.",
    },
  ],
};
