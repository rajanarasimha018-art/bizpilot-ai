import React from "react";

const stats = [
  {
    title: "Total Customers",
    value: "2,486",
    color: "text-indigo-400",
  },
  {
    title: "Active Customers",
    value: "1,934",
    color: "text-green-400",
  },
  {
    title: "New This Month",
    value: "128",
    color: "text-yellow-400",
  },
  {
    title: "VIP Customers",
    value: "62",
    color: "text-purple-400",
  },
];

export default function CustomerStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
        >
          <p className="text-slate-400 text-sm">
            {item.title}
          </p>

          <h2 className={`text-3xl font-bold mt-2 ${item.color}`}>
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}