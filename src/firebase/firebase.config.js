// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSnskGiVrXP8h6otzwilnizH30DA3zHW8",
  authDomain: "gamehub-29304.firebaseapp.com",
  projectId: "gamehub-29304",
  storageBucket: "gamehub-29304.firebasestorage.app",
  messagingSenderId: "729254743071",
  appId: "1:729254743071:web:0382ff75c8278a8d1f992a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);