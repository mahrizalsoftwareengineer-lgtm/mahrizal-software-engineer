import Link from "next/link";
import { githubRepos, site } from "@/content/site";

export function Code() {
  return (
    <section id="code" className="section-space bg-white/40">
      <div className="container-page">
        <p className="eyebrow">Code</p>
        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="display max-w-3xl text-3xl text-ink md:text-5xl">
            GitHub for interviewers who want to inspect the code.
          </h2>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ink shrink-0"
          >
            github.com/{site.githubHandle} ↗
          </a>
        </div>
        <p className="prose-muted mt-4 max-w-2xl">
          Public repositories and this portfolio source. Internal work systems stay private;
          ask if you need a walkthrough.
        </p>

        <ul className="mt-10 divide-y divide-line border-t border-line">
          {githubRepos.map((repo) => (
            <li key={repo.url}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 py-5 transition-colors md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="font-mono text-sm text-teal-deep group-hover:text-ink">
                    {site.githubHandle}/{repo.name}
                  </p>
                  <p className="prose-muted mt-1 max-w-2xl">{repo.description}</p>
                </div>
                <span className="text-sm font-semibold text-teal-deep group-hover:text-ink">
                  Open repo →
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="prose-muted mt-8 text-sm">
          Prefer LinkedIn first?{" "}
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal-deep hover:text-ink"
          >
            {site.linkedin.replace("https://", "")}
          </Link>
        </p>
      </div>
    </section>
  );
}
