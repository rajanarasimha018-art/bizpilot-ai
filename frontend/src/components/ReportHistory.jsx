import React from "react";

const reports = [
  {
    month: "July 2026",
    type: "Business Report",
    status: "Completed",
  },
  {
    month: "June 2026",
    type: "Financial Report",
    status: "Completed",
  },
  {
    month: "May 2026",
    type: "Inventory Report",
    status: "Completed",
  },
  {
    month: "April 2026",
    type: "Sales Report",
    status: "Completed",
  },
];

export default function ReportHistory() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Report History
          </h2>

          <p className="text-slate-400 text-sm">
            Previously generated reports
          </p>
        </div>
      </div>

      <div className="space-y-4">

        {reports.map((report) => (

          <div
            key={report.month}
            className="flex items-center justify-between bg-slate-800 rounded-xl p-4 hover:bg-slate-700 transition"
          >

            <div>

              <h3 className="text-white font-medium">
                {report.month}
              </h3>

              <p className="text-slate-400 text-sm">
                {report.type}
              </p>

            </div>

            <div className="flex items-center gap-3">

              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                {report.status}
              </span>

              <button className="px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-sm">
                Download
              </button>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}