import React from "react";

export default function SettingsForm() {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-xl font-semibold mb-6">
        Business Settings
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          className="bg-slate-800 rounded-xl p-3 outline-none"
          placeholder="Business Name"
          defaultValue="BizPilot AI Store"
        />

        <input
          className="bg-slate-800 rounded-xl p-3 outline-none"
          placeholder="Owner Name"
          defaultValue="Business Owner"
        />

        <input
          className="bg-slate-800 rounded-xl p-3 outline-none"
          placeholder="Email"
          defaultValue="admin@bizpilot.ai"
        />

        <input
          className="bg-slate-800 rounded-xl p-3 outline-none"
          placeholder="Phone"
          defaultValue="+91 9876543210"
        />

      </div>

      <button className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600">
        Save Changes
      </button>

    </div>

  );

}