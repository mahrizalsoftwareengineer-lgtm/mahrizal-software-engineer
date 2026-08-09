import { site } from "@/content/site";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || site.siteUrl;

export const seo = {
  title: `${site.fullName} — AI Developer & Software Engineer`,
  description:
    "Portfolio of Mahrizal: AI Developer and Software Engineer based in Bogor, Indonesia. Laravel, MySQL, Redis, Next.js, data analytics, and production system design.",
  keywords: [
    "Mahrizal",
    "Mahrizal AI Developer",
    "Mahrizal Software Engineer",
    "AI Developer Indonesia",
    "Software Engineer Bogor",
    "Laravel Developer Indonesia",
    "Next.js Developer",
    "System Analyst Indonesia",
    "Software Engineer Portfolio",
    "SIA Militan",
    "MUC Net Timesheet",
  ],
} as const;

export function absoluteUrl(path = "/") {
  const base = siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
