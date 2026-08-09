import { about, site } from "@/content/site";

export function About() {
  return (
    <section id="about" className="section-space bg-ink text-[#e7f1f2]">
      <div className="container-page grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow text-[#8fd0c9]">About</p>
          <h2 className="display mt-3 text-3xl text-white md:text-5xl">
            {about.headline}
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-[#c5d7da] md:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <aside className="border border-white/10 bg-white/5 p-6 md:p-8">
          <h3 className="text-lg font-semibold text-white">Working principles</h3>
          <ul className="mt-5 space-y-4 text-[#c5d7da]">
            {about.principles.map((item) => (
              <li key={item} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-[#9bb6ba]">
            Based in {site.location}. Open for remote / hybrid conversations.
          </p>
        </aside>
      </div>
    </section>
  );
}
