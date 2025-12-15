import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const orders = [
  {
    id: "ORD-7821",
    customer: "Sarah Johnson",
    product: "Wireless Earbuds Pro",
    amount: "$129.99",
    status: "delivered",
    date: "Dec 14, 2024",
  },
  {
    id: "ORD-7820",
    customer: "Michael Chen",
    product: "Smart Watch Series 5",
    amount: "$299.00",
    status: "shipped",
    date: "Dec 14, 2024",
  },
  {
    id: "ORD-7819",
    customer: "Emma Wilson",
    product: "Laptop Stand Aluminum",
    amount: "$79.99",
    status: "pending",
    date: "Dec 13, 2024",
  },
  {
    id: "ORD-7818",
    customer: "James Miller",
    product: "USB-C Hub 7-in-1",
    amount: "$49.99",
    status: "delivered",
    date: "Dec 13, 2024",
  },
  {
    id: "ORD-7817",
    customer: "Lisa Anderson",
    product: "Mechanical Keyboard RGB",
    amount: "$159.00",
    status: "shipped",
    date: "Dec 12, 2024",
  },
];

const statusStyles = {
  delivered: "bg-success/10 text-success border-success/20",
  shipped: "bg-info/10 text-info border-info/20",
  pending: "bg-warning/10 text-warning border-warning/20",
};

export function RecentOrdersTable() {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 animate-fade-in">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Recent Orders</h3>
          <p className="text-sm text-muted-foreground">Latest customer transactions</p>
        </div>
        <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          View all →
        </button>
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
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Amount
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider hidden lg:table-cell">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors"
              >
                <td className="py-4 px-4">
                  <span className="font-medium text-foreground">{order.id}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-foreground">{order.customer}</span>
                </td>
                <td className="py-4 px-4 hidden md:table-cell">
                  <span className="text-muted-foreground">{order.product}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="font-medium text-foreground">{order.amount}</span>
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
                <td className="py-4 px-4 hidden lg:table-cell">
                  <span className="text-muted-foreground">{order.date}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
