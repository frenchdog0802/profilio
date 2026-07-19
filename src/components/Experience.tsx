import { motion } from "framer-motion";
import { experience } from "../data/cv";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section__inner">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Work Experience</p>
          <h2>From fintech backends to AI agent platforms.</h2>
        </motion.div>

        <div className="timeline">
          {experience.map((job, i) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              className="timeline__item"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.05 * i }}
            >
              <div className="timeline__marker" aria-hidden="true" />
              <header className="timeline__header">
                <div>
                  <h3>
                    {job.role}
                    <span className="timeline__type"> · {job.type}</span>
                  </h3>
                  <p className="timeline__company">
                    {job.company} — {job.location}
                  </p>
                </div>
                <time>{job.period}</time>
              </header>
              <ul className="timeline__list">
                {job.highlights.map((h) => (
                  <li key={h.slice(0, 48)}>{h}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
