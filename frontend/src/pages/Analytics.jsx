import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

import AnalyticsCards from "../components/AnalyticsCards";
import RevenueAnalyticsChart from "../components/RevenueAnalyticsChart";
import ExpenseBreakdown from "../components/ExpenseBreakdown";
import AIInsights from "../components/AIInsights";

export default function Analytics() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background Blur */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Sidebar */}
      <Sidebar
        isMobileOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main */}
      <div className="relative z-10 lg:ml-64">

        <TopNavbar
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="p-8 space-y-8">

          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold">
              📈 Business Analytics
            </h1>

            <p className="text-slate-400 mt-2">
              Track revenue, expenses, profitability and AI-powered business insights.
            </p>
          </div>

          {/* KPI Cards */}
          <AnalyticsCards />

          {/* Revenue Chart */}
          <RevenueAnalyticsChart />

          {/* Bottom Section */}
          <div className="grid lg:grid-cols-2 gap-6">

            <ExpenseBreakdown />

            <AIInsights />

          </div>

        </main>

      </div>

    </div>
  );
}