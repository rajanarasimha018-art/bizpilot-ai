import React, { useState } from "react";

export default function ReportGenerator() {
  const [loading, setLoading] = useState(false);

  const generateReport = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-5">

        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
          🤖
        </div>

        <div>

          <h2 className="text-xl font-semibold text-white">
            AI Report Generator
          </h2>

          <p className="text-slate-400 text-sm">
            Generate complete business reports instantly.
          </p>

        </div>

      </div>

      <button
        onClick={generateReport}
        disabled={loading}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition text-white font-semibold"
      >
        {loading ? "Generating Report..." : "📄 Generate AI Report"}
      </button>

      {loading && (

        <div className="mt-6">

          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">

            <div className="h-full bg-indigo-500 animate-pulse w-full"></div>

          </div>

          <p className="text-slate-400 text-sm mt-3">
            AI is analyzing your business...
          </p>

        </div>

      )}

    </div>
  );
}