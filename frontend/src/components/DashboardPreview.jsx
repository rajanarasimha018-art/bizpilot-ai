import React from 'react';

const MetricCard = ({ title, value, change, trend, icon }) => (
  <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all hover:bg-white/[0.07] hover:border-indigo-500/30">
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs text-slate-400 font-medium">{title}</span>
      <div className="text-slate-500">{icon}</div>
    </div>
    <div className="text-xl font-semibold text-white">{value}</div>
    <div className={`flex items-center gap-1 text-xs mt-1 ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
      {trend === 'up' ? '↑' : '↓'} {change}
      <span className="text-slate-500 ml-1">vs last month</span>
    </div>
  </div>
);

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">One Dashboard.</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Total Clarity.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Stop juggling spreadsheets and apps. See your entire business health in real-time.</p>
        </div>

        {/* Dashboard Window */}
        <div className="relative rounded-2xl bg-slate-900/80 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden group">
          {/* Top Bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-slate-950/50">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="flex-1 text-center text-xs text-slate-500 font-mono">app.bizpilot.ai/dashboard</div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left & Middle Column (Metrics & Chart) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetricCard 
                  title="Revenue" 
                  value="$48.2k" 
                  change="12.5%" 
                  trend="up"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                />
                <MetricCard 
                  title="Expenses" 
                  value="$12.1k" 
                  change="4.2%" 
                  trend="down"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                />
                <MetricCard 
                  title="Orders" 
                  value="1,240" 
                  change="8.1%" 
                  trend="up"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
                />
                <MetricCard 
                  title="Inventory" 
                  value="86%" 
                  change="2.0%" 
                  trend="up"
                  icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>}
                />
              </div>

              {/* Chart Area */}
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-white">Cash Flow Analysis</h3>
                    <p className="text-xs text-slate-500">Last 30 days</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5 text-slate-400"><span className="w-2 h-2 rounded-full bg-indigo-500"></span> Revenue</span>
                    <span className="flex items-center gap-1.5 text-slate-400"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Expenses</span>
                  </div>
                </div>
                
                {/* SVG Chart */}
                <div className="relative h-48 w-full">
                  <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="grad-rev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="grad-exp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.05)" />
                    <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.05)" />
                    <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.05)" />
                    
                    {/* Revenue Area */}
                    <path d="M0,150 C50,120 100,140 150,80 C200,30 250,70 300,50 C350,30 400,60 400,60 L400,200 L0,200 Z" fill="url(#grad-rev)" />
                    <path d="M0,150 C50,120 100,140 150,80 C200,30 250,70 300,50 C350,30 400,60 400,60" fill="none" stroke="#6366f1" strokeWidth="2" />
                    
                    {/* Expenses Area */}
                    <path d="M0,180 C50,160 100,170 150,140 C200,110 250,130 300,120 C350,110 400,130 400,130 L400,200 L0,200 Z" fill="url(#grad-exp)" />
                    <path d="M0,180 C50,160 100,170 150,140 C200,110 250,130 300,120 C350,110 400,130 400,130" fill="none" stroke="#a855f7" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column (Health, AI, Notifications) */}
            <div className="space-y-6">
              
              {/* Health Score */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 backdrop-blur-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-white">Business Health</h3>
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-green-500/20 text-green-400 border border-green-500/30">EXCELLENT</span>
                </div>
                <div className="flex items-center justify-center my-4">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="64" cy="64" r="56" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                      <circle cx="64" cy="64" r="56" stroke="url(#health-grad)" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray="350" strokeDashoffset="52" />
                      <defs>
                        <linearGradient id="health-grad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-white">85</span>
                      <span className="text-xs text-slate-400">out of 100</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Copilot Suggestions */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-sm font-medium text-white">AI Copilot</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-xs text-slate-300">
                    <span className="text-indigo-400 font-semibold">Insight:</span> Your Q3 marketing ROI increased by 24%. Consider reallocating $2k from print to digital.
                  </div>
                  <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/10 text-xs text-slate-300">
                    <span className="text-purple-400 font-semibold">Alert:</span> Inventory for "Product X" is low. Auto-reorder triggered.
                  </div>
                </div>
              </div>

              {/* Notifications */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-sm font-medium text-white mb-4">Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-xs">
                    <div className="w-2 h-2 mt-1 rounded-full bg-blue-400"></div>
                    <div className="flex-1">
                      <p className="text-slate-300">Stripe payout of $4,200 processed</p>
                      <p className="text-slate-500 mt-0.5">2 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs">
                    <div className="w-2 h-2 mt-1 rounded-full bg-green-400"></div>
                    <div className="flex-1">
                      <p className="text-slate-300">Payroll scheduled for Friday</p>
                      <p className="text-slate-500 mt-0.5">1 hour ago</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}