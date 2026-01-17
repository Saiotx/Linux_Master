import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBxSY6dGJSRBzfcQhC6ugxLvXW53zVMTIk",
  authDomain: "linux-master-cf87a.firebaseapp.com",
  projectId: "linux-master-cf87a",
  storageBucket: "linux-master-cf87a.firebasestorage.app",
  messagingSenderId: "507362225748",
  appId: "1:507362225748:web:f0b64b744ebd206ff807c1",
  measurementId: "G-BC829SMX2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
