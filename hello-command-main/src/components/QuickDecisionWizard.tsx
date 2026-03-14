import { useState, useEffect } from "react";
import { X, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QualityBarsGroup } from "@/components/QualityBar";
import { meatCuts, getPriceCategoryLabel } from "@/data/meatData";
import { CutImage } from "@/components/CutImage";
import { type Section } from "@/hooks/useAppState";

interface Props {
  onClose: () => void;
  onNavigate: (section: Section, id?: string) => void;
}

const cookingOptions = [
  { id: "bife", label: "Bife", icon: "🥩" },
  { id: "churrasco", label: "Churrasco", icon: "🔥" },
  { id: "panela", label: "Panela", icon: "🍲" },
  { id: "forno", label: "Forno", icon: "🍖" },
  { id: "airfryer", label: "Air Fryer", icon: "💨" },
];

const priorityOptions = [
  { id: "cheap", label: "Barata", icon: "💰" },
  { id: "tender", label: "Macia", icon: "✨" },
  { id: "costbenefit", label: "Custo-benefício", icon: "⚖️" },
];

const methodKeywords: Record<string, string[]> = {
  bife: ["Frigideira", "Grelha"],
  churrasco: ["Churrasqueira", "Grelha", "Fogo de chão"],
  panela: ["Panela de pressão", "Cozido", "Ensopado"],
  forno: ["Forno", "Forno baixo"],
  airfryer: ["Frigideira", "Grelha", "Forno"],
};

function getRecommendations(method: string, priority: string) {
  const keywords = methodKeywords[method] || [];
  let filtered = meatCuts.filter((c) =>
    c.cookingMethods.some((cm) =>
      keywords.some((kw) => cm.toLowerCase().includes(kw.toLowerCase()))
    )
  );

  if (method === "airfryer") {
    filtered = meatCuts.filter((c) =>
      ["contra-file", "alcatra", "file-mignon", "maminha", "fraldinha"].includes(c.id)
    );
  }

  switch (priority) {
    case "cheap":
      return filtered.sort((a, b) => {
        const order = { budget: 0, affordable: 1, moderate: 2, premium: 3, luxury: 4 };
        return (order[a.priceCategory] ?? 5) - (order[b.priceCategory] ?? 5);
      }).slice(0, 3);
    case "tender":
      return filtered.sort((a, b) => b.tenderness - a.tenderness).slice(0, 3);
    case "costbenefit":
      return filtered.sort((a, b) => b.costBenefit - a.costBenefit).slice(0, 3);
    default:
      return filtered.slice(0, 3);
  }
}

export function QuickDecisionWizard({ onClose, onNavigate }: Props) {
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState("");
  const [priority, setPriority] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const results = step === 3 ? getRecommendations(method, priority) : [];

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-end sm:items-center justify-center">
      <div className="bg-card border border-border rounded-t-2xl sm:rounded-2xl w-full max-w-md max-h-[85vh] overflow-y-auto shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ChefHat className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Assistente Rápido</h3>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-5 space-y-5">
          {step === 1 && (
            <>
              <p className="text-base font-medium text-foreground">Como você vai preparar a carne?</p>
              <div className="grid grid-cols-2 gap-3">
                {cookingOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => { setMethod(opt.id); setStep(2); }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-accent transition-all active:scale-95"
                  >
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="text-sm font-medium text-foreground">{opt.label}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <p className="text-base font-medium text-foreground">Quer uma carne:</p>
              <div className="grid grid-cols-1 gap-3">
                {priorityOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => { setPriority(opt.id); setStep(3); }}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-accent transition-all active:scale-95"
                  >
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="text-sm font-medium text-foreground">{opt.label}</span>
                  </button>
                ))}
              </div>
              <Button variant="ghost" size="sm" onClick={() => setStep(1)}>← Voltar</Button>
            </>
          )}

          {step === 3 && (
            <>
              <p className="text-base font-medium text-foreground">Recomendações para você:</p>
              <div className="space-y-3">
                {results.map((cut) => (
                  <Card
                    key={cut.id}
                    className="cursor-pointer hover:border-primary/50 transition-all active:scale-[0.98]"
                    onClick={() => { onClose(); onNavigate("cut-detail", cut.id); }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <CutImage cutId={cut.id} size="sm" />
                        <h4 className="font-semibold text-foreground">{cut.name}</h4>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground ml-auto">
                          {getPriceCategoryLabel(cut.priceCategory)}
                        </span>
                      </div>
                      <QualityBarsGroup tenderness={cut.tenderness} flavor={cut.flavor} costBenefit={cut.costBenefit} size="sm" />
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => setStep(1)}>Recomeçar</Button>
                <Button variant="outline" size="sm" onClick={onClose}>Fechar</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
