import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Value from "@/components/sections/Value";
import Services from "@/components/sections/Services";
import Project from "@/components/sections/Project";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main
      id="topo"
      className="bg-[#0F1115] text-[#F5F7FA] pt-24 sm:pt-28"
    >
      <Header />

      <Hero />

      <Reveal>
        <Value />
      </Reveal>

      <Reveal>
        <Services />
      </Reveal>

      <Reveal>
        <Project />
      </Reveal>

      <Reveal>
        <Process />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <CTA />
      </Reveal>

      <Footer />
    </main>
  );
}