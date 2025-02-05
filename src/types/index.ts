interface Experience {
  company: string;
  location: string;
  roles: Role[];
  technologies: TechnologyDetail[];
  industries: Industry[];
  startDate: Date;
  endDate: Date | "Present";
  type: "Full time" | "Contract" | "Internship" | "Founder";
  projects: Project[];
}

interface Role {
  title: string;
  startDate: Date;
  endDate: Date | "Present";
  achievements: Achievement[];
  projectIds: string[]; // Reference to projects worked on in this role
}

interface Project {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date | "Present";
  type: ProjectType[];
  technologies: string[];
  teamSize?: number;
  role: string;
  achievements: Achievement[];
  metrics?: ProjectMetric[];
  links?: {
    github?: string;
    demo?: string;
    production?: string;
    documentation?: string;
  };
  relatedProjects?: string[]; // IDs of related projects
}

interface ProjectMetric {
  type: "Financial" | "Performance" | "Adoption" | "Ranking" | "Optimization";
  value: string;
  date?: Date;
}

interface Achievement {
  description: string;
  metrics?: ProjectMetric[];
  technologies: string[];
  projectType: ProjectType[];
}

interface TechnologyDetail {
  name: string;
  category: TechCategory;
  proficiencyLevel: 1 | 2 | 3 | 4 | 5; // 5 being expert
  // removing YOE - these values should be calculated at the high level
  // of the resume based on the project start date
  // yearsOfExperience: number;
}

// Enums and Types
type TechCategory =
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

type Industry =
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

type ProjectType =
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
