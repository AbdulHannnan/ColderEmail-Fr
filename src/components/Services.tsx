import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function Services() {
  return (
    <section className="section-pad" id="system">
      <div className="container">
        <SectionHeader
          eyebrow="The outbound system"
          title="Everything needed to launch colder, cleaner and smarter."
          text="The sections are intentionally minimal, but the offer feels complete: strategy, copy, setup and optimization."
        />

        <div className="service-grid">
          {site.services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon" aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
