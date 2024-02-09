// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADQHZDThlFMDDlZR3z6E__XyBDpaltALk",
  authDomain: "gentlemens-club-4a486.firebaseapp.com",
  projectId: "gentlemens-club-4a486",
  storageBucket: "gentlemens-club-4a486.appspot.com",
  messagingSenderId: "1050610250409",
  appId: "1:1050610250409:web:0c691586a143bf0c30efb8",
  measurementId: "G-6DZ41DNLN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { auth, analytics, db };