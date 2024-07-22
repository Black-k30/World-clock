// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqxT1FMnxZ0b_XGLt48PEy7e2fGYz0icU",
  authDomain: "world-clock-68d70.firebaseapp.com",
  projectId: "world-clock-68d70",
  storageBucket: "world-clock-68d70.appspot.com",
  messagingSenderId: "528650579025",
  appId: "1:528650579025:web:99ca3165f8749d69f75c70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export{app}