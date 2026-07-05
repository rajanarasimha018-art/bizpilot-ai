import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

import ReportSummaryCards from "../components/ReportSummaryCards";
import ReportGenerator from "../components/ReportGenerator";
import BusinessReport from "../components/BusinessReport";
import ReportHistory from "../components/ReportHistory";

export default function Reports() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[120px]"></div>

        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>

      <Sidebar
        isMobileOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="relative z-10 lg:ml-64">

        <TopNavbar
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="p-8 space-y-8">

          <div>

            <h1 className="text-4xl font-bold">
              📄 AI Business Reports
            </h1>

            <p className="text-slate-400 mt-2">
              Generate intelligent business reports powered by AI.
            </p>

          </div>

          <ReportSummaryCards />

          <ReportGenerator />

          <BusinessReport />

          <ReportHistory />

        </main>

      </div>

    </div>
  );
}