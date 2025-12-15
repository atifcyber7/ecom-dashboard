import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const data = [
  { name: "Pending", value: 145, color: "hsl(var(--chart-3))" },
  { name: "Processing", value: 89, color: "hsl(var(--chart-4))" },
  { name: "Shipped", value: 312, color: "hsl(var(--chart-2))" },
  { name: "Delivered", value: 528, color: "hsl(var(--chart-1))" },
];

export function OrderStatusChart() {
  const handleBarClick = (data: { name: string; value: number }) => {
    toast({
      title: `${data.name} Orders`,
      description: `Viewing ${data.value} ${data.name.toLowerCase()} orders...`,
    });
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 animate-fade-in">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Order Status</h3>
          <p className="text-sm text-muted-foreground">Current order distribution</p>
        </div>
        <Button variant="outline" size="sm" onClick={() => toast({ title: "Orders", description: "Opening orders page..." })}>
          Manage Orders
        </Button>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              type="number"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              dataKey="name"
              type="category"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              width={80}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "var(--shadow-elevated)",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
              formatter={(value: number) => [`${value} orders`, ""]}
              cursor={{ fill: "hsl(var(--muted))", opacity: 0.3 }}
            />
            <Bar 
              dataKey="value" 
              radius={[0, 6, 6, 0]} 
              barSize={32}
              onClick={(data) => handleBarClick(data)}
              className="cursor-pointer"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Status Legend */}
      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        {data.map((item) => (
          <button
            key={item.name}
            onClick={() => handleBarClick(item)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            {item.name}: <span className="font-medium text-foreground">{item.value}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
