import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { format } from "date-fns";
//
import Sidebar from "./components/sidebar";
import { Badge } from "./components/badge";
import Button from "./components/button";
import { projects } from "./data/projects";
import { experiences } from "./data/experiences";

const MAX_EXPERIENCES_TO_SHOW = 3;

function App() {
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  return (
    <main className="container mx-auto max-w-[1200px] px-4 flex flex-col sm:flex-row justify-center sm:pt-16 pb-4">
      <Sidebar />

      <div className="flex-1 w-full pr-4">
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-bold mb-3 pb-1 border-b-2">about</h2>
          <p className="mb-3">
            I'm a 3D animator turned software engineer/entrepreneur with a
            passion for solving interesting problems and creating digital media.
            My favorite work is found at the intersection of cutting-edge
            technology,{" "}
            <a
              href="https://medium.com/workleap/pragmatic-software-development-59d12790e422"
              target="_blank"
            >
              pragmatic decisions
            </a>
            , and great user experiences that are highly useful and intuitive.
          </p>
          <p>
            Currently, I'm founder and CEO at{" "}
            <a href="https://4ccessible.com" target="_blank">
              4ccessible
            </a>{" "}
            where I specialize in the application of AI in the context of
            digital accessibility. My startup was accepted into the Tokyo
            startup centers at Google and Amazon and was recently announced as
            an Innovation Award finalist for SXSW 2025.
          </p>
          <p className="mb-3"></p>
          <p className="mb-3">
            I also run{" "}
            <a href="https://teodorosystems.com" target="_blank">
              a small software consultancy
            </a>{" "}
            where I've had the opportunity to develop software for Fortune 500
            companies, YC-backed startups, digital agencies, non-profits, and so
            much more.
          </p>
          <p className="mb-3">
            In my spare time, you'll find me in coffee shops hacking on{" "}
            <a href="#projects">my side projects</a> (and telling the poor
            baristas about how I created{" "}
            <a href="https://nationalcortadoday.com" target="_blank">
              National Cortado Day
            </a>
            ), drifting my turbo Scion FRS at{" "}
            <a
              href="https://youtu.be/Hs3hqR3eJSM?si=u51u3YbsOoWn8nc_&t=23"
              target="_blank"
            >
              Lone Star Drift
            </a>
            , or playing tennis with friends.
          </p>
        </section>

        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-bold mb-4 3b-1 border-b-2">
            experience
          </h2>

          {/* companies */}
          {experiences
            .filter((_, index) =>
              showAllExperiences ? true : index < MAX_EXPERIENCES_TO_SHOW
            )
            .map((experience, index) => (
              <div key={index} className="mb-10">
                <div className="flex items-center">
                  <div className="font-bold text-xl mr-2">
                    {experience.company}
                  </div>

                  {experience.url && (
                    <a href={experience.url} target="_blank">
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>

                {/* roles within experience */}
                {experience.roles.map((role, index) => (
                  <div key={index}>
                    <div className="flex justify-between">
                      <div className="italic">{role.title}</div>
                      {role.startDate && (
                        <div className="font-semibold text-teal-600">
                          {format(role.startDate, "MMM yyyy")} -{" "}
                          {role.endDate
                            ? format(role.endDate, "MMM yyyy")
                            : "Present"}
                        </div>
                      )}
                    </div>
                    <div>{role.description}</div>

                    {/* projects within role */}
                    <div className="mt-2">
                      {role.projects.map((project, index) => (
                        <div key={index} className="pl-4 mb-6">
                          <div className="flex items-center">
                            <div className="font-semibold pr-2">
                              {project.name}
                            </div>
                            {project.url && (
                              <a href={project.url} target="_blank">
                                <ExternalLink size={18} />
                              </a>
                            )}
                          </div>
                          <div>{project.description}</div>

                          <div className="flex flex-wrap gap-2 mt-1">
                            {project.tags.map((element, index) => (
                              <Badge key={index}>{element}</Badge>
                            ))}
                          </div>
                        </div>
                      ))}
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

        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-3 pb-1 border-b-2">projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between">
                <div className="flex">
                  <div className="font-semibold pr-1">{project.title}</div>
                  {project.url && (
                    <a href={project.url} target="_blank">
                      <ExternalLink />
                    </a>
                  )}
                </div>

                <div className="font-semibold text-teal-600">
                  {format(project.date, "MMM yyyy")}
                </div>
              </div>

              <div>{project.description}</div>
              <div className="mt-1">
                {project.tags?.map((skill, index) => (
                  <div
                    key={index}
                    className="text-white bg-teal-600 inline px-2 py-1 rounded-md text-sm mr-2"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* <Button title="see all projects" className="my-2" variant="outline" /> */}
        </section>

        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-bold mb-4 3b-1 border-b-2">education</h2>

          <div className="mb-4">
            <div className="flex justify-between">
              <div className="flex">
                <div className="font-semibold pr-1">
                  University of Houston - Victoria
                </div>
              </div>
              <div className="font-semibold text-teal-600">May 2013</div>
            </div>
            <div>Bachelor of Science in Computer Science</div>
            <div className="flex flex-wrap gap-2 mt-1">
              {["Graduated Cum Laude (3.52 GPA)", "Dean's List recipient"].map(
                (element, index) => (
                  <Badge key={index}>{element}</Badge>
                )
              )}
            </div>
          </div>
        </section>

        <section id="footer">
          <p className="mt-20 text-slate-400">
            This website was created by yours truly. If you'd like to see the
            source code, you can check it out{" "}
            <a
              href="https://github.com/thechori/ryanteodoro.com-v2-frontend"
              target="_blank"
            >
              here.
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
