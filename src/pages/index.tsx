import * as React from "react";
import Head from "next/head";
import { HeroSection } from "@/components/marketing/HeroSection";
import { FeatureTabs } from "@/components/marketing/FeatureTabs";
import { ValueProps } from "@/components/marketing/ValueProps";
import { DownloadCard } from "@/components/marketing/DownloadCard";
import { SITE_CONFIG } from "@/content/site-config";

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE_CONFIG.name} — {SITE_CONFIG.tagline}</title>
        <link rel="canonical" href="https://mash.ai/" />
      </Head>

      <main>
        <HeroSection />
        <FeatureTabs />
        <ValueProps />
        <DownloadCard />
      </main>
    </>
  );
}
