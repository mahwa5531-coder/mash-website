import * as React from "react";
import Head from "next/head";
import { HeroSection } from "@/components/marketing/HeroSection";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { ZigZagFeatures } from "@/components/marketing/ZigZagFeatures";
import { DownloadCard } from "@/components/marketing/DownloadCard";
import { SITE_CONFIG } from "@/content/site-config";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`}</title>
        <meta
          name="description"
          content={SITE_CONFIG.subhead}
        />
        <link rel="canonical" href="https://mash.ai/" />
        <meta property="og:title" content={`${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`} />
        <meta property="og:description" content={SITE_CONFIG.subhead} />
        <meta property="og:url" content="https://mash.ai/" />
      </Head>

      <main>
        <HeroSection />
        <HowItWorks />
        <ZigZagFeatures />
        <div id="download">
          <DownloadCard />
        </div>
      </main>
    </>
  );
}
