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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`} />
        <meta property="og:description" content={SITE_CONFIG.subhead} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/screenshots/mash_real_llm_hero_dual_pane_top_light.png" />
        <meta name="twitter:card" content="summary_large_image" />
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
