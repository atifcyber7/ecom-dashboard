import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { KPICard } from "@/components/dashboard/KPICard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { OrderStatusChart } from "@/components/dashboard/OrderStatusChart";
import { PaymentMethodsChart } from "@/components/dashboard/PaymentMethodsChart";
import { CustomerGrowthChart } from "@/components/dashboard/CustomerGrowthChart";
import { RecentOrdersTable } from "@/components/dashboard/RecentOrdersTable";
import { DollarSign, TrendingUp, ShoppingBag, Users } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <KPICard
          title="Total Sales"
          value="$128,450"
          change="+12.5% from last month"
          changeType="positive"
          icon={DollarSign}
          iconColor="primary"
          actionLabel="View sales report"
        />
        <KPICard
          title="Monthly Revenue"
          value="$45,280"
          change="+8.2% from last month"
          changeType="positive"
          icon={TrendingUp}
          iconColor="success"
          actionLabel="View revenue"
        />
        <KPICard
          title="Pending Orders"
          value="145"
          change="23 need attention"
          changeType="neutral"
          icon={ShoppingBag}
          iconColor="warning"
          actionLabel="Manage orders"
        />
        <KPICard
          title="New Customers"
          value="1,248"
          change="+18.7% from last month"
          changeType="positive"
          icon={Users}
          iconColor="info"
          actionLabel="View customers"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <SalesChart />
        <OrderStatusChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <PaymentMethodsChart />
        <CustomerGrowthChart />
      </div>

      {/* Recent Orders Table */}
      <RecentOrdersTable />
    </DashboardLayout>
  );
};

export default Index;
