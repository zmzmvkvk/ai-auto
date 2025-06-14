// client/src/pages/DashboardPage.jsx
import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchProjects, createProject } from "../services/projectService";

const DashboardPage = () => {
  const queryClient = useQueryClient();

  const {
    data: projects,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const createProjectMutation = useMutation({
    mutationFn: createProject,
    onSuccess: (data) => {
      // 성공 시 반환된 데이터 (새 프로젝트 정보) 사용 가능
      console.log("New project created successfully on client:", data);
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      // alert(`프로젝트 "${data.name}" 생성 완료!`); // 사용자에게 알림 (선택적)
    },
    onError: (mutationError) => {
      console.error("Error creating new project on client:", mutationError);
      alert(`프로젝트 생성 실패: ${mutationError.message}`);
    },
  });

  const handleCreateNewProject = () => {
    const projectName = prompt("새 프로젝트의 이름을 입력하세요:");
    if (projectName && projectName.trim() !== "") {
      createProjectMutation.mutate({
        name: projectName.trim(),
      });
    } else if (projectName !== null) {
      alert("프로젝트 이름은 비워둘 수 없습니다.");
    }
  };

  return (
    <div className="p-6 md:p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">대시보드</h1>
        <button
          onClick={handleCreateNewProject}
          disabled={createProjectMutation.isPending}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-150 disabled:opacity-50"
        >
          {createProjectMutation.isPending ? (
            <>
              <i className="fas fa-spinner fa-spin mr-2"></i>생성 중...
            </>
          ) : (
            <>
              <i className="fas fa-plus mr-2"></i>새 프로젝트 만들기
            </>
          )}
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          내 프로젝트 목록
        </h2>

        {isLoading && (
          <div className="text-center py-10">
            <i className="fas fa-spinner fa-spin text-4xl text-indigo-500"></i>
            <p className="mt-2 text-gray-600">
              프로젝트를 불러오는 중입니다...
            </p>
          </div>
        )}

        {isError && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
            role="alert"
          >
            <p className="font-bold">오류 발생!</p>
            <p>{error.message || "프로젝트를 불러오는 데 실패했습니다."}</p>
          </div>
        )}

        {!isLoading && !isError && projects && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-neutral-200 p-4 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="aspect-video bg-neutral-100 rounded-md mb-3 flex items-center justify-center">
                  <i className="fas fa-film text-4xl text-neutral-400"></i>
                </div>
                <h3 className="font-semibold text-lg text-indigo-600 truncate">
                  {project.name}
                </h3>
                <p className="text-sm text-neutral-500 mt-1">
                  마지막 수정: {project.lastModified}
                </p>
                <div className="mt-4 flex space-x-2">
                  <button className="text-sm bg-indigo-500 hover:bg-indigo-600 text-white py-1.5 px-3 rounded-md flex-1">
                    열기
                  </button>
                  <button className="text-sm bg-neutral-200 hover:bg-neutral-300 text-neutral-700 py-1.5 px-3 rounded-md">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
              </div>
            ))}
            <div
              onClick={handleCreateNewProject}
              className="border border-dashed border-neutral-300 p-4 rounded-lg flex flex-col items-center justify-center text-neutral-500 hover:bg-neutral-50 cursor-pointer min-h-[200px]"
            >
              <i className="fas fa-plus text-3xl mb-2"></i>
              <p className="font-semibold">새 프로젝트 만들기</p>
            </div>
          </div>
        )}
        {!isLoading && !isError && (!projects || projects.length === 0) && (
          <p className="text-gray-600 text-center py-10">
            아직 생성된 프로젝트가 없습니다. 새 프로젝트를 만들어보세요!
          </p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
