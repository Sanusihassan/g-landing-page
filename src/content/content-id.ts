import type {
  faqType,
  heroType,
  howItWorksType,
  seoConfigType,
  websiteSchemaType,
  WhyChooseUsType,
} from "./content";

export const seoConfig: seoConfigType = {
  title: "Panggilan Internasional Murah ke Seluruh Dunia | GlobaCheap",
  description:
    "Lakukan panggilan internasional dengan harga terjangkau menggunakan GlobaCheap. Hubungi teman dan keluarga di ponsel atau telepon rumah di seluruh dunia dengan tarif rendah. Daftar sekarang di GlobaCheap.com",
  openGraph: {
    url: "https://www.globacheap.com/id",
    title: "Panggilan Internasional Murah ke Seluruh Dunia | GlobaCheap",
    description:
      "Lakukan panggilan internasional dengan harga terjangkau menggunakan GlobaCheap. Hubungi teman dan keluarga di ponsel atau telepon rumah di seluruh dunia dengan tarif rendah. Daftar sekarang di GlobaCheap.com",
    images: [
      {
        url: "https://www.globacheap.com/images/globacheap-id.png",
        width: 1200,
        height: 630,
        alt: "GlobaCheap - Panggilan Internasional Murah ke Seluruh Dunia",
        type: "image/png",
      },
    ],
    site_name: "GlobaCheap",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    handle: "@globacheap",
    site: "@globacheap",
    cardType: "summary_large_image",
  },
  footerTitle: "Dapat diandalkan untuk panggilan internasional mudah dan murah",
};

export const websiteSchema: websiteSchemaType = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GlobaCheap",
  alternateName: "Layanan Panggilan Internasional GlobaCheap",
  url: "https://www.globacheap.com/id",
  description:
    "Lakukan panggilan internasional dengan harga terjangkau ke ponsel atau telepon rumah di seluruh dunia. Kualitas jernih, tanpa kontrak, tarif mulai dari $0.01 per menit.",
  inLanguage: "id-ID",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.globacheap.com/id/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "GlobaCheap",
    url: "https://www.globacheap.com/id",
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
      contactType: "Layanan Pelanggan",
      email: "support@globacheap.com",
      availableLanguage: [
        "Bahasa Indonesia",
        "Inggris",
        "Spanyol",
        "Prancis",
        "Arab",
        "Hindi",
        "Cina",
        "Jerman",
        "Rusia",
        "Bengali",
        "Portugis",
      ],
    },
  },
  offers: {
    "@type": "AggregateOffer",
    priceRange: "$0.01 - $0.50",
    priceCurrency: "USD",
    description: "Tarif panggilan internasional per menit",
  },
};

export const hero: heroType = {
  title:
    "Buat panggilan internasional murah ke ponsel atau telepon darat di seluruh dunia",
  description:
    "Tetap terhubung dengan orang-orang terkasih di mana pun di dunia. Hubungi nomor ponsel atau telepon darat apa pun dengan tarif rendah—tanpa kontrak, tanpa biaya tersembunyi. Kualitas suara jernih dijamin.",
  buttonText: "Mulai Menelepon Sekarang",
  trustIndicators: [
    "Tanpa kontrak atau biaya tersembunyi",
    "Kualitas panggilan suara jernih",
    "Hubungi ponsel atau telepon darat apa pun",
  ],
  image: {
    src: "/images/phone-calling-interface.png",
    alt: "Aplikasi panggilan internasional murah GlobaCheap menampilkan antarmuka telepon",
  },
};

export const whyChooseUsContent: WhyChooseUsType = {
  heading: "Mengapa Memilih GlobaCheap?",
  subheading:
    "Anda tidak boleh melewatkan kesempatan untuk berbicara dengan teman, keluarga, rekan kerja atau siapa pun karena terlalu mahal!",
  features: [
    {
      icon: "phone",
      title: "Kualitas Tinggi",
      description:
        "Lakukan panggilan yang jernih seperti kristal dengan kualitas suara HD yang membuat setiap percakapan terasa seperti Anda berada di ruangan yang sama.",
    },
    {
      icon: "dollar",
      title: "Terjangkau",
      description:
        "Panggil ke mana saja dengan tarif rendah. Tidak ada biaya kejutan, tidak ada kontrak—hanya panggilan internasional murah yang jujur.",
    },
    {
      icon: "zap",
      title: "Sederhana",
      description:
        "Hubungi orang dan bisnis secara instan! Tidak diperlukan aplikasi di ujung mereka—cukup tekan dan hubungkan dalam hitungan detik.",
    },
  ],
};

export const howItWorksContent: howItWorksType = {
  heading: "Cara Melakukan Panggilan Internasional dalam 3 Langkah Sederhana",
  subheading:
    "Mulai menelepon teman dan keluarga di seluruh dunia dalam waktu kurang dari 2 menit",
  steps: [
    {
      icon: "user",
      title: "Buat Akun Anda",
      description:
        "Daftar dalam hitungan detik hanya dengan email Anda. Tidak perlu verifikasi telepon, tidak ada pengaturan rumit—hanya pendaftaran cepat dan mudah.",
      benefits: [
        "Tidak diperlukan autentikasi",
        "Tidak perlu nomor telepon",
        "100% gratis untuk mendaftar",
      ],
    },
    {
      icon: "credit",
      title: "Tambahkan Kredit Panggilan",
      description:
        "Beli kredit dengan tarif terjangkau dan bayar hanya untuk menit yang benar-benar Anda gunakan. Tidak ada biaya bulanan atau biaya kejutan.",
      benefits: [
        "Harga bayar-sebagaimana-digunakan",
        "Tidak ada langganan atau kontrak",
        "Tarif rendah yang transparan",
      ],
    },
    {
      icon: "phone",
      title: "Mulai Menelepon ke Seluruh Dunia",
      description:
        "Tekan nomor ponsel atau telepon darat apa pun langsung dari browser Anda. Kualitas suara jernih seperti kristal ke lebih dari 200 negara.",
      benefits: [
        "Panggil ponsel apa pun di dunia",
        "Kualitas suara HD",
        "Bekerja dari perangkat apa pun",
      ],
    },
  ],
  ctaText: "Mulai Sekarang",
};

export const faQ: faqType = {
  heading: "Pertanyaan yang Sering Diajukan",
  contactCTA: {
    text: "Masih punya pertanyaan? Kami siap membantu!",
    buttonText: "Hubungi Dukungan",
  },
  subheading:
    "Semua yang perlu Anda ketahui tentang panggilan internasional dengan GlobaCheap",
  questions: [
    {
      question: "Bagaimana cara melakukan panggilan internasional?",
      answer:
        "Melakukan panggilan internasional sangat sederhana: Pertama, buat akun gratis Anda dan tambahkan kredit. Kemudian, tekan kode negara diikuti oleh nomor telepon yang ingin Anda hubungi. Sistem kami secara otomatis merutekan panggilan Anda untuk kualitas terbaik dan tarif terendah. Tidak diperlukan pengaturan khusus atau aplikasi di pihak penerima.",
    },
    {
      question: "Apa tarif panggilan internasional Anda?",
      answer:
        "Tarif kami mulai dari serendah $0,01 per menit tergantung negara yang Anda telepon. Kami menawarkan harga bayar-sebagaimana-digunakan tanpa biaya bulanan, langganan, atau biaya tersembunyi. Anda hanya membayar untuk menit yang benar-benar Anda gunakan. Periksa halaman tarif kami untuk harga negara spesifik.",
    },
    {
      question:
        "Apakah saya perlu mengunduh aplikasi untuk melakukan panggilan?",
      answer:
        "Tidak perlu unduh aplikasi! Anda dapat melakukan panggilan internasional langsung dari browser web Anda di perangkat apa pun. Orang yang Anda hubungi juga tidak perlu menginstal apa pun—mereka menerima panggilan telepon biasa di ponsel atau telepon darat mereka.",
    },
    {
      question: "Bisakah saya menelepon ponsel dan telepon darat?",
      answer:
        "Ya! Anda dapat menelepon nomor ponsel atau telepon darat mana pun di seluruh dunia di lebih dari 200 negara. Layanan kami bekerja dengan semua jenis telepon, dan orang yang Anda hubungi menerima panggilan telepon biasa—tidak diperlukan koneksi internet di pihak mereka.",
    },
    {
      question: "Apakah ada langganan bulanan atau kontrak?",
      answer:
        "Tidak ada langganan, tidak ada kontrak, tidak ada komitmen. Kami menawarkan harga bayar-sebagaimana-digunakan yang sederhana di mana Anda menambahkan kredit ke akun Anda dan hanya membayar untuk menit yang Anda gunakan. Tidak ada biaya bulanan, biaya aktivasi, atau denda pembatalan.",
    },
    {
      question: "Bagaimana kualitas panggilannya?",
      answer:
        "Kami menyediakan kualitas suara HD yang jernih seperti kristal untuk semua panggilan internasional. Teknologi routing canggih kami memastikan koneksi terbaik dengan latensi minimal. Panggilan dirutekan melalui jaringan aman dan andal untuk audio berkualitas tinggi yang konsisten.",
    },
    {
      question: "Bagaimana cara menambahkan kredit ke akun saya?",
      answer:
        "Menambahkan kredit mudah dan aman. Cukup masuk ke akun Anda dan gunakan kartu kredit utama, kartu debit, atau PayPal apa pun. Kredit Anda ditambahkan secara instan dan tidak pernah kedaluwarsa. Anda dapat menambahkan jumlah berapa pun yang Anda inginkan—tidak ada pembelian minimum.",
    },
    {
      question: "Apakah ada biaya tersembunyi atau biaya tambahan?",
      answer:
        "Tentu tidak. Kami percaya pada harga transparan tanpa biaya tersembunyi, biaya koneksi, atau biaya kejutan. Tarif yang Anda lihat adalah tarif yang Anda bayar. Tidak ada kontrak atau biaya bulanan—hanya panggilan internasional yang jujur dan terjangkau.",
    },
  ],
};
