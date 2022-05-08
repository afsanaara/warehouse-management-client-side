// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpVPA0Ti2flIWzY-IoVwzOD_KFwEpAcpU",
  authDomain: "go-panda-37deb.firebaseapp.com",
  projectId: "go-panda-37deb",
  storageBucket: "go-panda-37deb.appspot.com",
  messagingSenderId: "848273394868",
  appId: "1:848273394868:web:31fbde0f5905775cca5be1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
