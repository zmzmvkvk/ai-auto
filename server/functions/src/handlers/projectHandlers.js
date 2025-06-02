// server/functions/src/handlers/projectHandlers.js

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

// Firebase Admin SDK 초기화 (한 번만 수행되도록)
if (admin.apps.length === 0) {
  admin.initializeApp();
}

const db = admin.firestore();

const createProjectHTTP = async (request, response) => {
  // async 추가
  cors(request, response, async () => {
    // 내부도 async
    functions.logger.info("createProjectHTTP called with data:", request.body, {
      structuredData: true,
    });

    // TODO: 사용자 인증 로직 추가 (request.headers.authorization 등 활용)
    // const userId = ... ;
    // if (!userId) {
    //   response.status(403).json({ error: "Authentication required." });
    //   return;
    // }

    const { name } = request.body.data || request.body; // 클라이언트가 {data: {name: ...}} 또는 {name: ...} 형태로 보낼 수 있음

    if (!name || typeof name !== "string" || name.trim() === "") {
      functions.logger.error("Project name is missing or invalid.");
      response
        .status(400)
        .json({
          error: "Project name is required and must be a non-empty string.",
        });
      return;
    }

    try {
      const newProject = {
        name: name.trim(),
        ownerId: "temp-user-id", // TODO: 실제 userId로 교체
        createdAt: admin.firestore.FieldValue.serverTimestamp(), // 서버 시간으로 생성 시간 기록
        lastModified: admin.firestore.FieldValue.serverTimestamp(), // 서버 시간으로 수정 시간 기록
      };

      const docRef = await db.collection("projects").add(newProject);
      functions.logger.info(
        "New project created with ID:",
        docRef.id,
        newProject
      );

      // 생성된 문서의 ID와 데이터를 함께 반환
      response.status(201).json({ data: { id: docRef.id, ...newProject } });
    } catch (error) {
      functions.logger.error("Error creating project in Firestore:", error);
      response
        .status(500)
        .json({ error: "Failed to create project", details: error.message });
    }
  });
};

module.exports = {
  getProjectsList: functions.https.onRequest(getProjectsListHTTP),
  createProject: functions.https.onRequest(createProjectHTTP), // 새로 추가
};
