import { useState, useCallback } from "react";

export type Section =
  | "home"
  | "assistant"
  | "cuts-map"
  | "price-detector"
  | "meat-scanner"
  | "cooking-guides"
  | "cooking-method"
  | "knowledge"
  | "favorites"
  | "settings"
  | "cut-detail"
  | "guide-detail"
  | "article-detail";

export interface AppState {
  currentSection: Section;
  selectedCutId: string | null;
  selectedGuideId: string | null;
  selectedArticleId: string | null;
  selectedMethodId: string | null;
  favorites: {
    cuts: string[];
    guides: string[];
    responses: string[];
  };
  settings: {
    theme: "dark" | "light";
    priceUnit: string;
    cookingPreference: string;
    region: string;
  };
}

const loadFavorites = (): AppState["favorites"] => {
  const fallback = { cuts: [], guides: [], responses: [] };
  try {
    const saved = localStorage.getItem("mapa-carne-favorites");
    if (!saved) return fallback;
    const parsed = JSON.parse(saved);
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      Array.isArray(parsed.cuts) &&
      Array.isArray(parsed.guides) &&
      Array.isArray(parsed.responses)
    ) {
      return parsed;
    }
    return fallback;
  } catch {
    return fallback;
  }
};

const loadSettings = (): AppState["settings"] => {
  const fallback = { theme: "light" as const, priceUnit: "R$/kg", cookingPreference: "Churrasqueira", region: "Brasil" };
  try {
    const saved = localStorage.getItem("mapa-carne-settings");
    if (!saved) return fallback;
    const parsed = JSON.parse(saved);
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      (parsed.theme === "dark" || parsed.theme === "light")
    ) {
      return { ...fallback, ...parsed };
    }
    return fallback;
  } catch {
    return fallback;
  }
};

export function useAppState() {
  const [state, setState] = useState<AppState>({
    currentSection: "home",
    selectedCutId: null,
    selectedGuideId: null,
    selectedArticleId: null,
    selectedMethodId: null,
    favorites: loadFavorites(),
    settings: loadSettings(),
  });

  const navigate = useCallback((section: Section, id?: string) => {
    setState((prev) => ({
      ...prev,
      currentSection: section,
      selectedCutId: section === "cut-detail" ? id || null : prev.selectedCutId,
      selectedGuideId: section === "guide-detail" ? id || null : prev.selectedGuideId,
      selectedArticleId: section === "article-detail" ? id || null : prev.selectedArticleId,
      selectedMethodId: section === "cooking-method" ? id || null : prev.selectedMethodId,
    }));
  }, []);

  const toggleFavorite = useCallback((type: "cuts" | "guides" | "responses", id: string) => {
    setState((prev) => {
      const list = prev.favorites[type];
      const newList = list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
      const newFavorites = { ...prev.favorites, [type]: newList };
      localStorage.setItem("mapa-carne-favorites", JSON.stringify(newFavorites));
      return { ...prev, favorites: newFavorites };
    });
  }, []);

  const updateSettings = useCallback((updates: Partial<AppState["settings"]>) => {
    setState((prev) => {
      const newSettings = { ...prev.settings, ...updates };
      localStorage.setItem("mapa-carne-settings", JSON.stringify(newSettings));
      return { ...prev, settings: newSettings };
    });
  }, []);

  return { state, navigate, toggleFavorite, updateSettings };
}
