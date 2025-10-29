// types
export type heroType = typeof hero;
export type WhyChooseUsType = typeof whyChooseUsContent;
export type howItWorksType = typeof howItWorksContent;
// SEO Configuration for GlobaSig - Cheap International Phone Calls
export const seoConfig = {
  title: "Cheap International Calls Worldwide | GlobaSig",
  description:
    "Make affordable international calls with GlobaSig. Call friends and family on any landline or mobile phone worldwide with low rates. Sign up today at GlobaSig.com",
  openGraph: {
    url: "https://www.globasig.com/",
    title: "Cheap International Calls Worldwide | GlobaSig",
    description:
      "Make affordable international calls with GlobaSig. Call friends and family on any landline or mobile phone worldwide with low rates. Sign up today at GlobaSig.com",
    images: [
      {
        url: "https://www.globasig.com/images/globasig.png",
        width: 1200,
        height: 630,
        alt: "GlobaSig - Cheap International Calls Worldwide",
        type: "image/png",
      },
    ],
    site_name: "GlobaSig",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    handle: "@globasig",
    site: "@globasig",
    cardType: "summary_large_image",
  },
};

/**
 * about:
 * an online webapp that allows you to call anyone on their phone number i.e directly
 * without them having to have an account on the website i.e this is just a regular phone call.
 * this is a skype alternative you like.
 */
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
    src: "/phone-calling-interface.png",
    alt: "GlobaSig international calling app showing phone interface",
  },
};

export const whyChooseUsContent = {
  heading: "Why Choose GlobaSig?",
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
