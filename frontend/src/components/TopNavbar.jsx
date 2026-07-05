import React from 'react';

export default function TopNavbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 bg-slate-950/70 backdrop-blur-xl border-b border-white/5">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        
        {/* Left: Menu & Search */}
        <div className="flex items-center gap-4 flex-1">
          <button onClick={onMenuClick} className="lg:hidden p-2 text-slate-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          
          <div className="relative max-w-md w-full hidden sm:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input 
              type="text" 
              placeholder="Search transactions, reports..." 
              className="w-full pl-10 pr-4 py-2 text-sm text-slate-300 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-colors placeholder-slate-500"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-slate-950"></span>
          </button>

          <div className="hidden md:flex items-center gap-3 pl-4 border-l border-white/10">
            <div className="text-right">
              <p className="text-sm font-medium text-white"> Business Owner</p>
              <p className="text-xs text-slate-500">Admin</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold border-2 border-white/10">
              BO
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}