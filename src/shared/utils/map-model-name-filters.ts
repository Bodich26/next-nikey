function mapModelFilterToName(key: string): string {
  const mapping: Record<string, string> = {
    airMax: "Air Max",
    airForce: "Air Force",
    leBron: "LeBron",
    courtLegacy: "Court Legacy",
    dunk: "Dunk",
    book: "Book",
    structure: "Structure",
    sonic: "Sonic",
    pegasus: "Pegasus",
    field: "Field",
    aCG: "ACG",
  };

  return mapping[key] || key;
}

export { mapModelFilterToName };
