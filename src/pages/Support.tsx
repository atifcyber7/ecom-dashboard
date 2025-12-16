import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { HeadphonesIcon, MessageSquare, Clock, CheckCircle, AlertCircle, Search, MoreHorizontal, Plus, Filter } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from "recharts";

const supportStats = [
  { title: "Total Tickets", value: "1,847", icon: MessageSquare, change: "+12%", color: "text-primary" },
  { title: "Open Tickets", value: "124", icon: AlertCircle, change: "-8%", color: "text-yellow-600" },
  { title: "Resolved Today", value: "45", icon: CheckCircle, change: "+22%", color: "text-green-600" },
  { title: "Avg Response", value: "2.4h", icon: Clock, change: "-15%", color: "text-blue-600" },
];

const ticketTrend = [
  { day: "Mon", opened: 28, resolved: 32 },
  { day: "Tue", opened: 35, resolved: 29 },
  { day: "Wed", opened: 42, resolved: 38 },
  { day: "Thu", opened: 31, resolved: 45 },
  { day: "Fri", opened: 38, resolved: 42 },
  { day: "Sat", opened: 22, resolved: 28 },
  { day: "Sun", opened: 18, resolved: 24 },
];

const ticketsByCategory = [
  { category: "Shipping", count: 45 },
  { category: "Returns", count: 32 },
  { category: "Payment", count: 28 },
  { category: "Product", count: 24 },
  { category: "Account", count: 18 },
];

const tickets = [
  { id: "TKT-001", customer: "Rahul Sharma", subject: "Order not delivered", priority: "High", status: "Open", category: "Shipping", created: "2 hours ago" },
  { id: "TKT-002", customer: "Priya Patel", subject: "Wrong item received", priority: "High", status: "In Progress", category: "Returns", created: "4 hours ago" },
  { id: "TKT-003", customer: "Amit Kumar", subject: "Payment failed but amount debited", priority: "Urgent", status: "Open", category: "Payment", created: "5 hours ago" },
  { id: "TKT-004", customer: "Sneha Reddy", subject: "Product quality issue", priority: "Medium", status: "In Progress", category: "Product", created: "6 hours ago" },
  { id: "TKT-005", customer: "Vikram Singh", subject: "Unable to track order", priority: "Low", status: "Open", category: "Shipping", created: "8 hours ago" },
  { id: "TKT-006", customer: "Ananya Gupta", subject: "Refund not received", priority: "High", status: "In Progress", category: "Payment", created: "1 day ago" },
  { id: "TKT-007", customer: "Karthik Nair", subject: "Account login issues", priority: "Medium", status: "Resolved", category: "Account", created: "1 day ago" },
  { id: "TKT-008", customer: "Meera Iyer", subject: "Request for invoice", priority: "Low", status: "Resolved", category: "Account", created: "2 days ago" },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "Urgent": return "bg-red-100 text-red-700";
    case "High": return "bg-orange-100 text-orange-700";
    case "Medium": return "bg-yellow-100 text-yellow-700";
    case "Low": return "bg-green-100 text-green-700";
    default: return "bg-muted text-muted-foreground";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Open": return "bg-blue-100 text-blue-700";
    case "In Progress": return "bg-purple-100 text-purple-700";
    case "Resolved": return "bg-green-100 text-green-700";
    default: return "bg-muted text-muted-foreground";
  }
};

export default function Support() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Support</h1>
            <p className="text-muted-foreground">Manage customer support tickets</p>
          </div>
          <div className="flex gap-2">
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              New Ticket
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {supportStats.map((stat) => (
            <Card key={stat.title} className="dashboard-card">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    <p className={`text-xs mt-1 ${stat.change.startsWith('+') || stat.change.startsWith('-') ? (stat.title === 'Avg Response' || stat.title === 'Open Tickets' ? (stat.change.startsWith('-') ? 'text-green-600' : 'text-red-600') : (stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600')) : 'text-muted-foreground'}`}>
                      {stat.change} from last week
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
              <CardTitle className="text-base">Ticket Trend (This Week)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={ticketTrend}>
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
                  <Legend />
                  <Line type="monotone" dataKey="opened" stroke="#ef4444" strokeWidth={2} name="Opened" />
                  <Line type="monotone" dataKey="resolved" stroke="#22c55e" strokeWidth={2} name="Resolved" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle className="text-base">Tickets by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={ticketsByCategory} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis dataKey="category" type="category" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} width={80} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="count" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Tickets Table */}
        <Card className="dashboard-card">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <CardTitle className="text-base">Recent Tickets</CardTitle>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search tickets..." className="pl-9 w-[200px]" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[130px]">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary text-sm">
                        {ticket.customer.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-sm">{ticket.subject}</p>
                        <Badge className={getPriorityColor(ticket.priority)} variant="secondary">
                          {ticket.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground">{ticket.id}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{ticket.customer}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{ticket.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                      <Badge className={getStatusColor(ticket.status)} variant="secondary">
                        {ticket.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{ticket.created}</p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Ticket</DropdownMenuItem>
                        <DropdownMenuItem>Assign Agent</DropdownMenuItem>
                        <DropdownMenuItem>Mark Resolved</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
