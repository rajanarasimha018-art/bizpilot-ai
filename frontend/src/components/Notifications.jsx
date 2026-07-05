import React from 'react';

const notifications = [
  { id: 1, type: 'payment', title: 'Stripe payout processed', desc: '$4,200.00 has been deposited', time: '2m ago', color: 'bg-green-500' },
  { id: 2, type: 'payroll', title: 'Payroll scheduled', desc: 'Auto-payroll runs this Friday', time: '1h ago', color: 'bg-blue-500' },
  { id: 3, type: 'alert', title: 'Failed transaction', desc: 'Customer #2940 payment declined', time: '3h ago', color: 'bg-red-500' },
  { id: 4, type: 'report', title: 'Monthly report ready', desc: 'Q3 Financial summary is available', time: '1d ago', color: 'bg-indigo-500' },
];

export default function Notifications() {
  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Notifications</h3>
        <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">View all</button>
      </div>

      <div className="space-y-4">
        {notifications.map((notif) => (
          <div key={notif.id} className="flex items-start gap-3 group cursor-pointer">
            <div className="relative mt-1">
              <div className={`w-2 h-2 rounded-full ${notif.color}`}></div>
              <div className={`absolute inset-0 w-2 h-2 rounded-full ${notif.color} animate-ping opacity-75`}></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white font-medium truncate group-hover:text-indigo-400 transition-colors">{notif.title}</p>
              <p className="text-xs text-slate-400 truncate">{notif.desc}</p>
              <p className="text-xs text-slate-600 mt-1">{notif.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}