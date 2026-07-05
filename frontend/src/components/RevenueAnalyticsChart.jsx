import React from "react";

export default function RevenueAnalyticsChart() {
  const revenue = [35, 48, 42, 55, 68, 62, 74, 82, 78, 86, 91, 79];
  const expenses = [18, 22, 27, 25, 31, 29, 35, 39, 37, 43, 47, 41];

  const max = 100;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 col-span-2">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Revenue vs Expenses
          </h2>

          <p className="text-slate-400 text-sm">
            Monthly Performance
          </p>
        </div>

        <div className="flex gap-5 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
            <span className="text-slate-300">Revenue</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-slate-300">Expenses</span>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between h-72 gap-3">
        {revenue.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-end items-center flex-1 h-full"
          >
            <div
              className="w-4 rounded-full bg-indigo-500"
              style={{
                height: `${(item / max) * 100}%`,
              }}
            ></div>

            <div
              className="w-4 rounded-full bg-purple-500 mt-1"
              style={{
                height: `${(expenses[index] / max) * 100}%`,
              }}
            ></div>

            <span className="text-xs text-slate-500 mt-2">
              {
                [
                  "J",
                  "F",
                  "M",
                  "A",
                  "M",
                  "J",
                  "J",
                  "A",
                  "S",
                  "O",
                  "N",
                  "D",
                ][index]
              }
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}