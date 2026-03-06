import { useEffect } from "react";
//
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import About from "./components/about";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import Education from "./components/education";

function App() {
  useEffect(() => {
    const root = document.documentElement;

    const onMouseMove = (event: MouseEvent) => {
      const nx = event.clientX / window.innerWidth;
      const ny = event.clientY / window.innerHeight;
      const tiltX = (0.5 - ny) * 10;
      const tiltY = (nx - 0.5) * 10;

      root.style.setProperty("--mx", `${(nx * 100).toFixed(2)}%`);
      root.style.setProperty("--my", `${(ny * 100).toFixed(2)}%`);
      root.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
      root.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
      root.style.setProperty("--tilt-x-soft", `${(tiltX * 0.3).toFixed(2)}deg`);
      root.style.setProperty("--tilt-y-soft", `${(tiltY * 0.3).toFixed(2)}deg`);
    };

    const onScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      root.style.setProperty("--scroll", progress.toFixed(3));
    };

    onScroll();
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="page-shell ww-shell">
      <div className="cursor-glow" aria-hidden="true" />
      <div className="tech-plane" aria-hidden="true" />

      <section className="hero-grid">
        <Sidebar />
        <About />
      </section>

      <section className="stack-grid">
        <div className="rail-main">
          <Experiences />
        </div>

        <div className="rail-side">
          <Projects />
          <Education />
          <Footer />
        </div>
      </section>
    </main>
  );
}

export default App;
