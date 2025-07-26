import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('loginBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      const email = document.getElementById('email').value;
      const pass = document.getElementById('password').value;
      signInWithEmailAndPassword(auth, email, pass)
        .then(() => window.location.href = 'dashboard.html')
        .catch(err => document.getElementById('loginError').textContent = err.message);
    });
  }
});
