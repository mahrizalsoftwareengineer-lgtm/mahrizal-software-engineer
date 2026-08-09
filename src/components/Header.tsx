"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#about", label: "About" },
  { href: "/resume", label: "CV" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 nav-blur ${scrolled ? "is-scrolled" : ""}`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-tight text-ink">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/resume" className="btn btn-ink hidden text-sm sm:inline-flex">
            CV
          </Link>
          <Link href="/#contact" className="btn btn-primary text-sm">
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </header>
  );
}
