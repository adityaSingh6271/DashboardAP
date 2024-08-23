// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7OybqnCaNu78TG7F6nzqTkqhfPps4izc",
  authDomain: "podcast-platform-c207f.firebaseapp.com",
  projectId: "podcast-platform-c207f",
  storageBucket: "podcast-platform-c207f.appspot.com",
  messagingSenderId: "485849623197",
  appId: "1:485849623197:web:a63024980650f203c08274",
  measurementId: "G-PFC3PD7X8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {auth, db, storage};