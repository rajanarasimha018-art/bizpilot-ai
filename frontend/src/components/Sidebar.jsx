import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/", icon: "🏠" },
  { name: "Analytics", path: "/analytics", icon: "📈" },
  { name: "Inventory", path: "/inventory", icon: "📦" },
  { name: "Reports", path: "/reports", icon: "📄" },
  { name: "Customers", path: "/customers", icon: "👥" },
  { name: "AI Copilot", path: "/ai", icon: "🤖" },
  { name: "Settings", path: "/settings", icon: "⚙️" },
];

export default function Sidebar({
  isMobileOpen = false,
  onClose,
}) {
  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-slate-950 border-r border-slate-800 z-50 transition-transform duration-300
        ${
          isMobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">

          {/* Logo */}

          <div className="p-6 border-b border-slate-800">

            <h1 className="text-2xl font-bold text-white">

              BizPilot
              <span className="text-indigo-400">AI</span>

            </h1>

            <p className="text-sm text-slate-400">
              Enterprise Cloud
            </p>

          </div>

          {/* Navigation */}

          <nav className="flex-1 p-4 space-y-2">

            {menuItems.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  }`
                }
              >
                <span className="text-xl">
                  {item.icon}
                </span>

                <span>
                  {item.name}
                </span>

              </NavLink>

            ))}

          </nav>

          {/* Upgrade */}

          <div className="p-4">

            <div className="rounded-xl bg-slate-900 border border-slate-700 p-4">

              <h3 className="text-white font-semibold mb-2">
                🚀 Upgrade Plan
              </h3>

              <p className="text-xs text-slate-400 mb-4">
                Unlock advanced AI features.
              </p>

              <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg">
                Upgrade
              </button>

            </div>

          </div>

        </div>
      </aside>
    </>
  );
}