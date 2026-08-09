import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero-plane">
      <div className="container-page flex min-h-[inherit] flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-32">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow rise text-[#b7e4df]">Portfolio · {site.location}</p>
            <h1 className="display rise rise-delay-1 mt-5 max-w-4xl text-5xl text-white md:text-7xl">
              {site.name}
            </h1>
            <p className="rise rise-delay-2 mt-4 max-w-3xl text-xl font-medium text-[#e7f4f3] md:text-2xl">
              {site.title}
            </p>
            <p className="rise rise-delay-2 mt-2 text-base text-[#9fc4c7] md:text-lg">
              {site.titleSupport}
            </p>
            <p className="rise rise-delay-2 mt-4 max-w-2xl text-lg leading-relaxed text-[#d7e8ea] md:text-xl">
              {site.tagline}
            </p>
            <div className="rise rise-delay-3 mt-6 flex flex-wrap gap-2">
              {site.heroStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-[#d7e8ea]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="rise rise-delay-3 mt-10 flex flex-wrap gap-3">
              <Link href="/#work" className="btn btn-primary">
                View selected work
              </Link>
              <Link href={site.resumeUrl} className="btn btn-ghost">
                View CV
              </Link>
              <Link href="/#contact" className="btn btn-ghost">
                Contact me
              </Link>
            </div>
            <p className="rise rise-delay-3 mt-8 max-w-xl text-sm text-[#9fc4c7]">
              {site.availability}
            </p>
          </div>

          <div className="rise rise-delay-2 justify-self-start md:justify-self-end">
            <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-white/30 bg-white/10 md:h-48 md:w-48">
              <Image
                src={site.photo}
                alt={site.photoAlt}
                fill
                priority
                sizes="(max-width: 768px) 144px, 192px"
                className="object-cover object-[center_15%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
