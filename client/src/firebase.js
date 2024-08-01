// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3198e.firebaseapp.com",
  projectId: "mern-estate-3198e",
  storageBucket: "mern-estate-3198e.appspot.com",
  messagingSenderId: "448321830181",
  appId: "1:448321830181:web:96a9282a4af6eb3388eecc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);