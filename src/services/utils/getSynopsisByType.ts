export function getSynopsisByType(
  synopsis: Array<{ type: string; value: string }>,
  type: "short" | "medium" | "long"
): string | null {
  const shortSynopsis = synopsis.find((item) => item.type === type);
  return shortSynopsis ? shortSynopsis.value : null;
}
