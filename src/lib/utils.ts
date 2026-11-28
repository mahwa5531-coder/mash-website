import { clsx, type ClassValue } from "clsx";
import { SITE_CONFIG } from "@/content/site-config";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function assetPath(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}

/** Fires the local desktop bridge ping first, then triggers the OS protocol dialog. */
export function triggerDesktopHandoff(
  protocolUrl: string,
  bridgePath: string,
  payload: Record<string, unknown>
): void {
  try {
    fetch(`http://localhost:8000${bridgePath}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});
  } catch {
    // Loopback inactive when desktop app is closed
  }

  try {
    window.location.href = protocolUrl;
  } catch {
    // Handled by browser
  }
}

export interface WebSession {
  access_token: string;
  expires_at: number;
  email: string;
  display_name?: string;
}

const WEB_SESSION_KEY = "mash_web_session";
const POST_AUTH_KEY = "mash_post_auth";

export function getWebSession(): WebSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(WEB_SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as WebSession;
    if (!parsed?.access_token || !parsed?.expires_at || Date.now() >= parsed.expires_at) {
      window.sessionStorage.removeItem(WEB_SESSION_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function saveWebSession(payload: {
  access_token?: string;
  expires_in?: number;
  user?: { email?: string; display_name?: string };
}): WebSession | null {
  if (typeof window === "undefined" || !payload?.access_token) return null;
  const ttlSec = Math.max(60, Number(payload.expires_in) || 900);
  const session: WebSession = {
    access_token: payload.access_token,
    expires_at: Date.now() + Math.max(30, ttlSec - 30) * 1000,
    email: payload.user?.email || "",
    display_name: payload.user?.display_name,
  };
  window.sessionStorage.setItem(WEB_SESSION_KEY, JSON.stringify(session));
  return session;
}

export function clearWebSession(): void {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(WEB_SESSION_KEY);
}

export function consumePostAuthRedirect(): string | null {
  if (typeof window === "undefined") return null;
  const target = window.sessionStorage.getItem(POST_AUTH_KEY);
  if (target) window.sessionStorage.removeItem(POST_AUTH_KEY);
  return target;
}

export function startGoogleSignIn(postAuthPath?: string): void {
  if (typeof window === "undefined") return;
  if (postAuthPath) {
    window.sessionStorage.setItem(POST_AUTH_KEY, postAuthPath);
  } else {
    window.sessionStorage.removeItem(POST_AUTH_KEY);
  }
  window.location.href = `${SITE_CONFIG.apiUrl}/v1/auth/oauth/google`;
}

export class ApiError extends Error {
  status: number;
  code: string;
  constructor(message: string, status: number, code: string) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

export async function apiJson<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers);
  if (init.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  const res = await fetch(`${SITE_CONFIG.apiUrl}${path}`, { ...init, headers });
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const code = data?.error?.code || `HTTP_${res.status}`;
    const msg = data?.error?.message || `Request failed (${res.status})`;
    throw new ApiError(msg, res.status, code);
  }
  return data as T;
}
