// client/src/pages/AssetLibraryPage.jsx
import React from "react";

const AssetLibraryPage = () => {
  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">에셋 라이브러리</h1>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-700">
          생성된 모든 이미지, 비디오 클립 등의 에셋을 여기서 관리합니다.
        </p>
        {/* TODO: 에셋 목록, 필터, 검색, 미리보기 등 기능 추가 */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {/* 예시 에셋 아이템 */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div
              key={i}
              className="aspect-square bg-neutral-200 rounded-md flex items-center justify-center text-neutral-500 hover:ring-2 ring-indigo-500 transition-all"
            >
              <i className="fas fa-image text-4xl"></i>
              {/* 실제로는 썸네일 이미지를 표시합니다. */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssetLibraryPage;
