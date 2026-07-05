import React from "react";

export default function AIInsights() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
          🤖
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            AI Insights
          </h2>

          <p className="text-slate-400 text-sm">
            Smart recommendations
          </p>
        </div>
      </div>

      <div className="space-y-4 text-sm">

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-green-400 font-semibold">
            📈 Revenue increased by 12%
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-yellow-400 font-semibold">
            💰 Expenses reduced by 4%
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-indigo-400 font-semibold">
            📦 Inventory turnover is healthy.
          </p>
        </div>

        <div className="bg-indigo-600/20 border border-indigo-500 rounded-xl p-4">
          <h3 className="text-white font-semibold mb-2">
            Recommendation
          </h3>

          <ul className="text-slate-300 list-disc ml-5 space-y-1">
            <li>Increase high-margin products.</li>
            <li>Reduce logistics expenses.</li>
            <li>Offer combo discounts.</li>
            <li>Maintain inventory for fast-moving products.</li>
          </ul>

          <p className="mt-4 text-green-400 font-semibold">
            Estimated Monthly Savings
          </p>

          <h2 className="text-2xl font-bold text-white">
            ₹18,500
          </h2>
        </div>

      </div>
    </div>
  );
}