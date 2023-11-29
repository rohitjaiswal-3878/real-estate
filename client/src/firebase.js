// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-43446.firebaseapp.com",
  projectId: "real-estate-43446",
  storageBucket: "real-estate-43446.appspot.com",
  messagingSenderId: "527292336637",
  appId: "1:527292336637:web:32a0fe0af7fe784c87f194",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
