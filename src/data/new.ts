import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    company: "4ccessible",
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
          "Google Tokyo Startup member",
          "AWS Tokyo Startup Loft member"
        ],
        projects: [
          {
            name: "Browser Extension",
            description:
              "Flagship tool to enable navigation of the web using just your voice.",
            descriptionTechnical: "",
            url: null,
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
            description:
              "Streaming platform centered around accessible for the blind community.",
            descriptionTechnical: "",
            url: "https://streamfortheblind.com",
            elements: ["Web", "API"],
            languages: ["TypeScript"],
            databases: ["Postgres", "Redis"],
            frameworks: [],
            libraries: ["React", "ffmpeg"],
            providers: [
              {
                name: "AWS",
                services: ["S3"]
              },
              {
                name: "Supabase",
                services: ["Auth"]
              },
              {
                name: "DigitalOcean",
                services: []
              },
              {
                name: "Twilio",
                services: []
              },
              {
                name: "Stripe",
                services: []
              }
            ]
          },
          {
            name: "Website Accessibility Auditor",
            description:
              "Developed tool for running comprehensive accessibility scans against URLs.",
            descriptionTechnical:
              "Next.js frontend was deployed to Vercel using their CI/CD pipeline and using branch merge triggers. The audit page allowed users to enter a URL and hit go to fire off an API call to the backend which was hosted onsite on an old MacBook Pro via ngrok's tunneling service. This design decision was chosen because the cloud services at proviers like DigitalOcean were extremely expensive for servers with powerful CPUs and GPUs which were necessary to run in-depth scans, especially in parallel when multiple scans were requested. This parallelism was made possible using clustering in the `puppeteer-cluster` NPM library.",
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
              { name: "DigitalOcean", services: ["App"] },
              { name: "Vercel", services: ["App Hosting"] },
              {
                name: "Supabase",
                services: ["Database"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    company: "Teodoro Systems",
    location: "Houston, TX",
    industries: ["Consulting"],
    startDate: new Date(2017, 10),
    endDate: null,
    type: "Founder",
    roles: [
      {
        title: "Founder & CEO",
        description:
          "Lead and manage software consulting projects across many different industries.",
        startDate: new Date(2017, 10),
        endDate: null,
        achievements: [],

        projects: [
          {
            name: "Fair Worlds",
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
            ]
          },
          {
            name: "EchoDial",
            description:
              "Dialer with powerful CRM to effectively automate sales outreach efforts.",
            descriptionTechnical: "",
            url: null,
            elements: ["Web", "API"],
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
            ]
          },
          {
            name: "Perl Street (YC W22)",
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
            ]
          }
        ]
      }
    ]
  },
  {
    company: "Shell",
    location: "Houston, TX",
    industries: ["Energy"],
    startDate: new Date(2019, 0),
    endDate: new Date(2023, 5),
    type: "Full time",
    roles: [
      {
        title: "Senior Software Engineer",
        description:
          "Lead and manage software consulting projects across global commercial, lubricant, chemicals, and renewables and new energy.",
        startDate: null,
        endDate: null,
        achievements: [],

        projects: [
          {
            name: "Customer Order Visibility Experience",
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
            providers: [{ name: "AWS", services: ["S3", "EKS", "RDS"] }]
          }
        ]
      }
    ]
  }
];
