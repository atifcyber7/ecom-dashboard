import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Cash on Delivery", value: 4250, color: "hsl(var(--chart-3))" },
  { name: "Online Payment", value: 6780, color: "hsl(var(--chart-1))" },
];

const total = data.reduce((sum, item) => sum + item.value, 0);

export function PaymentMethodsChart() {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 animate-fade-in">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Payment Methods</h3>
        <p className="text-sm text-muted-foreground">COD vs Online payments</p>
      </div>
      <div className="h-[300px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
              dataKey="value"
              strokeWidth={0}
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
              formatter={(value: number) => [
                `$${value.toLocaleString()} (${((value / total) * 100).toFixed(1)}%)`,
                "",
              ]}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) => (
                <span style={{ color: "hsl(var(--foreground))", fontSize: "14px" }}>
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: "-18px" }}>
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">${(total / 1000).toFixed(1)}k</p>
            <p className="text-xs text-muted-foreground">Total</p>
          </div>
        </div>
      </div>
    </div>
  );
}
