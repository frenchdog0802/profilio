import { useEffect, useState } from "react";
import { profile } from "../data/cv";

const links = [
  { href: "#profile", label: "Profile" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a className="nav__brand" href="#top">
        {profile.shortName}
      </a>

      <button
        className={`nav__toggle ${open ? "is-open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      <nav className={`nav__links ${open ? "is-open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          className="nav__cta"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
}
