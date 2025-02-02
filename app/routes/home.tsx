import type { Route } from "./+types/home";
import { Home as Homez } from "../home";

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
  return <Homez />;
}
