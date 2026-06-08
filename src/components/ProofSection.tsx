import { SectionHeader } from "@/components/SectionHeader";

export function ProofSection() {
  return (
    <section className="section-pad proof-section" id="proof">
      <div className="container">
        <SectionHeader
          eyebrow="Built around proof"
          title="A landing page that makes cold traffic feel warm."
          text="The design keeps the client's Upwork screenshot as the credibility anchor, but presents it in a cleaner, more premium way with focused messaging beside it."
        />

        <div className="proof-cards">
          <article>
            <span>01</span>
            <h3>Trust before pitch</h3>
            <p>The hero starts with visible proof, not generic claims. Visitors see credibility before the CTA asks for action.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Minimal page flow</h3>
            <p>Every section is short, calm and easy to scan, making the website feel modern instead of overloaded.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Future-ready build</h3>
            <p>The frontend is separated into components, so API routes, CRM, admin or database features can be added later.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
