// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqgzmVCaKa4gjLJKHnQYqJoYAuCsqFFQA",
  authDomain: "private-router-firebase.firebaseapp.com",
  projectId: "private-router-firebase",
  storageBucket: "private-router-firebase.appspot.com",
  messagingSenderId: "365040568971",
  appId: "1:365040568971:web:bec9610ca4332f1488228e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;