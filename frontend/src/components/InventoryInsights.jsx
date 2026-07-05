import React from "react";

export default function InventoryInsights() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
          🤖
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            AI Inventory Insights
          </h2>

          <p className="text-slate-400 text-sm">
            Smart inventory recommendations
          </p>
        </div>
      </div>

      <div className="space-y-4">

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-red-400 font-semibold">
            ⚠ 3 products need immediate restocking
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-green-400 font-semibold">
            📈 Rice demand increased by 18%
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-yellow-400 font-semibold">
            📦 Dead stock worth ₹12,000 detected
          </p>
        </div>

        <div className="bg-indigo-600/20 border border-indigo-500 rounded-xl p-5">

          <h3 className="text-white font-semibold mb-3">
            Recommendation
          </h3>

          <ul className="list-disc ml-5 text-slate-300 space-y-2">
            <li>Restock Rice within 2 days.</li>
            <li>Clear slow-moving inventory with discounts.</li>
            <li>Increase stock for high-demand products.</li>
            <li>Monitor daily inventory movement.</li>
          </ul>

          <div className="mt-6">
            <p className="text-green-400 font-semibold">
              Estimated Savings
            </p>

            <h2 className="text-3xl font-bold text-white">
              ₹22,400
            </h2>
          </div>

        </div>

      </div>

    </div>
  );
}