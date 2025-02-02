import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

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

export default function Home() {
  return <Welcome />;
}
