import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Eye, MoreHorizontal, Package } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";

const orders = [
  {
    id: "BT-2024-7821",
    customer: "Sarah Johnson",
    email: "sarah.j@email.com",
    product: "Wireless Earbuds Pro",
    quantity: 2,
    amount: "$259.98",
    status: "delivered",
    date: "Dec 14, 2024",
    paymentMethod: "Online",
  },
  {
    id: "BT-2024-7820",
    customer: "Michael Chen",
    email: "m.chen@email.com",
    product: "Smart Watch Series 5",
    quantity: 1,
    amount: "$299.00",
    status: "shipped",
    date: "Dec 14, 2024",
    paymentMethod: "Online",
  },
  {
    id: "BT-2024-7819",
    customer: "Emma Wilson",
    email: "emma.w@email.com",
    product: "Laptop Stand Aluminum",
    quantity: 3,
    amount: "$239.97",
    status: "pending",
    date: "Dec 13, 2024",
    paymentMethod: "COD",
  },
  {
    id: "BT-2024-7818",
    customer: "James Miller",
    email: "james.m@email.com",
    product: "USB-C Hub 7-in-1",
    quantity: 5,
    amount: "$249.95",
    status: "delivered",
    date: "Dec 13, 2024",
    paymentMethod: "Online",
  },
  {
    id: "BT-2024-7817",
    customer: "Lisa Anderson",
    email: "lisa.a@email.com",
    product: "Mechanical Keyboard RGB",
    quantity: 1,
    amount: "$159.00",
    status: "shipped",
    date: "Dec 12, 2024",
    paymentMethod: "Online",
  },
  {
    id: "BT-2024-7816",
    customer: "David Park",
    email: "d.park@email.com",
    product: "4K Webcam Ultra",
    quantity: 2,
    amount: "$179.98",
    status: "pending",
    date: "Dec 12, 2024",
    paymentMethod: "COD",
  },
  {
    id: "BT-2024-7815",
    customer: "Rachel Green",
    email: "r.green@email.com",
    product: "Noise Canceling Headphones",
    quantity: 1,
    amount: "$349.00",
    status: "processing",
    date: "Dec 11, 2024",
    paymentMethod: "Online",
  },
];

const statusStyles = {
  delivered: "bg-success/10 text-success border-success/20",
  shipped: "bg-info/10 text-info border-info/20",
  pending: "bg-warning/10 text-warning border-warning/20",
  processing: "bg-primary/10 text-primary border-primary/20",
};

export function RecentOrdersTable() {
  const handleViewOrder = (orderId: string) => {
    toast({
      title: "Order Details",
      description: `Opening order ${orderId}...`,
    });
  };

  const handleTrackOrder = (orderId: string) => {
    toast({
      title: "Tracking Order",
      description: `Fetching tracking info for ${orderId}...`,
    });
  };

  const handleEditOrder = (orderId: string) => {
    toast({
      title: "Edit Order",
      description: `Opening editor for ${orderId}...`,
    });
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 animate-fade-in">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Recent Orders</h3>
          <p className="text-sm text-muted-foreground">Latest customer transactions</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Package className="w-4 h-4" />
          View all orders
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Order ID
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Customer
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                Product
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider hidden lg:table-cell">
                Qty
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Amount
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider hidden xl:table-cell">
                Payment
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider hidden lg:table-cell">
                Date
              </th>
              <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors cursor-pointer"
                onClick={() => handleViewOrder(order.id)}
              >
                <td className="py-4 px-4">
                  <span className="font-medium text-primary">{order.id}</span>
                </td>
                <td className="py-4 px-4">
                  <div>
                    <span className="font-medium text-foreground block">{order.customer}</span>
                    <span className="text-xs text-muted-foreground">{order.email}</span>
                  </div>
                </td>
                <td className="py-4 px-4 hidden md:table-cell">
                  <span className="text-muted-foreground">{order.product}</span>
                </td>
                <td className="py-4 px-4 hidden lg:table-cell">
                  <span className="text-foreground">{order.quantity}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="font-semibold text-foreground">{order.amount}</span>
                </td>
                <td className="py-4 px-4">
                  <Badge
                    variant="outline"
                    className={cn(
                      "capitalize font-medium",
                      statusStyles[order.status as keyof typeof statusStyles]
                    )}
                  >
                    {order.status}
                  </Badge>
                </td>
                <td className="py-4 px-4 hidden xl:table-cell">
                  <Badge variant="secondary" className="font-normal">
                    {order.paymentMethod}
                  </Badge>
                </td>
                <td className="py-4 px-4 hidden lg:table-cell">
                  <span className="text-muted-foreground">{order.date}</span>
                </td>
                <td className="py-4 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-card border-border">
                      <DropdownMenuItem onClick={() => handleViewOrder(order.id)}>
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleTrackOrder(order.id)}>
                        <Package className="w-4 h-4 mr-2" />
                        Track Order
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleEditOrder(order.id)}>
                        Edit Order
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
