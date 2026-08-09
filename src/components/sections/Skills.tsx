import { skills } from "@/content/site";

export function Skills() {
  return (
    <section id="skills" className="section-space bg-white/40">
      <div className="container-page">
        <p className="eyebrow">Skills</p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-ink md:text-5xl">
          Stack and capabilities ready for real work.
        </h2>
        <p className="prose-muted mt-4 max-w-2xl">
          Kept concise for recruiters: hard skills for technical execution, soft
          skills for collaboration and delivery.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <SkillGroup title="Hard skills" items={skills.hard} />
          <SkillGroup title="Soft skills" items={skills.soft} />
        </div>
      </div>
    </section>
  );
}

function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="border-t border-line pt-6">
      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-deep">
        {title}
      </h3>
      <ul className="mt-5 space-y-0">
        {items.map((item) => (
          <li
            key={item}
            className="border-b border-line py-3 text-lg font-medium text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
