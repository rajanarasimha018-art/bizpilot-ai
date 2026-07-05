import React from "react";

export default function ChatInput({
  question,
  setQuestion,
  askAI,
}) {
  return (
    <div className="flex gap-3 mt-6">
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") askAI();
        }}
        placeholder="Ask BizPilot AI..."
        className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-indigo-500"
      />

      <button
        onClick={askAI}
        className="px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white font-semibold"
      >
        Send
      </button>
    </div>
  );
}