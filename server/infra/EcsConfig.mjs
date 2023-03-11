// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSqZZDHXegkRCBTlsaxdhz5ufjl0PleqE",
  authDomain: "cearacientifico-e3e85.firebaseapp.com",
  projectId: "cearacientifico-e3e85",
  storageBucket: "cearacientifico-e3e85.appspot.com",
  messagingSenderId: "450602835743",
  appId: "1:450602835743:web:0a1c02a8265f65f62c5a2a",
  measurementId: "G-HD859J1Y4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);