export interface Experience {
  company: string;
  location: string;
  roles: Role[];
  industries: Industry[];
  startDate: Date;
  endDate: Date | null;
  type: "Full time" | "Contract" | "Internship" | "Founder";
  // projects: Project[];
}

export interface Role {
  title: string;
  startDate: Date;
  endDate: Date | null;
  achievements: string[];
  projects: Project[];
  description: string;
}

export interface Provider {
  name: string;
  services: string[];
}

export interface Project {
  name: string;
  description: string;
  url: string | null;
  languages: string[];
  databases: string[];
  frameworks: string[];
  libraries: string[];
  providers: Provider[];

  // type: ProjectType[];
  // technologies: string[];
  // role: string;
  // achievements: Achievement[];
  // metrics?: ProjectMetric[];
  // links?: {
  //   github?: string;
  //   demo?: string;
  //   production?: string;
  //   documentation?: string;
  // };
}

// Enums and Types
export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Cloud"
  | "AI"
  | "Devops"
  | "Testing"
  | "Mobile"
  | "Framework"
  | "Language";

export type Industry =
  | "Consulting"
  | "Education"
  | "Enterprise"
  | "Healthcare"
  | "Automotive"
  | "Food and beverage"
  | "Technology"
  | "Fintech"
  | "Non-profit"
  | "Gaming"
  | "Art"
  | "Construction"
  | "Equipment rental"
  | "Accessibility"
  | "AI"
  | "SaaS"
  | "Oil and gas"
  | "Communications"
  | "Energy"
  | "Chemicals";

export type ProjectType =
  | "Web app"
  | "Mobile app"
  | "Browser extension"
  | "API"
  | "Database"
  | "AI integration"
  | "Infrastructure"
  | "Analytics"
  | "Architecture"
  | "Security"
  | "Accessibility"
  | "Enterprise"
  | "Migration"
  | "SaaS"
  | "Marketing"
  | "Design system";
