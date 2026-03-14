import { BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cookingGuides } from "@/data/meatData";
import { type Section } from "@/hooks/useAppState";

interface Props {
  onNavigate: (section: Section, id?: string) => void;
}

export function CookingGuidesSection({ onNavigate }: Props) {
  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Guias de Preparo</h2>
      </div>
      <p className="text-sm text-muted-foreground">Aprenda técnicas essenciais para preparar carne como um profissional.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cookingGuides.map((guide) => (
          <Card
            key={guide.id}
            className="cursor-pointer hover:border-primary/50 transition-all group"
            onClick={() => onNavigate("guide-detail", guide.id)}
          >
            <CardContent className="p-5 flex items-start gap-4">
              <span className="text-3xl">{guide.icon}</span>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {guide.content
                    .split("\n")
                    .find((l) => l && !l.startsWith("#"))
                    ?.replace(/\*\*/g, "")
                    .replace(/_/g, "")
                    .slice(0, 80)}...
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
