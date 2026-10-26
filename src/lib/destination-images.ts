/** Local images shown when an API image URL is missing or fails to load. */
export const FALLBACK_IMAGES = [
  "/image1.png",
  "/image2.png",
  "/image3.png",
  "/image4.png",
  "/image5.png",
];

/** Category → the most related local image, used when the API image is invalid. */
const RELATED_BY_CATEGORY: Record<string, string> = {
  beach: "/image2.png",
  island: "/image5.png",
  resort: "/image5.png",
  mountain: "/image4.png",
  trekking: "/image4.png",
  hiking: "/image4.png",
  city: "/image3.png",
  cultural: "/image3.png",
  heritage: "/image3.png",
  adventure: "/image1.png",
  desert: "/image1.png",
  safari: "/image1.png",
};

/**
 * Best-fit local image for a destination: picks the related image for its
 * category when possible, otherwise cycles through the local gallery.
 */
export function fallbackImageFor({
  category,
  index = 0,
}: {
  category?: string;
  index?: number;
}) {
  const key = category?.trim().toLowerCase() ?? "";
  if (key) {
    if (RELATED_BY_CATEGORY[key]) return RELATED_BY_CATEGORY[key];
    // Tolerate compound categories such as "Beach & relaxation".
    const match = Object.entries(RELATED_BY_CATEGORY).find(([token]) =>
      key.includes(token),
    );
    if (match) return match[1];
  }
  return FALLBACK_IMAGES[Math.abs(index) % FALLBACK_IMAGES.length];
}

/**
 * A usable image source: absolute http(s) URLs and local paths are accepted,
 * anything else (e.g. "inayaimageee.jpg") would 404, so it is rejected.
 */
export function isValidImageUrl(src?: string) {
  const value = src?.trim();
  if (!value) return false;
  if (value.startsWith("/") || value.startsWith("./")) return true;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}
