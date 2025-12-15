import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", daily: 4200, monthly: 24000 },
  { name: "Feb", daily: 3800, monthly: 22100 },
  { name: "Mar", daily: 5100, monthly: 29800 },
  { name: "Apr", daily: 4600, monthly: 28200 },
  { name: "May", daily: 5400, monthly: 31500 },
  { name: "Jun", daily: 6200, monthly: 35800 },
  { name: "Jul", daily: 5800, monthly: 33400 },
  { name: "Aug", daily: 6800, monthly: 39200 },
  { name: "Sep", daily: 7200, monthly: 41500 },
  { name: "Oct", daily: 6900, monthly: 40100 },
  { name: "Nov", daily: 7800, monthly: 45200 },
  { name: "Dec", daily: 8500, monthly: 49800 },
];

export function SalesChart() {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 animate-fade-in">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Sales Overview</h3>
        <p className="text-sm text-muted-foreground">Daily & Monthly Sales Trend</p>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
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
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "var(--shadow-elevated)",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="daily"
              name="Daily Sales"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 6, fill: "hsl(var(--chart-1))" }}
            />
            <Line
              type="monotone"
              dataKey="monthly"
              name="Monthly Sales"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 6, fill: "hsl(var(--chart-2))" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
