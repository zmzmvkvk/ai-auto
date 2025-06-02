// client/src/services/projectService.js
import { app, functions } from "../firebaseConfig"; // functions import 확인
import { httpsCallable } from "firebase/functions"; // httpsCallable 추가

const FUNCTION_REGION = "us-central1";
const PROJECT_ID = app.options.projectId;

const createProjectUrl = import.meta.env.DEV
  ? `http://localhost:5001/${PROJECT_ID}/${FUNCTION_REGION}/createProject`
  : `https://${FUNCTION_REGION}-${PROJECT_ID}.cloudfunctions.net/createProject`;

export const createProject = async (projectData) => {
  // projectData는 { name: "프로젝트이름" } 형태
  console.log(
    `Calling HTTP Function: createProject with data:`,
    projectData,
    `to URL: ${createProjectUrl}`
  );
  try {
    const response = await fetch(createProjectUrl, {
      method: "POST", // 데이터를 보내므로 POST 사용
      headers: {
        "Content-Type": "application/json",
        // TODO: 필요시 인증 토큰 추가: 'Authorization': 'Bearer YOUR_ID_TOKEN'
      },
      // onRequest 함수는 request.body.data 또는 request.body에서 직접 데이터를 읽도록 설정할 수 있음
      // Firebase HTTP Callable과 유사하게 { data: projectData } 형태로 감싸서 보냄
      body: JSON.stringify({ data: projectData }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Server responded with ${response.status}: ${errorText}`);
    }

    const result = await response.json();
    console.log("Project created via HTTP Function:", result.data);
    return result.data; // 서버가 {data: {id: ..., ...}} 형태로 응답
  } catch (error) {
    console.error("Error calling createProject HTTP Function:", error);
    throw new Error(error.message || "Failed to create project.");
  }
};
