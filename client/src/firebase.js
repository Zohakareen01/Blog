// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-dd71a.firebaseapp.com",
  projectId: "mern-blog-dd71a",
  storageBucket: "mern-blog-dd71a.appspot.com",
  messagingSenderId: "666361469728",
  appId: "1:666361469728:web:c00b6d18530fc16a471545"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);