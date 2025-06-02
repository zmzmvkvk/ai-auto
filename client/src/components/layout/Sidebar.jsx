// client/src/components/layout/Sidebar.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom"; // useLocation 추가

// 실제 프로그램 기능 중심의 네비게이션 아이템
const navItems = [
  {
    id: "dashboard",
    label: "대시보드",
    icon: "fas fa-th-large",
    path: "/dashboard",
  },
  {
    id: "project",
    label: "프로젝트 작업실",
    icon: "fas fa-edit",
    path: "/project/default-project",
  }, // 초기 예시 경로
  {
    id: "assets",
    label: "에셋 라이브러리",
    icon: "fas fa-photo-video",
    path: "/assets",
  },
  { id: "settings", label: "설정", icon: "fas fa-cog", path: "/settings" },
];

const Sidebar = () => {
  const location = useLocation();
  // 현재 경로를 기반으로 activePage 결정 (더 정교한 로직 가능)
  const getActivePage = () => {
    const currentPath = location.pathname;
    if (currentPath === "/" || currentPath.startsWith("/dashboard"))
      return "dashboard";
    if (currentPath.startsWith("/project")) return "project";
    if (currentPath.startsWith("/assets")) return "assets";
    if (currentPath.startsWith("/settings")) return "settings";
    return ""; // 기본값 또는 일치하는 항목 없음
  };
  const activePage = getActivePage();

  return (
    <aside className="w-64 bg-neutral-50 text-neutral-700 flex-shrink-0 p-4 space-y-2 border-r border-neutral-200 shadow-sm">
      <div className="flex items-center space-x-3 px-2 mb-6">
        <i className="fas fa-robot text-2xl text-indigo-500"></i>
        <h1 className="text-xl font-bold text-neutral-800">AI 애니메이션</h1>
      </div>
      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`flex items-center space-x-3 py-2.5 px-4 rounded-lg transition-colors duration-200 ease-in-out
                        ${
                          activePage === item.id
                            ? "bg-indigo-100 text-indigo-700 font-semibold shadow-sm"
                            : "hover:bg-neutral-200 hover:text-neutral-900"
                        }`}
          >
            <i className={`${item.icon} w-5 text-center opacity-75`}></i>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-4 left-4 text-xs text-neutral-500">
        <p>&copy; {new Date().getFullYear()} AI Animation Program</p>
      </div>
    </aside>
  );
};

export default Sidebar;
