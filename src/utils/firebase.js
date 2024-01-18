// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArG-xzYkoaB1u8vQhQcVqZTQrR7PcvWvg",
  authDomain: "netflix-gpt-9e56d.firebaseapp.com",
  projectId: "netflix-gpt-9e56d",
  storageBucket: "netflix-gpt-9e56d.appspot.com",
  messagingSenderId: "674735546559",
  appId: "1:674735546559:web:fadb4ed57cd7d4bc73260a",
  measurementId: "G-V0B78M6SWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
