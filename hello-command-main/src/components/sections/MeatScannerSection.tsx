import { useState, useRef } from "react";
import { ScanLine, Upload, Camera, Check, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { meatCuts } from "@/data/meatData";
import { toast } from "sonner";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export function MeatScannerSection() {
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<null | {
    cut: string;
    quality: string;
    color: string;
    marbling: string;
    texture: string;
    cooking: string;
  }>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      const msg = "Formato não suportado. Use JPG, PNG, WebP ou GIF.";
      setError(msg);
      toast.error(msg);
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      const msg = "Imagem muito grande. O tamanho máximo é 10MB.";
      setError(msg);
      toast.error(msg);
      return;
    }

    try {
      const reader = new FileReader();
      reader.onerror = () => {
        const msg = "Erro ao ler a imagem. Tente novamente.";
        setError(msg);
        toast.error(msg);
      };
      reader.onload = (ev) => {
        const result = ev.target?.result;
        if (typeof result !== "string") {
          toast.error("Erro ao processar a imagem.");
          return;
        }
        setImage(result);
        setResult(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    } catch {
      const msg = "Erro inesperado ao carregar a imagem.";
      setError(msg);
      toast.error(msg);
    }
  };

  const analyze = () => {
    try {
      if (!image) {
        toast.error("Envie uma imagem antes de analisar.");
        return;
      }

      setAnalyzing(true);
      setError(null);

      setTimeout(() => {
        try {
          if (meatCuts.length === 0) {
            throw new Error("Base de dados indisponível");
          }

          const randomCut = meatCuts[Math.floor(Math.random() * meatCuts.length)];
          const qualities = ["Excelente", "Boa", "Regular"];
          const colors = ["Vermelho vivo — ótima frescura", "Vermelho escuro — carne maturada", "Rosado — carne jovem"];
          const textures = ["Firme e elástica", "Macia ao toque", "Consistência normal"];
          const marblings = ["Alto — muita gordura entremeada", "Moderado — boa distribuição", "Baixo — carne mais magra"];

          setResult({
            cut: randomCut.name,
            quality: qualities[Math.floor(Math.random() * qualities.length)],
            color: colors[Math.floor(Math.random() * colors.length)],
            marbling: marblings[Math.floor(Math.random() * marblings.length)],
            texture: textures[Math.floor(Math.random() * textures.length)],
            cooking: randomCut.cookingMethods?.[0] ?? "Grelhar",
          });
          toast.success("Análise concluída com sucesso!");
        } catch {
          const msg = "Erro ao analisar a imagem. Tente novamente.";
          setError(msg);
          toast.error(msg);
        } finally {
          setAnalyzing(false);
        }
      }, 2000);
    } catch {
      setAnalyzing(false);
      toast.error("Erro inesperado. Tente novamente.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-2">
        <ScanLine className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Scanner de Carne</h2>
      </div>
      <p className="text-sm text-muted-foreground">Envie uma foto da carne para análise simulada de qualidade.</p>

      <input type="file" accept="image/*" ref={fileRef} onChange={handleUpload} className="hidden" />

      {error && (
        <Card className="border-destructive/30 bg-destructive/5">
          <CardContent className="p-4 flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive shrink-0" />
            <p className="text-sm text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}

      {!image ? (
        <Card className="border-dashed border-2 border-muted-foreground/30">
          <CardContent className="p-12 text-center space-y-4">
            <Camera className="h-12 w-12 mx-auto text-muted-foreground" />
            <p className="text-muted-foreground">Tire uma foto ou envie uma imagem da carne</p>
            <p className="text-xs text-muted-foreground">Formatos: JPG, PNG, WebP, GIF (máx. 10MB)</p>
            <Button onClick={() => fileRef.current?.click()}>
              <Upload className="h-4 w-4 mr-2" /> Enviar Imagem
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-border">
            <img
              src={image}
              alt="Meat scan"
              className="w-full h-64 object-cover"
              onError={() => {
                setImage(null);
                toast.error("Erro ao exibir a imagem. Tente outro arquivo.");
              }}
            />
          </div>
          <div className="flex gap-2">
            <Button onClick={analyze} disabled={analyzing} className="flex-1">
              {analyzing ? "Analisando..." : "Analisar Carne"}
            </Button>
            <Button variant="outline" onClick={() => { setImage(null); setResult(null); setError(null); }}>
              Nova Foto
            </Button>
          </div>
        </div>
      )}

      {result && (
        <Card className="border-primary/30 animate-fade-in">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Check className="h-5 w-5" />
              <h3 className="font-semibold">Resultado da Análise</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Corte Detectado</p>
                <p className="font-medium text-foreground">{result.cut}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Qualidade Estimada</p>
                <Badge variant="secondary">{result.quality}</Badge>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Cor</p>
                <p className="text-sm text-foreground">{result.color}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Marmoreio</p>
                <p className="text-sm text-foreground">{result.marbling}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Textura</p>
                <p className="text-sm text-foreground">{result.texture}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Preparo Sugerido</p>
                <p className="text-sm text-foreground">{result.cooking}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
