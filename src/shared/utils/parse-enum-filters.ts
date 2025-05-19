function parseEnumArray<T extends string>(
  value: string | null,
  allowed: T[]
): T[] {
  if (!value) return [];
  return value
    .split(",")
    .map((v) => v.toUpperCase())
    .filter((v): v is T => allowed.includes(v as T));
}

function parseStringArray(value: string | null): string[] {
  if (!value) return [];
  return value.split(",").filter(Boolean);
}

export { parseEnumArray, parseStringArray };
