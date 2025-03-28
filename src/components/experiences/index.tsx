// import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { format } from "date-fns";
import _ from "lodash";
//
// import Button from "../../components/button";
import { Badge } from "../../components/badge";
import { experiences } from "../../data/experiences";

// const MAX_EXPERIENCES_TO_SHOW = 5;

const Experiences = () => {
  // const [showAllExperiences, setShowAllExperiences] = useState(false);

  return (
    <section id="experience" className="mb-10 sm:mb-12 md:mb-20">
      <h2 className="text-3xl font-bold mb-4 3b-1 border-b-2">experience</h2>

      {/* companies */}
      {experiences
        // .filter((_, index) =>
        // showAllExperiences ? true : index < MAX_EXPERIENCES_TO_SHOW
        // )
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
                <div className="flex  mb-1">
                  <div className="opacity-70 italic md:text-base">
                    {role.title}, {format(role.startDate, "MM/yyyy")} -{" "}
                    {role.endDate ? format(role.endDate, "MM/yyyy") : "Present"}
                  </div>
                </div>
                <div>{role.description}</div>

                {/* projects within role */}
                <div className="flex flex-col mt-2 pl-4 gap-10">
                  {role.projects.map((project, index) => (
                    <div
                      key={index}
                      className="border-l-[12px] border-teal-500 pl-3"
                    >
                      <div className="flex items-center">
                        <div>
                          <div className="font-semibold pr-2">
                            {project.name}
                          </div>
                        </div>
                        {project.url && (
                          <a href={project.url} target="_blank">
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                      <div>{project.description}</div>

                      <div className="flex flex-wrap gap-2 mt-2 pb-2">
                        {project.tags.map((element, index) => (
                          <Badge variant="outlineSecondary" key={index}>
                            {element}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

      {/* {!showAllExperiences && (
        <Button
          title="see all experiences"
          className="my-2"
          onClick={() => setShowAllExperiences(true)}
        />
      )} */}
    </section>
  );
};

export default Experiences;
