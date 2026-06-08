import { site } from "@/lib/site";

export function NavBar() {
  return (
    <header className="nav-frame" aria-label="Main navigation">
      <div className="nav-empty" />
      <nav className="nav-pill">
        <a className="nav-brand" href="#top" aria-label="Colder Email home">
          <span className="brand-dot" />
          <span>{site.name}</span>
        </a>
        <div className="nav-links" aria-label="Section links">
          {site.nav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
      <div className="nav-empty" />
    </header>
  );
}
