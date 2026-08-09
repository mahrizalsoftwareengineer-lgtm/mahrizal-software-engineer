import type { MetadataRoute } from "next";
import { cases } from "@/content/cases";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const workPages = cases.map((item) => ({
    url: absoluteUrl(`/work/${item.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: item.featured ? 0.9 : 0.7,
    ...(item.image
      ? {
          images: [absoluteUrl(item.image)],
        }
      : {}),
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/resume"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...workPages,
  ];
}
