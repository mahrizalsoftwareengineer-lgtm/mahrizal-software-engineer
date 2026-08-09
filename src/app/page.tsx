import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Roles } from "@/components/sections/Roles";
import { Strengths } from "@/components/sections/Strengths";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Roles />
      <Strengths />
      <About />
      <Contact />
    </>
  );
}
