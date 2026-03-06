import { Github, Linkedin, Mail } from "lucide-react";
//
import ModeToggle from "../mode-toggle";
import Button from "../button";

const items = [
  {
    name: "email",
    url: "mailto:ryan.h.teodoro@gmail.com",
    icon: <Mail size={18} />
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/ryanteodoro",
    icon: <Linkedin size={18} />
  },
  {
    name: "github",
    url: "https://github.com/thechori",
    icon: <Github size={18} />
  }
];

const Sidebar = () => {
  const viewResume = () => {
    window.open("/files/resume.pdf");
  };

  return (
    <aside className="sticky-hero">
      <div className="relative z-10">
        <div className="meta-label mono mb-4">Software Engineer Portfolio</div>

        <img
          width="200"
          src="/images/headshot.png"
          alt="headshot of ryan teodoro with blue background"
          className="portrait-shot"
        />

        <h1 className="identity-name">ryan teodoro</h1>

        <div className="identity-role">founder, senior software engineer</div>
        <div className="section-copy mb-6">
          lover of cool tech, fast cars, and hot espresso
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button title="view resume" onClick={viewResume} />

          <ul className="flex gap-2">
            {items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-link"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ModeToggle />
    </aside>
  );
};

export default Sidebar;
