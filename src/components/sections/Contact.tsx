import Link from "next/link";
import { getWhatsAppUrl, site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="section-space">
      <div className="container-page">
        <p className="eyebrow">Contact</p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-ink md:text-5xl">
          Ready to discuss opportunities or product needs.
        </h2>
        <p className="prose-muted mt-5 max-w-2xl text-lg">
          Reach out by email or WhatsApp, or review GitHub for technical proof.
          This portfolio is built for hiring conversations and client confidence.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="btn btn-primary">
            Email me
          </a>
          <a
            href={getWhatsAppUrl(
              "Hi Mahrizal, I found your portfolio and would like to discuss an opportunity.",
            )}
            className="btn btn-ink"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <Link
            href={site.github}
            className="btn btn-ink"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
          <Link
            href={site.linkedin}
            className="btn btn-ink"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>
        </div>

        <dl className="mt-12 grid gap-6 border-t border-line pt-8 text-sm md:grid-cols-3">
          <div>
            <dt className="font-semibold text-ink">Email</dt>
            <dd className="prose-muted mt-2">{site.email}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Phone / WA</dt>
            <dd className="prose-muted mt-2">{site.phoneDisplay}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Location</dt>
            <dd className="prose-muted mt-2">{site.location}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
