// เพิ่มการ import initializeApp และ getAnalytics จาก CDN ให้ครบถ้วน
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getDatabase, ref, set, get, update, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa3S7wZzq9qGBaXRxVrQqWBW4GfsV_jA0",
  authDomain: "hm-mod.firebaseapp.com",
  databaseURL: "https://hm-mod-default-rtdb.asia-southeast1.firebasedatabase.app", // <--- เอาให้เหลือแค่นี้ (ลบวงเล็บและตัวด้านหลังทิ้ง)
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
