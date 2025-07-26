import {
  auth,
  db,
  ref,
  set,
  push,
  onAuthStateChanged,
  getIdTokenResult,
  signOut
} from './script.js';

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    const tokenResult = await getIdTokenResult(user);
    const isAdmin = tokenResult.claims.admin === true;

    if (!isAdmin) {
      alert("Access denied. Admins only.");
      window.location.href = "index.html";
    }
  }
});

document.getElementById('notice-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const description = e.target.description.value;
  const date = new Date().toLocaleString();
  const newNoticeRef = push(ref(db, 'notices'));
  set(newNoticeRef, { title, description, date })
    .then(() => alert("Notice posted!"))
    .catch(error => alert("Error posting notice: " + error.message));
  e.target.reset();
});

document.getElementById('event-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const description = e.target.description.value;
  const date = new Date().toLocaleString();
  const newEventRef = push(ref(db, 'events'));
  set(newEventRef, { title, description, date })
    .then(() => alert("Event posted!"))
    .catch(error => alert("Error posting event: " + error.message));
  e.target.reset();
});

document.getElementById('logout-btn')?.addEventListener('click', () => {
  signOut(auth).then(() => window.location.href = "login.html");
});
