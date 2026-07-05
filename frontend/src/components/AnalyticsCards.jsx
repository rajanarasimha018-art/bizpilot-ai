import React from "react";

const cards = [
  {
    title: "Total Revenue",
    value: "₹12.4L",
    change: "+12.5%",
    color: "text-green-400",
  },
  {
    title: "Total Expenses",
    value: "₹8.1L",
    change: "-4.2%",
    color: "text-red-400",
  },
  {
    title: "Net Profit",
    value: "₹4.3L",
    change: "+18.4%",
    color: "text-indigo-400",
  },
  {
    title: "Orders",
    value: "1,245",
    change: "+8.1%",
    color: "text-purple-400",
  },
];

export default function AnalyticsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
        >
          <p className="text-slate-400 text-sm">{card.title}</p>

          <h2 className="text-3xl font-bold text-white mt-2">
            {card.value}
          </h2>

          <p className={`mt-3 text-sm font-medium ${card.color}`}>
            {card.change} this month
          </p>
        </div>
      ))}
    </div>
  );
}