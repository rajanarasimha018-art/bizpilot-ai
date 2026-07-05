import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

import CustomerStats from "../components/CustomerStats";
import CustomerTable from "../components/CustomerTable";
import CustomerInsights from "../components/CustomerInsights";

export default function Customers() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Sidebar
        isMobileOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="lg:ml-64">

        <TopNavbar
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="p-8 space-y-8">

          {/* Header */}

          <div>

            <h1 className="text-4xl font-bold">
              👥 Customer Management
            </h1>

            <p className="text-slate-400 mt-2">
              Analyze customer behaviour with AI-powered insights.
            </p>

          </div>

          {/* Stats */}

          <CustomerStats />

          {/* Customer Table */}

          <CustomerTable />

          {/* AI Insights */}

          <CustomerInsights />

        </main>

      </div>

    </div>
  );
}