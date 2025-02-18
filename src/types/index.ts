export interface Experience {
  company: string;
  url: string | null;
  location: string;
  industries: Industry[];
  roles: Role[];
}

export interface Role {
  title: string;
  type: "Full time" | "Part time" | "Contract" | "Internship" | "Founder";
  startDate: Date | null;
  endDate: Date | null;
  achievements: string[];
  projects: Project[];
  description: string;
}

export interface Provider {
  name: string;
  services: string[];
}

export type RoleType =
  | "Design"
  | "Frontend"
  | "Backend"
  | "Full stack"
  | "Product owner"
  | "Product manager";

export type Element =
  | "Web"
  | "Mobile"
  | "API"
  | "Bot"
  | "Desktop"
  | "Game"
  | "Tool";

export interface Project {
  name: string;
  role: string;
  description: string;
  descriptionTechnical: string;
  elements: Element[];
  url: string | null;
  relatedLinks: string[];
  deprecated: boolean;
  proprietary: boolean;
  languages: string[];
  databases: string[];
  frameworks: string[];
  libraries: string[];
  providers: Provider[];
  accomplishments: string[];
}

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
