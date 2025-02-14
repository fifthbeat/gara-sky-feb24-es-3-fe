import { BaseEntity } from "../services/types";

type Image = BaseEntity["images"][number];

export function getImageUrlByUsage(images: Image[], usage: Image["usage"]): string | undefined {
  return images.find((image) => image.usage === usage)?.url;
}
