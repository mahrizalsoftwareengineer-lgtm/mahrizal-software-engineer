import { site } from "@/content/site";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || site.siteUrl;

export const seo = {
  title: `${site.fullName} — Software Engineer, System Analyst & AI Developer`,
  description:
    "Portfolio Mahrizal: Software Engineer, System Analyst, Project Manager, dan AI Developer di Bogor, Indonesia. Spesialis Laravel, React, Next.js, PostgreSQL, Redis, serta system design untuk produk yang siap production.",
  keywords: [
    "Mahrizal",
    "Mahrizal Software Engineer",
    "Mahrizal System Analyst",
    "Software Engineer Bogor",
    "System Analyst Indonesia",
    "Laravel Developer Indonesia",
    "Next.js Developer",
    "AI Developer Indonesia",
    "Portfolio Software Engineer",
    "SIA Militan",
    "Engineering Manager Indonesia",
  ],
} as const;

export function absoluteUrl(path = "/") {
  const base = siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
