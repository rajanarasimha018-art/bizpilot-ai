import React from "react";

export default function BusinessInsightCard({
  title,
  value,
  color,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2
        className={`text-3xl font-bold mt-2 ${color}`}
      >
        {value}
      </h2>
    </div>
  );
}