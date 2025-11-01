// ⚡ src/App.jsx – Optimized Layout for SocialSync
import React from "react";
import { Routes, Route } from "react-router-dom";

// 🔹 Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// 🔹 Pages
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Campaigns from "./pages/Campaigns";
import Settings from "./pages/Settings";
import Help from "./pages/Help";

// 🔹 Styles
import "./styles.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="page-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
