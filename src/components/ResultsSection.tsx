import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function ResultsSection() {
  return (
    <section className="section-pad results-section" id="results">
      <div className="container">
        <SectionHeader
          eyebrow="What changes"
          title="More clarity, better replies and a cleaner sales motion."
          text="I shift the focus from vanity metrics to high-intent engagement with your ideal audience."
        />

        <div className="results-panel">
          <div className="results-copy">
            <span className="soft-label">Outcome focused</span>
            <h3>Designed to convert cold visitors into serious conversations.</h3>
            <p>
              My approach is centered around delivering tangible results. I focus on crafting cold email campaigns that not only capture attention but also drive meaningful engagement and conversions.
            </p>
            <p>
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
