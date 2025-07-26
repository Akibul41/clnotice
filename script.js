// Firebase v12 compatible imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getDatabase, ref, set, get, push, child } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

// ✅ Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCjs4mIH44AIWUZoFjSPbfkZ9gaTx4xYFE",
  authDomain: "college-notice-cd622.firebaseapp.com",
  projectId: "college-notice-cd622",
  storageBucket: "college-notice-cd622.appspot.com",
  messagingSenderId: "257074623269",
  appId: "1:257074623269:web:8fa09ddd5885d09445a0cc",
  measurementId: "G-9Y0PVLP70F",
  databaseURL: "https://college-notice-cd622-default-rtdb.firebaseio.com"  // Add this line
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// ✅ Auth State Checker (used in multiple pages)
export function checkAuth(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}

// ✅ Logout Function
export function logout() {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  }).catch((error) => {
    console.error("Logout error:", error);
  });
}

// ✅ Export Firebase instances for other scripts
export { auth, db, ref, set, get, push, child };
