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
    title: "Live Stream Translator",
    description:
      "Created a Python app to translate radio broadcasts from English to Spanish in real time. Accomplished by fetching live stream audio via URL, transcribing audio to text (STT), translating text from English to Spanish, then running final transform to convert text to speech (TTS). Built using fully open-source Vosk models and ran locally on local hardware. Also built a set of scripts to automate the retrieval of audio files from a website, transcribe them, then use a trained voice model to output spoken summaries using AI to save staff time on repetitive, time-consuming tasks.",
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
    tags: ["HTML", "CSS", "Marketing"],
    additionalTags: []
  },
  {
    title: "Cryptocurrency Trading Bot",
    description:
      "Engineered a 24/7 automated cryptocurrency trading bot that consumed real-time market data from Binance API while executing trades through Kraken's order execution API. The system implemented moving average crossover strategies for trade decisions and kept investors informed through automated Twilio SMS notifications.",
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
    description:
      "Desktop security application that protects MacBooks by monitoring critical theft indicators: lid closure, power adapter disconnection, and lost connection to remote servers. Built with Electron.js and React, the app triggers an immediate high-decibel alarm and sends SMS alerts via Twilio when suspicious activity is detected.",
    url: "https://neverstolen.teodorosystems.com",
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
