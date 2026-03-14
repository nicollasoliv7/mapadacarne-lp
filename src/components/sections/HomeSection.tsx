import { useState } from "react";
import { Search, Beef, TrendingUp, Camera, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QualityBarsGroup } from "@/components/QualityBar";
import { QuickDecisionWizard } from "@/components/QuickDecisionWizard";
import { CutImage } from "@/components/CutImage";
import { dailyTips, meatCuts, getCostBenefitCuts, getPriceCategoryLabel } from "@/data/meatData";
import { cookingMethods } from "@/data/cookingMethods";
import { type Section } from "@/hooks/useAppState";

interface Props {
  onNavigate: (section: Section, id?: string) => void;
}

export function HomeSection({ onNavigate }: Props) {
  const [search, setSearch] = useState("");
  const [tip] = useState(() => dailyTips[Math.floor(Math.random() * dailyTips.length)]);
  const [showWizard, setShowWizard] = useState(false);
  const bestCuts = getCostBenefitCuts();

  const filteredCuts = search
    ? meatCuts.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in pb-20">
      {/* Search */}
      <div className="space-y-3 pt-4">
        <h2 className="text-2xl font-bold text-foreground text-center">
          Qual carne você quer escolher hoje?
        </h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar cortes, guias, dicas..."
            className="pl-10 h-12 text-base bg-card border-border rounded-xl"
          />
        </div>
        {filteredCuts.length > 0 && (
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            {filteredCuts.map((cut) => (
              <button
                key={cut.id}
                onClick={() => onNavigate("cut-detail", cut.id)}
                className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-3 border-b border-border last:border-0 active:scale-[0.98]"
              >
                <Beef className="h-4 w-4 text-primary" />
                <span className="text-foreground">{cut.name}</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  {cut.region === "front" ? "Dianteiro" : cut.region === "rear" ? "Traseiro" : "Costelas"}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Cooking method cards */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">
          Como você vai preparar a carne hoje?
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {cookingMethods.map((m) => (
            <Card
              key={m.id}
              className="cursor-pointer hover:border-primary/50 transition-all hover:shadow-md active:scale-[0.97] group"
              onClick={() => onNavigate("cooking-method", m.id)}
            >
              <CardContent className="p-5 text-center space-y-2">
                <span className="text-3xl block group-hover:scale-110 transition-transform">{m.icon}</span>
                <p className="text-sm font-semibold text-foreground">{m.title}</p>
                <p className="text-xs text-muted-foreground">{m.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="outline"
          className="h-auto min-h-[3.5rem] rounded-xl gap-2 text-xs sm:text-sm font-medium border-primary/30 hover:bg-primary/5 whitespace-normal py-3 px-3"
          onClick={() => setShowWizard(true)}
        >
          <HelpCircle className="h-5 w-5 text-primary shrink-0" />
          <span>Me ajuda a escolher</span>
        </Button>
        <Button
          variant="outline"
          className="h-auto min-h-[3.5rem] rounded-xl gap-2 text-xs sm:text-sm font-medium border-primary/30 hover:bg-primary/5 whitespace-normal py-3 px-3"
          onClick={() => onNavigate("meat-scanner")}
        >
          <Camera className="h-5 w-5 text-primary shrink-0" />
          <span>📸 Fotografar carne</span>
        </Button>
      </div>

      {/* Butcher tip */}
      <Card className="border-primary/30 bg-primary/5 rounded-xl">
        <CardContent className="p-4 sm:p-5 flex items-start gap-3">
          <span className="text-xl shrink-0 mt-0.5">💡</span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground mb-1">Dica do Açougueiro</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
          </div>
        </CardContent>
      </Card>

      {/* Smart suggestions */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Escolhas inteligentes de hoje</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3">Melhor custo-benefício hoje</p>
        <div className="space-y-3">
          {bestCuts.slice(0, 3).map((cut) => (
            <Card
              key={cut.id}
              className="cursor-pointer hover:border-primary/50 transition-all active:scale-[0.98]"
              onClick={() => onNavigate("cut-detail", cut.id)}
            >
              <CardContent className="p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <CutImage cutId={cut.id} size="md" />
                  <h4 className="font-semibold text-foreground flex-1">{cut.name}</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground shrink-0">
                    {getPriceCategoryLabel(cut.priceCategory)}
                  </span>
                </div>
                <QualityBarsGroup tenderness={cut.tenderness} flavor={cut.flavor} costBenefit={cut.costBenefit} size="sm" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {showWizard && (
        <QuickDecisionWizard onClose={() => setShowWizard(false)} onNavigate={onNavigate} />
      )}
    </div>
  );
}
