// client/src/components/layout/MainContent.jsx

import React from "react";

// children prop을 받아 메인 콘텐츠 영역에 렌더링합니다.
const MainContent = ({ children }) => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      {" "}
      {/* 배경색 변경 가능 */}
      {/* 여기에 헤더가 필요하다면 추가할 수 있습니다. */}
      {/* <Header /> */}
      <div className="h-full">
        {" "}
        {/* children이 이 div를 채우게 됩니다. */}
        {children}
      </div>
    </main>
  );
};

export default MainContent;
