import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, Sector } from "recharts";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const data = [
  { name: "Cash on Delivery", value: 4250, color: "hsl(var(--chart-3))", orders: 312 },
  { name: "Credit Card", value: 3890, color: "hsl(var(--chart-2))", orders: 287 },
  { name: "PayPal", value: 1890, color: "hsl(var(--chart-4))", orders: 145 },
  { name: "Bank Transfer", value: 1000, color: "hsl(var(--chart-1))", orders: 78 },
];

const total = data.reduce((sum, item) => sum + item.value, 0);
const totalOrders = data.reduce((sum, item) => sum + item.orders, 0);

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius + 8}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
    />
  );
};

export function PaymentMethodsChart() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  const handleMethodClick = (method: string) => {
    toast({
      title: "Payment Method",
      description: `Viewing ${method} transactions...`,
    });
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 animate-fade-in">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Payment Methods</h3>
          <p className="text-sm text-muted-foreground">Revenue by payment type</p>
        </div>
        <Button variant="outline" size="sm" onClick={() => toast({ title: "Payments", description: "Opening payment settings..." })}>
          Settings
        </Button>
      </div>
      <div className="h-[280px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
              strokeWidth={0}
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(undefined)}
              onClick={(data) => handleMethodClick(data.name)}
              className="cursor-pointer"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "var(--shadow-elevated)",
              }}
              formatter={(value: number, name: string, props: any) => [
                <div className="space-y-1">
                  <div className="font-semibold">${value.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">{props.payload.orders} orders</div>
                </div>,
                "",
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">${(total / 1000).toFixed(1)}k</p>
            <p className="text-xs text-muted-foreground">{totalOrders} orders</p>
          </div>
        </div>
      </div>
      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {data.map((item) => (
          <button
            key={item.name}
            onClick={() => handleMethodClick(item.name)}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors text-left"
          >
            <span
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
              <p className="text-xs text-muted-foreground">{((item.value / total) * 100).toFixed(1)}%</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
