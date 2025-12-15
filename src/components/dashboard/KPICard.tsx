import { LucideIcon, TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconColor: "primary" | "info" | "warning" | "success";
  actionLabel?: string;
}

const iconColorClasses = {
  primary: "bg-primary/10 text-primary",
  info: "bg-info/10 text-info",
  warning: "bg-warning/10 text-warning",
  success: "bg-success/10 text-success",
};

const changeColorClasses = {
  positive: "text-success",
  negative: "text-destructive",
  neutral: "text-muted-foreground",
};

export function KPICard({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  iconColor,
  actionLabel = "View details",
}: KPICardProps) {
  const handleAction = () => {
    toast({
      title: title,
      description: `Opening ${title.toLowerCase()} details...`,
    });
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 animate-fade-in group cursor-pointer" onClick={handleAction}>
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-3 rounded-xl", iconColorClasses[iconColor])}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={cn("flex items-center gap-1 text-sm font-medium", changeColorClasses[changeType])}>
          {changeType === "positive" && <TrendingUp className="w-4 h-4" />}
          {changeType === "negative" && <TrendingDown className="w-4 h-4" />}
          <span>{change.split(" ")[0]}</span>
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-3xl font-bold text-foreground tracking-tight">
          {value}
        </p>
        <p className="text-xs text-muted-foreground">
          {change.includes("from") ? change : `vs last month`}
        </p>
      </div>
      <Button 
        variant="ghost" 
        size="sm" 
        className="mt-4 p-0 h-auto text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform"
      >
        {actionLabel}
        <ArrowRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );
}
