import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVxWBfHxbpAwc9fRSAFSIexhYJWeH9Xwk",
  authDomain: "quizapp-73206.firebaseapp.com",
  projectId: "quizapp-73206",
  storageBucket: "quizapp-73206.appspot.com",
  messagingSenderId: "248560745424",
  appId: "1:248560745424:web:0388a8539deb5b5fc797d5",
  measurementId: "G-K1NVJWBH06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and firestore services
export const auth = getAuth(app);
export const db = getFirestore(app);