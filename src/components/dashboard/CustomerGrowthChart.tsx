import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const data = [
  { name: "Jan", customers: 120, newSignups: 45 },
  { name: "Feb", customers: 165, newSignups: 52 },
  { name: "Mar", customers: 217, newSignups: 68 },
  { name: "Apr", customers: 285, newSignups: 74 },
  { name: "May", customers: 359, newSignups: 82 },
  { name: "Jun", customers: 441, newSignups: 91 },
  { name: "Jul", customers: 532, newSignups: 98 },
  { name: "Aug", customers: 630, newSignups: 112 },
  { name: "Sep", customers: 742, newSignups: 125 },
  { name: "Oct", customers: 867, newSignups: 138 },
  { name: "Nov", customers: 1005, newSignups: 156 },
  { name: "Dec", customers: 1161, newSignups: 178 },
];

export function CustomerGrowthChart() {
  const handleAddCustomer = () => {
    toast({
      title: "Add Customer",
      description: "Opening new customer form...",
    });
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 animate-fade-in">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Customer Growth</h3>
          <p className="text-sm text-muted-foreground">Total customers over time</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2" onClick={handleAddCustomer}>
          <UserPlus className="w-4 h-4" />
          Add Customer
        </Button>
      </div>
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="customerGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(var(--chart-1))" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="name"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "var(--shadow-elevated)",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
              formatter={(value: number, name: string) => [
                `${value}`,
                name === "customers" ? "Total Customers" : "New Signups",
              ]}
            />
            <Area
              type="monotone"
              dataKey="customers"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2.5}
              fill="url(#customerGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      {/* Quick Stats */}
      <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t border-border">
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground">1,161</p>
          <p className="text-xs text-muted-foreground">Total Customers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-success">+178</p>
          <p className="text-xs text-muted-foreground">This Month</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-info">15.3%</p>
          <p className="text-xs text-muted-foreground">Growth Rate</p>
        </div>
      </div>
    </div>
  );
}
