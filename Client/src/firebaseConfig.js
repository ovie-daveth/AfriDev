// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7OSq7HGpyevyK1Fcg8dmykR-FYh3bX1Y",
  authDomain: "afridev-617e8.firebaseapp.com",
  projectId: "afridev-617e8",
  storageBucket: "afridev-617e8.appspot.com",
  messagingSenderId: "97321276367",
  appId: "1:97321276367:web:860b24fabb13e2f74db8ba",
  measurementId: "G-XBWTC9ZYQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()