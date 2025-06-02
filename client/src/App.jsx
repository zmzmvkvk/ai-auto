// client/src/App.jsx

import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // Devtools import 추가
import Sidebar from "./components/layout/Sidebar";
import MainContent from "./components/layout/MainContent";

import DashboardPage from "./pages/DashboardPage";
import ProjectWorkspacePage from "./pages/ProjectWorkspacePage";
import AssetLibraryPage from "./pages/AssetLibraryPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const location = useLocation();

  const getActivePageBasedOnPath = () => {
    const currentPath = location.pathname;
    if (currentPath === "/" || currentPath.startsWith("/dashboard"))
      return "dashboard";
    if (currentPath.startsWith("/project")) return "project";
    if (currentPath.startsWith("/assets")) return "assets";
    if (currentPath.startsWith("/settings")) return "settings";
    return "";
  };
  const activePage = getActivePageBasedOnPath();

  return (
    <div className="flex h-screen bg-neutral-100 font-sans">
      <Sidebar activePage={activePage} />
      <MainContent>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route
            path="/project/:projectId"
            element={<ProjectWorkspacePage />}
          />
          <Route path="/assets" element={<AssetLibraryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainContent>
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </div>
  );
}

export default App;
