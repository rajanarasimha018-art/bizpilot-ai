import React from "react";

export default function ChatMessage({ type, message }) {
  return (
    <div
      className={`flex ${
        type === "user" ? "justify-end" : "justify-start"
      } mb-5`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-6 py-5 shadow-xl ${
          type === "user"
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
            : "bg-slate-900 border border-slate-700 text-slate-200"
        }`}
      >
        {type === "ai" && (
          <div className="flex items-center gap-2 mb-3 border-b border-slate-700 pb-2">
            <span className="text-xl">🤖</span>
            <h3 className="font-semibold text-indigo-400">
              BizPilot AI
            </h3>
          </div>
        )}

        <p className="whitespace-pre-wrap leading-8 text-[15px]">
          {message}
        </p>
      </div>
    </div>
  );
}