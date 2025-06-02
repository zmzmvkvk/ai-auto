// server/src/server.js
require("dotenv").config(); // .env 파일 사용을 위해 (선택 사항)
const express = require("express");
const cors = require("cors");
// const admin = require('firebase-admin'); // Firestore 등 사용 시

// Firebase Admin SDK 초기화 (Firestore 등 사용 시)
/*
if (admin.apps.length === 0) {
  // 서비스 계정 키 파일 경로 또는 환경 변수 사용 필요
  // const serviceAccount = require('../path/to/your-service-account-key.json'); // 로컬 파일 사용 시
  // admin.initializeApp({
  //   credential: admin.credential.cert(serviceAccount)
  // });
  // 또는 Google Cloud 환경에서는 자동으로 초기화될 수 있음
  admin.initializeApp(); // 기본 자격증명 사용 시도
  console.log("Firebase Admin SDK initialized for Express server");
}
const db = admin.firestore(); // Firestore 인스턴스 (필요시)
*/

const app = express();
const PORT = process.env.PORT || 3001; // 백엔드 서버 포트 (프론트엔드와 달라야 함)

// 미들웨어 설정
app.use(cors()); // 모든 출처에 대해 CORS 허용 (개발 중)
app.use(express.json()); // JSON 요청 본문 파싱

// 기본 테스트 라우트
app.get("/", (req, res) => {
  res.send("AI Animation Automation Backend Server is running!");
});

// 프로젝트 목록 API (임시 목 데이터)
app.get("/api/projects", async (req, res) => {
  console.log("GET /api/projects called");
  // TODO: 인증 로직 추가 (예: req.headers.authorization)
  // const userId = ...;

  try {
    // Firestore 연동 시 예시 (주석 처리)
    /*
    const projectsSnapshot = await db.collection('projects')
                                     // .where('ownerId', '==', userId)
                                     .orderBy('lastModified', 'desc')
                                     .get();
    if (projectsSnapshot.empty) {
      return res.status(200).json({ data: [] });
    }
    const projects = projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return res.status(200).json({ data: projects });
    */

    // 우선 목 데이터 반환
    const mockProjects = [
      {
        id: "exp_proj_1",
        name: "Express 백엔드 첫 프로젝트",
        lastModified: "방금 전",
      },
      {
        id: "exp_proj_2",
        name: "새로운 모험 (Express)",
        lastModified: "10분 전",
      },
    ];
    res.status(200).json({ data: mockProjects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch projects", details: error.message });
  }
});

// 새 프로젝트 생성 API (임시)
app.post("/api/projects", async (req, res) => {
  console.log("POST /api/projects called with data:", req.body.data);
  const projectPayload = req.body.data; // 클라이언트가 {data: {name: ...}} 형태로 보냄

  if (
    !projectPayload ||
    !projectPayload.name ||
    typeof projectPayload.name !== "string" ||
    projectPayload.name.trim() === ""
  ) {
    return res.status(400).json({ error: "Project name is required." });
  }

  try {
    const { name } = projectPayload;
    const currentTime = new Date().toISOString(); // ISO 문자열로 시간 저장
    // Firestore 연동 시 예시 (주석 처리)
    /*
    const newProjectData = {
      name: name.trim(),
      ownerId: "temp-express-user", // TODO: 실제 userId로 교체
      createdAt: currentTime, // 또는 Firestore Timestamp 사용 시 admin.firestore.Timestamp.fromDate(new Date())
      lastModified: currentTime,
    };
    const docRef = await db.collection('projects').add(newProjectData);
    return res.status(201).json({ data: { id: docRef.id, ...newProjectData } });
    */

    // 우선 목 응답 반환
    const newProjectMock = {
      id: `exp_proj_${Date.now()}`,
      name: name.trim(),
      ownerId: "temp-express-user",
      createdAt: currentTime,
      lastModified: currentTime,
    };
    res.status(201).json({ data: newProjectMock });
  } catch (error) {
    console.error("Error creating project:", error);
    res
      .status(500)
      .json({ error: "Failed to create project", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
