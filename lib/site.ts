// Single source of truth for all SEO data.
// Set NEXT_PUBLIC_SITE_URL in Vercel once the real domain is confirmed.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://centraloilmills.com").replace(/\/$/, "")

export const site = {
  name: "Kakum Fresh",
  legalName: "Central Oil Mills Limited",
  url: SITE_URL,
  tagline: "From our mill to your pot",
  title: "Kakum Fresh Palm Oil | Central Oil Mills, Ghana",
  description:
    "Buy Kakum Fresh palm oil and palm cream online. Produced by Central Oil Mills in Jukwa, Ghana. Order today.",
  locale: "en_GH",
  themeColor: "#009E4A", // brand green from the logo
  ogImage: "/og-image.jpg", // 1200x630, see README
  // [CONFIRM] before adding: phone, email, street address, social profiles
  address: {
    addressLocality: "Jukwa",
    addressRegion: "Central Region",
    addressCountry: "GH",
  },
  keywords: [
    "Kakum Fresh",
    "Central Oil Mills",
    "palm oil Ghana",
    "buy palm oil online Ghana",
    "red palm oil Ghana",
    "palm cream concentrate",
    "abenkwan palm cream",
    "palm nut soup concentrate",
    "bulk palm oil Ghana",
    "crude palm oil supplier Ghana",
    "Jukwa palm oil",
    "Central Region palm producer",
    "made in Ghana palm oil",
  ],
}

export const absoluteUrl = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`

// ---------- Schema.org builders ----------
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: site.legalName,
  alternateName: site.name,
  url: SITE_URL,
  logo: absoluteUrl("/logo.png"),
  description: site.description,
  address: { "@type": "PostalAddress", ...site.address },
  // [CONFIRM] then add: telephone, email, sameAs: ["https://instagram.com/...", ...]
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: site.name,
  inLanguage: "en-GH",
  publisher: { "@id": `${SITE_URL}/#organization` },
}

// Use on product pages ONLY with real, confirmed prices and availability.
export function productJsonLd(p: {
  name: string
  description: string
  slug: string
  image: string
  priceGHS: number
  inStock: boolean
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: absoluteUrl(p.image),
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/shop/${p.slug}`),
      priceCurrency: "GHS",
      price: p.priceGHS.toFixed(2),
      availability: p.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
  }
}

// Use only when the same Q&As are visibly on the page.
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }
}
