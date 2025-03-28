import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    company: "4ccessible",
    url: "https://4ccessible.com",
    location: "Houston, TX",
    industries: ["Accessibility", "Technology"],
    roles: [
      {
        title: "Founder & CEO",
        type: "Founder",
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
              "Flagship product that enables navigation of the web using just your voice. Think of it like Siri, but for your web browser. Powered by OpenAI's gpt4o-mini.",
            descriptionTechnical: "",
            url: "https://chromewebstore.google.com/detail/4ccessible/jfpppiodkeblpkbpilccpoalkhnpopei?pli=1",
            relatedLinks: [],
            deprecated: false,
            proprietary: false,
            tags: [
              "TypeScript",
              "React",
              "Redux Toolkit",
              "Node.js",
              "Express",
              "Postgres",
              "DigitalOcean",
              "Supabase",
              "OpenAI"
            ],
            accomplishments: [],
            technicalElements: ["Frontend", "Backend"],
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
            name: "Marketing Website",
            role: "Tech Lead",
            description:
              "Web application which serves as the landing page for new customers and the portal for manage account related activities (e.g., purchasing additional credits, closing accounts, etc).",
            descriptionTechnical: "",
            url: "https://4ccessible.com",
            relatedLinks: [],
            deprecated: false,
            proprietary: false,
            tags: [
              "TypeScript",
              "React",
              "Next.js",
              "Material UI",
              "Redux Toolkit",
              "Node.js",
              "Express",
              "Postgres",
              "DigitalOcean",
              "Supabase"
            ],
            accomplishments: [],
            technicalElements: ["Frontend", "Backend"],
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
            name: "Website Accessibility Auditor",
            role: "Tech Lead",
            description:
              "Service for running comprehensive accessibility scans against URLs using the Axe Core library. Ran service onsite using high performance hardware to avoid costly cloud infrastructure costs. Leveraged puppeteer clusters to support concurrent requests.",
            descriptionTechnical:
              "Next.js frontend was deployed to Vercel using their CI/CD pipeline and using branch merge triggers. The audit page allowed users to submit a URL which would fire off an API call to the dedicated backend service (Node.js/Express) which was hosted onsite on an old MacBook Pro via ngrok's tunneling service. This design decision was chosen because the cloud services at providers like DigitalOcean were extremely expensive for servers with powerful CPUs and GPUs which were necessary to run in-depth scans, especially in parallel when multiple scans were requested. This parallelism was made possible using clustering in the `puppeteer-cluster` NPM library. All requests and results were stored to a Postgres DB hosted via Supabase and this information was used for lead generation purposes.",
            url: null,
            relatedLinks: [],
            deprecated: true,
            proprietary: false,
            tags: [
              "TypeScript",
              "Node.js",
              "Express",
              "Axe Core",
              "Puppeteer",
              "ngrok",
              "Postgres",
              "Docker",
              "Supabase",
              "DigitalOcean"
            ],
            technicalElements: ["Frontend", "Backend"],
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
    roles: [
      {
        type: "Founder",
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
              "Developed software solutions across food & beverage, accessibility, and entertainment sectors, specializing in creating digital twins for retail stores and home improvement spaces using Three.js and related 3D technologies.",
            descriptionTechnical: "",
            url: "https://fairworlds.com",
            relatedLinks: [],
            deprecated: false,
            proprietary: false,
            tags: [
              "TypeScript",
              "Redux",
              "React Native",
              "Expo",
              "Three.js/R3F",
              "Blender",
              "Java",
              "Spring",
              "Postgres",
              "GCP",
              "AWS"
            ],
            technicalElements: ["Frontend", "Backend"],
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
            name: "Stream for the Blind",
            role: "Tech Lead",
            description:
              "Streaming platform centered around accessibility for the blind community. Partnered with BVI musicians to ensure interface was highly usable and intuitive. Architected system using AWS S3 and Cloudfront CDN to support millions of live, concurrent stream listeners using HTTP Live Streaming (HLS).",
            descriptionTechnical: "",
            url: "https://streamfortheblind.com",
            relatedLinks: [],
            deprecated: false,
            proprietary: false,
            tags: [
              "TypeScript",
              "React",
              "Redux Toolkit",
              "Node.js",
              "Express",
              "Socket.io (WebSockets)",
              "ffmpeg",
              "Postgres",
              "Docker",
              "Supabase",
              "DigitalOcean",
              "AWS"
            ],
            technicalElements: ["Frontend", "Backend"],
            languages: ["TypeScript"],
            databases: ["Postgres", "Redis"],
            frameworks: [],
            libraries: ["React", "ffmpeg"],
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
            name: "EchoDial",
            role: "Tech Lead",
            description:
              "Built an automated sales outreach platform powered by Twilio's SDK and APIs, implementing performance optimization algorithms to maximize call center efficiency and user productivity.",
            descriptionTechnical: `Led engineering team to create power dialer SaaS platform (think Google Voice + automation + CRM) built using React, TypeScript, Mantine UI, Node.js, and Postgres.
Configured and managed external systems (e.g., AWS for S3 [storage] and SES [emails], Twilio [SMS/voice calls], Stripe [payment processing], Sentry [error logging], Amplitude [product/user analytics], BetterStack [uptime monitoring]).
Setup Stripe for payment processing to charge customer credit cards via recurring monthly subscriptions using 3 different tiers, as well as free trials to promote user adoption.
Prototyped system to provide on-demand AI-generated call transcriptions using Twilio Intelligence APIs for retrieving sentences from recorded conversations.
Set up Knex.js as PostgreSQL interface using query building, migrations, seeds, and database-driven TypeScript schema generation to ensure database was the application’s source of truth for data structures (which cascaded to frontend for end-to-end type safety).
Stood up WordPress website alongside React SPA for marketing and SEO purposes -- achieved #2 spot on Google Search results for target search keyword. Custom-built authentication system which leveraged JWTs.
`,
            url: null,
            relatedLinks: [],
            deprecated: true,
            proprietary: false,
            tags: [
              "TypeScript",
              "React",
              "Twilio",
              "Mantine",
              "Postgres",
              "Node.js",
              "Express",
              "Stripe",
              "DigitalOcean",
              "PHP",
              "WordPress"
            ],
            technicalElements: ["Frontend", "Backend"],
            languages: ["TypeScript", "SQL"],
            databases: ["Postgres"],
            frameworks: ["Express"],
            libraries: ["React", "Mantine UI"],
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
            relatedLinks: [],
            deprecated: false,
            proprietary: false,
            tags: [
              "TypeScript",
              "React",
              "Semantic UI",
              "Redux Toolkit",
              "GCP",
              "Firebase",
              "Firestore"
            ],
            technicalElements: ["Frontend", "Backend"],
            description:
              "Platform that provides critical financial infrastructure by streamlining the management of SPV entities, enabling efficient project financing and portfolio analytics through a web platform built on Google Cloud Run and Firestore. I contributed to building frontend components and serverless functions that help companies manage their complex entity structures effectively.",
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
    roles: [
      {
        title: "Senior Software Engineer",
        type: "Full time",
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
            technicalElements: ["Frontend", "Backend"],
            role: "Frontend Tech Lead",
            description:
              "Consolidated lubricant and fuel formulation data into a single repository, enabling effective data retrieval and the training of predictive AI models. This dual benefit of centralized data and AI-powered predictions significantly reduced product development time and testing costs, while freeing teams to focus on innovation rather than searching through scattered information or conducting unnecessary experiments.",
            descriptionTechnical:
              "The frontend (React/Node.js) and backend (Python/Flask) were both containerized in Docker and then deployed to Kubernetes clusters running in AWS managed by the dedicated platform team. Postgres DB via AWS RDS. Python-based predictive model was created and managed by data scientist",
            url: null,
            relatedLinks: [
              "https://www.shell.com/business-customers/lubricants-for-business/perspectives/deep-dive-with-sravani-gullapalli.html",
              "https://www.shell.com/what-we-do/technology-and-innovation/shell-techxplorer-digest/shell-techxplorer-digest-2020/_jcr_content/root/main/section/list_copy_copy_copy/list_item_copy_98181_1263721567/links/item0.stream/1669888660409/5f1e3168178e09f58ad54137906c5b81219302e7/deriving-quantifiable-value-from-frictionless-data-access-gullapalli.pdf"
            ],
            deprecated: false,
            proprietary: true,
            tags: [
              "TypeScript",
              "Next.js",
              "Redux Toolkit",
              "Python",
              "Flask",
              "Postgres",
              "AWS"
            ],
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
            technicalElements: ["Frontend", "Backend"],
            role: "Frontend Tech Lead",
            description:
              "Digital platform which helped customers manage energy needs, improve facility efficiency, reduce costs, and meet decarbonization goals.",
            descriptionTechnical:
              "The frontend (React/Node.js) and backend (Python/Flask) were both containerized in Docker and then deployed to Kubernetes clusters running in AWS managed by the dedicated platform team. Postgres DB via AWS RDS.",
            url: "https://shellenergy.com/business/energy-insights",
            relatedLinks: [],
            deprecated: false,
            proprietary: false,
            tags: [
              "TypeScript",
              "Next.js",
              "Redux Toolkit",
              "D3.js",
              "Python",
              "Flask",
              "Postgres",
              "AWS"
            ],
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
            technicalElements: ["Frontend", "Backend"],
            role: "Tech Lead",
            description:
              "Proprietary tool for optimizing and managing high-stake deal analyses for business managers. Project delivered $38M – $57M in business value and was nominated for the VP CIO award in Shell Chemicals.",
            descriptionTechnical:
              "The frontend (React/Node.js) and backend (Golang/Gin) were both containerized in Docker and then deployed to Kubernetes clusters running in AWS managed by the dedicated platform team. Postgres DB via AWS RDS.",
            url: null,
            relatedLinks: [],
            deprecated: false,
            proprietary: true,
            tags: [
              "TypeScript",
              "Next.js",
              "Redux Toolkit",
              "D3.js",
              "Golang",
              "Gin",
              "Postgres",
              "AWS"
            ],
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
            technicalElements: ["Frontend", "Backend"],
            description:
              "Real-time web dashboard for monitoring enterprise-scale lubricant shipments by integrating SAP data through a GraphQL API, enabling Shell's commercial customers to track their orders seamlessly.",
            descriptionTechnical:
              "Project integrated with SAP to provide Shell partners with real-time lubricant delivery data. The frontend (React/Node.js) and backend (Golang/GraphQL) were both containerized in Docker and then deployed to Kubernetes clusters running in AWS managed by the dedicated platform team.",
            url: null,
            deprecated: false,
            proprietary: false,
            tags: [
              "TypeScript",
              "Next.js",
              "Redux Toolkit",
              "D3.js",
              "Golang",
              "GraphQL/Apollo",
              "SAP",
              "Postgres",
              "AWS"
            ],
            relatedLinks: [],
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
  },
  {
    company: "United Rentals (formerly BlueLine Rental)",
    url: "https://unitedrentals.com",
    location: "Houston, TX",
    industries: ["Construction"],
    roles: [
      {
        title: "Senior Web/Mobile Developer",
        type: "Full time",
        description:
          "Developed web and mobile applications to support digitalization efforts that led to a $2.1 billion exit.",
        startDate: new Date(2018, 0),
        endDate: new Date(2018, 11),
        achievements: [
          "Company was acquired for $2.1 billion in deal to United Rental"
        ],

        projects: [
          {
            name: "Digital Service Management",
            technicalElements: ["Mobile", "Backend"],
            role: "Individual Contributor",
            description:
              "Developed iPad application for real-time equipment maintenance tracking and digital service records. Dramatically reduced service completion times and increased revenue per technician through workflow automation and paperless operations.",
            descriptionTechnical: "",
            url: null,
            relatedLinks: [],
            deprecated: true,
            proprietary: true,
            tags: ["JavaScript", "React", "Cordova", "Redux", "SASS"],
            languages: ["JavaScript", "SQL"],
            databases: ["MySQL"],
            frameworks: ["Cordova"],
            libraries: ["React", "Redux"],
            providers: [],
            accomplishments: [
              "Application enabled equipment service workers to minimize turnaround time during maintenance appointments."
            ]
          },
          {
            name: "Driver Fleet Safety Initiative",
            role: "Tech Lead",
            url: null,
            relatedLinks: [],
            deprecated: true,
            proprietary: true,
            tags: [
              "JavaScript",
              "Node.js",
              "Nodemailer",
              "Geotab",
              "Salesforce"
            ],
            description:
              "Engineered real-time telemetry analysis system using IoT sensors to detect and alert unsafe driving patterns across the fleet. Significantly reduced traffic violations and accident rates, leading to substantial decreases in insurance premiums and liability costs.",
            descriptionTechnical:
              "Consumed historical geolocation and telemetry data from drivers to analyze driver infractions (e.g., speeding), summarize information, then send weekly emails notifying them. Integration with Salesforce was required because the third-party system API did not return data in a format that allowed for native relationships and associations between vehicles and drivers.",
            languages: ["JavaScript", "SQL"],
            databases: ["MySQL"],
            technicalElements: ["Tool"],
            libraries: [],
            frameworks: ["Node.js"],
            providers: [
              { name: "Salesforce", services: ["Backend"] },
              { name: "Geotab", services: ["Backend"] }
            ],
            accomplishments: [
              "Reduced driving related-violations which improved company safety and profitability"
            ]
          },
          {
            name: "Company Website",
            description:
              "Delivered full-stack rental marketplace streamlining equipment rentals, used asset sales, and order processing. Significantly increased online booking conversion rates while reducing manual order processing overhead.",
            descriptionTechnical:
              "Worked on the React frontend which used Redux for state management and SCSS/SASS for styling. Application was deployed via in-house CI/CD pipeline using Jenkins. ",
            accomplishments: [],
            databases: ["MySQL"],
            technicalElements: ["Backend", "Frontend"],
            languages: ["JavaScript", "SQL"],
            libraries: ["React"],
            frameworks: ["Node.js"],
            providers: [],
            role: "Individual Contributor",
            url: null,
            relatedLinks: [],
            deprecated: true,
            proprietary: false,
            tags: ["JavaScript", "React", "Redux", "SASS"]
          }
        ]
      }
    ]
  },
  {
    company: "University of Houston",
    industries: ["Education"],
    location: "Houston, TX",
    url: "https://uh.edu",
    roles: [
      {
        title: "Mobile Application Developer",
        startDate: new Date(2017, 0),
        endDate: new Date(2017, 11),
        type: "Contract",
        achievements: [],
        description:
          "Consulted with university to drive development of high visibility initiatives.",
        projects: [
          {
            name: "UH Redline",
            description:
              "Primary mobile app for the university, used daily by thousands of students, faculty, staff, and visitors of the school. Built using Angular/Ionic and integrated with a PHP backend API.",
            descriptionTechnical:
              "Built using Angular and the Ionic mobile framework for cross-platform development. Backend API was written in PHP and run onsite at the university's data center.",
            databases: ["MySQL"],
            languages: ["SQL", "JavaScript", "HTML", "CSS", "PHP"],
            libraries: ["Angular", "Ionic"],
            accomplishments: [],
            technicalElements: ["Backend", "Mobile"],
            role: "Individual Contributor",
            providers: [],
            frameworks: [],
            url: null,
            relatedLinks: [
              "https://thedailycougar.com/2015/04/13/redline-app-brings-together-uh-students/"
            ],
            deprecated: true,
            proprietary: false,
            tags: ["JavaScript", "Angular", "Ionic", "SASS"]
          },
          {
            name: "UIT Help Desk Chat Widget",
            role: "Tech Lead",
            description:
              "Website widget that could be included on any UH website which would allow users to easily connect to and chat with Help Desk support agents. Built using Vue and WebSockets.",
            descriptionTechnical: "",
            languages: ["JavaScript", "HTML", "CSS"],
            libraries: ["Webpack"],
            frameworks: ["Vue"],
            technicalElements: ["Backend", "Frontend"],
            url: "https://uh.edu/infotech/help/",
            relatedLinks: [],
            databases: ["MySQL"],
            deprecated: false,
            proprietary: false,
            tags: [
              "JavaScript",
              "Vue",
              "Socket.io (WebSockets)",
              "SASS",
              "Webpack"
            ],
            providers: [],
            accomplishments: []
          },
          {
            name: "UIT Homepage",
            role: "Individual Contributor",
            description:
              "Homepage for the school's Information Technology department. Used every day by students, faculty, staff, and visitors to access important information and services. Built using PHP, MySQL, jQuery, and vanilla CSS.",
            descriptionTechnical: "",
            languages: ["JavaScript", "HTML", "CSS"],
            libraries: ["Webpack"],
            frameworks: ["Vue"],
            technicalElements: ["Backend", "Frontend"],
            url: "https://uh.edu/infotech/",
            relatedLinks: [],
            databases: ["MySQL"],
            deprecated: false,
            proprietary: false,
            tags: ["PHP", "MySQL", "CSS", "JavaScript", "jQuery"],
            providers: [],
            accomplishments: []
          }
        ]
      }
    ]
  }
];
