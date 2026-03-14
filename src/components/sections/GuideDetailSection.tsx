import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cookingGuides } from "@/data/meatData";
import { type Section } from "@/hooks/useAppState";
import ReactMarkdown from "react-markdown";

interface Props {
  guideId: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onNavigate: (section: Section) => void;
}

export function GuideDetailSection({ guideId, isFavorite, onToggleFavorite, onNavigate }: Props) {
  const guide = cookingGuides.find((g) => g.id === guideId);
  if (!guide) return <p className="text-muted-foreground">Guia não encontrado.</p>;

  return (
    <div className="max-w-3xl mx-auto space-y-4 animate-fade-in">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => onNavigate("cooking-guides")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <span className="text-2xl">{guide.icon}</span>
        <h2 className="text-xl font-bold text-foreground flex-1">{guide.title}</h2>
        <Button variant="ghost" size="icon" onClick={onToggleFavorite}>
          <Heart className={`h-5 w-5 ${isFavorite ? "fill-primary text-primary" : "text-muted-foreground"}`} />
        </Button>
      </div>

      <Card>
        <CardContent className="p-6 prose prose-sm dark:prose-invert max-w-none">
          <ReactMarkdown>{guide.content}</ReactMarkdown>
        </CardContent>
      </Card>
    </div>
  );
}
