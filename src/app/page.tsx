import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Process } from "@/components/Process";
import { ProofSection } from "@/components/ProofSection";
import { ResultsSection } from "@/components/ResultsSection";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ProofSection />
        <Services />
        <Process />
        <ResultsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
