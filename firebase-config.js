
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

import {
  getDatabase,
  ref,
  set,
  get,
  update,
  onValue,
  runTransaction
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa3S7wZzq9qGBaXRxVrQqWBW4GfsV_jA0",
  authDomain: "hm-mod.firebaseapp.com",
  databaseURL: "https://hm-mod-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hm-mod",
  storageBucket: "hm-mod.firebasestorage.app",
  messagingSenderId: "143278157206",
  appId: "1:143278157206:web:3d7503f977bc569f7601b7",
  measurementId: "G-7W3KGFJTDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics safely
let analytics = null;

isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

// Initialize Realtime Database
export const db = getDatabase(app);

// Export Firebase functions
export {
  app,
  analytics,
  ref,
  set,
  get,
  update,
  onValue,
  runTransaction
};
