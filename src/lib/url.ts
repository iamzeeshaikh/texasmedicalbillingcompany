import { SITE } from '../config/site';

/** Canonical absolute URL with enforced trailing slash and lowercase path. */
export function canonicalUrl(path: string): string {
  let p = path.toLowerCase();
  if (!p.startsWith('/')) p = `/${p}`;
  if (!p.endsWith('/')) p = `${p}/`;
  return `${SITE.url}${p}`;
}
