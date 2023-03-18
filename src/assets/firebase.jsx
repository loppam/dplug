// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDibKpiPkR1L8vnPZvgRVcxfAr0Hu08NiI",
  authDomain: "dplug-687cf.firebaseapp.com",
  projectId: "dplug-687cf",
  storageBucket: "dplug-687cf.appspot.com",
  messagingSenderId: "646639664214",
  appId: "1:646639664214:web:a7b4e695315ac7bf0bcff7",
  measurementId: "G-V5ECV5W6E3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
