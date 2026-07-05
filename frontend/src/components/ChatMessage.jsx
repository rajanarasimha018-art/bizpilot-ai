import React from "react";

export default function ChatMessage({ type, message }) {
  return (
    <div
      className={`flex ${
        type === "user" ? "justify-end" : "justify-start"
      } mb-4`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-5 py-4 shadow-lg ${
          type === "user"
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
            : "bg-slate-900 border border-slate-700 text-slate-300"
        }`}
      >
        <p className="whitespace-pre-wrap leading-7 text-sm">
          {message}
        </p>
      </div>
    </div>
  );
}