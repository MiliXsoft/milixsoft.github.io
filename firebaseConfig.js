// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// ⬅️ Wstaw tu swoje dane
const firebaseConfig = {
  apiKey: "AIzaSyAzi6XK8OL8Fr1xLb-pyQw2mMPuI1-g4iM",
  authDomain: "milixsoft-9b81e.firebaseapp.com",
  projectId: "milixsoft-9b81e",
  storageBucket: "milixsoft-9b81e.firebasestorage.app",
  messagingSenderId: "443043131107",
  appId: "1:443043131107:web:1ff1926eff9ada03dedfd6"
};

// Inicjalizacja
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
