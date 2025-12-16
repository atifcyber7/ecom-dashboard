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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Package, TrendingUp, AlertTriangle, Star, Search, MoreHorizontal, Plus, Download, Grid, List } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { useState } from "react";

const productStats = [
  { title: "Total Products", value: "486", icon: Package, change: "+24", color: "text-primary" },
  { title: "Best Sellers", value: "42", icon: Star, change: "+8", color: "text-yellow-600" },
  { title: "Low Stock", value: "18", icon: AlertTriangle, change: "-5", color: "text-red-600" },
  { title: "Revenue Growth", value: "+28%", icon: TrendingUp, change: "+12%", color: "text-green-600" },
];

const topProducts = [
  { name: "iPhone 15 Pro", sales: 245 },
  { name: "MacBook Air M2", sales: 189 },
  { name: "AirPods Pro", sales: 312 },
  { name: "iPad Pro", sales: 156 },
  { name: "Apple Watch", sales: 198 },
];

const categoryData = [
  { name: "Electronics", value: 45, color: "#2563eb" },
  { name: "Accessories", value: 25, color: "#16a34a" },
  { name: "Wearables", value: 18, color: "#eab308" },
  { name: "Audio", value: 12, color: "#dc2626" },
];

const products = [
  { id: 1, name: "iPhone 15 Pro Max", sku: "APL-IP15PM", category: "Electronics", price: "$1,599", stock: 45, status: "In Stock", sales: 245 },
  { id: 2, name: "MacBook Air M2", sku: "APL-MBA-M2", category: "Electronics", price: "$1,149", stock: 28, status: "In Stock", sales: 189 },
  { id: 3, name: "AirPods Pro 2", sku: "APL-APP2", category: "Audio", price: "$249", stock: 5, status: "Low Stock", sales: 312 },
  { id: 4, name: "iPad Pro 12.9", sku: "APL-IPDP", category: "Electronics", price: "$1,129", stock: 18, status: "In Stock", sales: 156 },
  { id: 5, name: "Apple Watch Ultra 2", sku: "APL-AWU2", category: "Wearables", price: "$899", stock: 0, status: "Out of Stock", sales: 198 },
  { id: 6, name: "Samsung S24 Ultra", sku: "SAM-S24U", category: "Electronics", price: "$1,349", stock: 32, status: "In Stock", sales: 167 },
  { id: 7, name: "Sony WH-1000XM5", sku: "SNY-WH5", category: "Audio", price: "$299", stock: 3, status: "Low Stock", sales: 145 },
  { id: 8, name: "Dell XPS 15", sku: "DEL-XPS15", category: "Electronics", price: "$1,899", stock: 12, status: "In Stock", sales: 89 },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Stock": return "bg-green-100 text-green-700";
    case "Low Stock": return "bg-yellow-100 text-yellow-700";
    case "Out of Stock": return "bg-red-100 text-red-700";
    default: return "bg-muted text-muted-foreground";
  }
};

export default function Products() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Products</h1>
            <p className="text-muted-foreground">Manage your product inventory</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {productStats.map((stat) => (
            <Card key={stat.title} className="dashboard-card">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    <p className="text-xs mt-1 text-green-600">{stat.change} this month</p>
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
              <CardTitle className="text-base">Top Selling Products</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={topProducts} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis dataKey="name" type="category" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} width={100} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="text-base">Sales by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
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
        </div>

        {/* Products List */}
        <Card className="dashboard-card">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <CardTitle className="text-base">All Products</CardTitle>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search products..." className="pl-9 w-[200px]" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="audio">Audio</SelectItem>
                    <SelectItem value="wearables">Wearables</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex border rounded-lg">
                  <Button 
                    variant={viewMode === "list" ? "secondary" : "ghost"} 
                    size="icon" 
                    className="h-9 w-9 rounded-r-none"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant={viewMode === "grid" ? "secondary" : "ghost"} 
                    size="icon" 
                    className="h-9 w-9 rounded-l-none"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {viewMode === "list" ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Product</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground hidden md:table-cell">SKU</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground hidden sm:table-cell">Category</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Price</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Stock</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Status</th>
                      <th className="w-10"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-b hover:bg-muted/50 cursor-pointer">
                        <td className="py-3 px-2">
                          <p className="font-medium">{product.name}</p>
                        </td>
                        <td className="py-3 px-2 text-muted-foreground hidden md:table-cell">{product.sku}</td>
                        <td className="py-3 px-2 hidden sm:table-cell">{product.category}</td>
                        <td className="py-3 px-2 font-medium">{product.price}</td>
                        <td className="py-3 px-2">{product.stock}</td>
                        <td className="py-3 px-2">
                          <Badge className={getStatusColor(product.status)} variant="secondary">
                            {product.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-2">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit Product</DropdownMenuItem>
                              <DropdownMenuItem>Update Stock</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map((product) => (
                  <Card key={product.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                        <Package className="w-12 h-12 text-muted-foreground" />
                      </div>
                      <h3 className="font-medium text-sm truncate">{product.name}</h3>
                      <p className="text-xs text-muted-foreground">{product.category}</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="font-bold text-sm">{product.price}</p>
                        <Badge className={getStatusColor(product.status)} variant="secondary">
                          {product.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
