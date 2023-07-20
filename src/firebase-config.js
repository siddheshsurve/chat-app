// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyC7aycAFUohsd--XwopCjmPXwXMNgpPyJ4",
  authDomain: "chat-app-c45d3.firebaseapp.com",
  projectId: "chat-app-c45d3",
  storageBucket: "chat-app-c45d3.appspot.com",
  messagingSenderId: "492630761062",
  appId: "1:492630761062:web:c80fc4b3ec79b89b9357a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
