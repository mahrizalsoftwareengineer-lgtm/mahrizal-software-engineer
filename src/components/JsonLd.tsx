import { cases } from "@/content/cases";
import { site, skills } from "@/content/site";
import { absoluteUrl, seo } from "@/lib/seo";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    jobTitle: "Software Engineer",
    description: seo.description,
    url: absoluteUrl("/"),
    email: site.email,
    telephone: site.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogor",
      addressCountry: "ID",
    },
    sameAs: [site.github, site.linkedin].filter(
      (url) => url && !url.includes("YOUR_"),
    ),
    knowsAbout: [...skills.hard, ...skills.soft],
    worksFor: {
      "@type": "Organization",
      name: "Mahrizal Digital",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.fullName} Portfolio`,
    url: absoluteUrl("/"),
    description: seo.description,
    inLanguage: "id-ID",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolio) }}
      />
    </>
  );
}
