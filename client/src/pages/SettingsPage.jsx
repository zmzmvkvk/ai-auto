// client/src/pages/SettingsPage.jsx
import React from "react";

const SettingsPage = () => {
  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">설정</h1>
      <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            계정 정보
          </h2>
          <p className="text-gray-600">이메일: user@example.com (표시 전용)</p>
          <button className="mt-2 text-sm text-red-500 hover:text-red-700">
            로그아웃
          </button>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            API 키 관리
          </h2>
          <p className="text-gray-600">
            Leonardo AI API 키: •••••••••••••••{" "}
            <button className="text-xs text-indigo-500 hover:underline ml-2">
              보기/수정
            </button>
          </p>
          {/* ChatGPT API 키는 백엔드에서 관리하므로 여기서는 표시하지 않거나 다른 방식으로 안내할 수 있습니다. */}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            테마 설정
          </h2>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="text-gray-700">다크 모드 사용</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
