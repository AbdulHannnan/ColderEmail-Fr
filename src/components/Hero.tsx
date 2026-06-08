import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero section-pad" id="top">
      <div className="noise" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="proof-visual hero-visual" aria-label="Upwork proof screenshot placeholder">
          <div className="proof-image-wrap">
            <img src={site.upworkProofImage} alt="Upwork proof placeholder" />
            <div className="proof-floating-card card-one">
              <span>Profile strength</span>
              <strong>Top Rated</strong>
            </div>
            <div className="proof-floating-card card-two">
              <span>Client response</span>
              <strong>Booked calls</strong>
            </div>
          </div>
        </div>

        <div className="hero-copy">
          <span className="eyebrow">Cold email for serious B2B teams</span>
          <h1>Turn quiet inboxes into qualified sales conversations.</h1>
          <p className="hero-lead">
            Colder Email builds clean outbound systems for founders and service businesses: sharper positioning,
            better lead targeting, minimal copy, and weekly optimization focused on booked calls.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get a campaign audit
            </a>
            <a className="btn btn-ghost" href="#proof">
              See the system
            </a>
          </div>

          <div className="stat-row" aria-label="Performance highlights">
            {site.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
