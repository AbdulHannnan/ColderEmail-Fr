import { ContactSection } from "@/components/ContactSection";
import Features from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Process } from "@/components/Process";
import { ProofSection } from "@/components/ProofSection";
import { ResultsSection } from "@/components/ResultsSection";


export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Features/>
        <ProofSection />
        <Process />
        <ResultsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
