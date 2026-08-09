import Link from "next/link";
import { getWhatsAppUrl, site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="section-space">
      <div className="container-page">
        <p className="eyebrow">Contact</p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-ink md:text-5xl">
          Siap diskusi peluang kerja atau kebutuhan digital bisnis.
        </h2>
        <p className="prose-muted mt-5 max-w-2xl text-lg">
          Kirim email, WhatsApp, atau lihat GitHub untuk bukti teknis. Satu link
          portfolio ini bisa dipakai untuk hiring dan untuk meyakinkan klien.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="btn btn-primary">
            Email saya
          </a>
          <a
            href={getWhatsAppUrl(
              "Halo Mahrizal, saya menemukan portfolio Anda dan ingin diskusi.",
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
