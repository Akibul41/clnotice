// login.js
import { auth } from './script.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Login
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});

// Optional Signup (only for development/admin use)
document.getElementById('signup-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup successful. You can now log in.");
    })
    .catch((error) => {
      alert("Signup failed: " + error.message);
    });
});
