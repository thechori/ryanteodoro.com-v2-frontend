import { ExternalLink } from "lucide-react";
import { format } from "date-fns";
//
import { Badge } from "../../components/badge";
import { projects } from "../../data/projects";

const Projects = () => (
  <section id="projects" className="section-shell">
    <h2 className="section-title">projects</h2>

    <div className="flex flex-col gap-4">
      {projects.map((project, index) => (
        <article key={index} className="project-node">
          <div className="mb-1 flex items-center gap-2">
            <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
            {project.url && (
              <a
                className="icon-link h-8 w-8"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} link`}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>

          <div className="mono mb-2 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)] sm:text-sm">
            {format(project.date, "MMMM yyyy")}
          </div>

          <p className="section-copy">{project.description}</p>

          <div className="my-3 flex flex-wrap gap-2">
            {project.tags?.map((skill, skillIndex) => (
              <Badge variant="outlineSecondary" key={skillIndex}>
                {skill}
              </Badge>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
