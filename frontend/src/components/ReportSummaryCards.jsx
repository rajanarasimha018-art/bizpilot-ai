import React from "react";

const cards = [
  {
    title: "Revenue",
    value: "₹12.4L",
    color: "text-green-400",
  },
  {
    title: "Expenses",
    value: "₹8.1L",
    color: "text-red-400",
  },
  {
    title: "Net Profit",
    value: "₹4.3L",
    color: "text-indigo-400",
  },
  {
    title: "Business Score",
    value: "91/100",
    color: "text-yellow-400",
  },
];

export default function ReportSummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
        >
          <p className="text-slate-400 text-sm">{card.title}</p>

          <h2 className={`text-3xl font-bold mt-2 ${card.color}`}>
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}