// client/src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions"; // connectFunctionsEmulator도 필요합니다.
// import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"; // Firestore 사용 시 추가
// import { getAuth, connectAuthEmulator } from "firebase/auth"; // Auth 사용 시 추가

// Your web app's Firebase configuration
// TODO: Firebase 콘솔에서 실제 프로젝트의 설정 값으로 교체해주세요.
const firebaseConfig = {
  apiKey: "AIzaSyAgBYqnkdG1OOK5sU7a65_2dlOpOa58aAk",
  authDomain: "shorts-web-a00b4.firebaseapp.com",
  projectId: "shorts-web-a00b4",
  storageBucket: "shorts-web-a00b4.firebasestorage.app",
  messagingSenderId: "263559494990",
  appId: "1:263559494990:web:702c6f0b8ee5fbb527321f",
  measurementId: "G-SLRW3CV082",
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firebase 서비스 인스턴스 가져오기
const functions = getFunctions(app, "us-central1"); // <--- 'us-central1' 리전 추가
// const firestore = getFirestore(app); // Firestore 사용 시 주석 해제
// const auth = getAuth(app); // Auth 사용 시 주석 해제

// 로컬 에뮬레이터 사용 설정 (개발 환경에서만)
// Vite 환경 변수 import.meta.env.DEV 사용
if (import.meta.env.DEV) {
  console.log("개발 모드: Firebase 에뮬레이터에 연결합니다.");
  connectFunctionsEmulator(functions, "localhost", 5001);
}

// 필요한 서비스 export
export { app, functions /*, firestore, auth */ };
