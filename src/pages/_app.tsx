import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/content/site-config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{SITE_CONFIG.name} — {SITE_CONFIG.tagline}</title>
        <meta name="description" content={SITE_CONFIG.subhead} />
        <meta name="author" content="Mash Engineering Team" />
        <meta name="theme-color" content="#FCFCFD" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Favicons & App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        
        {/* OpenGraph / Social Sharing */}
        <meta property="og:site_name" content="Mash" />
        <meta property="og:title" content={`${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`} />
        <meta property="og:description" content={SITE_CONFIG.subhead} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mash.ai/" />
        <meta property="og:image" content="https://mash.ai/screenshots/mash_real_llm_hero_dual_pane_top_light.png" />
        <meta property="og:image:width" content="1440" />
        <meta property="og:image:height" content="900" />
        <meta property="og:image:alt" content="Mash Autonomous AI Workbench Dual-Pane View" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`} />
        <meta name="twitter:description" content={SITE_CONFIG.subhead} />
        <meta name="twitter:image" content="https://mash.ai/screenshots/mash_real_llm_hero_dual_pane_top_light.png" />
      </Head>

      <div className="flex min-h-screen flex-col bg-[#FCFCFD] text-slate-900 selection:bg-slate-200">
        <Navbar />
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}
