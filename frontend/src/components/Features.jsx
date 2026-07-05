import React from 'react';

const features = [
  {
    title: 'Automated Bookkeeping',
    description: 'Sync your bank accounts and let AI categorize transactions instantly. No more manual data entry or spreadsheets.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    )
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast revenue, identify seasonal trends, and anticipate cash flow gaps before they happen with 95% accuracy.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    )
  },
  {
    title: 'Smart Inventory',
    description: 'Track stock levels in real-time. BizPilot auto-suggests reorder points and predicts demand based on sales velocity.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    )
  },
  {
    title: 'Seamless Integrations',
    description: 'Connect Shopify, WooCommerce, Stripe, PayPal, and QuickBooks in one click. Your data syncs securely every 60 seconds.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    )
  },
  {
    title: 'Bank-Grade Security',
    description: '256-bit encryption, SOC 2 Type II compliance, and read-only bank access. Your financial data is safer than your bank.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    )
  },
  {
    title: 'Tax Ready Reports',
    description: 'Generate CPA-approved tax reports in one click. BizPilot identifies deductions you’re missing to lower your tax bill.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    )
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Everything you need to</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">scale faster</span>
          </h2>
          <p className="text-slate-400">Powerful financial tools designed specifically for modern MSMEs. No finance degree required.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-950/30"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
              
              <div className="relative mb-5 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {feature.icon}
                </svg>
              </div>
              
              <h3 className="relative text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="relative text-sm text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}