import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Roles } from "@/components/sections/Roles";
import { Skills } from "@/components/sections/Skills";
import { Strengths } from "@/components/sections/Strengths";
import { Work } from "@/components/sections/Work";
import { absoluteUrl, seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: absoluteUrl("/"),
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Skills />
      <Roles />
      <Strengths />
      <About />
      <Contact />
    </>
  );
}
