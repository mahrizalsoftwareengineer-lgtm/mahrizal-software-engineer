/**
 * Serialize JSON for <script type="application/ld+json"> safely.
 * Escapes "<" so untrusted strings cannot break out of the script context.
 */
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** Allow only http(s) URLs for external links rendered in the UI. */
export function isSafeHttpUrl(url: string | undefined | null): boolean {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}
