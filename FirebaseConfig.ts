import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqEQF0heatiYwvZcoobhMnk6iJ3UXEBRw",
  authDomain: "reminder-english-learn.firebaseapp.com",
  projectId: "reminder-english-learn",
  storageBucket: "reminder-english-learn.appspot.com",
  messagingSenderId: "934145013483",
  appId: "1:934145013483:web:d05f6095e2a94531b8f0ae"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIRESTORE_RT_DB = getDatabase(FIREBASE_APP);