import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from './script.js';

const form = document.getElementById('auth-form');
const signupBtn = document.getElementById('signup-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = "dashboard.html")
    .catch(error => alert("Login Error: " + error.message));
});

signupBtn.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Signup successful! Please login."))
    .catch(error => alert("Signup Error: " + error.message));
});
