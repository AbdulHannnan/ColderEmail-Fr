import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function ResultsSection() {
  return (
    <section className="section-pad results-section" id="results">
      <div className="container">
        <SectionHeader
          eyebrow="What changes"
          title="More clarity, better replies and a cleaner sales motion."
          text="This section keeps the benefits sharp and client-facing, without making unrealistic promises."
        />

        <div className="results-panel">
          <div className="results-copy">
            <span className="soft-label">Outcome focused</span>
            <h3>Designed to convert cold visitors into serious conversations.</h3>
            <p>
              The layout gives the business a premium first impression, explains the offer quickly and routes qualified visitors into one focused form.
            </p>
          </div>
          <div className="result-list">
            {site.results.map((item) => (
              <div className="result-item" key={item}>
                <span aria-hidden="true">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
