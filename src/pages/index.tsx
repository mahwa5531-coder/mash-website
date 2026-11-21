import * as React from "react";
import Head from "next/head";
import { HeroSection } from "@/components/marketing/HeroSection";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { FeatureTabs } from "@/components/marketing/FeatureTabs";
import { AppFeaturesGrid } from "@/components/marketing/AppFeaturesGrid";
import { PricingSection } from "@/components/marketing/PricingSection";
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
        <HowItWorks />
        <FeatureTabs />
        <AppFeaturesGrid />
        <PricingSection />
        <div id="download">
          <DownloadCard />
        </div>
      </main>
    </>
  );
}
