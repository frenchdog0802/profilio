import { motion } from "framer-motion";
import { skillGroups } from "../data/cv";

export function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="section__inner">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Technical Skills</p>
          <h2>A stack built for reliable systems and intelligent workflows.</h2>
        </motion.div>

        <div className="skills">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              className="skill-group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 * i }}
            >
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
