import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function Process() {
  return (
    <section className="section-pad process-section">
      <div className="container process-grid">
        <SectionHeader
          eyebrow="Simple process"
          title="Better Results, Budget Friendly"
          text="I'm the #3 cold emailer on Upwork. The 2 guys above me charge a leg and a kidney. Fixed prices. I don't do that.

I build your end to end infrastructure using the best in class providers while keeping everything within your budget. That's why I've got contracts longer than most marriages run and all 5-star reviews."
        />

        <div className="timeline">
          {site.steps.map((step, index) => (
            <div className="timeline-item" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
