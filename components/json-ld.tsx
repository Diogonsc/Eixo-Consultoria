import { contactInfo } from "@/lib/contact"
import { siteConfig } from "@/lib/site"

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo-eixo.png`,
    description: siteConfig.description,
    email: contactInfo.email.display,
    telephone: contactInfo.phone.display,
    sameAs: contactInfo.social.map((item) => item.href),
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address.street,
      addressLocality: "Jundiaí",
      addressRegion: "SP",
      addressCountry: "BR",
    },
  }

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/logo-eixo.png`,
    description: siteConfig.description,
    telephone: contactInfo.phone.display,
    email: contactInfo.email.display,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address.street,
      addressLocality: "Jundiaí",
      addressRegion: "SP",
      postalCode: "01311-000",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    sameAs: contactInfo.social.map((item) => item.href),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  )
}
