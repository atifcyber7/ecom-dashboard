import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", customers: 120 },
  { name: "Feb", customers: 145 },
  { name: "Mar", customers: 178 },
  { name: "Apr", customers: 210 },
  { name: "May", customers: 256 },
  { name: "Jun", customers: 298 },
  { name: "Jul", customers: 342 },
  { name: "Aug", customers: 395 },
  { name: "Sep", customers: 458 },
  { name: "Oct", customers: 512 },
  { name: "Nov", customers: 589 },
  { name: "Dec", customers: 678 },
];

export function CustomerGrowthChart() {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 animate-fade-in">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Customer Growth</h3>
        <p className="text-sm text-muted-foreground">New customers over time</p>
      </div>
      <div className="h-[300px]">
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
              formatter={(value: number) => [`${value} customers`, ""]}
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
    </div>
  );
}
