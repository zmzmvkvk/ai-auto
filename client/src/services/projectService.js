// client/src/services/projectService.js

// Mock API 함수: 프로젝트 목록 가져오기
export const fetchProjects = async () => {
  console.log("Fetching projects from projectService...");
  // 네트워크 지연 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // 실제 API 호출 대신 사용할 목(Mock) 데이터
  const mockProjects = [
    {
      id: "proj_1",
      name: "나의 첫번째 모험 (서비스)",
      lastModified: "3일 전",
      thumbnail: null,
    },
    {
      id: "proj_2",
      name: "미래 도시 컨셉 (서비스)",
      lastModified: "1일 전",
      thumbnail: null,
    },
    {
      id: "proj_3",
      name: "숲 속의 비밀 (서비스)",
      lastModified: "5시간 전",
      thumbnail: null,
    },
    {
      id: "proj_new",
      name: "새로운 아이디어 (서비스)",
      lastModified: "방금 전",
      thumbnail: null,
    },
  ];

  // 에러 시뮬레이션 (필요시 주석 해제하여 테스트)
  // if (Math.random() > 0.7) {
  //   throw new Error('Failed to fetch projects from mock service!');
  // }

  return mockProjects;
};

// 향후 실제 API 호출 함수 예시 (참고용)
/*
import axios from 'axios'; // 또는 fetch API 사용

const API_BASE_URL = '/api'; // 실제 백엔드 API 경로에 맞게 수정

export const fetchProjectsReal = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    // 오류를 throw하여 react-query의 isError, error 상태로 전달
    throw error; 
  }
};

export const createProject = async (projectData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/projects`, projectData);
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};
*/
