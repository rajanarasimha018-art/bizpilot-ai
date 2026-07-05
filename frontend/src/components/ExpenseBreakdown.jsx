import React from "react";

const expenses = [
  { name: "Rent", value: 35, color: "bg-red-500" },
  { name: "Salaries", value: 28, color: "bg-indigo-500" },
  { name: "Marketing", value: 15, color: "bg-green-500" },
  { name: "Utilities", value: 12, color: "bg-yellow-500" },
  { name: "Others", value: 10, color: "bg-purple-500" },
];

export default function ExpenseBreakdown() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">
        Expense Breakdown
      </h2>

      <div className="space-y-5">
        {expenses.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between mb-2">
              <span className="text-slate-300">{item.name}</span>
              <span className="text-white">{item.value}%</span>
            </div>

            <div className="w-full bg-slate-800 rounded-full h-3">
              <div
                className={`${item.color} h-3 rounded-full`}
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}