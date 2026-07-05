import React, { useState } from "react";
import { generateBusinessInsights } from "../services/groq";

export default function AICopilotPanel() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    setLoading(true);

    const result = await generateBusinessInsights(question);


    
    setAnswer(result);

    setLoading(false);
  };

  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/10 backdrop-blur-xl border border-indigo-500/20 lg:col-span-2">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              AI Copilot
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </h3>

            <p className="text-xs text-slate-400">
              Powered by Groq AI
            </p>
          </div>
        </div>
      </div>

      {/* AI Answer */}
      <div className="mb-6">
        {loading ? (
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-indigo-400 text-sm animate-pulse">
              🤖 Thinking...
            </p>
          </div>
        ) : answer ? (
          <div className="p-4 rounded-xl bg-white/5 border border-indigo-500/30">
            <p className="text-sm text-slate-300 whitespace-pre-wrap">
              {answer}
            </p>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-sm text-slate-400">
              👋 Ask anything about your business.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-xs text-indigo-300">
                Increase Profit
              </span>

              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-xs text-purple-300">
                Reduce Expenses
              </span>

              <span className="px-3 py-1 rounded-full bg-green-500/20 text-xs text-green-300">
                Inventory Tips
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="relative">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") askAI();
          }}
          placeholder="Ask BizPilot anything..."
          className="w-full pl-4 pr-12 py-3 text-sm text-slate-300 bg-slate-950/50 border border-white/10 rounded-xl focus:outline-none focus:border-indigo-500/50 focus:bg-slate-950/80 transition-colors placeholder-slate-500"
        />

        <button
          onClick={askAI}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}