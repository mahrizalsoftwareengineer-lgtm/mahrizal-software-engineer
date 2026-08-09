import { roles } from "@/content/site";

export function Roles() {
  return (
    <section id="roles" className="section-space">
      <div className="container-page">
        <p className="eyebrow">Roles</p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-ink md:text-5xl">
          Primary focus: AI Developer and Software Engineer — with analysis and delivery when needed.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {roles.map((role) => (
            <article key={role.id} className="border-t border-line pt-5">
              <h3 className="text-xl font-semibold text-ink">{role.label}</h3>
              <p className="prose-muted mt-3 text-base">{role.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
