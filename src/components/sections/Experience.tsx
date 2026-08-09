import { experience } from "@/content/site";

export function Experience() {
  return (
    <section id="experience" className="section-space">
      <div className="container-page">
        <p className="eyebrow">Experience</p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-ink md:text-5xl">
          Recent roles and ownership scope.
        </h2>
        <p className="prose-muted mt-4 max-w-2xl">
          A short timeline recruiters can map to seniority, stack, and impact.
        </p>

        <div className="mt-12 space-y-0">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="grid gap-4 border-t border-line py-8 md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="font-mono text-sm text-ink-soft">{item.period}</p>
                <h3 className="mt-2 text-lg font-semibold text-ink">{item.company}</h3>
                <p className="mt-1 text-sm font-medium text-teal-deep">{item.role}</p>
              </div>
              <div>
                <p className="prose-muted text-base md:text-lg">{item.summary}</p>
                <ul className="prose-muted mt-4 list-disc space-y-2 pl-5">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
