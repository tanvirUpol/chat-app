// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC2quTsW-b105E1f7lelJI9qqxLdKHD0M",
  authDomain: "chat-app-react-cd7a9.firebaseapp.com",
  projectId: "chat-app-react-cd7a9",
  storageBucket: "chat-app-react-cd7a9.appspot.com",
  messagingSenderId: "669988810657",
  appId: "1:669988810657:web:cbbe16a6404b6409d5a5e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore
const db = getFirestore(app);

// init firebase auth
const auth = getAuth();

const Gprovider = new GoogleAuthProvider();

export { db, auth, Gprovider };
