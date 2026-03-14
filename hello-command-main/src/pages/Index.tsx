import { useEffect, useRef } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { BottomNav } from "@/components/BottomNav";
import { useAppState } from "@/hooks/useAppState";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { HomeSection } from "@/components/sections/HomeSection";
import { AssistantSection } from "@/components/sections/AssistantSection";
import { CutsMapSection } from "@/components/sections/CutsMapSection";
import { CutDetailSection } from "@/components/sections/CutDetailSection";
import { PriceDetectorSection } from "@/components/sections/PriceDetectorSection";
import { MeatScannerSection } from "@/components/sections/MeatScannerSection";
import { CookingGuidesSection } from "@/components/sections/CookingGuidesSection";
import { CookingMethodDetailSection } from "@/components/sections/CookingMethodDetailSection";
import { GuideDetailSection } from "@/components/sections/GuideDetailSection";
import { KnowledgeSection } from "@/components/sections/KnowledgeSection";
import { ArticleDetailSection } from "@/components/sections/ArticleDetailSection";
import { FavoritesSection } from "@/components/sections/FavoritesSection";
import { SettingsSection } from "@/components/sections/SettingsSection";

const sectionTitles: Record<string, string> = {
  home: "Home",
  assistant: "Assistente IA",
  "cuts-map": "Mapa de Cortes",
  "price-detector": "Detector de Preço",
  "meat-scanner": "Scanner de Carne",
  "cooking-guides": "Guias de Preparo",
  "cooking-method": "Método de Preparo",
  knowledge: "Biblioteca",
  favorites: "Favoritos",
  settings: "Configurações",
  "cut-detail": "Detalhe do Corte",
  "guide-detail": "Guia",
  "article-detail": "Artigo",
};

export default function Index() {
  const { state, navigate, toggleFavorite, updateSettings } = useAppState();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", state.settings.theme === "dark");
  }, [state.settings.theme]);

  // Scroll to top on section change
  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
  }, [state.currentSection]);

  const renderSection = () => {
    switch (state.currentSection) {
      case "home":
        return <HomeSection onNavigate={navigate} />;
      case "assistant":
        return <AssistantSection />;
      case "cuts-map":
        return <CutsMapSection onNavigate={navigate} />;
      case "cut-detail":
        return state.selectedCutId ? (
          <CutDetailSection
            cutId={state.selectedCutId}
            isFavorite={state.favorites.cuts.includes(state.selectedCutId)}
            onToggleFavorite={() => toggleFavorite("cuts", state.selectedCutId!)}
            onNavigate={navigate}
          />
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p>Corte não encontrado. Selecione um corte no mapa.</p>
          </div>
        );
      case "price-detector":
        return <PriceDetectorSection onNavigate={navigate} />;
      case "meat-scanner":
        return <MeatScannerSection />;
      case "cooking-guides":
        return <CookingGuidesSection onNavigate={navigate} />;
      case "cooking-method":
        return state.selectedMethodId ? (
          <CookingMethodDetailSection methodId={state.selectedMethodId} onNavigate={navigate} />
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p>Método não encontrado.</p>
          </div>
        );
      case "guide-detail":
        return state.selectedGuideId ? (
          <GuideDetailSection
            guideId={state.selectedGuideId}
            isFavorite={state.favorites.guides.includes(state.selectedGuideId)}
            onToggleFavorite={() => toggleFavorite("guides", state.selectedGuideId!)}
            onNavigate={navigate}
          />
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p>Guia não encontrado.</p>
          </div>
        );
      case "knowledge":
        return <KnowledgeSection onNavigate={navigate} />;
      case "article-detail":
        return state.selectedArticleId ? (
          <ArticleDetailSection articleId={state.selectedArticleId} onNavigate={navigate} />
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p>Artigo não encontrado.</p>
          </div>
        );
      case "favorites":
        return (
          <FavoritesSection
            favorites={state.favorites}
            onToggleFavorite={toggleFavorite}
            onNavigate={navigate}
          />
        );
      case "settings":
        return <SettingsSection settings={state.settings} onUpdateSettings={updateSettings} />;
      default:
        return <HomeSection onNavigate={navigate} />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar currentSection={state.currentSection} onNavigate={navigate} />
        <div className="flex-1 flex flex-col min-h-screen">
          <header className="h-12 flex items-center border-b border-border px-4 bg-card/50 backdrop-blur-sm shrink-0">
            <SidebarTrigger className="mr-3" />
            <span className="text-sm font-medium text-muted-foreground">
              {sectionTitles[state.currentSection] || ""}
            </span>
          </header>
          <main ref={mainRef} className="flex-1 overflow-y-auto p-4 md:p-6 pb-20 md:pb-6">
            <ErrorBoundary fallbackMessage="Ocorreu um erro nesta seção. Clique para tentar novamente.">
              {renderSection()}
            </ErrorBoundary>
          </main>
        </div>
        <BottomNav currentSection={state.currentSection} onNavigate={navigate} />
      </div>
    </SidebarProvider>
  );
}
