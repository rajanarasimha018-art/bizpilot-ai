import React from 'react';

const reports = [
  { name: 'Q3 Financial Summary', date: 'Oct 15, 2023', type: 'PDF', size: '2.4 MB' },
  { name: 'Inventory Audit Log', date: 'Oct 12, 2023', type: 'CSV', size: '890 KB' },
  { name: 'Tax Compliance Report', date: 'Oct 10, 2023', type: 'PDF', size: '1.1 MB' },
];

export default function RecentReports() {
  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Recent Reports</h3>
        <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">Generate New</button>
      </div>

      <div className="space-y-2">
        {reports.map((report, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold ${
              report.type === 'PDF' ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'
            }`}>
              {report.type}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white font-medium truncate group-hover:text-indigo-400 transition-colors">{report.name}</p>
              <p className="text-xs text-slate-500">{report.date} • {report.size}</p>
            </div>
            <button className="text-slate-500 group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}