import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmmvodGm9nrZiTfsczZug-5DHZlEnG6vU",
  authDomain: "shopnow-a8532.firebaseapp.com",
  projectId: "shopnow-a8532",
  storageBucket: "shopnow-a8532.firebasestorage.app",
  messagingSenderId: "721981021075",
  appId: "1:721981021075:web:2b34c9f9921b05f1dd2666",
  measurementId: "G-N4RPPB5XCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore database
export const db = getFirestore(app);

export const auth = getAuth(app);