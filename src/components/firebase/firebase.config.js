// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZveU6CNEpPXnkt2etYrjNAW70qqwBcbo",
  authDomain: "user-email-password-auth-1d159.firebaseapp.com",
  projectId: "user-email-password-auth-1d159",
  storageBucket: "user-email-password-auth-1d159.appspot.com",
  messagingSenderId: "404910274064",
  appId: "1:404910274064:web:af3ed4e9316d48694c3c95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export default auth;