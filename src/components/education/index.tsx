import { Badge } from "../../components/badge";

const Education = () => (
  <section id="education" className="section-shell">
    <h2 className="section-title">education</h2>

    <div className="project-node">
      <h3 className="text-2xl font-bold">University of Houston - Victoria</h3>
      <div className="mono mb-2 mt-1 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)] sm:text-sm">
        May 2013
      </div>
      <p className="section-copy">Bachelor of Science in Computer Science</p>
      <div className="my-3 flex flex-wrap gap-2">
        {["Graduated Cum Laude (3.52 GPA)", "Dean's List recipient"].map(
          (element, index) => (
            <Badge key={index} variant="outlineSecondary">
              {element}
            </Badge>
          )
        )}
      </div>
    </div>
  </section>
);

export default Education;
