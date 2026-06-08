import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#top">
          <span className="brand-dot" />
          <span>{site.name}</span>
        </a>
        <p>Cold email systems built with clarity, credibility and conversion in mind.</p>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </div>
    </footer>
  );
}
