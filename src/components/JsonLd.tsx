import { cases } from "@/content/cases";
import { site, skills } from "@/content/site";
import { safeJsonLd } from "@/lib/security";
import { absoluteUrl, seo } from "@/lib/seo";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    jobTitle: "AI Developer",
    description: seo.description,
    url: absoluteUrl("/"),
    email: site.email,
    telephone: site.phoneDisplay,
    image: absoluteUrl(site.photo),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogor",
      addressCountry: "ID",
    },
    sameAs: [site.github, site.linkedin].filter(
      (url) => url && !url.includes("YOUR_"),
    ),
    knowsAbout: [...skills.hard, ...skills.soft],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.fullName} Portfolio`,
    url: absoluteUrl("/"),
    description: seo.description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Person",
      name: site.fullName,
    },
  };

  const portfolio = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected work",
    itemListElement: cases.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/work/${item.slug}`),
      name: item.title,
      description: item.subtitle,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(portfolio) }}
      />
    </>
  );
}
