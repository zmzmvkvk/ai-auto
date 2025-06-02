// server/functions/src/handlers/projectHandlers.js

const functions = require("firebase-functions");
// const admin = require("firebase-admin"); // Firestore 사용 시 필요

// admin.initializeApp(); // Firestore 사용 시 주석 해제 및 초기화

/**
 * 호출 가능한 함수: 프로젝트 목록을 가져옵니다.
 * 현재는 목 데이터를 반환합니다.
 *
 * @param {object} data - 클라이언트에서 전달된 데이터 (현재 사용 안 함)
 * @param {functions.https.CallableContext} context - 호출 컨텍스트 (인증 정보 등 포함)
 * @return {Promise<Array<object>>} 프로젝트 목록 배열
 */
const getProjectsList = functions.https.onCall(async (data, context) => {
  // 인증된 사용자만 접근 가능하도록 하려면 아래 주석 해제
  // if (!context.auth) {
  //   throw new functions.https.HttpsError(
  //     "unauthenticated",
  //     "The function must be called while authenticated.",
  //   );
  // }

  // const userId = context.auth.uid; // 현재 사용자 ID (필요시 사용)
  functions.logger.info("getProjectsList called", { structuredData: true });

  // 실제 Firestore에서 데이터를 가져오는 대신 사용할 목(Mock) 데이터
  const mockProjects = [
    { id: "proj_bk_1", name: "백엔드 첫 프로젝트", lastModified: "10분 전" },
    {
      id: "proj_bk_2",
      name: "신규 애니메이션 시리즈",
      lastModified: "2시간 전",
    },
    { id: "proj_bk_3", name: "단편 영화 컨셉", lastModified: "1일 전" },
  ];

  // Firestore에서 가져올 경우 예시 (주석 처리)
  /*
  try {
    const projectsSnapshot = await admin.firestore()
      .collection("users").doc(userId).collection("projects").get();
    const projects = projectsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return projects;
  } catch (error) {
    functions.logger.error("Error fetching projects from Firestore:", error);
    throw new functions.https.HttpsError(
      "internal",
      "Failed to fetch projects.",
      error.message, // 클라이언트에 전달할 오류 세부 정보 (선택적)
    );
  }
  */

  return mockProjects; // 현재는 목 데이터 반환
});

module.exports = {
  getProjectsList,
};
