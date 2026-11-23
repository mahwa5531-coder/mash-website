import { Html, Head, Main, NextScript } from "next/document";
import { SITE_CONFIG } from "@/content/site-config";

export default function Document() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": SITE_CONFIG.name,
    "operatingSystem": "Windows 10, Windows 11 (64-bit)",
    "applicationCategory": "DeveloperApplication",
    "description": SITE_CONFIG.subhead,
    "softwareVersion": SITE_CONFIG.version,
    "downloadUrl": SITE_CONFIG.installer.downloadPath,
    "fileSize": `${SITE_CONFIG.installer.sizeBytes} B`,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
