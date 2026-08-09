import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero-plane">
      <div className="container-page flex min-h-[inherit] flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-32">
        <p className="eyebrow rise text-[#b7e4df]">Portfolio · {site.location}</p>
        <h1 className="display rise rise-delay-1 mt-5 max-w-4xl text-5xl text-white md:text-7xl">
          {site.name}
        </h1>
        <p className="rise rise-delay-2 mt-4 max-w-3xl text-xl font-medium text-[#e7f4f3] md:text-2xl">
          {site.title}
        </p>
        <p className="rise rise-delay-2 mt-4 max-w-2xl text-lg leading-relaxed text-[#d7e8ea] md:text-xl">
          {site.tagline}
        </p>
        <div className="rise rise-delay-3 mt-10 flex flex-wrap gap-3">
          <Link href="/#work" className="btn btn-primary">
            View selected work
          </Link>
          <Link href="/#contact" className="btn btn-ghost">
            Contact me
          </Link>
        </div>
        <p className="rise rise-delay-3 mt-8 max-w-xl text-sm text-[#9fc4c7]">
          {site.availability}
        </p>
      </div>
    </section>
  );
}
