import { ExternalLink } from "lucide-react";
import Button from "./components/button";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <main className="container mx-auto max-w-[1200px] px-4 flex flex-col sm:flex-row justify-center sm:pt-16 pb-4">
      <Sidebar />

      <div className="flex-1 w-full pr-4">
        <section id="about" className="mb-20">
          <h2 className="text-2xl font-bold">about</h2>
          <p className="mb-3">
            I'm a 3D animator turned software engineer/entrepreneur with a
            passion for solving interesting problems and creating digital media.
            My favorite work is found at the intersection of cutting-edge
            technology,{" "}
            <a href="https://medium.com/workleap/pragmatic-software-development-59d12790e422">
              pragmatic decisions
            </a>
            , and great user experiences that are highly useful and intuitive.
          </p>
          <p>
            Currently, I'm founder and CEO at{" "}
            <a href="https://4ccessible.com">4ccessible</a> where I specialize
            in the application of AI in the context of digital accessibility. My
            startup was accepted into the Tokyo startup centers at Google and
            Amazon and was recently announced as an Innovation Award finalist
            for SXSW 2025. I also run{" "}
            <a href="https://teodorosystems.com">
              a small software consultancy.
            </a>
          </p>
          <p className="mb-3"></p>
          <p className="mb-3">
            I've had the opportunity to develop software across nearly all
            industries — from big tech (HP) and large corporations (Shell) to
            YC-backed startups (Perl Street [YC W22]), digital agencies,
            non-profits, and so much more.
          </p>
          <p className="mb-3">
            In my spare time, you'll find me in coffee shops hacking on{" "}
            <a href="">my side projects</a> and telling baristas about how I
            created{" "}
            <a href="https://nationalcortadoday.com" target="_blank">
              National Cortado Day
            </a>
            , drifting my turbo Scion FRS at{" "}
            <a href="https://lonestardrift.com/" target="_blank">
              Lone Start Drift
            </a>{" "}
            or{" "}
            <a href="https://iasdrift.com/" target="_blank">
              IAS Drift
            </a>
            , or playing tennis with friends.
          </p>
        </section>

        <section id="experience" className="mb-20">
          <h2 className="text-2xl font-bold">experience</h2>

          {/* companies */}
          {[
            {
              name: "4ccessible",
              roles: [
                {
                  title: "Founder & CEO",
                  description:
                    "Lead and manage projects to make the internet accessible for the blind and visually impaired.",
                  startDate: "April 2024",
                  endDate: null,
                  projects: [
                    {
                      title: "Browser Extension",
                      description: "Leveraged gpt4o-mini to process guide ",
                      languages: ["TypeScript"],
                      frameworks: ["Express.js"],
                      databases: ["Postgres"],
                      libraries: ["React", "Redux Toolkit"],
                      providers: [
                        "DigitalOcean",
                        "Supabase",
                        "OpenAI",
                        "Stripe"
                      ]
                    },
                    {
                      title: "Website Scanner",
                      description:
                        "Developed a tool for companies to run ADA compliance scans",
                      languages: ["TypeScript"],
                      frameworks: ["Express.js"],
                      databases: ["Postgres"],
                      libraries: [
                        "React",
                        "Redux Toolkit",
                        "axe-core",
                        "Cypress"
                      ],
                      providers: ["DigitalOcean", "Supabase"]
                    }
                  ]
                }
              ]
            },
            {
              name: "Teodoro Systems",
              roles: [
                {
                  title: "Founder & CEO",
                  description:
                    "Lead and manage software consulting projects across many different industries.",
                  startDate: "November 2017",
                  endDate: null,
                  projects: [
                    {
                      title: "Stream for the Blind",
                      description:
                        "Created a streaming platform centered around accessible for the blind community.",
                      url: "https://streamfortheblind.com",
                      languages: ["TypeScript"],
                      databases: ["Postgres", "Redis"],
                      frameworks: [],
                      libraries: ["React", "ffmpeg"],
                      providers: [
                        "AWS",
                        "Supabase",
                        "DigitalOcean",
                        "Twilio",
                        "Stripe"
                      ]
                    },
                    {
                      title: "Live Stream Real-Time Language Translator",
                      description:
                        "Created Python app to process live stream data via URL, convert audio to text, translate text from English to Spanish, then run final transform to convert text to speech. Built using fully open-source Vosk models and ran locally on edge hardware. Also built a set of scripts to automate the retrieval of audio files from a website, transcribe them, then use a trained voice model to output summaries using AI to save staff time on mundane, reptitive tasks.",
                      url: null,
                      languages: ["Python"],
                      databases: null,
                      frameworks: [],
                      libraries: ["vosk"],
                      providers: ["OpenAI", "ElevenLabs"]
                    },
                    {
                      title: "EchoDial",
                      description:
                        "Developed dialer and CRM platform to automate phone call outreach programs.",
                      languages: ["TypeScript"],
                      databases: ["Postgres"],
                      frameworks: ["Express.js"],
                      libraries: ["React", "Mantine UI"],
                      providers: ["DigitalOcean", "Twilio", "Stripe"]
                    },
                    {
                      title: "Perl Street (YC W22)",
                      description: "Contributed to features",
                      languages: ["TypeScript"],
                      databases: [],
                      frameworks: [],
                      libraries: ["React", "Semantic UI"],
                      providers: ["Google Cloud Platform"]
                    }
                  ]
                }
              ]
            }
          ].map((company) => (
            <div className="border-2 my-4">
              <div className="font-bold">{company.name}</div>

              {/* roles within company */}
              {company.roles.map((role) => (
                <div>
                  <div className="flex justify-between">
                    <div>{role.title}</div>
                    <div>
                      {role.startDate} -{" "}
                      {role.endDate ? role.endDate : "Present"}
                    </div>
                  </div>
                  <div>{role.description}</div>

                  {/* projects within role */}
                  <div>
                    {role.projects.map((project) => (
                      <div className="pl-4 mb-2">
                        <div className="font-semibold">{project.title}</div>
                        <div>{project.description}</div>
                        <div>
                          {project.languages.map((language) => (
                            <div className="text-white bg-teal-600 inline px-2 py-1 rounded-md text-sm mr-2">
                              {language}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <Button
            title="see all experiences"
            className="my-2"
            variant="outline"
          />
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-2xl font-bold">projects</h2>
          {[
            {
              title: "Portfolio Website",
              description:
                "React app for showcasing skills, experience, and projects.",
              url: "https://ryanteodoro.com",
              date: "February 2025",
              skills: ["React", "TailwindCSS"],
              platforms: ["Netlify"]
            },
            {
              title: "Fern (YC W23)",
              description:
                "Contributed to open source library for the Fern API.",
              url: "https://github.com/fern-api/fern",
              date: "January 2025",
              skills: ["TypeScript", "Node.js"],
              platforms: ["Fern"]
            },
            {
              title: "mOcKcAsE",
              description: "Created NPM library for string formatting",
              url: "https://www.npmjs.com/package/mockcase",
              date: "December 2024",
              skills: ["TypeScript", "Node.js"],
              platforms: ["NPM"]
            },
            {
              title: "National Cortado Day",
              description:
                "Created national food holiday for one of my favorite espresso drinks.",
              url: "https://www.nationalcortadoday.com",
              date: "December 2021",
              skills: ["HTML", "CSS"],
              platforms: ["Wikipedia"]
            },
            {
              title: "Never Stolen",
              description:
                "Alarm app to prevent thieves from stealing your MacBook.",
              url: "https://neverstolen.ryanteodoro.com",
              date: "March 2020",
              skills: [
                "React",
                "Electron.js",
                "Node.js",
                "Socket.io (WebSockets)"
              ],
              platforms: ["DigitalOcean", "Twilio"]
            }
          ].map((project) => (
            <div className="mb-4">
              <div className="flex justify-between">
                <div className="flex">
                  <div className="font-semibold pr-1">{project.title}</div>
                  <a href={project.url}>
                    <ExternalLink />
                  </a>
                </div>

                <div>{project.date}</div>
              </div>

              <div>{project.description}</div>
              <div>
                {project.skills.map((skill) => (
                  <div className="text-white bg-teal-600 inline px-2 py-1 rounded-md text-sm mr-2">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <Button title="see all projects" className="my-2" variant="outline" />
        </section>

        <section id="footer">
          <p className="mt-20 text-slate-400">
            This website was created by yours truly. If you'd like to see the
            source code, you can check it out{" "}
            <a href="https://github.com/thechori/ryanteodoro.com-v2-frontend">
              here.
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
