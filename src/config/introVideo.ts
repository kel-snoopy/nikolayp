export type IntroVideoMedia =
  | { kind: "iframe"; src: string }
  | { kind: "video"; src: string }
  | { kind: "link"; href: string };

const VIDEO_EXT = /\.(mp4|webm|ogg|mov|m4v)$/i;

function pathLooksLikeVideoFile(pathname: string): boolean {
  return VIDEO_EXT.test(pathname);
}

/**
 * Resolves profile `introVideoUrl` into an embeddable iframe/video src, or falls back to external link.
 * Direct file URLs: any http(s) or site-relative path whose pathname ends in .mp4, .webm, .ogg, .mov, .m4v
 * (query strings allowed, e.g. signed CDN URLs).
 */
export function getIntroVideoMedia(introVideoUrl: string): IntroVideoMedia {
  const trimmed = introVideoUrl.trim();
  if (!trimmed) return { kind: "link", href: "/" };

  try {
    const u = new URL(trimmed, "https://example.org");
    if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) {
      if (pathLooksLikeVideoFile(u.pathname)) {
        return { kind: "video", src: trimmed };
      }
    } else if (pathLooksLikeVideoFile(u.pathname)) {
      return { kind: "video", src: trimmed };
    }
  } catch {
    if (VIDEO_EXT.test((trimmed.split("?")[0] ?? "").toLowerCase())) {
      return { kind: "video", src: trimmed };
    }
  }

  try {
    const u = new URL(trimmed);

    if (u.hostname === "youtu.be") {
      const id = u.pathname.split("/").filter(Boolean)[0];
      if (id) return { kind: "iframe", src: `https://www.youtube.com/embed/${id}` };
    }

    const host = u.hostname.replace(/^www\./, "");
    if (host === "youtube.com" || host === "m.youtube.com") {
      if (u.pathname.startsWith("/embed/")) {
        return { kind: "iframe", src: `${u.origin}${u.pathname}${u.search}` };
      }
      const v = u.searchParams.get("v");
      if (v) return { kind: "iframe", src: `https://www.youtube.com/embed/${v}` };
      const shorts = u.pathname.match(/^\/shorts\/([^/]+)/);
      if (shorts?.[1]) {
        return { kind: "iframe", src: `https://www.youtube.com/embed/${shorts[1]}` };
      }
    }

    if (host.endsWith("vimeo.com")) {
      const m = u.pathname.match(/\/(?:video\/)?(\d+)/);
      if (m?.[1]) {
        return { kind: "iframe", src: `https://player.vimeo.com/video/${m[1]}` };
      }
    }
  } catch {
    /* ignore */
  }

  return { kind: "link", href: trimmed };
}
