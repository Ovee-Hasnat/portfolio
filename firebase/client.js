import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDWebXag9NUHhX5FjIY9hFsGUAw-fuwj8",
  authDomain: "portfolio-data-4ec73.firebaseapp.com",
  projectId: "portfolio-data-4ec73",
  storageBucket: "portfolio-data-4ec73.appspot.com",
  messagingSenderId: "120012505704",
  appId: "1:120012505704:web:a3bfcc70aa43056741f1dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
