import { meatCuts } from "@/data/meatData";
import { Card, CardContent } from "@/components/ui/card";
import { Map, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { QualityBarsGroup } from "@/components/QualityBar";
import { type Section } from "@/hooks/useAppState";
import beefDiagram from "@/assets/beef-cuts-diagram.png";

interface Props {
  onNavigate: (section: Section, id?: string) => void;
}

const regions = [
  { key: "front" as const, label: "Dianteiro", emoji: "🦴", color: "bg-primary/5 border-primary/20" },
  { key: "rib" as const, label: "Costelas / Lombo", emoji: "🥩", color: "bg-accent/50 border-accent-foreground/10" },
  { key: "rear" as const, label: "Traseiro", emoji: "🔥", color: "bg-secondary/50 border-secondary-foreground/10" },
];

export function CutsMapSection({ onNavigate }: Props) {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-2">
        <Map className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Mapa de Cortes</h2>
      </div>
      <p className="text-sm text-muted-foreground">Clique em um corte para ver detalhes completos.</p>

      {/* Beef cuts diagram */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <img
            src={beefDiagram}
            alt="Diagrama de cortes bovinos mostrando a localização de cada corte no boi"
            className="w-full h-auto"
          />
        </CardContent>
      </Card>

      {/* Premium vs Traditional info */}
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="p-4 flex items-start gap-3">
          <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Miolo = Versão Premium</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cortes como Acém, Paleta e Alcatra possuem uma parte interna chamada <strong className="text-foreground">miolo</strong>, que é mais macia e nobre. 
              O miolo, quando bem cortado pelo açougueiro, fica macio o suficiente para bife. Já a versão tradicional é ideal para panela e cozidos.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {regions.map((region) => {
          const cuts = meatCuts.filter((c) => c.region === region.key);
          return (
            <Card key={region.key} className={`${region.color} border`}>
              <CardContent className="p-5">
                <div className="text-center mb-4">
                  <span className="text-3xl">{region.emoji}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{region.label}</h3>
                </div>
                <div className="space-y-3">
                  {cuts.map((cut) => {
                    const isPremium = cut.id.startsWith("miolo-");
                    return (
                      <button
                        key={cut.id}
                        onClick={() => onNavigate("cut-detail", cut.id)}
                        className="w-full text-left p-3 rounded-lg bg-card/80 hover:bg-card border border-border hover:border-primary/50 transition-all group"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors flex-1">
                            {cut.name}
                          </p>
                          {isPremium && (
                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                              ⭐ Premium
                            </Badge>
                          )}
                        </div>
                        <QualityBarsGroup
                          tenderness={cut.tenderness}
                          flavor={cut.flavor}
                          costBenefit={cut.costBenefit}
                          size="sm"
                        />
                        <p className="text-xs text-muted-foreground mt-2">{cut.location}</p>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
