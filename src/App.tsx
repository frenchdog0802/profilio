import { lazy, Suspense } from "react";
import { Nav } from "./components/Nav";
import { Profile } from "./components/Profile";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";

const Hero = lazy(() =>
  import("./components/Hero").then((m) => ({ default: m.Hero })),
);

function HeroFallback() {
  return <section className="hero hero--fallback" id="top" aria-hidden="true" />;
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Suspense fallback={<HeroFallback />}>
          <Hero />
        </Suspense>
        <Profile />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </>
  );
}
