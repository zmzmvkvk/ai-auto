// 예시: server/functions/src/handlers/projectHandlers.js (onRequest로 변경 시)
const functions = require("firebase-functions");
const cors = require("cors")({ origin: true }); // npm install cors 필요

const getProjectsListHTTP = (request, response) => {
  cors(request, response, () => {
    functions.logger.info("getProjectsListHTTP called", {
      structuredData: true,
    });
    const mockProjects = [
      {
        id: "proj_bk_1",
        name: "백엔드 첫 프로젝트 (HTTP)",
        lastModified: "10분 전",
      },
      // ...
    ];
    response.json({ data: mockProjects }); // onRequest는 직접 응답을 구성해야 함
  });
};

module.exports = {
  // getProjectsList: functions.https.onCall(...) // 기존 Callable
  getProjectsList: functions.https.onRequest(getProjectsListHTTP), // HTTP onRequest로 변경
};
