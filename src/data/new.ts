import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    company: "4ccessible",
    url: "https://4ccessible.com",
    location: "Houston, TX",
    startDate: new Date(2024, 3),
    industries: ["Accessibility", "Technology"],
    type: "Founder",
    endDate: null,
    roles: [
      {
        title: "Founder & CEO",
        description:
          "Lead and manage projects to make the internet accessible for the blind and visually impaired.",
        startDate: new Date(2024, 3),

        endDate: null,
        achievements: [
          "SXSW Innovation Award Finalist (2025)",
          "Google Tokyo Startups member",
          "AWS Tokyo Startup Loft member"
        ],
        projects: [
          {
            name: "Browser Extension",
            role: "Tech Lead",
            description:
              "Flagship tool that enables navigation of the web using just your voice.",
            descriptionTechnical: "",
            url: "https://chromewebstore.google.com/detail/4ccessible/jfpppiodkeblpkbpilccpoalkhnpopei?pli=1",
            accomplishments: [],
            elements: ["Web", "API"],
            languages: ["TypeScript"],
            frameworks: ["Express"],
            databases: ["Postgres"],
            libraries: ["React", "Redux Toolkit"],
            providers: [
              {
                name: "DigitalOcean",
                services: ["Apps", "Storage"]
              },
              {
                name: "Supabase",
                services: ["Database", "Auth"]
              },

              {
                name: "OpenAI",
                services: ["Chat Completions"]
              },
              {
                name: "Stripe",
                services: ["Billing"]
              }
            ]
          },
          {
            name: "Stream for the Blind",
            role: "Tech Lead",
            description:
              "Streaming platform centered around accessible for the blind community.",
            descriptionTechnical: "",
            url: "https://streamfortheblind.com",
            elements: ["Web", "API"],
            languages: ["TypeScript"],
            databases: ["Postgres", "Redis"],
            frameworks: [],
            libraries: ["React", "", "ffmpeg"],
            accomplishments: [],
            providers: [
              {
                name: "AWS",
                services: ["S3"]
              },
              {
                name: "Supabase",
                services: ["Auth", "Database"]
              },
              {
                name: "DigitalOcean",
                services: ["App"]
              }
            ]
          },
          {
            name: "Website Accessibility Auditor",
            role: "Tech Lead",
            description:
              "Developed tool for running comprehensive accessibility scans against URLs.",
            descriptionTechnical:
              "Next.js frontend was deployed to Vercel using their CI/CD pipeline and using branch merge triggers. The audit page allowed users to submit a URL which would fire off an API call to the dedicated backend service (Node.js/Express) which was hosted onsite on an old MacBook Pro via ngrok's tunneling service. This design decision was chosen because the cloud services at providers like DigitalOcean were extremely expensive for servers with powerful CPUs and GPUs which were necessary to run in-depth scans, especially in parallel when multiple scans were requested. This parallelism was made possible using clustering in the `puppeteer-cluster` NPM library. All requests and results were stored to a Postgres DB hosted via Supabase and this information was used for lead generation purposes.",
            url: null,
            elements: ["Web", "API"],
            languages: ["TypeScript"],
            frameworks: ["Next.js", "Express"],
            databases: ["Postgres"],
            libraries: [
              "React",
              "Redux Toolkit",
              "Axe Core",
              "Puppeteer",
              "ngrok"
            ],
            providers: [
              { name: "DigitalOcean", services: ["Database"] },
              { name: "Vercel", services: ["App Hosting"] },
              {
                name: "Supabase",
                services: ["Database"]
              }
            ],
            accomplishments: []
          }
        ]
      }
    ]
  },
  {
    company: "Teodoro Systems",
    url: "https://teodorosystems.com",
    location: "Houston, TX",
    industries: ["Consulting"],
    startDate: new Date(2017, 10),
    endDate: null,
    type: "Founder",
    roles: [
      {
        title: "Founder & CEO",
        description:
          "Lead software projects for consulting clients and internal product ventures.",
        startDate: new Date(2017, 10),
        endDate: null,
        achievements: [],
        projects: [
          {
            name: "Fair Worlds",
            role: "Individual Contributor",
            description:
              "Assisted software development efforts for numerous projects.",
            descriptionTechnical: "",
            url: "https://fairworlds.com",
            elements: ["Web", "API"],
            languages: ["TypeScript", "Java", "SQL"],
            databases: ["Postgres"],
            frameworks: ["Spring Boot"],
            libraries: ["React", "D3"],
            providers: [
              { name: "AWS", services: ["S3"] },
              {
                name: "GCP",
                services: ["Cloud Storage"]
              }
            ],
            accomplishments: []
          },
          {
            name: "EchoDial",
            role: "Tech Lead",
            description:
              "Dialer with powerful CRM to effectively automate sales outreach efforts.",
            descriptionTechnical: `Led engineering team to create power dialer SaaS platform (think Google Voice + automation + CRM) built using React, TypeScript, Mantine UI, Node.js, and Postgres.
Configured and managed external systems (e.g., AWS for S3 [storage] and SES [emails], Twilio [SMS/voice calls], Stripe [payment processing], Sentry [error logging], Amplitude [product/user analytics], BetterStack [uptime monitoring]).
Setup Stripe for payment processing to charge customer credit cards via recurring monthly subscriptions using 3 different tiers, as well as free trials to promote user adoption.
Prototyped system to provide on-demand AI-generated call transcriptions using Twilio Intelligence APIs for retrieving sentences from recorded conversations.
Setup Knex.js as PostgreSQL interface using query building, migrations, seeds, and database-driven TypeScript schema generation to ensure database was the application’s source of truth for data structures (which cascaded to frontend for end-to-end type safety).
Stood up WordPress website alongside React SPA for marketing and SEO purposes -- achieved #2 spot on Google Search results for target search keyword. Home-baked authentication system which leveraged JWTs.
`,
            url: null,
            elements: ["Web", "API"],
            languages: ["TypeScript", "SQL"],
            databases: ["Postgres"],
            frameworks: ["Express"],
            libraries: ["React", "Mantine UI", ""],
            providers: [
              {
                name: "DigitalOcean",
                services: ["App", "Database"]
              },
              {
                name: "Twilio",
                services: ["Voice", "SMS"]
              },
              {
                name: "Stripe",
                services: ["Billing"]
              }
            ],
            accomplishments: []
          },
          {
            name: "Perl Street (YC W22)",
            role: "Individual Contributor",
            url: "https://perlstreet.com",
            elements: ["Web", "API"],
            description: "Contributed to feature development for web app.",
            descriptionTechnical: "",
            languages: ["TypeScript"],
            databases: [],
            frameworks: [],
            libraries: ["React", "Semantic UI"],
            providers: [
              {
                name: "Google Cloud Platform",
                services: ["Cloud Functions", "Cloud Storage"]
              }
            ],
            accomplishments: []
          }
        ]
      }
    ]
  },
  {
    company: "Shell",
    url: "https://shell.com",
    location: "Houston, TX",
    industries: ["Energy"],
    startDate: new Date(2019, 0),
    endDate: new Date(2023, 5),
    type: "Full time",
    roles: [
      {
        title: "Senior Software Engineer",
        description:
          "Led technical initiatives for products across global commercial, lubricant, chemicals, and renewables and new energy.",
        startDate: new Date(2019, 0),
        endDate: new Date(2023, 5),
        achievements: [
          "Nominated to serve on Shell Design System committee, providing steer on features and contributing to inner source component library",
          "Managed application security by leveraging static code analysis tools (e.g., SonarQube) and dependency scanners (e.g., Mend [formerly Whitesource]) to comply with strict organization standards",
          "Formulated system to programmatically consume OpenAPI Spec (Swagger) documents from backend API systems and auto generate TypeScript schemas to establish strong, dependable links between the client and server-side applications which were historically done manually",
          "Contributed updates and fixes to application CI/CD pipeline configurations using CircleCI, Docker, Kubernetes, and GitHub Actions",
          "Wrote unit, integration, and E2E tests using Jest, Enzyme, React Testing Library, and Cypress following BDD/TDD methodologies",
          "Coordinated with design, product, and engineering resources to ensure Scrum sprints were on track and tasks/stories were prioritized well with the end-user experience at the center of all decisions",
          "Assisted recruiting efforts within the Houston offices through phone screens, technical code assessments, and onsite interviews",
          'Presented "Tech Talk" workshops for colleagues regarding topics like React Native for Mobile Development and OpenAPI Specifications for type-safe contracts between the client and server.'
        ],

        projects: [
          {
            name: "SPARK Frictionless Data Access",
            elements: ["Web", "API"],
            role: "Frontend Tech Lead",
            description:
              "Establish the single source of truth for all the formulation and testing data held within Shell.",
            // "Platform to centralize fragmented, unstructured, and multilingual lab results to train models for crafting new lubricants at unprecendented speeds and budgets.",
            descriptionTechnical:
              "The frontend (React/Node.js) and backend (Python/Flask) were both containerized in Docker and then deployed to Kubernetes clusters running in AWS managed by the dedicated platform team. Postgres DB via AWS RDS. Python-based predictive model was created and managed by data scientist",
            url: "https://www.shell.com/business-customers/lubricants-for-business/perspectives/deep-dive-with-sravani-gullapalli.html",
            languages: ["TypeScript", "Python"],
            databases: ["Postgres"],
            frameworks: ["Next.js", "Flask", "Docker", "Kubernetes"],
            libraries: ["React", "Redux Toolkit", "D3"],
            providers: [{ name: "AWS", services: ["S3", "EKS", "RDS"] }],
            accomplishments: [
              "SPARK Frictionless Data Access recently won the Shell.ai Data Impact Award"
            ]
          },
          {
            name: "Shell Energy Insights",
            elements: ["Web", "API"],
            role: "Frontend Tech Lead",
            description:
              "Tech lead for the Shell Energy Insights Green Dealer initiative geared towards making it easier for customers to manage day-to-day energy needs while increasing efficiency, managing costs, and addressing decarbonization goals. Frontend built using React, TypeScript, Redux Toolkit, Styled Components.",
            descriptionTechnical:
              "The frontend (React/Node.js) and backend (Python/Flask) were both containerized in Docker and then deployed to Kubernetes clusters running in AWS managed by the dedicated platform team. Postgres DB via AWS RDS.",
            url: "https://shellenergy.com/business/energy-insights",
            languages: ["TypeScript", "Python"],
            databases: ["Postgres"],
            frameworks: ["Next.js", "Flask", "Docker", "Kubernetes"],
            libraries: ["React", "Redux Toolkit", "D3"],
            providers: [{ name: "AWS", services: ["S3", "EKS", "RDS"] }],
            accomplishments: [
              "Project established development/deployment standards for Next.js apps in Shell IT USA which served as a lighthouse for following projects."
            ]
          },
          {
            name: "Deal Analyzer",
            elements: ["Web", "API"],
            role: "Tech Lead",
            description:
              "Proprietary tool for crafting and managing high-stake deal analyses for business managers in the Shell Chemical division.",
            descriptionTechnical:
              "The frontend (React/Node.js) and backend (Golang/Gin) were both containerized in Docker and then deployed to Kubernetes clusters running in AWS managed by the dedicated platform team. Postgres DB via AWS RDS.",
            url: null,
            languages: ["TypeScript", "Golang"],
            databases: ["Postgres"],
            frameworks: ["Gin", "Docker", "Kubernetes"],
            libraries: ["React", "Redux", "D3"],
            providers: [{ name: "AWS", services: ["S3", "EKS", "RDS"] }],
            accomplishments: [
              "Project delivered $38M – $57M in business value and was nominated for the VP CIO award in Shell Chemicals."
            ]
          },
          {
            name: "Customer Order Visibility Experience",
            role: "Individual Contributor",
            elements: ["Web", "API"],
            description:
              "Dashboard for tracking large shipments in real time for the Global Commercial business.",
            descriptionTechnical:
              'Codename: "Mango" - this project integrated with SAP to pull large lubricant delivery information to Shell partners. The frontend (React/Node.js) and backend (Golang/GraphQL) were both containerized in Docker and then deployed to Kubernetes clusters running in AWS managed by the dedicated platform team.',
            url: "https://www.shell.com/business-customers/chemicals/doing-business-with-us/customer-portal.html",
            languages: ["TypeScript", "Golang", "GraphQL"],
            databases: ["Postgres"],
            frameworks: ["Apollo", "Docker", "Kubernetes"],
            libraries: ["React"],
            providers: [{ name: "AWS", services: ["S3", "EKS", "RDS"] }],
            accomplishments: []
          }
        ]
      }
    ]
  }
];
