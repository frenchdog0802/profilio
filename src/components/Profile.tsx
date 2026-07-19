import { motion } from "framer-motion";
import { metrics, profile } from "../data/cv";

export function Profile() {
  return (
    <section className="section" id="profile">
      <div className="section__inner">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Profile</p>
          <h2>Engineer focused on backend, cloud, and applied AI.</h2>
        </motion.div>

        <motion.p
          className="profile__summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {profile.summary}
        </motion.p>

        <div className="metrics">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="metric"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
            >
              <span className="metric__value">{m.value}</span>
              <span className="metric__label">{m.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
