import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, getCaseBySlug } from "@/content/cases";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) return { title: "Case not found" };
  return {
    title: item.title,
    description: item.subtitle,
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) notFound();

  return (
    <article className="pb-20 pt-28">
      <div className="container-page">
        <Link
          href="/#work"
          className="text-sm font-semibold text-teal-deep transition-colors hover:text-ink"
        >
          ← Kembali ke selected work
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
              {item.year}
            </span>
            <span className="tag">{item.status}</span>
          </div>
          <h1 className="display mt-4 text-4xl text-ink md:text-6xl">{item.title}</h1>
          <p className="prose-muted mt-5 text-lg md:text-xl">{item.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {item.image ? (
          <figure className="mt-10 overflow-hidden border border-line bg-ink">
            <Image
              src={item.image}
              alt={item.imageAlt || item.title}
              width={1600}
              height={900}
              className="h-auto w-full"
              priority
            />
            {item.imageAlt ? (
              <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-[#c5d7da]">
                {item.imageAlt}
              </figcaption>
            ) : null}
          </figure>
        ) : null}

        <div className="mt-14 grid gap-12 md:grid-cols-[1fr_280px]">
          <div className="space-y-10">
            <Section title="Context" body={item.context} />
            <Section title="Problem" body={item.problem} />
            <Section title="Role saya" body={item.role} />

            <section>
              <h2 className="text-xl font-semibold text-ink">Yang saya lakukan</h2>
              <ul className="prose-muted mt-4 list-disc space-y-2 pl-5">
                {item.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Trade-offs</h2>
              <ul className="prose-muted mt-4 list-disc space-y-2 pl-5">
                {item.tradeoffs.map((tradeoff) => (
                  <li key={tradeoff}>{tradeoff}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">Impact / hasil</h2>
              <ul className="prose-muted mt-4 list-disc space-y-2 pl-5">
                {item.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </section>

            {item.note ? (
              <p className="rounded-xl border border-dashed border-teal/40 bg-teal/5 px-4 py-3 text-sm text-ink-soft">
                Catatan edit: {item.note}
              </p>
            ) : null}
          </div>

          <aside className="h-fit border border-line bg-paper/80 p-5 md:sticky md:top-24">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
              Stack & bukti
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-3 text-sm">
              {item.links.live ? (
                <EvidenceLink href={item.links.live} label="Live site" />
              ) : null}
              {item.links.demo ? (
                <EvidenceLink href={item.links.demo} label="Demo" />
              ) : null}
              {item.links.github ? (
                <EvidenceLink href={item.links.github} label="GitHub" />
              ) : null}
              {item.image ? (
                <p className="text-ink-soft">Screenshot tersedia di halaman ini.</p>
              ) : null}
              {!item.links.live &&
              !item.links.demo &&
              !item.links.github &&
              !item.image ? (
                <p className="text-ink-soft">
                  Tambahkan link live/GitHub di `src/content/cases.ts`.
                </p>
              ) : null}
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <p className="prose-muted mt-3 text-base md:text-lg">{body}</p>
    </section>
  );
}

function EvidenceLink({ href, label }: { href: string; label: string }) {
  const isPlaceholder = href.includes("YOUR_");
  if (isPlaceholder) {
    return (
      <span className="block font-semibold text-ink-soft">
        {label} (isi URL dulu)
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block font-semibold text-teal-deep hover:text-ink"
    >
      {label} ↗
    </a>
  );
}
