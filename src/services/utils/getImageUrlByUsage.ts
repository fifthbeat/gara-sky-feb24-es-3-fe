import { Image } from "../types";

export function getImageUrlByUsage(images: Image[], usage: Image["usage"]): string | undefined {
  return images.find((image) => image.usage === usage)?.url;
}
