import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { SITE_CONFIG } from "@/content/site-config";
import { assetPath } from "@/lib/utils";

export default function AuthSuccessPage() {
  const router = useRouter();
  const [authCode, setAuthCode] = React.useState<string>("mcode_pending");

  const executeHandoff = React.useCallback(async (code: string) => {
    const protocolUrl = `mash://auth/callback?code=${encodeURIComponent(code)}`;

    // 1. Localhost loopback bridge: if Mash desktop is already running on port 8000
    try {
      fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      }).catch(() => {});
    } catch {
      // Loopback inactive
    }

    // 2. Trigger Chromium's built-in native ExternalProtocolDialog via OS scheme
    try {
      window.location.href = protocolUrl;
    } catch {
      // Handled by browser
    }
  }, []);

  React.useEffect(() => {
    if (!router.isReady) return;

    let timeoutId: NodeJS.Timeout;
    const query = router.query;
    const directCode = query.code as string;
    const grant = query.grant as string;

    const resolveAuth = async () => {
      let resolvedCode = "mcode_authorized";

      if (directCode) {
        resolvedCode = directCode;
      } else if (grant) {
        try {
          const apiBase = process.env.NEXT_PUBLIC_API_URL || "https://api.mash.ai";
          // 1. Exchange grant for web session
          const sessionRes = await fetch(`${apiBase}/v1/auth/web/session`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ grant }),
          });
          const sessionData = await sessionRes.json();
          const accessToken = sessionData?.access_token;

          if (accessToken) {
            // 2. Mint 60-second single-use desktop pairing code
            const codeRes = await fetch(`${apiBase}/v1/auth/desktop/code`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
            });
            const codeData = await codeRes.json();
            if (codeData?.code) {
              resolvedCode = codeData.code;
            }
          }
        } catch (err) {
          console.error("Auth handoff resolution error:", err);
        }
      }

      setAuthCode(resolvedCode);
      // Wait for page to settle before firing OS protocol
      timeoutId = setTimeout(() => {
        executeHandoff(resolvedCode);
      }, 400);
    };

    resolveAuth();
    return () => clearTimeout(timeoutId);
  }, [router.isReady, router.query, executeHandoff]);

  const handleManualClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const effectiveCode = authCode !== "mcode_pending" ? authCode : ((router.query.code as string) || "mcode_authorized");
    console.log(">>> [Web] Manual click on 'Click here' triggered with code:", effectiveCode);
    executeHandoff(effectiveCode);
  };

  const protocolHref = `mash://auth/callback?code=${encodeURIComponent(authCode)}`;

  return (
    <>
      <Head>
        <title>{`Authentication Successful · ${SITE_CONFIG.name}`}</title>
        <meta
          name="description"
          content="You have successfully authenticated with Mash. Redirecting to desktop application."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center p-6 text-center select-none font-sans">
        <main className="max-w-xl w-full flex flex-col items-center">
          
          {/* Brand Lockup: Celtic Rosette Logo + "Mash" */}
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src={assetPath("/brand-logo.svg")}
                alt={SITE_CONFIG.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-3xl font-semibold text-slate-900 tracking-tight">
              {SITE_CONFIG.name}
            </span>
          </div>

          {/* Primary Antigravity Headline */}
          <h1 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight mb-4">
            You have successfully authenticated.
          </h1>

          {/* Fallback Subtext */}
          <p className="text-sm text-slate-500 font-sans leading-relaxed">
            You should be redirected back to the product.{" "}
            <a
              href={protocolHref}
              onClick={handleManualClick}
              className="text-blue-600 hover:text-blue-700 underline font-medium cursor-pointer transition-colors"
            >
              Click here
            </a>{" "}
            if not working.
          </p>

        </main>
      </div>
    </>
  );
}
