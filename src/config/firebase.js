// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain: "kumaradevi-s-schooldesign.firebaseapp.com",
  projectId: "kumaradevi-s-schooldesign",
  storageBucket: "kumaradevi-s-schooldesign.appspot.com",
  messagingSenderId: "701345413961",
  appId: "1:701345413961:web:851b192c72f918370ab898"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize firestore database
const db=getFirestore(app);

export default db
