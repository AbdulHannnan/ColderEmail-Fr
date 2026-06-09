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
          <h1>Cold Emails Do Not Work, Let's Make Them Colderrrr</h1>
          <p className="hero-lead">
            Stop blasting templates that end up in spam. Build a bulletproof outbound engine engineered by the #3 Cold Emailer on Upwork.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Fix my Pipeline
            </a>
           <a 
          className="btn btn-ghost" 
          href="https://www.upwork.com/freelancers/coldemailcopywriter?mp_source=share" 
          target="_blank" 
          rel="noopener noreferrer"
                                  >
                       Hire on Upwork
                </a>
          </div>
       </div>
      </div>
    </section>
  );
}
