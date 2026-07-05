import React from 'react';

export default function BusinessHealthScore() {
  const score = 85;
  const circumference = 2 * Math.PI * 56;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Business Health</h3>
          <p className="text-xs text-slate-400">Real-time performance index</p>
        </div>
        <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
          EXCELLENT
        </span>
      </div>

      <div className="flex items-center justify-center my-4">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full transform -rotate-90">
            <defs>
              <linearGradient id="healthScoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            {/* Background Circle */}
            <circle 
              cx="80" 
              cy="80" 
              r="56" 
              stroke="rgba(255,255,255,0.05)" 
              strokeWidth="10" 
              fill="none" 
            />
            {/* Progress Circle */}
            <circle 
              cx="80" 
              cy="80" 
              r="56" 
              stroke="url(#healthScoreGrad)" 
              strokeWidth="10" 
              fill="none" 
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-white">{score}</span>
            <span className="text-xs text-slate-400 mt-1">out of 100</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/5">
        <div className="text-center">
          <p className="text-xs text-slate-500">Liquidity</p>
          <p className="text-sm font-semibold text-green-400">High</p>
        </div>
        <div className="text-center border-x border-white/5">
          <p className="text-xs text-slate-500">Growth</p>
          <p className="text-sm font-semibold text-indigo-400">+12%</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-slate-500">Risk</p>
          <p className="text-sm font-semibold text-yellow-400">Low</p>
        </div>
      </div>
    </div>
  );
}