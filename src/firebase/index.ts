import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCebtUDJf1A6mSOVyIhQchuMam3WBCEcwg",
  authDomain: "kbek-movie-app.firebaseapp.com",
  projectId: "kbek-movie-app",
  storageBucket: "kbek-movie-app.appspot.com",
  messagingSenderId: "21964273687",
  appId: "1:21964273687:web:4b2ead54d852164e284452"
};

const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };

