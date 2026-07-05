import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

import ProfileCard from "../components/ProfileCard";
import SettingsForm from "../components/SettingsForm";
import SystemPreferences from "../components/SystemPreferences";

export default function Settings() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Sidebar
        isMobileOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="lg:ml-64">

        <TopNavbar
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="p-8 space-y-8">

          {/* Header */}

          <div>

            <h1 className="text-4xl font-bold">
              ⚙️ Settings
            </h1>

            <p className="text-slate-400 mt-2">
              Manage your business profile and application preferences.
            </p>

          </div>

          {/* Profile */}

          <ProfileCard />

          {/* Settings */}

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2">

              <SettingsForm />

            </div>

            <div>

              <SystemPreferences />

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}