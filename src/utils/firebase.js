import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyC8vNWkf8KTiGfaLzvT5Tr7SBxIiW2NANU",
  authDomain: "netflix-ai-d3764.firebaseapp.com",
  projectId: "netflix-ai-d3764",
  storageBucket: "netflix-ai-d3764.firebasestorage.app",
  messagingSenderId: "794752191179",
  appId: "1:794752191179:web:79ac30c8e19a829806e94e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()