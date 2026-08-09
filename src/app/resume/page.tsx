import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PrintCvButton } from "@/components/PrintCvButton";
import { experience, resume, site, skills } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "CV / Resume",
  description: `Resume of ${site.fullName} — ${site.title}.`,
  alternates: {
    canonical: absoluteUrl("/resume"),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumePage() {
  return (
    <div className="pb-20 pt-28">
      <div className="container-page max-w-3xl">
        <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
          <Link
            href="/"
            className="text-sm font-semibold text-teal-deep transition-colors hover:text-ink"
          >
            ← Home
          </Link>
          <div className="flex flex-wrap gap-3">
            <PrintCvButton />
            <Link href="/#contact" className="btn btn-ink text-sm">
              Contact
            </Link>
          </div>
        </div>

        <header className="mt-8 flex flex-col gap-6 border-b border-line pb-6 sm:flex-row sm:items-center">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-line">
            <Image
              src={site.photo}
              alt={site.photoAlt}
              fill
              sizes="112px"
              className="object-cover object-[center_15%]"
              priority
            />
          </div>
          <div>
            <h1 className="display text-4xl text-ink md:text-5xl">{site.fullName}</h1>
            <p className="mt-2 text-lg font-medium text-teal-deep">{site.title}</p>
            <p className="prose-muted mt-2">{site.titleSupport}</p>
            <p className="prose-muted mt-4 text-sm">
              {site.location} · {site.email} · {site.phoneDisplay}
            </p>
            <p className="prose-muted mt-1 text-sm">
              {site.github.replace("https://", "")} ·{" "}
              {site.linkedin.replace("https://", "")}
            </p>
          </div>
        </header>

        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
            Summary
          </h2>
          <p className="prose-muted mt-3 text-base leading-relaxed">{resume.summary}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
            Experience
          </h2>
          <div className="mt-4 space-y-6">
            {experience.map((item) => (
              <div key={`${item.company}-${item.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-ink">{item.company}</h3>
                  <span className="font-mono text-sm text-ink-soft">{item.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-teal-deep">{item.role}</p>
                <p className="prose-muted mt-2">{item.summary}</p>
                <ul className="prose-muted mt-3 list-disc space-y-1 pl-5 text-sm">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
            Selected work
          </h2>
          <ul className="mt-4 space-y-3">
            {resume.selectedWork.map((item) => (
              <li key={item.title}>
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="prose-muted text-sm">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
            Skills
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-ink">Hard skills</p>
              <p className="prose-muted mt-2 text-sm">{skills.hard.join(" · ")}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Soft skills</p>
              <p className="prose-muted mt-2 text-sm">{skills.soft.join(" · ")}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
