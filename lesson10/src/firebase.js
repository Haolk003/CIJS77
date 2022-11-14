// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDI9IeLQRll8236F-SQTjHa9vd96ZD3I4Q",
  authDomain: "lesson9-25bb6.firebaseapp.com",
  projectId: "lesson9-25bb6",
  storageBucket: "lesson9-25bb6.appspot.com",
  messagingSenderId: "972903340323",
  appId: "1:972903340323:web:72544c813c3b598b6e1496",
  measurementId: "G-FHFQQYWDZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);