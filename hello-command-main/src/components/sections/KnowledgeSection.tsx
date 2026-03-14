import { Library, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { knowledgeArticles } from "@/data/meatData";
import { type Section } from "@/hooks/useAppState";

interface Props {
  onNavigate: (section: Section, id?: string) => void;
}

const categories = [...new Set(knowledgeArticles.map((a) => a.category))];

export function KnowledgeSection({ onNavigate }: Props) {
  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-2">
        <Library className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Biblioteca de Carnes</h2>
      </div>
      <p className="text-sm text-muted-foreground">Base de conhecimento completa sobre carnes.</p>

      {categories.map((cat) => (
        <div key={cat}>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">{cat}</h3>
          <div className="space-y-2">
            {knowledgeArticles
              .filter((a) => a.category === cat)
              .map((article) => (
                <Card
                  key={article.id}
                  className="cursor-pointer hover:border-primary/50 transition-all"
                  onClick={() => onNavigate("article-detail", article.id)}
                >
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{article.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{article.content.slice(0, 100)}...</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
