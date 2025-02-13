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
            description: "Leveraged gpt4o-mini to process guide ",
            url: null,
            languages: ["TypeScript"],
            frameworks: ["Express.js"],
            databases: ["Postgres"],
            libraries: ["React", "Redux Toolkit"],
            providers: [
              {
                name: "DigitalOcean",
                services: ["Apps", "Storage"]
              },
              {
                name: "Supabase",
                services: []
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
            name: "Website Scanner",
            description:
              "Developed a tool for companies to run ADA compliance scans",
            url: null,
            languages: ["TypeScript"],
            frameworks: ["Express.js"],
            databases: ["Postgres"],
            libraries: ["React", "Redux Toolkit", "axe-core", "Cypress"],
            providers: [
              { name: "DigitalOcean", services: [] },
              {
                name: "Supabase",
                services: []
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
            description: "Assisted development for numerous projects across ",
            url: "https://fairworlds.com",
            languages: ["TypeScript", "Java"],
            databases: ["Postgres"],
            frameworks: ["Spring Boot"],
            libraries: ["React", "D3.js"],
            providers: [
              { name: "AWS", services: ["S3"] },
              {
                name: "GCP",
                services: ["Cloud Storage"]
              }
            ]
          },
          {
            name: "Stream for the Blind",
            description:
              "Created a streaming platform centered around accessible for the blind community.",
            url: "https://streamfortheblind.com",
            languages: ["TypeScript"],
            databases: ["Postgres", "Redis"],
            frameworks: [],
            libraries: ["React", "ffmpeg"],
            providers: [
              {
                name: "AWS",
                services: []
              },
              {
                name: "Supabase",
                services: []
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
            name: "EchoDial",
            description:
              "Developed dialer and CRM platform to automate phone call outreach programs.",
            url: null,
            languages: ["TypeScript"],
            databases: ["Postgres"],
            frameworks: ["Express.js"],
            libraries: ["React", "Mantine UI"],
            providers: [
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
            name: "Perl Street (YC W22)",
            url: "https://perlstreet.com",
            description: "Contributed to features",
            languages: ["TypeScript"],
            databases: [],
            frameworks: [],
            libraries: ["React", "Semantic UI"],
            providers: [
              {
                name: "Google Cloud Platform",
                services: []
              }
            ]
          }
        ]
      }
    ]
  }
];
