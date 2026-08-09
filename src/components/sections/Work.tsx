import Image from "next/image";
import Link from "next/link";
import { cases } from "@/content/cases";

export function Work() {
  return (
    <section id="work" className="section-space bg-white/40">
      <div className="container-page">
        <p className="eyebrow">Selected work</p>
        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="display max-w-3xl text-3xl text-ink md:text-5xl">
            Case studies yang menunjukkan role, keputusan, dan impact.
          </h2>
          <p className="prose-muted max-w-sm text-sm md:text-right">
            Tiap case bisa dibaca dari sudut Engineering, Analysis, Delivery, atau AI.
          </p>
        </div>

        <div className="mt-12">
          {cases.map((item, index) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="case-row group grid-cols-1 md:grid-cols-[88px_1fr_200px_auto] md:items-center"
            >
              <span className="font-mono text-sm text-ink-soft">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                    {item.year}
                  </span>
                  <span className="tag">{item.status}</span>
                </div>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-teal-deep md:text-3xl">
                  {item.title}
                </h3>
                <p className="prose-muted mt-2 max-w-2xl">{item.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {item.image ? (
                <div className="relative hidden h-28 overflow-hidden border border-line md:block">
                  <Image
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    fill
                    className="object-cover object-top"
                    sizes="200px"
                  />
                </div>
              ) : (
                <span className="hidden md:block" />
              )}
              <span className="text-sm font-semibold text-teal-deep">
                Baca case →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
