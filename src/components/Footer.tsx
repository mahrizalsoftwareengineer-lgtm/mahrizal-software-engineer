import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col gap-4 text-sm text-ink-soft md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.fullName}. Built for hiring & client
          conversations.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
          <Link href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </footer>
  );
}
