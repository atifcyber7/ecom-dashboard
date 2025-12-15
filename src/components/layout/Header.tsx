import { CalendarDays, Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Header() {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 sticky top-0 z-30">
      {/* Left side - Title & Breadcrumb */}
      <div className="flex items-center gap-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Dashboard</h2>
          <p className="text-sm text-muted-foreground">
            Welcome back! Here's your business overview.
          </p>
        </div>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-3">
        {/* Date Filter */}
        <div className="flex items-center gap-2 bg-secondary/50 rounded-lg px-3 py-1.5">
          <CalendarDays className="w-4 h-4 text-muted-foreground" />
          <Select defaultValue="last30">
            <SelectTrigger className="border-0 bg-transparent h-auto p-0 text-sm font-medium focus:ring-0 w-[130px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="last7">Last 7 days</SelectItem>
              <SelectItem value="last30">Last 30 days</SelectItem>
              <SelectItem value="last90">Last 90 days</SelectItem>
              <SelectItem value="thisYear">This year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search */}
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Search className="w-5 h-5" />
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
        </Button>

        {/* User Avatar */}
        <Button variant="ghost" size="icon" className="rounded-full">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
        </Button>
      </div>
    </header>
  );
}
