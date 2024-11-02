// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_API_KEY,
//   authDomain: "kumaradevi-s-schooldesign.firebaseapp.com",
//   projectId: "kumaradevi-s-schooldesign",
//   storageBucket: "kumaradevi-s-schooldesign.appspot.com",
//   messagingSenderId: "701345413961",
//   appId: "1:701345413961:web:851b192c72f918370ab898"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBzH0v6igVadt8Fy9KXGpmZ5TxN7kMZn04",
  authDomain: "testing-king-f4bc5.firebaseapp.com",
  projectId: "testing-king-f4bc5",
  storageBucket: "testing-king-f4bc5.appspot.com",
  messagingSenderId: "401822606909",
  appId: "1:401822606909:web:9ce11aae80adffea95ec54",
  measurementId: "G-8RPW8JHC9Z"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize storage
const storage = getStorage(app);
//initialize firestore database
const db=getFirestore(app);

export default db
export{storage}