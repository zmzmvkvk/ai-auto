// client/src/pages/ProjectWorkspacePage.jsx
import React from "react";
import { useParams } from "react-router-dom";

const ProjectWorkspacePage = () => {
  const { projectId } = useParams(); // URL에서 projectId를 가져옵니다.

  // TODO: 이 페이지 내에서 탭 또는 하위 메뉴로 스토리, 이미지, 비디오, 타임라인 섹션 구분
  // 예를 들어, 탭 상태를 관리하고, 선택된 탭에 따라 다른 컴포넌트를 렌더링

  return (
    <div className="p-6 md:p-10 h-full flex flex-col">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">프로젝트 작업실</h1>
      <p className="text-sm text-gray-500 mb-6">프로젝트 ID: {projectId}</p>

      {/* 임시 탭 네비게이션 예시 */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button className="whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm text-indigo-600 border-indigo-500">
            스토리
          </button>
          <button className="whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
            이미지 생성
          </button>
          <button className="whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
            비디오 생성
          </button>
          <button className="whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
            타임라인 편집
          </button>
        </nav>
      </div>

      <div className="flex-grow bg-white p-6 rounded-xl shadow-md">
        {/* 선택된 탭에 따른 콘텐츠가 여기에 표시됩니다. */}
        <h2 className="text-xl font-semibold text-gray-700">
          스토리 작업 영역
        </h2>
        <p className="mt-2 text-gray-600">
          여기에 ChatGPT 연동 스토리 생성 및 편집 기능이 들어갑니다.
        </p>
      </div>
    </div>
  );
};

export default ProjectWorkspacePage;
