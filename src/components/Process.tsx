import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function Process() {
  return (
    <section className="section-pad process-section">
      <div className="container process-grid">
        <SectionHeader
          eyebrow="Simple process"
          title="A calm system your client can understand quickly."
          text="No complicated agency language. The page explains the service in a direct, conversion-focused sequence."
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
