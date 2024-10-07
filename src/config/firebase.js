// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAAa4_bBKZXuPwn5nTZOK6TGRs3XM1IG8",
  authDomain: "educationalwebsiteonline.firebaseapp.com",
  projectId: "educationalwebsiteonline",
  storageBucket: "educationalwebsiteonline.appspot.com",
  messagingSenderId: "13772267126",
  appId: "1:13772267126:web:8b8480bf97aa86ed798957",
  measurementId: "G-5H3YTNE4TC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);