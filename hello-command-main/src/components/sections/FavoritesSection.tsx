import { Heart, Beef, BookOpen, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { meatCuts, cookingGuides } from "@/data/meatData";
import { CutImage } from "@/components/CutImage";
import { type Section } from "@/hooks/useAppState";

interface Props {
  favorites: { cuts: string[]; guides: string[]; responses: string[] };
  onToggleFavorite: (type: "cuts" | "guides" | "responses", id: string) => void;
  onNavigate: (section: Section, id?: string) => void;
}

export function FavoritesSection({ favorites, onToggleFavorite, onNavigate }: Props) {
  const favCuts = meatCuts.filter((c) => favorites.cuts.includes(c.id));
  const favGuides = cookingGuides.filter((g) => favorites.guides.includes(g.id));
  const isEmpty = favCuts.length === 0 && favGuides.length === 0;

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-2">
        <Heart className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Favoritos</h2>
      </div>

      {isEmpty && (
        <Card>
          <CardContent className="p-12 text-center">
            <Heart className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
            <p className="text-muted-foreground">Nenhum favorito ainda.</p>
            <p className="text-xs text-muted-foreground mt-1">
              Clique no ❤️ em cortes e guias para salvá-los aqui.
            </p>
          </CardContent>
        </Card>
      )}

      {favCuts.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
            <Beef className="h-3.5 w-3.5" /> Cortes Favoritos
          </h3>
          <div className="space-y-2">
            {favCuts.map((cut) => (
              <Card key={cut.id} className="group">
                <CardContent className="p-4 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate("cut-detail", cut.id)}
                    className="flex items-center gap-3 text-left"
                  >
                    <CutImage cutId={cut.id} size="sm" />
                    <span className="font-medium text-foreground">{cut.name}</span>
                  </button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => onToggleFavorite("cuts", cut.id)}
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {favGuides.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" /> Guias Favoritos
          </h3>
          <div className="space-y-2">
            {favGuides.map((guide) => (
              <Card key={guide.id} className="group">
                <CardContent className="p-4 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate("guide-detail", guide.id)}
                    className="flex items-center gap-3 text-left"
                  >
                    <span>{guide.icon}</span>
                    <span className="font-medium text-foreground">{guide.title}</span>
                  </button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => onToggleFavorite("guides", guide.id)}
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
