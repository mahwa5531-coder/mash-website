import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/content/site-config";
import { assetPath } from "@/lib/utils";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isMinimalLayout = router.pathname.startsWith("/auth") || router.pathname === "/checkout/success" || router.pathname === "/404";

  return (
    <>
      <Head>
        <title>{`${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`}</title>
        <meta name="description" content={SITE_CONFIG.subhead} />
        <meta name="author" content="Mash Engineering Team" />
        <meta name="theme-color" content="#FAF9F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Favicons & App Icons */}
        <link rel="icon" type="image/svg+xml" href={assetPath("/brand-logo.svg")} />
        <link rel="icon" type="image/png" sizes="32x32" href={assetPath("/brand-logo-32.png")} />
        <link rel="icon" type="image/png" sizes="16x16" href={assetPath("/brand-logo-16.png")} />
        <link rel="icon" href={assetPath("/favicon.ico")} sizes="any" />
        <link rel="apple-touch-icon" href={assetPath("/brand-logo.png")} />

        {/* Plus Jakarta Sans (Native Web Font) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* OpenGraph / Social Sharing */}
        <meta property="og:site_name" content="Mash" />
        <meta property="og:title" content={`${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`} />
        <meta property="og:description" content={SITE_CONFIG.subhead} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_CONFIG.url}/`} />
        <meta property="og:image" content={`${SITE_CONFIG.url}/screenshots/mash_real_llm_hero_dual_pane_top_light.png`} />
        <meta property="og:image:width" content="1440" />
        <meta property="og:image:height" content="900" />
        <meta property="og:image:alt" content="Mash Autonomous AI Workbench Dual-Pane View" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`} />
        <meta name="twitter:description" content={SITE_CONFIG.subhead} />
        <meta name="twitter:image" content={`${SITE_CONFIG.url}/screenshots/mash_real_llm_hero_dual_pane_top_light.png`} />
      </Head>

      {isMinimalLayout ? (
        <Component {...pageProps} />
      ) : (
        <div className="flex min-h-screen flex-col bg-[#FAF9F6] text-slate-900 selection:bg-slate-200">
          <Navbar />
          <div className="flex-1">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
