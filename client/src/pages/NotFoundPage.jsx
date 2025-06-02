// client/src/pages/NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="p-6 md:p-10 text-center">
      <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        페이지를 찾을 수 없습니다.
      </h2>
      <p className="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나, 현재 사용할 수 없는 페이지입니다.
      </p>
      <Link
        to="/dashboard"
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors"
      >
        대시보드로 돌아가기
      </Link>
    </div>
  );
};

export default NotFoundPage;
