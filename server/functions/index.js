// server/functions/index.js

// Firebase Admin SDK 초기화 (필요한 경우, 보통 한 번만 수행)
// const admin = require("firebase-admin");
// admin.initializeApp();

// './src/handlers/projectHandlers' 로 경로 수정
const projectHandlers = require("./src/handlers/projectHandlers");

// 프로젝트 목록을 가져오는 HTTP Callable Function 배포
exports.getProjectsList = projectHandlers.getProjectsList;

// ... (기타 주석 및 코드)
