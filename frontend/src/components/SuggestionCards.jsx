import React from "react";

const suggestions = [
  {
    label: "📈 Increase Profit",
    prompt: "How can I increase my business profit?",
  },
  {
    label: "💰 Reduce Expenses",
    prompt: "How can I reduce my business expenses?",
  },
  {
    label: "📦 Inventory Analysis",
    prompt: "Analyze my inventory and suggest improvements.",
  },
  {
    label: "📊 Business Health",
    prompt: "Analyze my business health and provide recommendations.",
  },
  {
    label: "📢 Marketing Ideas",
    prompt: "Suggest marketing ideas to grow my business.",
  },
  {
    label: "👥 Customer Growth",
    prompt: "How can I increase repeat customers and customer retention?",
  },
];

export default function SuggestionCards({ onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 mt-5">
      {suggestions.map((item) => (
        <button
  key={item.label}
  onClick={() => onSelect(item.prompt)}
  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:border-indigo-500 hover:bg-slate-800 transition"
>
  {item.label}
</button>
      ))}
    </div>
  );
}