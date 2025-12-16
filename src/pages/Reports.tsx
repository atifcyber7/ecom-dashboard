import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart3, TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Package, Download, Calendar } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend, PieChart, Pie, Cell, ComposedChart } from "recharts";

const reportStats = [
  { title: "Total Revenue", value: "$452,890", icon: DollarSign, change: "+18%", trend: "up", color: "text-primary" },
  { title: "Total Orders", value: "1,284", icon: ShoppingCart, change: "+12%", trend: "up", color: "text-blue-600" },
  { title: "New Customers", value: "324", icon: Users, change: "+22%", trend: "up", color: "text-green-600" },
  { title: "Avg Order Value", value: "$352", icon: Package, change: "-5%", trend: "down", color: "text-yellow-600" },
];

const monthlyRevenue = [
  { month: "Jan", revenue: 3200000, orders: 892, profit: 480000 },
  { month: "Feb", revenue: 2800000, orders: 756, profit: 392000 },
  { month: "Mar", revenue: 3500000, orders: 945, profit: 525000 },
  { month: "Apr", revenue: 4100000, orders: 1102, profit: 615000 },
  { month: "May", revenue: 3800000, orders: 1023, profit: 570000 },
  { month: "Jun", revenue: 4528900, orders: 1284, profit: 679335 },
];

const salesByChannel = [
  { name: "Website", value: 55, color: "#2563eb" },
  { name: "Mobile App", value: 28, color: "#16a34a" },
  { name: "Marketplace", value: 12, color: "#eab308" },
  { name: "Social Media", value: 5, color: "#dc2626" },
];

const topCategories = [
  { category: "Electronics", revenue: 2850000, orders: 524 },
  { category: "Accessories", revenue: 890000, orders: 412 },
  { category: "Wearables", revenue: 456000, orders: 198 },
  { category: "Audio", revenue: 332900, orders: 150 },
];

const dailyOrders = [
  { date: "Week 1", online: 245, cod: 89 },
  { date: "Week 2", online: 312, cod: 102 },
  { date: "Week 3", online: 289, cod: 95 },
  { date: "Week 4", online: 356, cod: 96 },
];

const customerAcquisition = [
  { month: "Jan", organic: 120, paid: 80, referral: 45 },
  { month: "Feb", organic: 145, paid: 95, referral: 52 },
  { month: "Mar", organic: 168, paid: 112, referral: 68 },
  { month: "Apr", organic: 189, paid: 134, referral: 78 },
  { month: "May", organic: 210, paid: 156, referral: 89 },
  { month: "Jun", organic: 245, paid: 178, referral: 101 },
];

export default function Reports() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Reports & Analytics</h1>
            <p className="text-muted-foreground">Detailed insights into your business performance</p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="6months">
              <SelectTrigger className="w-[150px]">
                <Calendar className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="3months">Last 3 months</SelectItem>
                <SelectItem value="6months">Last 6 months</SelectItem>
                <SelectItem value="1year">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reportStats.map((stat) => (
            <Card key={stat.title} className="dashboard-card">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    <div className={`flex items-center gap-1 text-xs mt-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {stat.change} vs last period
                    </div>
                  </div>
                  <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Revenue & Profit Chart */}
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle className="text-base">Revenue & Profit Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                <YAxis 
                  yAxisId="left"
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} 
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} 
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value: number, name: string) => {
                    if (name === 'orders') return [value, 'Orders'];
                    return [`$${(value / 1000).toFixed(0)}K`, name === 'revenue' ? 'Revenue' : 'Profit'];
                  }}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="revenue" />
                <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#22c55e" strokeWidth={2} name="orders" />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="text-base">Sales by Channel</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={salesByChannel}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {salesByChannel.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value) => [`${value}%`, 'Share']}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="text-base">Payment Methods (Weekly)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={dailyOrders}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Legend />
                  <Bar dataKey="online" fill="#2563eb" name="Online" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="cod" fill="#eab308" name="COD" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Customer Acquisition & Top Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="text-base">Customer Acquisition</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={customerAcquisition}>
                  <defs>
                    <linearGradient id="organicGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="paidGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="referralGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#eab308" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#eab308" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Legend />
                  <Area type="monotone" dataKey="organic" stroke="#2563eb" fill="url(#organicGradient)" name="Organic" />
                  <Area type="monotone" dataKey="paid" stroke="#16a34a" fill="url(#paidGradient)" name="Paid" />
                  <Area type="monotone" dataKey="referral" stroke="#eab308" fill="url(#referralGradient)" name="Referral" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="text-base">Top Categories by Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCategories.map((category, index) => (
                  <div key={category.category} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium w-6">{index + 1}.</span>
                        <span className="text-sm font-medium">{category.category}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold">${(category.revenue / 1000).toFixed(0)}K</p>
                        <p className="text-xs text-muted-foreground">{category.orders} orders</p>
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${(category.revenue / 2850000) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
