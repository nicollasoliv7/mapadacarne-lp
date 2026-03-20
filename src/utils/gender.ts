// Simple heuristic for Brazilian names
const MASC_EXCEPTIONS = ["nikita", "luca", "joshua", "elisha", "dante", "henrique", "alexandre"];
const FEM_EXCEPTIONS = ["alice", "grace", "ingrid", "rachel", "isabel", "raquel", "gisele", "nicole", "estér", "ester", "jennifer", "heather", "summer", "jade", "dulce"];

export function detectGender(name: string): "f" | "m" {
  const first = name.trim().split(" ")[0].toLowerCase();
  if (FEM_EXCEPTIONS.some((e) => first === e)) return "f";
  if (MASC_EXCEPTIONS.some((e) => first === e)) return "m";
  // Names ending in 'a' are feminine in Brazilian Portuguese
  if (first.endsWith("a") || first.endsWith("ane") || first.endsWith("ine") || first.endsWith("elle")) return "f";
  return "m";
}
