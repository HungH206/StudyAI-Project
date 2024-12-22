// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6YbDvo8q9HRyUe_2xnsjL4hAN_Q2M5u8",
  authDomain: "studiwellaiauth0.firebaseapp.com",
  projectId: "studiwellaiauth0",
  storageBucket: "studiwellaiauth0.firebasestorage.app",
  messagingSenderId: "1031495565718",
  appId: "1:1031495565718:web:acab66ea43a2e9d1da1db7",
  measurementId: "G-VEPQ2QG8PD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
