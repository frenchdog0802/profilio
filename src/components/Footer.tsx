import { profile } from "../data/cv";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div>
          <p className="eyebrow">Let&apos;s connect</p>
          <h2>Open to backend, cloud, and applied-AI roles in Canada.</h2>
        </div>
        <div className="footer__links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/-/g, "")}`}>{profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} {profile.name}. Built with React &
          Remotion.
        </p>
      </div>
    </footer>
  );
}
