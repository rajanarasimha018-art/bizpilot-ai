import React from "react";

export default function ProfileCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <div className="flex items-center gap-5">

        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-3xl font-bold">
          BO
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            Business Owner
          </h2>

          <p className="text-slate-400">
            admin@bizpilot.ai
          </p>

          <p className="text-green-400 mt-2">
            Premium Plan
          </p>
        </div>

      </div>

    </div>
  );
}