import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Roles } from "@/components/sections/Roles";
import { Skills } from "@/components/sections/Skills";
import { Strengths } from "@/components/sections/Strengths";
import { Work } from "@/components/sections/Work";

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
