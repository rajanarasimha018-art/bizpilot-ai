import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import Inventory from "../pages/Inventory";
import Reports from "../pages/Reports";
import Customers from "../pages/Customers";
import Settings from "../pages/Settings";
import AICopilot from "../pages/AICopilot";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/ai" element={<AICopilot />} />
      </Routes>
    </BrowserRouter>
  );
}