import { Github, Linkedin, Instagram } from "lucide-react";
//
import ModeToggle from "../mode-toggle";
import Button from "../button";

const items = [
  {
    name: "github",
    url: "https://github.com/thechori",
    icon: <Github />
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/ryan-teodoro-34635761/",
    icon: <Linkedin />
  },
  {
    name: "instagram",
    url: "https://instagram.com/theryanteodoro",
    icon: <Instagram />
  }
];

const Sidebar = () => {
  return (
    <div className="p-4 w-full sm:w-[350px] md:w-[400px]">
      <div>
        <img
          width="200px"
          src="/images/headshot-1.png"
          alt="headshot of ryan teodoro with blue background"
          className="w:[50px] rounded-full py-4"
        />
        <h1 className="text-6xl bg-font mb-2 font-bold">ryan teodoro</h1>
        <h2>founder, senior software engineer</h2>
        <h3 className="text-gray-500">lover of technology, cars, and coffee</h3>
        <Button title="view resume" className="my-2" />
        {/* <div className="shadow-xl text-red-500">have a job listing? upload it to get a custom resume</div> */}
      </div>

      <ul className="py-4">
        <li className="hover:opacity-50 transition-all">
          <a href="#about">about</a>
        </li>
        <li className="hover:opacity-50 transition-all">
          <a href="#experience">experience</a>
        </li>
        <li className="hover:opacity-50 transition-all">
          <a href="#projects">projects</a>
        </li>
      </ul>

      <ul className="flex gap-4 py-4">
        {items.map((i, index) => (
          <li key={index} className="hover:opacity-50 transition-all">
            <a href={i.url} target="_blank">
              {i.icon}
            </a>
          </li>
        ))}
      </ul>

      <ModeToggle />
    </div>
  );
};

export default Sidebar;
