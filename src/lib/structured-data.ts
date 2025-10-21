export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SSPPOS",
  description:
    "Complete restaurant management solution featuring QR menu scanning, bill splitting, payment processing, staff management, and kitchen display systems.",
  url: "https://ssppos.com",
  applicationCategory: "RestaurantManagementSoftware",
  operatingSystem: "Web Browser, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free trial available",
  },
  provider: {
    "@type": "Organization",
    name: "SSPPOS",
    url: "https://ssppos.com",
    logo: "https://ssppos.com/logo_no_bg.png",
    description: "Leading provider of restaurant management solutions",
    foundingDate: "2024",
    industry: "Restaurant Technology",
    numberOfEmployees: "50-100",
  },
  featureList: [
    "QR Menu Scanning",
    "Bill Splitting",
    "Payment Processing",
    "Restaurant Management Dashboard",
    "Staff Management",
    "Kitchen Display System",
    "Real-time Analytics",
    "Inventory Tracking",
    "Table Management",
    "Order Management",
  ],
  screenshot: "https://ssppos.com/logo_no_bg.png",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1000",
    bestRating: "5",
    worstRating: "1",
  },
};

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "TechCompany",
  name: "SSPPOS",
  description: "Complete restaurant management solution provider",
  url: "https://ssppos.com",
  logo: "https://ssppos.com/logo_no_bg.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-SSPPOS",
    contactType: "Customer Service",
    availableLanguage: "English",
  },
  sameAs: [
    "https://facebook.com/ssppos",
    "https://twitter.com/ssppos",
    "https://linkedin.com/company/ssppos",
  ],
  founder: {
    "@type": "Organization",
    name: "SSPPOS Team",
  },
};

export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is SSPPOS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SSPPOS is a complete restaurant management solution that includes QR menu scanning, bill splitting, payment processing, staff management, and kitchen display systems. It's designed to streamline restaurant operations and enhance customer experience.",
      },
    },
    {
      "@type": "Question",
      name: "How does the QR menu scanning work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Customers scan a QR code at their table to access the digital menu, place orders directly from their phones, and split bills with flexible payment options. This reduces wait times and improves table turnover.",
      },
    },
    {
      "@type": "Question",
      name: "Is SSPPOS suitable for all restaurant types?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, SSPPOS is designed to work with restaurants of all sizes and types - from quick-service restaurants to fine dining establishments. Our modular approach allows you to use the features that best fit your business needs.",
      },
    },
    {
      "@type": "Question",
      name: "When will SSP Kitchen be available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SSP Kitchen, our smart kitchen display system with order queue management, is scheduled to launch in Q3 2026. It will provide advanced kitchen workflow optimization and preparation timing features.",
      },
    },
  ],
};
