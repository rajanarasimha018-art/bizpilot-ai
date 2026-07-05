import React from 'react';

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 md:p-16 text-center border border-white/10">
          
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-slate-900 to-purple-900/40"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_110%)]"></div>

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300">Ready to put your</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">business on autopilot?</span>
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 mb-10">
              Join thousands of MSMEs saving 20+ hours a month on financial management. Start your 14-day free trial today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="relative w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white rounded-full overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 transition-transform group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
                <span className="relative">Get Started for Free</span>
              </a>
              <a href="#" className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white rounded-full bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-colors">
                Schedule a Demo
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}