import { meatCuts, type MeatCut } from "./meatData";

export interface CookingMethod {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  keywords: string[];
}

export const cookingMethods: CookingMethod[] = [
  {
    id: "bife",
    title: "Bife na frigideira",
    subtitle: "Carnes rápidas e macias",
    icon: "🥩",
    keywords: ["Frigideira", "Grelha"],
  },
  {
    id: "churrasco",
    title: "Churrasco",
    subtitle: "Cortes ideais para brasa",
    icon: "🔥",
    keywords: ["Churrasqueira", "Grelha", "Fogo de chão"],
  },
  {
    id: "forno",
    title: "Assar no forno",
    subtitle: "Carnes para assados suculentos",
    icon: "🍖",
    keywords: ["Forno", "Forno baixo"],
  },
  {
    id: "panela",
    title: "Cozinhar na panela",
    subtitle: "Carnes para cozimento lento",
    icon: "🍲",
    keywords: ["Panela de pressão", "Cozido", "Ensopado"],
  },
  {
    id: "airfryer",
    title: "Air Fryer",
    subtitle: "Carnes rápidas e práticas",
    icon: "💨",
    keywords: ["Frigideira", "Grelha", "Forno"],
  },
  {
    id: "moida",
    title: "Carne moída",
    subtitle: "Hambúrguer e receitas",
    icon: "🍔",
    keywords: ["Moído"],
  },
];

export function getCutsForMethod(methodId: string): MeatCut[] {
  const method = cookingMethods.find((m) => m.id === methodId);
  if (!method) return [];

  // Special case: air fryer works with thin steaks
  if (methodId === "airfryer") {
    return meatCuts.filter((c) =>
      ["contra-file", "alcatra", "file-mignon", "maminha", "fraldinha"].includes(c.id)
    );
  }

  // Special case: carne moída
  if (methodId === "moida") {
    return meatCuts.filter((c) =>
      c.cookingMethods.some((m) => m.toLowerCase().includes("moído")) ||
      ["acem", "fraldinha", "alcatra"].includes(c.id)
    );
  }

  return meatCuts
    .filter((cut) =>
      cut.cookingMethods.some((cm) =>
        method.keywords.some((kw) => cm.toLowerCase().includes(kw.toLowerCase()))
      )
    )
    .sort((a, b) => b.costBenefit - a.costBenefit);
}
