import React from "react";
import jsPDF from "jspdf";

export default function BusinessReport() {

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("BizPilot AI", 20, 20);

    doc.setFontSize(16);
    doc.text("Business Analysis Report", 20, 34);

    doc.setDrawColor(120);
    doc.line(20, 40, 190, 40);

    // Summary
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    doc.text("Revenue : Rs. 12.4L", 20, 55);
    doc.text("Expenses : Rs. 8.1L", 20, 65);
    doc.text("Net Profit : Rs. 4.3L", 20, 75);
    doc.text("Business Score : 91/100", 20, 85);

    // Recommendations
    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.text("AI Recommendations", 20, 105);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    const tips = [
      "Increase high-margin product sales",
      "Reduce transportation expenses",
      "Offer combo discounts",
      "Restock fast-moving inventory",
      "Launch customer loyalty program",
    ];

    let y = 120;

    tips.forEach((tip) => {
      doc.text("- " + tip, 28, y);
      y += 12;
    });

    // Savings
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Estimated Monthly Savings", 20, 195);

    doc.setTextColor(0, 140, 70);
    doc.setFontSize(18);
    doc.text("Rs. 21,000", 20, 207);

    // Reset Color
    doc.setTextColor(0, 0, 0);

    doc.setFontSize(11);
    doc.text(
      "Generated On : " + new Date().toLocaleDateString(),
      20,
      220
    );

    // Footer
    doc.setDrawColor(150);
    doc.line(20, 275, 190, 275);

    doc.setFontSize(10);
    doc.setTextColor(120);

    doc.text("Powered by BizPilot AI", 20, 283);

    doc.text(
      "Page 1",
      105,
      283,
      { align: "center" }
    );

    doc.text(
      "Confidential",
      190,
      283,
      { align: "right" }
    );

    doc.save("BizPilot_Business_Report.pdf");
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Business Report Summary
          </h2>

          <p className="text-slate-400">
            AI Generated Business Analysis
          </p>
        </div>

        <button
          onClick={downloadPDF}
          className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-500 transition text-white"
        >
          ⬇ Download PDF
        </button>

      </div>

      <div className="space-y-5">

        <div className="bg-slate-800 rounded-xl p-5">
          <h3 className="text-green-400 font-semibold mb-2">
            📈 Revenue
          </h3>

          <p className="text-slate-300">
            Monthly revenue increased by <b>12%</b>. Sales performance is stable
            with consistent customer growth.
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <h3 className="text-red-400 font-semibold mb-2">
            💰 Expenses
          </h3>

          <p className="text-slate-300">
            Expenses reduced by <b>4%</b>. Logistics and utility costs still
            have optimization opportunities.
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-5">
          <h3 className="text-yellow-400 font-semibold mb-2">
            📦 Inventory
          </h3>

          <p className="text-slate-300">
            Inventory health is good. Only 3 products require immediate
            restocking.
          </p>
        </div>

        <div className="bg-indigo-900/40 border border-indigo-500 rounded-xl p-6">

          <h3 className="text-white font-bold mb-4">
            🤖 AI Recommendations
          </h3>

          <ul className="list-disc ml-6 space-y-2 text-slate-300">

            <li>Increase high-margin product sales.</li>
            <li>Reduce transportation expenses.</li>
            <li>Offer combo discounts.</li>
            <li>Restock fast-moving inventory.</li>
            <li>Launch customer loyalty programs.</li>

          </ul>

          <div className="mt-6">

            <p className="text-green-400 font-semibold">
              Estimated Monthly Savings
            </p>

            <h2 className="text-3xl font-bold text-white">
              Rs. 21,000
            </h2>

          </div>

        </div>

      </div>

    </div>
  );
}