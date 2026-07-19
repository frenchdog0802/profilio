import { motion } from "framer-motion";
import { education } from "../data/cv";

export function Education() {
  return (
    <section className="section" id="education">
      <div className="section__inner">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Education</p>
          <h2>Graduate research and applied software engineering.</h2>
        </motion.div>

        <div className="education">
          {education.map((ed, i) => (
            <motion.article
              key={ed.school}
              className="education__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <h3>{ed.school}</h3>
              <p className="education__location">{ed.location}</p>
              <p className="education__degree">{ed.degree}</p>
              <div className="education__footer">
                <span>GPA: {ed.gpa}</span>
                <time>{ed.period}</time>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
