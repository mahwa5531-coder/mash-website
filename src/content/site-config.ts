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
    features: string;
    howItWorks: string;
    pricing: string;
    download: string;
  };
  contact: {
    supportEmail: string;
    privacyEmail: string;
    legalEmail: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: "Mash",
  tagline: "The desktop AI workbench for spreadsheets & financial data.",
  subhead: "Cross-reference ledgers, detect calculation discrepancies, and inspect complex Excel workbooks side-by-side. Your confidential company data never leaves your computer.",
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
    features: "#features",
    howItWorks: "#how-it-works",
    pricing: "#pricing",
    download: "/download"
  },
  // ponytail: single source of truth before domain purchase — replace these 3 lines when your domain is live
  contact: {
    supportEmail: "support@mash.ai",
    privacyEmail: "privacy@mash.ai",
    legalEmail: "legal@mash.ai",
  }
};
