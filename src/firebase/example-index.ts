import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "authDomain",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId",
  measurementId: "measurementId",
};

const fireApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(fb);

const db = getFirestore();
connectFirestoreEmulator(db, "localhost", 8080);

const auth = getAuth();
connectAuthEmulator(auth, "http://localhost:9099");

export { fireApp };
export { db };
export { auth };
