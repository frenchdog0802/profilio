import { Player } from "@remotion/player";
import { motion } from "framer-motion";
import { HeroComposition } from "../remotion/HeroComposition";
import { profile } from "../data/cv";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__stage" aria-hidden="true">
        <Player
          component={HeroComposition}
          durationInFrames={180}
          compositionWidth={1280}
          compositionHeight={720}
          fps={30}
          loop
          autoPlay
          style={{ width: "100%", height: "100%" }}
          acknowledgeRemotionLicense
        />
      </div>

      <div className="hero__content">
        <motion.p
          className="hero__location"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {profile.location} · {profile.workAuth}
        </motion.p>

        <motion.h1
          className="hero__brand"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          BERT <span style={{ color: "var(--signal)" }}>HSIAO</span>
        </motion.h1>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.65 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          <a className="btn btn--primary" href="#experience">
            View experience
          </a>
          <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
            Contact me
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#profile"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        aria-label="Scroll to profile"
      >
        <span />
      </motion.a>
    </section>
  );
}
