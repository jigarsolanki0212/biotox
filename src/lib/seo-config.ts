export const siteConfig = {
  name: "BIOTOX by MedReg",
  shortName: "BIOTOX",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://medregbiotox.com",
  /**
   * Address used in link previews (WhatsApp, LinkedIn, Facebook, X). It must be the host actually serving this site:
   * medregbiotox.com still points to the old site, so previews used to fetch a missing image from there. On Vercel
   * this is the project's production domain, which becomes medregbiotox.com by itself once that domain is attached.
   */
  shareUrl: (process.env.NEXT_PUBLIC_SHARE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://medregbiotox.com").replace(/\/$/, ""),
  get ogImage() {
    return `${this.shareUrl}/images/og-image.png`;
  },
  description:
    "Expert toxicology and biological safety evaluation for medical devices — biocompatibility, BEP/BER, risk assessment, and global regulatory compliance.",
  keywords: [
    "BIOTOX",
    "MedReg",
    "Medical Device Toxicology",
    "Biological Evaluation Plan",
    "BEP",
    "Biological Evaluation Report",
    "BER",
    "Biocompatibility Evaluation",
    "ISO 10993",
    "ISO 10993-1:2025",
    "Toxicological Risk Assessment",
    "TRA",
    "FDA 510(k)",
    "EU MDR",
    "CDSCO",
    "DABT toxicologist",
    "ERT UKRT",
    "ISO 18562",
    "ISO 7405",
    "In-silico Safety Assessment",
    "QSAR Analysis",
    "Medical device regulatory compliance"
  ],
  author: {
    name: "MedReg Regulatory Solutions & BIOTOX Toxicology Team",
    url: "https://www.medreg.in",
  },
  contact: {
    phonePrimary: "+91 88664 61989",
    phoneSecondary: "+91 94094 06215",
    phonePrimaryRaw: "+918866461989",
    phoneSecondaryRaw: "+919409406215",
    email: "enquiry@medregbiotox.com",
    whatsappUrl: "https://wa.me/918866461989",
    linkedinUrl: "https://www.linkedin.com/company/biotox-by-medreg/",
    address: {
      street: "Titanium Business Park, Makarba",
      city: "Ahmedabad",
      state: "Gujarat",
      postalCode: "380051",
      country: "IN",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Titanium+Business+Park%2C+Makarba%2C+Ahmedabad%2C+Gujarat+380051",
    },
  },
  credentials: [
    "DABT · ERT · UKRT Certified Toxicologists",
    "ISO 10993-1:2025",
    "FDA · OECD GLP",
    "EU MDR · NABL",
    "20+ Years Expertise",
    "ISO 18562-1:2024",
    "ISO 7405:2025",
  ],
};

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: "MedReg BioTox LLP",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-full.png`,
    image: `${siteConfig.url}/images/og-image.png`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phonePrimaryRaw,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.9967",
      longitude: "72.4996",
    },
    hasMap: siteConfig.contact.address.mapsUrl,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phonePrimaryRaw,
        contactType: "customer support",
        areaServed: ["Global", "IN", "US", "EU", "GB"],
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phoneSecondaryRaw,
        contactType: "technical consulting",
        areaServed: ["Global", "IN", "US", "EU", "GB"],
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
    ],
    sameAs: [siteConfig.contact.linkedinUrl, "https://www.medreg.in"],
    parentOrganization: {
      "@type": "Organization",
      name: "MedReg Consultancy LLP",
      url: "https://www.medreg.in",
    },
    priceRange: "$$$",
    knowsAbout: [
      "Medical Device Biocompatibility",
      "Biological Evaluation Plan (BEP)",
      "Biological Evaluation Report (BER)",
      "Toxicological Risk Assessment (TRA)",
      "ISO 10993-1:2025 Compliance",
      "EU Medical Device Regulation (EU MDR 2017/745)",
      "FDA 510(k) Biocompatibility Clearances",
      "CDSCO Biological Safety Testing Requirements",
      "In-silico QSAR Safety Assessment",
      "ISO 18562 Breathing Gas Pathway",
      "ISO 7405 Dental Devices",
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.item.startsWith("http") ? crumb.item : `${siteConfig.url}${crumb.item}`,
    })),
  };
}

export function getFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function getServiceSchema(services: { title: string; desc: string; tag: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Medical Device Toxicology Services",
    description: "Core biological safety and regulatory toxicology services provided by BIOTOX by MedReg.",
    itemListElement: services.map((s, idx) => ({
      "@type": "Service",
      position: idx + 1,
      name: s.title,
      description: s.desc,
      serviceType: s.tag,
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
    })),
  };
}

export function getServiceDetailSchema(s: { slug: string; title: string; desc: string; tag: string; img: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/expertise/${s.slug}#service`,
    name: s.title,
    description: s.desc,
    serviceType: s.tag,
    url: `${siteConfig.url}/expertise/${s.slug}`,
    image: s.img,
    areaServed: ["Worldwide", "IN", "US", "EU", "GB"],
    provider: { "@id": `${siteConfig.url}/#organization` },
  };
}
