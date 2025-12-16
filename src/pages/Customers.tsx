import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Users, UserPlus, TrendingUp, ShoppingBag, Search, MoreHorizontal, Plus, Download, Mail } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const customerStats = [
  { title: "Total Customers", value: "8,249", icon: Users, change: "+15%", color: "text-primary" },
  { title: "New This Month", value: "324", icon: UserPlus, change: "+22%", color: "text-green-600" },
  { title: "Active Buyers", value: "5,128", icon: ShoppingBag, change: "+8%", color: "text-blue-600" },
  { title: "Retention Rate", value: "78%", icon: TrendingUp, change: "+3%", color: "text-purple-600" },
];

const customerGrowth = [
  { month: "Jul", customers: 4200 },
  { month: "Aug", customers: 4800 },
  { month: "Sep", customers: 5400 },
  { month: "Oct", customers: 6100 },
  { month: "Nov", customers: 7200 },
  { month: "Dec", customers: 8249 },
];

const customerSegments = [
  { name: "Premium", value: 1245, color: "#2563eb" },
  { name: "Regular", value: 4580, color: "#16a34a" },
  { name: "New", value: 1824, color: "#eab308" },
  { name: "Inactive", value: 600, color: "#dc2626" },
];

const customers = [
  { id: 1, name: "Rahul Sharma", email: "rahul@email.com", phone: "+1 987-654-3210", orders: 24, spent: "$45,230", status: "Premium", joined: "2023-03-15" },
  { id: 2, name: "Priya Patel", email: "priya@email.com", phone: "+1 876-543-2109", orders: 18, spent: "$28,950", status: "Premium", joined: "2023-05-22" },
  { id: 3, name: "Amit Kumar", email: "amit@email.com", phone: "+1 765-432-1098", orders: 12, spent: "$14,580", status: "Regular", joined: "2023-07-10" },
  { id: 4, name: "Sneha Reddy", email: "sneha@email.com", phone: "+1 654-321-0987", orders: 8, spent: "$8,920", status: "Regular", joined: "2023-09-05" },
  { id: 5, name: "Vikram Singh", email: "vikram@email.com", phone: "+1 543-210-9876", orders: 3, spent: "$4,560", status: "New", joined: "2024-01-02" },
  { id: 6, name: "Ananya Gupta", email: "ananya@email.com", phone: "+1 432-109-8765", orders: 15, spent: "$21,240", status: "Regular", joined: "2023-06-18" },
  { id: 7, name: "Karthik Nair", email: "karthik@email.com", phone: "+1 321-098-7654", orders: 2, spent: "$2,890", status: "New", joined: "2024-01-08" },
  { id: 8, name: "Meera Iyer", email: "meera@email.com", phone: "+1 210-987-6543", orders: 0, spent: "$0", status: "Inactive", joined: "2023-04-20" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Premium": return "bg-blue-100 text-blue-700";
    case "Regular": return "bg-green-100 text-green-700";
    case "New": return "bg-yellow-100 text-yellow-700";
    case "Inactive": return "bg-red-100 text-red-700";
    default: return "bg-muted text-muted-foreground";
  }
};

export default function Customers() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Customers</h1>
            <p className="text-muted-foreground">Manage your customer relationships</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Customer
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {customerStats.map((stat) => (
            <Card key={stat.title} className="dashboard-card">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    <p className={`text-xs mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="text-base">Customer Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={customerGrowth}>
                  <defs>
                    <linearGradient id="customerGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
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
                  <Area type="monotone" dataKey="customers" stroke="hsl(var(--primary))" fill="url(#customerGradient)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="text-base">Customer Segments</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={customerSegments}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {customerSegments.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Customers Table */}
        <Card className="dashboard-card">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <CardTitle className="text-base">All Customers</CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search customers..." className="pl-9 w-[250px]" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden md:table-cell">Phone</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead className="hidden sm:table-cell">Total Spent</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id} className="cursor-pointer hover:bg-muted/50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback className="bg-primary/10 text-primary text-sm">
                            {customer.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-xs text-muted-foreground">{customer.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{customer.phone}</TableCell>
                    <TableCell>{customer.orders}</TableCell>
                    <TableCell className="hidden sm:table-cell font-medium">{customer.spent}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(customer.status)} variant="secondary">
                        {customer.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="w-4 h-4 mr-2" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuItem>View Orders</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
