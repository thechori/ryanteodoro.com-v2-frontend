import { PersonalProject } from "../types";

export const projects: PersonalProject[] = [
  {
    title: "Portfolio Website",
    description:
      "React app for showcasing skills, experience, and projects. Created new data structures to improve organizing technical details about experiences because existing solutions (e.g., https://jsonresume.org/schema) did not satisfy personal needs.",
    url: "https://ryanteodoro.com",
    date: new Date(2025, 1),
    tags: ["TypeScript", "React", "TailwindCSS", "Netlify"],
    additionalTags: ["CSS", "HTML"]
  },
  {
    title: "Fern (YC W23)",
    description:
      "Contributed to the open source library for Fern, a platform for using OpenAPI specifications to generate SDKs and docs.",
    url: "https://github.com/fern-api/fern",
    date: new Date(2025, 0),
    tags: ["TypeScript", "Node.js", "Fern"],
    additionalTags: []
  },
  {
    title: "mOcKcAsE",
    description: "Created parody NPM library for obnoxious string formatting.",
    url: "https://www.npmjs.com/package/mockcase",
    date: new Date(2024, 11),
    tags: ["TypeScript", "Node.js", "NPM library"],
    additionalTags: []
  },
  {
    title: "Live Stream Translator",
    description:
      "Created a Python app to translate radio broadcasts from English to Spanish in real time. Accomplished by fetching live stream audio via URL, transcribing audio to text (STT), translating text from English to Spanish, then running final transform to convert text to speech (TTS). Built using fully open-source Vosk models and ran locally on local hardware. Also built a set of scripts to automate the retrieval of audio files from a website, transcribe them, then use a trained voice model to output spoken summaries using AI to save staff time on repetitive, time-consuming tasks.",
    url: null,
    date: new Date(2024, 9),
    tags: ["Python", "Vosk", "OpenAI", "ElevenLabs"],
    additionalTags: []
  },
  {
    title: "Tennis Court Reservation Bot",
    description:
      "Created a bot to reserve tennis courts at 6:00am when schedules opened to public on gym website. Ran within a DigitalOcean VPS and would trigger via simple cronjob schedule.",
    url: null,
    date: new Date(2023, 11),
    tags: ["JavaScript", "Node.js", "Cypress.js", "Twilio", "DigitalOcean"],
    additionalTags: []
  },
  {
    title: "National Cortado Day",
    description:
      "Created a national food holiday for one of my favorite espresso drinks. Officially recognized by Wikipedia and annually celebrated by people around the world now.",
    url: "https://www.nationalcortadoday.com",
    date: new Date(2021, 11),
    tags: ["HTML", "CSS", "Marketing"],
    additionalTags: []
  },
  {
    title: "Crypto Trading Bot",
    description:
      "Automated trading bot that used moving average strategies to automate micro trades 24 hours a day, 7 days a week.",
    url: null,
    date: new Date(2021, 7),
    tags: [
      "JavaScript",
      "Node.js",
      "Binance API",
      "Kraken API",
      "Twilio",
      "DigitalOcean"
    ],
    additionalTags: []
  },
  {
    title: "Never Stolen",
    description: "Alarm app to prevent thieves from stealing your MacBook.",
    url: "https://neverstolen.ryanteodoro.com",
    date: new Date(2020, 2),
    tags: [
      "React",
      "Electron.js",
      "Node.js",
      "WebSockets",
      "Twilio",
      "DigitalOcean"
    ],
    additionalTags: []
  }
];
