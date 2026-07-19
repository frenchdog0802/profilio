import { motion } from "framer-motion";
import { projects } from "../data/cv";

function assetUrl(path: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, "")}`;
}

export function Projects() {
  return (
    <section className="section section--alt" id="projects">
      <div className="section__inner">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Projects</p>
          <h2>Applied AI, CRM automation, and risk modeling.</h2>
        </motion.div>

        <div className="projects">
          {projects.map((project, i) => {
            const hasUrl = "url" in project && !!project.url;
            const hasPreview = "preview" in project && !!project.preview;

            return (
              <motion.article
                key={project.name}
                className={`project ${hasPreview ? "project--preview" : ""}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08 * i }}
              >
                {hasPreview ? (
                  <a
                    className="project__preview"
                    href={hasUrl ? project.url : undefined}
                    target={hasUrl ? "_blank" : undefined}
                    rel={hasUrl ? "noreferrer" : undefined}
                    aria-label={`${project.name} live preview`}
                  >
                    <img
                      src={assetUrl(project.preview!)}
                      alt={`${project.name} product preview`}
                      loading="lazy"
                    />
                    <span className="project__preview-shine" aria-hidden="true" />
                  </a>
                ) : null}

                <div className="project__body">
                  <div className="project__meta">
                    <span>{project.stack}</span>
                    <time>{project.period}</time>
                  </div>
                  <div className="project__title-row">
                    <h3>{project.name}</h3>
                    {hasUrl ? (
                      <a
                        className="project__link"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live site
                        <span aria-hidden="true">↗</span>
                      </a>
                    ) : null}
                  </div>
                  <p className="project__subtitle">{project.subtitle}</p>
                  <ul>
                    {project.highlights.map((h) => (
                      <li key={h.slice(0, 48)}>{h}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
