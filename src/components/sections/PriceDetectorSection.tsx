import { useState } from "react";
import { DollarSign, TrendingDown, TrendingUp, Minus, ArrowRight, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { meatCuts, priceRanges, getPriceCategoryLabel } from "@/data/meatData";
import { CutImage } from "@/components/CutImage";
import { type Section } from "@/hooks/useAppState";
import { toast } from "sonner";

interface Props {
  onNavigate: (section: Section, id?: string) => void;
}

const MIN_PRICE = 0.01;
const MAX_PRICE = 9999;

export function PriceDetectorSection({ onNavigate }: Props) {
  const [selectedCut, setSelectedCut] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<null | { eval: string; color: string; icon: React.ReactNode; alternatives: typeof meatCuts }>(null);

  const validate = (): string | null => {
    if (!selectedCut) return "Selecione um corte de carne.";
    if (!price.trim()) return "Informe o preço por kg.";
    const p = parseFloat(price);
    if (isNaN(p)) return "O preço deve ser um número válido.";
    if (p < MIN_PRICE) return `O preço mínimo é R$ ${MIN_PRICE}.`;
    if (p > MAX_PRICE) return `O preço máximo é R$ ${MAX_PRICE}.`;
    if (!priceRanges[selectedCut]) return "Dados de preço indisponíveis para este corte.";
    return null;
  };

  const evaluate = () => {
    try {
      const validationError = validate();
      if (validationError) {
        setError(validationError);
        toast.error(validationError);
        return;
      }

      setError(null);
      const p = parseFloat(price);
      const range = priceRanges[selectedCut];

      let evalResult: string;
      let color: string;
      let icon: React.ReactNode;

      if (p <= range.cheap) {
        evalResult = "Barato! 🎉";
        color = "text-success";
        icon = <TrendingDown className="h-8 w-8 text-success" />;
      } else if (p <= range.fair) {
        evalResult = "Preço justo ✓";
        color = "text-warning";
        icon = <Minus className="h-8 w-8 text-warning" />;
      } else {
        evalResult = "Caro! ⚠️";
        color = "text-destructive";
        icon = <TrendingUp className="h-8 w-8 text-destructive" />;
      }

      const cut = meatCuts.find((c) => c.id === selectedCut);
      const alternatives = cut
        ? cut.relatedCuts
            .map((id) => meatCuts.find((c) => c.id === id))
            .filter((c): c is (typeof meatCuts)[0] => c != null)
        : [];

      setResult({ eval: evalResult, color, icon, alternatives });
    } catch {
      const msg = "Erro ao avaliar o preço. Tente novamente.";
      setError(msg);
      toast.error(msg);
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Allow empty, digits, and one decimal point
    if (val === "" || /^\d*\.?\d{0,2}$/.test(val)) {
      setPrice(val);
      setError(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-2">
        <DollarSign className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Detector de Preço</h2>
      </div>
      <p className="text-sm text-muted-foreground">Descubra se o preço que você encontrou é justo.</p>

      {/* Price photo upload prompt */}
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="p-4 flex items-start gap-3">
          <span className="text-xl shrink-0 mt-0.5">📸</span>
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Dica: envie a tabela de preços!</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fotografe a tabela de preços do açougue onde você está comprando ou frequenta e envie para nós. 
              Assim atualizamos os preços com valores reais e te ajudamos a avaliar melhor!
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5 space-y-4">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Corte de carne</label>
            <Select value={selectedCut} onValueChange={(v) => { setSelectedCut(v); setError(null); }}>
              <SelectTrigger className="bg-card">
                <SelectValue placeholder="Selecione o corte" />
              </SelectTrigger>
              <SelectContent>
                {meatCuts.map((cut) => (
                  <SelectItem key={cut.id} value={cut.id}>{cut.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Preço por kg (R$)</label>
            <Input
              type="text"
              inputMode="decimal"
              value={price}
              onChange={handlePriceChange}
              placeholder="Ex: 65.00"
              className="bg-card"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-sm text-destructive">
              <AlertTriangle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <Button onClick={evaluate} disabled={!selectedCut || !price} className="w-full">
            Avaliar Preço
          </Button>
        </CardContent>
      </Card>

      {result && (
        <div className="space-y-4 animate-fade-in">
          <Card className="border-primary/30">
            <CardContent className="p-6 text-center space-y-3">
              {result.icon}
              <p className={`text-2xl font-bold ${result.color}`}>{result.eval}</p>
              <p className="text-sm text-muted-foreground">
                {meatCuts.find((c) => c.id === selectedCut)?.name ?? "Corte"} — R$ {price}/kg
              </p>
            </CardContent>
          </Card>

          {result.alternatives.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Alternativas sugeridas:</h3>
              <div className="space-y-2">
                {result.alternatives.map((alt) => (
                  <Card
                    key={alt.id}
                    className="cursor-pointer hover:border-primary/50 transition-all"
                    onClick={() => onNavigate("cut-detail", alt.id)}
                  >
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CutImage cutId={alt.id} size="sm" />
                        <div>
                          <p className="font-medium text-foreground">{alt.name}</p>
                          <p className="text-xs text-muted-foreground">{getPriceCategoryLabel(alt.priceCategory)}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
