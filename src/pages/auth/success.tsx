import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { SITE_CONFIG } from "@/content/site-config";
import {
  apiJson,
  assetPath,
  consumePostAuthRedirect,
  saveWebSession,
  startGoogleSignIn,
  triggerDesktopHandoff,
} from "@/lib/utils";

interface WebSessionResponse {
  access_token?: string;
  expires_in?: number;
  user?: {
    email?: string;
    display_name?: string;
  };
}

type GrantResolution =
  | { kind: "checkout" }
  | { kind: "desktop"; code: string };

// Deduplicate single-use wgrant_ redemption across React StrictMode double-mounts
const inflightGrants = new Map<string, Promise<GrantResolution>>();

function resolveGrantOnce(grant: string): Promise<GrantResolution> {
  const existing = inflightGrants.get(grant);
  if (existing) return existing;

  const task = (async (): Promise<GrantResolution> => {
    const sessionData = await apiJson<WebSessionResponse>("/v1/auth/web/session", {
      method: "POST",
      body: JSON.stringify({ grant }),
    });

    const postAuth = consumePostAuthRedirect();
    if (postAuth === "/checkout" && sessionData?.access_token) {
      saveWebSession(sessionData);
      return { kind: "checkout" };
    }

    if (sessionData?.access_token) {
      const codeData = await apiJson<{ code?: string }>("/v1/auth/desktop/code", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${sessionData.access_token}`,
        },
      });
      if (codeData?.code) {
        return { kind: "desktop", code: codeData.code };
      }
    }

    throw new Error("Missing desktop pairing code");
  })();

  inflightGrants.set(grant, task);
  return task;
}

export default function AuthSuccessPage() {
  const router = useRouter();
  const [authCode, setAuthCode] = React.useState<string>("mcode_pending");
  const [authError, setAuthError] = React.useState<string | null>(null);
  const [isRedirectingWeb, setIsRedirectingWeb] = React.useState(false);

  const executeHandoff = React.useCallback((code: string) => {
    const protocolUrl = `mash://auth/callback?code=${encodeURIComponent(code)}`;
    triggerDesktopHandoff(protocolUrl, "/api/auth/login", { code });
  }, []);

  React.useEffect(() => {
    if (!router.isReady) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;
    const directCode = router.query.code as string | undefined;
    const grant = router.query.grant as string | undefined;

    if (directCode) {
      setAuthCode(directCode);
      timeoutId = setTimeout(() => {
        if (!cancelled) executeHandoff(directCode);
      }, 400);
    } else if (grant) {
      resolveGrantOnce(grant)
        .then((res) => {
          if (cancelled) return;
          if (res.kind === "checkout") {
            setIsRedirectingWeb(true);
            router.replace("/checkout");
            return;
          }
          setAuthCode(res.code);
          timeoutId = setTimeout(() => {
            if (!cancelled) executeHandoff(res.code);
          }, 400);
        })
        .catch((err) => {
          if (cancelled) return;
          console.error("Auth handoff resolution error:", err);
          setAuthError("Sign-in link expired or already used. Please try again.");
        });
    } else {
      setAuthCode("mcode_authorized");
      timeoutId = setTimeout(() => {
        if (!cancelled) executeHandoff("mcode_authorized");
      }, 400);
    }

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [router, router.isReady, router.query.code, router.query.grant, executeHandoff]);

  const handleManualClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const effectiveCode =
      authCode !== "mcode_pending"
        ? authCode
        : (router.query.code as string) || "mcode_authorized";
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

          {authError ? (
            <>
              <h1 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight mb-4">
                Authentication could not be completed.
              </h1>
              <p className="text-sm text-slate-500 font-sans leading-relaxed">
                {authError}{" "}
                <button
                  type="button"
                  onClick={() => startGoogleSignIn()}
                  className="text-blue-600 hover:text-blue-700 underline font-medium cursor-pointer transition-colors"
                >
                  Try again
                </button>
              </p>
            </>
          ) : (
            <>
              <h1 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight mb-4">
                You have successfully authenticated.
              </h1>

              {isRedirectingWeb ? (
                <p className="text-sm text-slate-500 font-sans leading-relaxed">
                  Taking you back to checkout...
                </p>
              ) : (
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
              )}
            </>
          )}
        </main>
      </div>
    </>
  );
}
