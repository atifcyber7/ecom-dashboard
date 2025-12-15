import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconColor: "primary" | "info" | "warning" | "success";
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
}: KPICardProps) {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-elevated transition-shadow duration-300 animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground tracking-tight">
            {value}
          </p>
          <p className={cn("text-sm font-medium", changeColorClasses[changeType])}>
            {change}
          </p>
        </div>
        <div className={cn("p-3 rounded-xl", iconColorClasses[iconColor])}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
