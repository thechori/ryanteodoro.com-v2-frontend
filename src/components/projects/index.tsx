import { ExternalLink } from "lucide-react";
import { format } from "date-fns";
//
import { Badge } from "../../components/badge";
import { projects } from "../../data/projects";

const Projects = () => (
  <section id="projects" className="mb-10 sm:mb-12 md:mb-20">
    <h2 className="text-3xl font-bold mb-3 pb-1 border-b-2">projects</h2>
    {projects.map((project, index) => (
      <div key={index} className="mb-6">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center">
            <div className="font-semibold pr-2">{project.title}</div>
            {project.url && (
              <a
                className="relative bottom-0.5"
                href={project.url}
                target="_blank"
              >
                <ExternalLink />
              </a>
            )}
          </div>

          <div className="font-semibold text-teal-600">
            {format(project.date, "MM/yyyy")}
          </div>
        </div>

        <div>{project.description}</div>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags?.map((skill, index) => (
            <Badge key={index}>{skill}</Badge>
          ))}
        </div>
      </div>
    ))}

    {/* <Button title="see all projects" className="my-2" variant="outline" /> */}
  </section>
);

export default Projects;
