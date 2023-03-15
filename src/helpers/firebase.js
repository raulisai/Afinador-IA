// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvdIaas3VgHrEOpiZR9jvlJfOhbIBKVRM",
  authDomain: "note-catch.firebaseapp.com",
  projectId: "note-catch",
  storageBucket: "note-catch.appspot.com",
  messagingSenderId: "390620073271",
  appId: "1:390620073271:web:1f8de22f3dfb096d155eb2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);