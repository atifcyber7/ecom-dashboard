import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { ShoppingCart, Package, Truck, CheckCircle, Clock, Search, Filter, MoreHorizontal, Plus, Download } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from "recharts";

const orderStats = [
  { title: "Total Orders", value: "1,284", icon: ShoppingCart, change: "+12%", color: "text-primary" },
  { title: "Pending", value: "45", icon: Clock, change: "-5%", color: "text-yellow-600" },
  { title: "Shipped", value: "128", icon: Truck, change: "+18%", color: "text-blue-600" },
  { title: "Delivered", value: "1,111", icon: CheckCircle, change: "+8%", color: "text-green-600" },
];

const weeklyOrders = [
  { day: "Mon", orders: 45, revenue: 12500 },
  { day: "Tue", orders: 52, revenue: 14200 },
  { day: "Wed", orders: 48, revenue: 13100 },
  { day: "Thu", orders: 61, revenue: 16800 },
  { day: "Fri", orders: 55, revenue: 15400 },
  { day: "Sat", orders: 67, revenue: 18900 },
  { day: "Sun", orders: 43, revenue: 11800 },
];

const orders = [
  { id: "ORD-001", customer: "Rahul Sharma", email: "rahul@email.com", product: "iPhone 15 Pro", amount: "₹1,29,900", status: "Delivered", date: "2024-01-15" },
  { id: "ORD-002", customer: "Priya Patel", email: "priya@email.com", product: "MacBook Air M2", amount: "₹1,14,900", status: "Shipped", date: "2024-01-14" },
  { id: "ORD-003", customer: "Amit Kumar", email: "amit@email.com", product: "AirPods Pro", amount: "₹24,900", status: "Pending", date: "2024-01-14" },
  { id: "ORD-004", customer: "Sneha Reddy", email: "sneha@email.com", product: "iPad Pro 12.9", amount: "₹1,12,900", status: "Processing", date: "2024-01-13" },
  { id: "ORD-005", customer: "Vikram Singh", email: "vikram@email.com", product: "Apple Watch Ultra", amount: "₹89,900", status: "Delivered", date: "2024-01-13" },
  { id: "ORD-006", customer: "Ananya Gupta", email: "ananya@email.com", product: "Samsung S24 Ultra", amount: "₹1,34,999", status: "Shipped", date: "2024-01-12" },
  { id: "ORD-007", customer: "Karthik Nair", email: "karthik@email.com", product: "Sony WH-1000XM5", amount: "₹29,990", status: "Pending", date: "2024-01-12" },
  { id: "ORD-008", customer: "Meera Iyer", email: "meera@email.com", product: "Dell XPS 15", amount: "₹1,89,990", status: "Delivered", date: "2024-01-11" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered": return "bg-green-100 text-green-700";
    case "Shipped": return "bg-blue-100 text-blue-700";
    case "Pending": return "bg-yellow-100 text-yellow-700";
    case "Processing": return "bg-purple-100 text-purple-700";
    default: return "bg-muted text-muted-foreground";
  }
};

export default function Orders() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Orders</h1>
            <p className="text-muted-foreground">Manage and track all your orders</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              New Order
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {orderStats.map((stat) => (
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
              <CardTitle className="text-base">Weekly Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={weeklyOrders}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="orders" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="text-base">Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={weeklyOrders}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']}
                  />
                  <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: 'hsl(var(--primary))' }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Orders Table */}
        <Card className="dashboard-card">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <CardTitle className="text-base">All Orders</CardTitle>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search orders..." className="pl-9 w-[200px]" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[130px]">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden md:table-cell">Product</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden sm:table-cell">Date</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id} className="cursor-pointer hover:bg-muted/50">
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-xs text-muted-foreground">{order.email}</p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{order.product}</TableCell>
                    <TableCell className="font-medium">{order.amount}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(order.status)} variant="secondary">
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell text-muted-foreground">{order.date}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Track Order</DropdownMenuItem>
                          <DropdownMenuItem>Edit Order</DropdownMenuItem>
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
