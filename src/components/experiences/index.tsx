import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { format } from "date-fns";
import _ from "lodash";
//
import Button from "../../components/button";
import { Badge } from "../../components/badge";
import { experiences } from "../../data/experiences";

const MAX_EXPERIENCES_TO_SHOW = 5;

const Experiences = () => {
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  return (
    <section id="experience" className="mb-10 sm:mb-12 md:mb-20">
      <h2 className="text-3xl font-bold mb-4 3b-1 border-b-2">experience</h2>

      {/* companies */}
      {experiences
        .filter((_, index) =>
          showAllExperiences ? true : index < MAX_EXPERIENCES_TO_SHOW
        )
        .map((experience, index) => (
          <div key={index} className="mb-10">
            <div className="inline-block items-center">
              <span className="font-bold text-2xl mr-2">
                {experience.company}
              </span>

              {experience.url && (
                <a
                  className="inline-block relative top-1"
                  href={experience.url}
                  target="_blank"
                >
                  <ExternalLink size={24} />
                </a>
              )}
            </div>

            {/* roles within experience */}
            {experience.roles.map((role, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <div className="italic text-sm md:text-base">
                    {role.title}
                  </div>
                  {role.startDate && (
                    <div className="font-semibold text-teal-600 text-sm md:text-base">
                      {format(role.startDate, "MM/yyyy")} -{" "}
                      {role.endDate
                        ? format(role.endDate, "MM/yyyy")
                        : "Present"}
                    </div>
                  )}
                </div>
                <div>{role.description}</div>

                {/* projects within role */}
                <div className="mt-2 flex">
                  <div className="relative w-24 bg-gray-100 text-gray-300 overflow-hidden">
                    <div
                      className="flex absolute top-1/2 left-1/2 
             transform -translate-x-1/2 -translate-y-1/2 rotate-90"
                    >
                      {_.times(20, () => (
                        <div className="px-10">projects</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    {role.projects.map((project, index) => (
                      <div key={index} className="pl-4 mb-6">
                        <div className="flex items-center">
                          <div className="font-semibold opacity-80 pr-2">
                            {project.name}
                          </div>
                          {project.url && (
                            <a href={project.url} target="_blank">
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                        <div>{project.description}</div>

                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags.map((element, index) => (
                            <Badge key={index}>{element}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

      {!showAllExperiences && (
        <Button
          title="see all experiences"
          className="my-2"
          variant="outline"
          onClick={() => setShowAllExperiences(true)}
        />
      )}
    </section>
  );
};

export default Experiences;
