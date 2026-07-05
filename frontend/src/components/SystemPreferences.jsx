import React from "react";

export default function SystemPreferences() {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-xl font-semibold mb-6">
        System Preferences
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">

          <span>Dark Mode</span>

          <input type="checkbox" defaultChecked />

        </div>

        <div className="flex justify-between">

          <span>Email Notifications</span>

          <input type="checkbox" defaultChecked />

        </div>

        <div className="flex justify-between">

          <span>AI Recommendations</span>

          <input type="checkbox" defaultChecked />

        </div>

        <div className="flex justify-between">

          <span>Auto PDF Reports</span>

          <input type="checkbox" defaultChecked />

        </div>

      </div>

    </div>

  );

}