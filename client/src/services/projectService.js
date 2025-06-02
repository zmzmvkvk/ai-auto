// client/src/services/projectService.js

import { functions } from "../firebaseConfig"; // Firebase 설정 파일에서 functions 인스턴스 가져오기
import { httpsCallable } from "firebase/functions"; // httpsCallable 함수 가져오기

// Firebase Function 호출: 프로젝트 목록 가져오기
export const fetchProjects = async () => {
  console.log("Calling Firebase Function: getProjectsList...");
  try {
    // 'getProjectsList'는 server/functions/index.js에서 export한 함수의 이름과 일치해야 합니다.
    const getProjectsListFunction = httpsCallable(functions, "getProjectsList");

    // 함수 호출 (필요시 데이터 전달 가능: getProjectsListFunction({ someData: 'hello' }))
    const result = await getProjectsListFunction();

    // 함수 결과는 result.data 에 담겨 옵니다.
    console.log("Projects fetched from Firebase Function:", result.data);
    return result.data; // Callable function은 result.data 안에 실제 응답 데이터를 담아 반환합니다.
  } catch (error) {
    console.error("Error calling getProjectsList Firebase Function:", error);
    // react-query가 에러를 처리할 수 있도록 에러를 다시 throw 합니다.
    // error.message 외에 error.code, error.details 등의 정보도 포함될 수 있습니다.
    throw new Error(error.message || "Failed to fetch projects from Firebase.");
  }
};

// 이전 목 API 함수는 이제 삭제하거나 주석 처리합니다.
/*
export const fetchProjects_OLD_MOCK = async () => {
  // ... (이전 목 데이터 로직) ...
};
*/

// 향후 실제 API 호출 함수 예시 (참고용 - 이 부분은 그대로 두거나 삭제해도 됩니다)
/*
import axios from 'axios'; 
// ... (이전 axios 예시) ...
*/
