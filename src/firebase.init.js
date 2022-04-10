// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFEhFVB8GxoB_665TwaaJNWuEsklOODFw",
  authDomain: "project-b9f9b.firebaseapp.com",
  projectId: "project-b9f9b",
  storageBucket: "project-b9f9b.appspot.com",
  messagingSenderId: "762514115379",
  appId: "1:762514115379:web:d6d50442d1d8a7e89ccc46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;