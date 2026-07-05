import React from 'react';

export default function RevenueChart() {
  // Data points for the chart
  const revenueData = [40, 55, 45, 60, 75, 65, 80, 90, 85, 95, 100, 85];
  const expensesData = [20, 25, 30, 28, 35, 32, 40, 45, 42, 50, 55, 48];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Generate SVG Path
  const generatePath = (data, maxVal = 120, height = 200, width = 600) => {
    const step = width / (data.length - 1);
    return data.map((val, i) => {
      const x = i * step;
      const y = height - (val / maxVal) * height;
      return `${i === 0 ? 'M' : 'L'} ${x},${y}`;
    }).join(' ');
  };

  const generateArea = (data, maxVal = 120, height = 200, width = 600) => {
    const step = width / (data.length - 1);
    const path = data.map((val, i) => {
      const x = i * step;
      const y = height - (val / maxVal) * height;
      return `${i === 0 ? 'M' : 'L'} ${x},${y}`;
    }).join(' ');
    return `${path} L ${width},${height} L 0,${height} Z`;
  };

  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 lg:col-span-2">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Revenue vs Expenses</h3>
          <p className="text-xs text-slate-400">Monthly performance comparison</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
            <span className="text-slate-400">Revenue</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="w-3 h-3 rounded-full bg-purple-500"></span>
            <span className="text-slate-400">Expenses</span>
          </div>
          <select className="bg-white/5 border border-white/10 text-xs text-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-indigo-500/50">
            <option>This Year</option>
            <option>Last Year</option>
          </select>
        </div>
      </div>

      <div className="relative w-full">
        <svg className="w-full h-auto" viewBox="0 0 600 250" preserveAspectRatio="none">
          <defs>
            <linearGradient id="revAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="expAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          <line x1="0" y1="50" x2="600" y2="50" stroke="rgba(255,255,255,0.05)" />
          <line x1="0" y1="100" x2="600" y2="100" stroke="rgba(255,255,255,0.05)" />
          <line x1="0" y1="150" x2="600" y2="150" stroke="rgba(255,255,255,0.05)" />
          <line x1="0" y1="200" x2="600" y2="200" stroke="rgba(255,255,255,0.1)" />

          {/* Expenses Area & Line */}
          <path d={generateArea(expensesData)} fill="url(#expAreaGrad)" />
          <path d={generatePath(expensesData)} fill="none" stroke="#a855f7" strokeWidth="2" />

          {/* Revenue Area & Line */}
          <path d={generateArea(revenueData)} fill="url(#revAreaGrad)" />
          <path d={generatePath(revenueData)} fill="none" stroke="#6366f1" strokeWidth="2.5" />
        </svg>

        {/* X-Axis Labels */}
        <div className="flex justify-between mt-2 text-xs text-slate-500">
          {months.map((m, i) => (
            <span key={i} className="hidden sm:block">{m}</span>
          ))}
          <span className="sm:hidden">Jan</span>
          <span className="sm:hidden">Apr</span>
          <span className="sm:hidden">Jul</span>
          <span className="sm:hidden">Oct</span>
          <span className="sm:hidden">Dec</span>
        </div>
      </div>
    </div>
  );
}