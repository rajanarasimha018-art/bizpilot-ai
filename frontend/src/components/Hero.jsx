import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const navigate = useNavigate();
  return (
    <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-xs font-medium text-indigo-300 mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Now integrating with major banking APIs
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 animate-fade-in-up animation-delay-100">
          Automate Your Business.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
            Amplify Your Growth.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed animate-fade-in-up animation-delay-200">
          BizPilot AI is the intelligent operating system for MSMEs. Connect your bank, store, and inventory to get real-time analytics, automated bookkeeping, and AI-driven financial advice—all in one beautiful dashboard.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
          <button
  onClick={() => navigate("/")}
  className="relative w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white rounded-full overflow-hidden group"
>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 transition-transform group-hover:scale-110"></div>
            <span className="relative flex items-center justify-center gap-2">
              Start Free Trial
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </button>
          <a href="#dashboard" className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white rounded-full bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            Watch Demo
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-slate-500 animate-fade-in-up animation-delay-400">
          <div className="flex items-center gap-2 text-xs">
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            No Credit Card Required
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs">
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Setup in 5 Minutes
          </div>
        </div>
      </div>
    </section>
  );
}