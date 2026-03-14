import { meatCuts, getPriceCategoryLabel } from "@/data/meatData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft, MapPin, DollarSign, Link, AlertTriangle, ChefHat, Lightbulb, ArrowRightLeft } from "lucide-react";
import { QualityBarsGroup } from "@/components/QualityBar";
import { CutImage } from "@/components/CutImage";
import { type Section } from "@/hooks/useAppState";

interface Props {
  cutId: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onNavigate: (section: Section, id?: string) => void;
}

export function CutDetailSection({ cutId, isFavorite, onToggleFavorite, onNavigate }: Props) {
  const cut = meatCuts.find((c) => c.id === cutId);
  if (!cut) return <p className="text-muted-foreground">Corte não encontrado.</p>;

  const related = cut.relatedCuts
    .map((id) => meatCuts.find((c) => c.id === id))
    .filter((c): c is (typeof meatCuts)[0] => c != null);

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => onNavigate("cuts-map")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold text-foreground flex-1">{cut.name}</h2>
        <Button variant="ghost" size="icon" onClick={onToggleFavorite}>
          <Heart className={`h-5 w-5 ${isFavorite ? "fill-primary text-primary" : "text-muted-foreground"}`} />
        </Button>
      </div>

      {/* Cut location image */}
      <div className="h-48 rounded-lg bg-muted flex items-center justify-center">
        <CutImage cutId={cutId} size="xl" />
      </div>

      {/* Quality Bars */}
      <Card>
        <CardContent className="p-5">
          <h3 className="font-semibold text-foreground mb-3">Avaliação de Qualidade</h3>
          <QualityBarsGroup
            tenderness={cut.tenderness}
            flavor={cut.flavor}
            costBenefit={cut.costBenefit}
          />
        </CardContent>
      </Card>

      {/* Info grid */}
      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardContent className="p-4 text-center">
            <MapPin className="h-4 w-4 mx-auto text-primary mb-1" />
            <p className="text-xs text-muted-foreground">Localização</p>
            <p className="text-sm font-medium text-foreground">{cut.location}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <DollarSign className="h-4 w-4 mx-auto text-primary mb-1" />
            <p className="text-xs text-muted-foreground">Faixa de Preço</p>
            <p className="text-sm font-medium text-foreground">{getPriceCategoryLabel(cut.priceCategory)}</p>
          </CardContent>
        </Card>
      </div>

      {/* Description & Characteristics */}
      <Card>
        <CardContent className="p-5 space-y-3">
          <p className="text-sm text-foreground leading-relaxed">{cut.description}</p>
          <div className="pt-2 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Características</p>
            <p className="text-sm text-foreground leading-relaxed">{cut.characteristics}</p>
          </div>
        </CardContent>
      </Card>

      {/* Cooking & Seasoning */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <ChefHat className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-foreground">Métodos de Preparo</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cut.cookingMethods.map((m) => (
                <Badge key={m} variant="secondary">{m}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-2">Temperos Recomendados</h3>
            <div className="flex flex-wrap gap-2">
              {cut.seasoning.map((s) => (
                <Badge key={s} variant="outline">{s}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Butcher Tips */}
      <Card>
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="h-4 w-4 text-primary" />
            <h3 className="font-semibold text-foreground">Dicas do Açougueiro</h3>
          </div>
          <ul className="space-y-2">
            {cut.butcherTips.map((tip, i) => (
              <li key={i} className="text-sm text-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card className="border-destructive/20">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <h3 className="font-semibold text-foreground">Erros Comuns</h3>
          </div>
          <ul className="space-y-2">
            {cut.commonMistakes.map((mistake, i) => (
              <li key={i} className="text-sm text-foreground flex items-start gap-2">
                <span className="text-destructive mt-0.5">✕</span>
                {mistake}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Smart Substitutions */}
      {cut.smartSubstitutions.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <ArrowRightLeft className="h-4 w-4 text-primary" />
            <h3 className="font-semibold text-foreground">Substituições Inteligentes</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Se {cut.name} estiver cara hoje, experimente:
          </p>
          <div className="space-y-2">
            {cut.smartSubstitutions.map((sub) => {
              const subCut = meatCuts.find((c) => c.id === sub.id);
              if (!subCut) return null;
              return (
                <Card
                  key={sub.id}
                  className="cursor-pointer hover:border-primary/50 transition-all"
                  onClick={() => onNavigate("cut-detail", sub.id)}
                >
                   <CardContent className="p-4 flex items-center gap-3">
                    <CutImage cutId={sub.id} size="sm" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{subCut.name}</p>
                      <p className="text-xs text-muted-foreground">{sub.reason}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {subCut.costBenefit}/10 CB
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Related cuts */}
      {related.length > 0 && (
        <div>
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Link className="h-4 w-4 text-primary" /> Cortes Relacionados
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {related.map((r) => (
              <Card
                key={r.id}
                className="cursor-pointer hover:border-primary/50 transition-all"
                onClick={() => onNavigate("cut-detail", r.id)}
              >
                <CardContent className="p-4 flex items-center gap-2">
                  <CutImage cutId={r.id} size="sm" />
                  <span className="text-sm font-medium text-foreground">{r.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
