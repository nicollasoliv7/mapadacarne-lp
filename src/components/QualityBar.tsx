import { cn } from "@/lib/utils";

interface QualityBarProps {
  label: string;
  value: number; // 0-10
  maxValue?: number;
  className?: string;
  size?: "sm" | "md";
}

export function QualityBar({ label, value, maxValue = 10, className, size = "md" }: QualityBarProps) {
  const percentage = (value / maxValue) * 100;

  const getColor = () => {
    if (percentage >= 80) return "bg-primary";
    if (percentage >= 60) return "bg-primary/80";
    if (percentage >= 40) return "bg-primary/60";
    return "bg-primary/40";
  };

  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-center justify-between gap-2">
        <span className={cn("text-muted-foreground font-medium whitespace-nowrap", size === "sm" ? "text-xs" : "text-sm")}>
          {label}
        </span>
        <span className={cn("font-semibold text-foreground tabular-nums", size === "sm" ? "text-xs" : "text-sm")}>
          {value}/{maxValue}
        </span>
      </div>
      <div className={cn("w-full rounded-full bg-muted overflow-hidden", size === "sm" ? "h-2.5" : "h-3")}>
        <div
          className={cn("h-full rounded-full transition-all duration-500", getColor())}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface QualityBarsGroupProps {
  tenderness: number;
  flavor: number;
  costBenefit: number;
  size?: "sm" | "md";
  className?: string;
}

export function QualityBarsGroup({ tenderness, flavor, costBenefit, size = "md", className }: QualityBarsGroupProps) {
  return (
    <div className={cn("space-y-2.5", className)}>
      <QualityBar label="Maciez" value={tenderness} size={size} />
      <QualityBar label="Sabor" value={flavor} size={size} />
      <QualityBar label="Custo-benefício" value={costBenefit} size={size} />
    </div>
  );
}
