import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { knowledgeArticles } from "@/data/meatData";
import { type Section } from "@/hooks/useAppState";

interface Props {
  articleId: string;
  onNavigate: (section: Section) => void;
}

export function ArticleDetailSection({ articleId, onNavigate }: Props) {
  const article = knowledgeArticles.find((a) => a.id === articleId);
  if (!article) return <p className="text-muted-foreground">Artigo não encontrado.</p>;

  return (
    <div className="max-w-3xl mx-auto space-y-4 animate-fade-in">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => onNavigate("knowledge")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex-1">
          <Badge variant="secondary" className="mb-1">{article.category}</Badge>
          <h2 className="text-xl font-bold text-foreground">{article.title}</h2>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-foreground leading-relaxed">{article.content}</p>
        </CardContent>
      </Card>
    </div>
  );
}
