import type {
  faqType,
  heroType,
  howItWorksType,
  seoConfigType,
  websiteSchemaType,
  WhyChooseUsType,
} from "./content";

export const seoConfig: seoConfigType = {
  title: "全球廉价国际通话 | GlobaCheap",
  description:
    "使用 GlobaCheap 以实惠的价格进行国际通话。以低费率拨打全球任何固定电话或手机。立即在 GlobaCheap.com 注册。",
  openGraph: {
    url: "https://www.globacheap.com/zh",
    title: "全球廉价国际通话 | GlobaCheap",
    description:
      "使用 GlobaCheap 以实惠的价格进行国际通话。以低费率拨打全球任何固定电话或手机。立即在 GlobaCheap.com 注册。",
    images: [
      {
        url: "https://www.globacheap.com/images/globacheap-zh.png",
        width: 1200,
        height: 630,
        alt: "GlobaCheap - 全球廉价国际通话",
        type: "image/png",
      },
    ],
    site_name: "GlobaCheap",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    handle: "@globacheap",
    site: "@globacheap",
    cardType: "summary_large_image",
  },
  footerTitle: "可靠且经济实惠的国际通话服务",
};

export const websiteSchema: websiteSchemaType = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GlobaCheap",
  alternateName: "GlobaCheap 国际通话服务",
  url: "https://www.globacheap.com",
  description:
    "使用 GlobaCheap 进行实惠的国际通话。以低至每分钟 $0.01 的价格拨打全球任何手机或固定电话，通话质量清晰，无需合同。",
  inLanguage: "zh-CN",
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
      contactType: "客户支持",
      email: "support@globacheap.com",
      availableLanguage: [
        "英语",
        "西班牙语",
        "法语",
        "阿拉伯语",
        "印地语",
        "中文",
        "德语",
        "印尼语",
        "俄语",
        "孟加拉语",
        "葡萄牙语",
      ],
    },
  },
  offers: {
    "@type": "AggregateOffer",
    priceRange: "$0.01 - $0.50",
    priceCurrency: "USD",
    description: "国际通话每分钟资费",
  },
};

export const hero: heroType = {
  title: "拨打廉价国际电话到全球任何手机或座机",
  description:
    "与世界各地的亲人保持联系。 以低费率拨打任何手机或座机号码——无合同、无隐藏费用。 保证水晶般清晰的通话质量。",
  buttonText: "立即开始通话",
  trustIndicators: [
    "无合同或隐藏收费",
    "水晶般清晰的通话质量",
    "拨打任何手机或座机",
  ],
  image: {
    src: "/images/phone-calling-interface.png",
    alt: "GlobaCheap 国际通话应用显示电话界面",
  },
};

export const whyChooseUsContent: WhyChooseUsType = {
  heading: "为什么选择 GlobaCheap？",
  subheading: "您不应该因为太贵而错过与朋友、家人、同事或任何人的交谈机会！",
  features: [
    {
      icon: "phone",
      title: "高品质",
      description:
        "使用 HD 语音质量进行水晶般清晰的通话，让每一次对话都感觉像在同一个房间里。",
    },
    {
      icon: "dollar",
      title: "实惠",
      description:
        "以低费率拨打任何地方的电话。没有意外费用，没有合同——只需诚实、廉价的国际通话。",
    },
    {
      icon: "zap",
      title: "简单",
      description:
        "即时联系人员和企业！他们那边无需应用——只需拨号并在几秒钟内连接。",
    },
  ],
};

export const howItWorksContent: howItWorksType = {
  heading: "如何在 3 个简单步骤中拨打国际电话",
  subheading: "在不到 2 分钟内开始拨打全球朋友和家人的电话",
  steps: [
    {
      icon: "user",
      title: "创建您的账户",
      description:
        "仅用电子邮件在几秒钟内注册。无需电话验证，无需复杂设置——只需快速简单的注册。",
      benefits: ["无需身份验证", "无需电话号码", "注册 100% 免费"],
    },
    {
      icon: "credit",
      title: "添加通话信用",
      description:
        "以实惠的价格购买信用，只为实际使用的分钟付费。无月费或意外费用。",
      benefits: ["按使用付费定价", "无订阅或合同", "透明的低费率"],
    },
    {
      icon: "phone",
      title: "开始全球通话",
      description:
        "直接从浏览器拨打任何手机或座机号码。水晶般清晰的语音质量通达 200 多个国家。",
      benefits: ["拨打全球任何电话", "HD 语音质量", "适用于任何设备"],
    },
  ],
  ctaText: "立即开始",
};

export const faQ: faqType = {
  heading: "常见问题解答",
  contactCTA: {
    text: "还有问题吗？我们随时为您提供帮助！",
    buttonText: "联系支持",
  },
  subheading: "使用 GlobaCheap 进行国际通话所需了解的一切",
  questions: [
    {
      question: "如何拨打国际电话？",
      answer:
        "拨打国际电话非常简单：首先创建您的免费账户并添加信用。然后，拨打国家代码后跟您要联系的电话号码。我们的系统会自动路由您的通话，以获得最佳质量和最低费率。接收方无需特殊设置或应用。",
    },
    {
      question: "你们的国际通话费率是多少？",
      answer:
        "我们的费率根据您拨打的国家从低至 0.01 美元/分钟起。我们提供按使用付费的定价，没有月费、订阅或隐藏费用。您只需为实际使用的分钟付费。请查看我们的费率页面以获取特定国家的定价。",
    },
    {
      question: "我需要下载应用来拨打电话吗？",
      answer:
        "无需下载应用！您可以直接从任何设备的网页浏览器拨打国际电话。您拨打的人也不需要安装任何东西——他们会收到普通的手机或座机电话。",
    },
    {
      question: "我可以拨打手机和座机吗？",
      answer:
        "是的！您可以拨打全球超过 200 个国家的任何手机或座机号码。我们的服务适用于所有电话类型，您拨打的人会收到普通的电话——他们那边无需互联网连接。",
    },
    {
      question: "是否有月度订阅或合同？",
      answer:
        "没有订阅、没有合同、没有承诺。我们提供简单的按使用付费定价，您只需向账户添加信用并为使用的分钟付费。没有月费、激活费用或取消罚款。",
    },
    {
      question: "通话质量如何？",
      answer:
        "我们为所有国际通话提供水晶般清晰的 HD 语音质量。我们的先进路由技术确保最佳连接，延迟最小。通话通过安全、可靠的网络路由，提供一致的高质量音频。",
    },
    {
      question: "如何向我的账户添加信用？",
      answer:
        "添加信用简单且安全。只需登录您的账户，使用任何主要信用卡、借记卡或 PayPal。您的信用会立即添加，从不过期。您可以添加任意金额——没有最低购买要求。",
    },
    {
      question: "是否有隐藏费用或额外费用？",
      answer:
        "绝对没有。我们相信透明定价，没有隐藏费用、连接费用或意外成本。您看到的费率就是您支付的费率。没有合同或月费——只需诚实、实惠的国际通话。",
    },
  ],
};
