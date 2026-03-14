import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QualityBarsGroup } from "@/components/QualityBar";
import { cookingMethods, getCutsForMethod } from "@/data/cookingMethods";
import { getPriceCategoryLabel } from "@/data/meatData";
import { CutImage } from "@/components/CutImage";
import { type Section } from "@/hooks/useAppState";

interface Props {
  methodId: string;
  onNavigate: (section: Section, id?: string) => void;
}

export function CookingMethodDetailSection({ methodId, onNavigate }: Props) {
  const method = cookingMethods.find((m) => m.id === methodId);
  const cuts = getCutsForMethod(methodId);

  if (!method) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>Método não encontrado.</p>
        <Button variant="ghost" className="mt-4" onClick={() => onNavigate("home")}>
          Voltar ao início
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in pb-24">
      <button
        onClick={() => onNavigate("home")}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </button>

      <div className="text-center space-y-2">
        <span className="text-4xl">{method.icon}</span>
        <h2 className="text-2xl font-bold text-foreground">{method.title}</h2>
        <p className="text-muted-foreground">{method.subtitle}</p>
      </div>

      <h3 className="text-lg font-semibold text-foreground">
        Melhores carnes para {method.title.toLowerCase()}
      </h3>

      <div className="space-y-4">
        {cuts.map((cut) => (
          <Card
            key={cut.id}
            className="cursor-pointer hover:border-primary/50 transition-all active:scale-[0.98]"
            onClick={() => onNavigate("cut-detail", cut.id)}
          >
            <CardContent className="p-4 sm:p-5 space-y-3">
              <div className="flex items-center gap-3">
                <CutImage cutId={cut.id} size="md" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground text-base">{cut.name}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">{cut.description.slice(0, 100)}…</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground shrink-0 whitespace-nowrap">
                  {getPriceCategoryLabel(cut.priceCategory)}
                </span>
              </div>
              <QualityBarsGroup
                tenderness={cut.tenderness}
                flavor={cut.flavor}
                costBenefit={cut.costBenefit}
                size="sm"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      {cuts.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          Nenhum corte encontrado para este método.
        </p>
      )}
    </div>
  );
}
