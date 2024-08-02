// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-eec09.firebaseapp.com",
  projectId: "mern-estate-eec09",
  storageBucket: "mern-estate-eec09.appspot.com",
  messagingSenderId: "191204954692",
  appId: "1:191204954692:web:467c8d27da38172c7ba211",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
