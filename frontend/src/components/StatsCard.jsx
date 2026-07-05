import React from 'react';

export default function StatsCard({ title, value, change, trend, icon, gradient }) {
  const isUp = trend === 'up';
  
  return (
    <div className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
      {/* Ambient hover glow */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${gradient}`}></div>
      
      <div className="relative flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-slate-400 font-medium mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-white tracking-tight">{value}</h3>
        </div>
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${gradient}`}>
          {icon}
        </div>
      </div>
      
      <div className="relative flex items-center gap-2 text-xs">
        <span className={`flex items-center gap-1 font-medium ${isUp ? 'text-green-400' : 'text-red-400'}`}>
          {isUp ? (
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          ) : (
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          )}
          {change}
        </span>
        <span className="text-slate-500">vs last month</span>
      </div>
    </div>
  );
}