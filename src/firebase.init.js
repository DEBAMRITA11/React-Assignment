
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_0ectONt4jp_T5YL4nboDTbubK7hCwqQ",
  authDomain: "yummy-78910.firebaseapp.com",
  projectId: "yummy-78910",
  storageBucket: "yummy-78910.appspot.com",
  messagingSenderId: "70309235394",
  appId: "1:70309235394:web:05e163e52ea40e9590495b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 