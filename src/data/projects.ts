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
    description: "Contributed to open source library for the Fern API.",
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
    title: "Live Stream Real-Time Language Translator",
    description:
      "Created Python app to process live stream data via URL, convert audio to text, translate text from English to Spanish, then run final transform to convert text to speech. Built using fully open-source Vosk models and ran locally on edge hardware. Also built a set of scripts to automate the retrieval of audio files from a website, transcribe them, then use a trained voice model to output summaries using AI to save staff time on mundane, reptitive tasks.",
    url: null,
    date: new Date(2024, 9),
    tags: ["Python", "Vosk", "OpenAI", "ElevenLabs"],
    additionalTags: []
  },
  {
    title: "National Cortado Day",
    description:
      "Created a national food holiday for one of my favorite espresso drinks. Officially recognized by Wikipedia and annually celebrated by people around the world now.",
    url: "https://www.nationalcortadoday.com",
    date: new Date(2021, 11),
    tags: ["HTML", "CSS", "Wikipedia"],
    additionalTags: []
  },
  {
    title: "Never Stolen",
    description: "Alarm app to prevent thieves from stealing your MacBook.",
    url: "https://neverstolen.ryanteodoro.com",
    date: new Date(2020, 2),
    tags: ["React", "Electron.js", "Node.js", "WebSockets", "Twilio"],
    additionalTags: ["DigitalOcean", "Twilio"]
  }
];
