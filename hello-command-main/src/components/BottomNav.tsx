import { Home, MessageSquare, Map, DollarSign, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { type Section } from "@/hooks/useAppState";

interface Props {
  currentSection: Section;
  onNavigate: (section: Section) => void;
}

const items = [
  { section: "home" as Section, icon: Home, label: "Home" },
  { section: "assistant" as Section, icon: MessageSquare, label: "IA" },
  { section: "cuts-map" as Section, icon: Map, label: "Cortes" },
  { section: "price-detector" as Section, icon: DollarSign, label: "Preço" },
  { section: "cooking-guides" as Section, icon: BookOpen, label: "Guias" },
];

export function BottomNav({ currentSection, onNavigate }: Props) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border md:hidden">
      <div className="flex items-center justify-around h-14 px-2">
        {items.map((item) => {
          const active = item.section === currentSection;
          return (
            <button
              key={item.section}
              onClick={() => onNavigate(item.section)}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors",
                active ? "text-primary" : "text-muted-foreground"
              )}
            >
              <item.icon className={cn("h-5 w-5", active && "scale-110")} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
