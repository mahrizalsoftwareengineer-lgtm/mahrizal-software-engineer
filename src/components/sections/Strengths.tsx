import { strengths } from "@/content/site";

export function Strengths() {
  return (
    <section className="section-space">
      <div className="container-page">
        <p className="eyebrow">How I create impact</p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-ink md:text-5xl">
          Impact datang dari keputusan yang tepat, bukan dari daftar tools.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {strengths.map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-paper/70 p-6">
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="prose-muted mt-3">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
