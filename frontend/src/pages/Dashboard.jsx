import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import StatsCard from '../components/StatsCard';
import BusinessHealthScore from '../components/BusinessHealthScore';
import RevenueChart from '../components/RevenueChart';
import AICopilotPanel from '../components/AICopilotPanel';
import Notifications from '../components/Notifications';
import InventoryAlerts from '../components/InventoryAlerts';
import RecentReports from '../components/RecentReports';
import QuickActions from '../components/QuickActions';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient Background Blobs for Glassmorphism context */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Sidebar */}
      <Sidebar isMobileOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="relative z-10 lg:ml-64">
        <TopNavbar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="p-4 sm:p-6 lg:p-8 space-y-6">
          
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Welcome back 👋</h1>
              <p className="text-slate-400 mt-1 text-sm sm:text-base">Here's what's happening with your business today.</p>
            </div>
            <button className="hidden sm:flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              New Transaction
            </button>
          </div>

          {/* Row 1: Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatsCard 
              title="Total Revenue" 
              value="₹48,295" 
              change="12.5%" 
              trend="up" 
              gradient="from-indigo-500 to-blue-500"
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            />
            <StatsCard 
              title="Total Expenses" 
              value="₹12,432" 
              change="4.2%" 
              trend="down" 
              gradient="from-purple-500 to-pink-500"
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
            />
            <StatsCard 
              title="Total Orders" 
              value="1,245" 
              change="8.1%" 
              trend="up" 
              gradient="from-green-500 to-emerald-500"
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
            />
            <StatsCard 
              title="Inventory Value" 
              value="₹84,120" 
              change="2.0%" 
              trend="up" 
              gradient="from-orange-500 to-red-500"
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>}
            />
          </div>

          {/* Row 2: Revenue Chart + Health Score */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <RevenueChart />
            <BusinessHealthScore />
          </div>

          {/* Row 3: AI Copilot + Notifications */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <AICopilotPanel />
            <Notifications />
          </div>

          {/* Row 4: Inventory Alerts + Recent Reports + Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <InventoryAlerts />
            <RecentReports />
            <QuickActions />
          </div>

        </main>
      </div>
    </div>
  );
}