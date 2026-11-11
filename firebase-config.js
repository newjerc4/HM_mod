


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, update, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa3S7wZzq9qGBaXRxVrQqWBW4GfsV_jA0",
  authDomain: "hm-mod.firebaseapp.com",
  projectId: "hm-mod",
  storageBucket: "hm-mod.firebasestorage.app",
  messagingSenderId: "143278157206",
  appId: "1:143278157206:web:3d7503f977bc569f7601b7",
  measurementId: "G-7W3KGFJTDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export { ref, set, get, update, onValue };
