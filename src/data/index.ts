import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    company: "4ccessible",
    location: "Houston, TX",
    type: "Founder",
    startDate: new Date("2024-04"),
    endDate: "Present",
    industries: ["Accessibility", "AI", "SaaS"],
    technologies: [
      {
        name: "Next.js",
        category: "Framework",
        proficiencyLevel: 4
      },
      {
        name: "TypeScript",
        category: "Language",
        proficiencyLevel: 5
      },
      {
        name: "React",
        category: "Frontend",
        proficiencyLevel: 5
      }
    ],
    roles: [
      {
        title: "Founder & CEO",
        startDate: new Date("2024-04"),
        endDate: "Present",
        projectIds: ["4ccessible-platform"],
        achievements: [] // Moved to project level
      }
    ],
    projects: [
      {
        id: "4ccessible-platform",
        name: "4ccessible Platform",
        description:
          "Digital platform focused on making the internet more accessible for the blind and visually impaired using generative AI",
        startDate: new Date("2024-04"),
        endDate: "Present",
        type: [
          "Web app",
          "AI integration",
          "Browser extension",
          "Accessibility"
        ],
        technologies: [
          "OpenAI",
          "React",
          "Next.js",
          "TypeScript",
          "Redux Toolkit",
          "Cypress",
          "PostgreSQL",
          "Stripe",
          "Supabase",
          "DigitalOcean",
          "Vercel",
          "Material UI"
        ],
        role: "Founder & CEO",
        achievements: [
          {
            description:
              "Led engineering and strategic efforts to build a digital platform focused on making the internet more accessible",
            technologies: ["OpenAI", "React", "Next.js", "TypeScript"],
            projectType: ["Web app", "AI integration"]
          }
        ],
        metrics: [
          {
            type: "Ranking",
            value: "SXSW Innovation Award Candidate"
          },
          {
            type: "Adoption",
            value: "Google Tokyo Startup member"
          },
          {
            type: "Adoption",
            value: "AWS Tokyo Startup member"
          }
        ]
      }
    ]
  },
  {
    company: "Teodoro Systems",
    location: "Houston, TX",
    type: "Founder",
    startDate: new Date("2023-06"),
    endDate: new Date("2024-04"),
    industries: [
      "Technology",
      "Fintech",
      "Healthcare",
      "Oil and gas",
      "Non-profit",
      "Automotive",
      "Food and beverage"
    ],
    technologies: [
      {
        name: "OpenAI",
        category: "AI",
        proficiencyLevel: 5
      },
      {
        name: "React",
        category: "Frontend",
        proficiencyLevel: 5
      }
    ],
    roles: [
      {
        title: "Founder & CEO",
        startDate: new Date("2023-06"),
        endDate: new Date("2024-04"),
        projectIds: ["consulting-platform"],
        achievements: []
      }
    ],
    projects: [
      {
        id: "consulting-platform",
        name: "Software Consulting Platform",
        description:
          "Managed software consulting projects for clients across multiple industries",
        startDate: new Date("2023-06"),
        endDate: new Date("2024-04"),
        type: ["Web app", "Enterprise", "SaaS"],
        technologies: [
          "OpenAI",
          "React",
          "Next.js",
          "TypeScript",
          "Redux Toolkit",
          "PostgreSQL",
          "Supabase",
          "DigitalOcean",
          "Vercel",
          "GitHub Actions",
          "Kubernetes",
          "Docker",
          "Material UI",
          "Tailwind CSS"
        ],
        role: "Principal Engineer",
        achievements: [
          {
            description:
              "Successfully delivered multiple client projects across diverse industries",
            technologies: ["React", "Next.js", "TypeScript"],
            projectType: ["Web app", "Enterprise"]
          }
        ]
      }
    ]
  },
  {
    company: "EchoDial",
    location: "Houston, TX",
    type: "Founder",
    startDate: new Date("2023-07"),
    endDate: new Date("2023-12"),
    industries: ["SaaS", "Communications"],
    technologies: [],
    roles: [
      {
        title: "Founder & CEO",
        startDate: new Date("2023-07"),
        endDate: new Date("2023-12"),
        projectIds: ["power-dialer", "marketing-site"],
        achievements: []
      }
    ],
    projects: [
      {
        id: "power-dialer",
        name: "Power Dialer Platform",
        description:
          "SaaS platform combining Google Voice functionality with automation and CRM capabilities",
        startDate: new Date("2023-07"),
        endDate: new Date("2023-12"),
        type: ["Web app", "SaaS", "API"],
        technologies: [
          "React",
          "TypeScript",
          "Mantine UI",
          "Node.js",
          "PostgreSQL",
          "AWS S3",
          "AWS SES",
          "Twilio",
          "Stripe",
          "Sentry",
          "Amplitude",
          "BetterStack",
          "Knex.js"
        ],
        role: "Lead Engineer",
        achievements: [
          {
            description:
              "Built complete power dialer SaaS platform with voice, SMS, and CRM functionality",
            technologies: ["React", "TypeScript", "Node.js"],
            projectType: ["Web app", "API"]
          },
          {
            description:
              "Implemented AI-generated call transcriptions using Twilio Intelligence APIs",
            technologies: ["Twilio", "Node.js"],
            projectType: ["AI integration", "API"]
          }
        ],
        metrics: [
          {
            type: "Ranking",
            value: "#2 spot on Google Search results for target keyword"
          }
        ]
      },
      {
        id: "marketing-site",
        name: "EchoDial Marketing Site",
        description: "WordPress marketing site optimized for SEO",
        startDate: new Date("2023-07"),
        endDate: new Date("2023-12"),
        type: ["Web app", "Marketing"],
        technologies: ["WordPress", "PHP", "SEO"],
        role: "Developer",
        achievements: [
          {
            description:
              "Achieved #2 spot on Google Search results for target keyword",
            technologies: ["WordPress", "SEO"],
            projectType: ["Web app"]
          }
        ]
      }
    ]
  },
  {
    company: "Shell",
    location: "Houston, TX",
    type: "Full time",
    startDate: new Date("2019-01"),
    endDate: new Date("2023-06"),
    industries: ["Oil and gas", "Energy", "Chemicals"],
    technologies: [],
    roles: [
      {
        title: "Senior Software Engineer",
        startDate: new Date("2019-01"),
        endDate: new Date("2023-06"),
        projectIds: [
          "deal-analyzer",
          "green-dealer",
          "order-visibility",
          "shell-design-system"
        ],
        achievements: []
      }
    ],
    projects: [
      {
        id: "deal-analyzer",
        name: "Strategic Deal Analyzer",
        description:
          "Application for analyzing strategic deals in Shell Chemicals",
        startDate: new Date("2019-01"),
        endDate: new Date("2023-06"),
        type: ["Web app", "Enterprise", "Analytics"],
        technologies: [
          "React",
          "Redux",
          "TypeScript",
          "D3.js",
          "Styled Components"
        ],
        role: "Frontend Tech Lead",
        achievements: [
          {
            description:
              "Led Frontend development of strategic deal analyzer application",
            technologies: ["React", "Redux", "TypeScript"],
            projectType: ["Web app", "Enterprise"]
          }
        ],
        metrics: [
          {
            type: "Financial",
            value: "Delivered $38M – $57M in business value"
          }
        ]
      },
      {
        id: "green-dealer",
        name: "Shell Energy Insights Green Dealer",
        description:
          "Platform for customers to manage energy needs and decarbonization goals",
        startDate: new Date("2020-01"),
        endDate: new Date("2023-06"),
        type: ["Web app", "Enterprise", "Analytics"],
        technologies: [
          "React",
          "TypeScript",
          "Redux Toolkit",
          "Styled Components",
          "AWS",
          "GitHub Actions"
        ],
        role: "Tech Lead",
        achievements: [
          {
            description:
              "Led development of energy management and decarbonization platform",
            technologies: ["React", "TypeScript", "AWS"],
            projectType: ["Web app", "Enterprise"]
          }
        ]
      },
      {
        id: "order-visibility",
        name: "Customer Order Visibility Experience",
        description:
          "Real-time order tracking system for Shell chemical customers",
        startDate: new Date("2021-01"),
        endDate: new Date("2023-06"),
        type: ["Web app", "Enterprise"],
        technologies: ["React", "GraphQL", "Apollo", "Styled Components"],
        role: "Tech Lead",
        achievements: [
          {
            description:
              "Built real-time order tracking system for chemical deliveries",
            technologies: ["React", "GraphQL", "Apollo"],
            projectType: ["Web app", "Enterprise"]
          }
        ]
      },
      {
        id: "shell-design-system",
        name: "Shell Design System",
        description: "Enterprise-wide design system for Shell applications",
        startDate: new Date("2019-01"),
        endDate: new Date("2023-06"),
        type: ["Design system", "Enterprise"],
        technologies: ["React", "TypeScript", "Styled Components"],
        role: "Design System Champion",
        achievements: [
          {
            description:
              "Contributed to Shell's design system through bug fixes and enhancements",
            technologies: ["React", "TypeScript"],
            projectType: ["Design system", "Enterprise"]
          }
        ]
      }
    ]
  },
  {
    company: "BlueLine Rental",
    location: "The Woodlands, TX",
    type: "Full time",
    startDate: new Date("2018-01"),
    endDate: new Date("2018-12"),
    industries: ["Construction", "Equipment rental"],
    technologies: [],
    roles: [
      {
        title: "Senior Web/Mobile Developer",
        startDate: new Date("2018-01"),
        endDate: new Date("2018-12"),
        projectIds: ["mechanic-app", "customer-portal", "fleet-management"],
        achievements: []
      }
    ],
    projects: [
      {
        id: "mechanic-app",
        name: "Shop Mechanics iPad Application",
        description:
          "iPad application for shop mechanics to facilitate paperless service work",
        startDate: new Date("2018-01"),
        endDate: new Date("2018-12"),
        type: ["Mobile app", "Enterprise"],
        technologies: ["React", "Cordova", "Node.js", "RentalMan"],
        role: "Lead Developer",
        achievements: [
          {
            description:
              "Developed iPad application enabling paperless service work workflow",
            technologies: ["React", "Cordova"],
            projectType: ["Mobile app"]
          }
        ]
      },
      {
        id: "customer-portal",
        name: "Customer Web Portal",
        description:
          "Customer-facing web application for equipment rental management",
        startDate: new Date("2018-01"),
        endDate: new Date("2018-12"),
        type: ["Web app", "Enterprise"],
        technologies: ["React", "Redux", "WordPress"],
        role: "Senior Developer",
        achievements: [
          {
            description:
              "Implemented features and bug fixes for customer web application",
            technologies: ["React", "Redux"],
            projectType: ["Web app"]
          }
        ]
      },
      {
        id: "fleet-management",
        name: "Fleet Management System",
        description:
          "Internal system for managing delivery truck fleet and safety",
        startDate: new Date("2018-06"),
        endDate: new Date("2018-12"),
        type: ["API", "Enterprise", "Infrastructure"],
        technologies: ["Node.js", "Salesforce", "Geotab", "RentalMan"],
        role: "Backend Developer",
        achievements: [
          {
            description:
              "Created Node.js scripts to improve fleet safety and operations",
            technologies: ["Node.js", "Salesforce", "Geotab"],
            projectType: ["API", "Infrastructure"]
          }
        ]
      }
    ]
  },
  {
    company: "University of Houston",
    location: "Houston, TX",
    type: "Full time",
    startDate: new Date("2017-01"),
    endDate: new Date("2017-12"),
    industries: ["Education", "Technology"],
    technologies: [],
    roles: [
      {
        title: "Mobile Application Developer",
        startDate: new Date("2017-01"),
        endDate: new Date("2017-12"),
        projectIds: ["uh-Mobile app", "it-chat-widget", "parking-lot-api"],
        achievements: []
      }
    ],
    projects: [
      {
        id: "uh-Mobile app",
        name: "UH Official Mobile App",
        description: "Official mobile application for University of Houston",
        startDate: new Date("2017-01"),
        endDate: new Date("2017-12"),
        type: ["Mobile app"],
        technologies: ["Ionic", "Cordova", "Angular", "Node.js", "PHP"],
        role: "Core Contributor",
        achievements: [
          {
            description:
              "Developed core features for university's official mobile app",
            technologies: ["Ionic", "Angular"],
            projectType: ["Mobile app"]
          }
        ]
      },
      {
        id: "it-chat-widget",
        name: "IT Support Live Chat",
        description: "Real-time chat widget for IT support website",
        startDate: new Date("2017-03"),
        endDate: new Date("2017-08"),
        type: ["Web app", "API"],
        technologies: ["Vue.js", "WebSockets", "Node.js"],
        role: "Full Stack Developer",
        achievements: [
          {
            description:
              "Built live chat widget enabling real-time support communication",
            technologies: ["Vue.js", "WebSockets"],
            projectType: ["Web app", "API"]
          }
        ]
      },
      {
        id: "parking-lot-api",
        name: "Campus Parking API",
        description: "Real-time parking lot capacity tracking system",
        startDate: new Date("2017-06"),
        endDate: new Date("2017-12"),
        type: ["API", "Infrastructure"],
        technologies: ["Node.js", "Express", "MongoDB"],
        role: "Backend Developer",
        achievements: [
          {
            description:
              "Architected RESTful API for real-time parking capacity tracking",
            technologies: ["Node.js", "Express", "MongoDB"],
            projectType: ["API"]
          }
        ]
      }
    ]
  },
  {
    company: "Bouncing Pixel",
    location: "Houston, TX",
    type: "Full time",
    startDate: new Date("2015-08"),
    endDate: new Date("2016-11"),
    industries: ["Consulting", "Healthcare", "Education"],
    technologies: [],
    roles: [
      {
        title: "Software Developer",
        startDate: new Date("2015-08"),
        endDate: new Date("2016-11"),
        projectIds: [
          "diabetes-teamwork",
          "word-hero",
          "love-meter",
          "question-big"
        ],
        achievements: []
      }
    ],
    projects: [
      {
        id: "diabetes-teamwork",
        name: "Diabetes Family Teamwork",
        description:
          "Web app for Baylor College of Medicine to educate families about diabetes management",
        startDate: new Date("2015-08"),
        endDate: new Date("2016-04"),
        type: ["Web app"],
        technologies: ["Laravel", "PHP", "PostgreSQL"],
        role: "Full Stack Developer",
        achievements: [
          {
            description:
              "Developed educational platform for diabetes management",
            technologies: ["Laravel", "PHP", "PostgreSQL"],
            projectType: ["Web app"]
          }
        ]
      },
      {
        id: "word-hero",
        name: "Word Hero Game",
        description:
          "iPad game for cognitive bias modification in suicidal patients",
        startDate: new Date("2016-01"),
        endDate: new Date("2016-11"),
        type: ["Mobile app"],
        technologies: ["Unity", "C#"],
        role: "Game Developer",
        achievements: [
          {
            description: "Programmed core game logic for therapeutic iPad game",
            technologies: ["Unity", "C#"],
            projectType: ["Mobile app"]
          }
        ]
      },
      {
        id: "love-meter",
        name: "Love Meter App",
        description:
          "Cross-platform mobile app for love language communication",
        startDate: new Date("2016-05"),
        endDate: new Date("2016-11"),
        type: ["Mobile app"],
        technologies: ["Meteor", "MongoDB", "Mongoose"],
        role: "Full Stack Developer",
        achievements: [
          {
            description:
              "Built cross-platform mobile application for relationship communication",
            technologies: ["Meteor", "MongoDB"],
            projectType: ["Mobile app"]
          }
        ]
      },
      {
        id: "question-big",
        name: "Question Big Website",
        description: "Custom Node.js website with responsive layouts",
        startDate: new Date("2015-09"),
        endDate: new Date("2015-12"),
        type: ["Web app"],
        technologies: ["Node.js", "Dust.js", "CSS"],
        role: "Frontend Developer",
        achievements: [
          {
            description:
              "Created responsive layouts using custom CSS without frameworks",
            technologies: ["Dust.js", "CSS"],
            projectType: ["Web app"]
          }
        ]
      }
    ]
  },
  {
    company: "Hewlett-Packard",
    location: "Houston, TX",
    type: "Full time",
    startDate: new Date("2013-06"),
    endDate: new Date("2015-08"),
    industries: ["Technology", "Enterprise"],
    technologies: [],
    roles: [
      {
        title: "IT Engineer/Analyst",
        startDate: new Date("2013-06"),
        endDate: new Date("2015-08"),
        projectIds: ["channel-services", "salesforce-migration"],
        achievements: []
      }
    ],
    projects: [
      {
        id: "channel-services",
        name: "Channel Services Network",
        description: "Web app for channel services management",
        startDate: new Date("2013-06"),
        endDate: new Date("2015-08"),
        type: ["Web app", "Enterprise"],
        technologies: ["ASP.NET"],
        role: "Full Stack Developer",
        achievements: [
          {
            description:
              "Developed features for Channel Services Network application",
            technologies: ["ASP.NET"],
            projectType: ["Web app"]
          }
        ]
      },
      {
        id: "salesforce-migration",
        name: "Salesforce Migration",
        description:
          "Migration of warranty entitlement processing to Salesforce",
        startDate: new Date("2014-01"),
        endDate: new Date("2015-08"),
        type: ["Enterprise", "Migration"],
        technologies: ["Salesforce"],
        role: "Technical Lead",
        achievements: [
          {
            description:
              "Led migration of warranty processing to Salesforce platform",
            technologies: ["Salesforce"],
            projectType: ["Enterprise"]
          },
          {
            description:
              "Obtained Salesforce Developer certification and trained colleagues",
            technologies: ["Salesforce"],
            projectType: ["Enterprise"]
          }
        ]
      }
    ]
  },
  {
    company: "Schlumberger",
    location: "Houston, TX",
    type: "Internship",
    startDate: new Date("2012-09"),
    endDate: new Date("2012-12"),
    industries: ["Oil and gas", "Technology"],
    technologies: [],
    roles: [
      {
        title: "Mobile Application Developer",
        startDate: new Date("2012-09"),
        endDate: new Date("2012-12"),
        projectIds: ["drilling-tech-app"],
        achievements: []
      }
    ],
    projects: [
      {
        id: "drilling-tech-app",
        name: "Drilling Technology Mobile App",
        description:
          "Cross-platform mobile application for drilling technology data",
        startDate: new Date("2012-09"),
        endDate: new Date("2012-12"),
        type: ["Mobile app"],
        technologies: ["Xamarin", "C#"],
        role: "Mobile Developer",
        achievements: [
          {
            description:
              "Built cross-platform mobile app for drilling technology data visualization",
            technologies: ["Xamarin", "C#"],
            projectType: ["Mobile app"]
          }
        ]
      }
    ]
  }
];
