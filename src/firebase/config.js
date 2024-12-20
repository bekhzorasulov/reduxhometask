import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAU6jjp6I7pMxHdQQhq75oHPNZ6fc-TBBI",
  authDomain: "my-task-manager-ab2e8.firebaseapp.com",
  projectId: "my-task-manager-ab2e8",
  storageBucket: "my-task-manager-ab2e8.firebasestorage.app",
  messagingSenderId: "836971134325",
  appId: "1:836971134325:web:28e057821311df7ff0673c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth

export const auth = getAuth();
