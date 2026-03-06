import { ExternalLink } from "lucide-react";
import { format } from "date-fns";
//
import { Badge } from "../../components/badge";
import { experiences } from "../../data/experiences";

const Experiences = () => {
  return (
    <section id="experience" className="section-shell">
      <h2 className="section-title">experience</h2>

      <div className="timeline-stack">
        {experiences.map((experience, experienceIndex) => (
          <article key={experienceIndex} className="company-block">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <h3 className="text-2xl font-bold sm:text-3xl">{experience.company}</h3>
              {experience.url && (
                <a
                  className="icon-link h-8 w-8"
                  href={experience.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${experience.company} website`}
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

            {experience.roles.map((role, roleIndex) => (
              <div key={roleIndex} className="role-block">
                <div className="mono mb-2 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)] sm:text-sm">
                  {role.title}, {format(role.startDate, "MM/yyyy")} -{" "}
                  {role.endDate ? format(role.endDate, "MM/yyyy") : "Present"}
                </div>
                <p className="section-copy">{role.description}</p>

                <div className="mt-4 flex flex-col gap-3">
                  {role.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="project-node">
                      <div className="mb-1 flex items-center gap-2">
                        <div className="text-lg font-semibold leading-tight">
                          {project.name}
                        </div>
                        {project.url && (
                          <a href={project.url} target="_blank" rel="noreferrer" aria-label={`${project.name} link`}>
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>

                      <p className="section-copy">{project.description}</p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tags.map((element, tagIndex) => (
                          <Badge variant="outlineSecondary" key={tagIndex}>
                            {element}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
