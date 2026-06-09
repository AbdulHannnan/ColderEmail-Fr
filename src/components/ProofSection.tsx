import { SectionHeader } from "@/components/SectionHeader";

export function ProofSection() {
  return (
    <section className="section-pad proof-section" id="system">
      <div className="container">
        <SectionHeader
          eyebrow="Built around proof"
          title="The Colderrrr Infrastructure"
          text="Send cold emails that feel personalized, land in the primary, and overbook your calendar."
        />

        <div className="proof-cards">
          <article>
            <span>01</span>
            <h3>Custom Infrastructure</h3>
            <p>I build your end-to-end cold email infrastructure using best-in-class providers for domains and mailboxes.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Budget Optimization</h3>
            <p>Unlike the top 2 guys who charge a leg and a kidney, I keep everything within your budget without sacrificing quality.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Email Personalization</h3>
            <p>Intelligent mailbox warmup that mimics human behavior to ensure your emails land in the primary inbox, not spam.</p>
          </article>
            <article>
            <span>04</span>
            <h3>High-Precision Lists</h3>
            <p>Sourcing clean, verified lead data so you're only hitting prospects who actually care about what you're selling.</p>
          </article>
            <article>
            <span>05</span>
            <h3>Secondary Mailboxes</h3>
            <p>Strategic domain diversification to protect your primary business domain from deliverability issues.</p>
          </article>
             <article>
            <span>06</span>
            <h3>Full Analytics</h3>
            <p>Transparent reporting on open rates, reply rates, and conversion metrics to optimize for maximum ROI.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
