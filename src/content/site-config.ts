export interface SiteConfig {
  name: string;
  tagline: string;
  subhead: string;
  version: string;
  releaseDate: string;
  installer: {
    fileName: string;
    downloadPath: string;
    sizeBytes: number;
    sizeDisplay: string;
    sha256: string;
    platform: string;
  };
  links: {
    github: string;
    docs: string;
    changelog: string;
    download: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: "Mash",
  tagline: "The autonomous AI workbench for complex work.",
  subhead: "Analyze data, inspect spreadsheets, and build software alongside an agent that reads, edits, and executes on your local computer.",
  version: "0.1.0",
  releaseDate: "November 20, 2026",
  installer: {
    fileName: "Mash-Setup-0.1.0.exe",
    downloadPath: "https://github.com/mahwa5531-coder/mash-website/releases/download/v0.1.0/Mash-Setup-0.1.0.exe",
    sizeBytes: 235444478,
    sizeDisplay: "224.54 MB",
    sha256: "0DBD70F0507DE0614E58B0EA50276D7EE960A15FA27DB2AF0119A369D6BF6EB8",
    platform: "Windows 10 / 11 (64-bit)"
  },
  links: {
    github: "https://github.com/mahwa5531-coder/mash-website",
    docs: "/docs",
    changelog: "/changelog",
    download: "/download"
  }
};
