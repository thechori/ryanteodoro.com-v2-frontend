import type { Route } from "./+types/home";
import { Projects as Projectsz } from "../projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ryan teodoro" },
    {
      name: "description",
      content:
        "portfolio website that includes job experience, past projects, contact methods, etc."
    }
  ];
}

export default function Projects() {
  return <Projectsz />;
}
