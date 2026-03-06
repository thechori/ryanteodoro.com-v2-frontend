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
            <div className="relative mb-2">
              {experience.url && (
                <a
                  className="icon-link absolute right-0 top-0 h-8 w-8"
                  href={experience.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${experience.company} website`}
                >
                  <ExternalLink size={16} />
                </a>
              )}

              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 pr-12">
                <h3 className="min-w-0 text-2xl font-bold sm:text-3xl">
                  {experience.company}
                </h3>
                <div />
              </div>

              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-3">
                <div className="text-base font-semibold text-[var(--text-muted)] sm:text-lg">
                  {experience.title}
                </div>
                <div className="mono justify-self-end text-right text-xs uppercase tracking-[0.12em] text-[var(--text-muted)] sm:text-sm">
                  {format(experience.startDate, "MM/yyyy")} -{" "}
                  {experience.endDate ? format(experience.endDate, "MM/yyyy") : "Present"}
                </div>
              </div>
            </div>

            <p className="section-copy">{experience.description}</p>

            <div className="mt-4 flex flex-col gap-3">
              {experience.projects.map((project, projectIndex) => (
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
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
