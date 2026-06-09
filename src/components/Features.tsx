import { Trophy, ShieldCheck, Star, Clock } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Trophy, val: "#3", label: "GLOBAL RANK", sub: "Top Emailer on Upwork" },
    { icon: ShieldCheck, val: "100%", label: "JOB SUCCESS", sub: "Flawless Execution" },
    { icon: Star, val: "5.0", label: "REVIEWS", sub: "Across all contracts" },
    { icon: Clock, val: "Longer", label: "RETENTION", sub: "Than most marriages" },
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div className="proof-cards" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {stats.map((item, i) => {
            const Icon = item.icon; // Standard practice: Assign to capitalized variable
            return (
              <article 
                key={i} 
                className="service-card" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  textAlign: 'center' 
                }}
              >
                <div className="service-icon" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={24} />
                </div>
                <h3 style={{ margin: '0', fontSize: '32px' }}>{item.val}</h3>
                <p style={{ fontWeight: '800', fontSize: '12px', letterSpacing: '0.08em', marginTop: '8px' }}>{item.label}</p>
                <p style={{ fontSize: '14px', marginTop: '4px', color: 'var(--muted)' }}>{item.sub}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}