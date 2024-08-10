import Contact from "@/components/layouts/contact/Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Purpose from "./Purpose";
import Service from "./Service";
import FAQ from "./FAQs";
import Pricing from "./Pricing";
import WorkingProcess from "./working-process";

export default function Home() {
  return (
    <main>
      <Hero />
      <Purpose />
      <Service />
      <Pricing />
      <WorkingProcess />
      <FAQ />
      {/* <Projects / > */}
      <Contact />
    </main>
  );
}
