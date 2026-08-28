const CDN = "https://cdn.jsdelivr.net/gh/CorinaBot/juju@main/public";

export function asset(src: string) {
  if (!src.startsWith("/media/")) return src;
  if (import.meta.env.DEV) return src;
  return `${CDN}${src}`;
}
