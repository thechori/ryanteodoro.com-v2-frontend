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

export type TechnicalElement =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Desktop"
  | "Library"
  | "Framework"
  | "Tool"
  | "Bot"
  | "Game";

export interface PersonalProject {
  title: string;
  description: string;
  url: string | null;
  date: Date;
  tags: string[];
  additionalTags: string[];
}

export interface Project {
  name: string;
  date: Date | null;
  role: string;
  description: string;
  descriptionTechnical: string;
  technicalElements: TechnicalElement[];
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
  badgeHighlights: string[]; // freeform - allows highlighting unique aspects of a project
}

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
