import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300 ${isScrolled ? 'bg-slate-950/70 backdrop-blur-xl border border-white/10 shadow-2xl shadow-indigo-950/20' : 'bg-transparent'}`}>
          
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-7 h-7 bg-slate-950 rounded-md flex items-center justify-center border border-white/20">
                <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-purple-400">B</span>
              </div>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white hidden sm:block">BizPilot<span className="text-indigo-400">AI</span></span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#dashboard" className="hover:text-white transition-colors">Dashboard</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">Sign In</a>
            <a href="#" className="relative px-5 py-2 text-sm font-medium text-white rounded-full overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 transition-transform group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
              <span className="relative">Get Started</span>
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-white/10 p-4 flex flex-col gap-4">
            <a href="#features" className="text-slate-300 hover:text-white">Features</a>
            <a href="#dashboard" className="text-slate-300 hover:text-white">Dashboard</a>
            <a href="#" className="text-slate-300 hover:text-white">Pricing</a>
            <a href="#" className="text-slate-300 hover:text-white">Sign In</a>
            <a href="#" className="px-5 py-2 text-center text-sm font-medium text-white rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">Get Started</a>
          </div>
        )}
      </div>
    </header>
  );
}