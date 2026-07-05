import React from "react";

export default function CustomerInsights() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-xl font-semibold mb-5">
        🤖 AI Customer Insights
      </h2>

      <div className="space-y-4">

        <div className="bg-slate-800 rounded-xl p-4">
          ✅ 65% of revenue comes from repeat customers.
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          ⭐ VIP customers spend 2.8x more than regular customers.
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          📈 Customer retention improved by 18% this quarter.
        </div>

        <div className="bg-indigo-900/40 border border-indigo-500 rounded-xl p-5">

          <h3 className="font-bold mb-3">
            AI Recommendation
          </h3>

          <ul className="list-disc ml-5 space-y-2 text-slate-300">

            <li>Create loyalty rewards.</li>

            <li>Offer birthday discounts.</li>

            <li>Send WhatsApp offers.</li>

            <li>Reward repeat purchases.</li>

          </ul>

        </div>

      </div>

    </div>
  );
}