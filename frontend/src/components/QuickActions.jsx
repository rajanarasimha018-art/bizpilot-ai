import React from 'react';

const actions = [
  { 
    title: 'New Invoice', 
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
    color: 'from-indigo-500 to-blue-500'
  },
  { 
    title: 'Add Product', 
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    title: 'Record Expense', 
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />,
    color: 'from-green-500 to-emerald-500'
  },
  { 
    title: 'Run Payroll', 
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />,
    color: 'from-orange-500 to-red-500'
  },
];

export default function QuickActions() {
  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
      <h3 className="text-lg font-semibold text-white mb-6">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, i) => (
          <button 
            key={i} 
            className="group relative p-4 rounded-xl bg-slate-950/40 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
            <div className={`relative w-8 h-8 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center text-white mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {action.icon}
              </svg>
            </div>
            <p className="relative text-sm text-white font-medium text-left">{action.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}