import { clsx, type ClassValue } from "clsx";

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
