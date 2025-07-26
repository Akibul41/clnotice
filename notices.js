// notices.js
import { auth, db, ref, onAuthStateChanged, get, child } from './script.js';

const noticeContainer = document.getElementById('notice-list');

onAuthStateChanged(auth, () => {
  const noticesRef = ref(db, 'notices/');
  get(noticesRef).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      noticeContainer.innerHTML = "";
      Object.keys(data).reverse().forEach((key) => {
        const notice = data[key];
        const div = document.createElement('div');
        div.className = "notice-card";
        div.innerHTML = `
          <h3>${notice.title}</h3>
          <p>${notice.description}</p>
          <small>${notice.date}</small>
        `;
        noticeContainer.appendChild(div);
      });
    } else {
      noticeContainer.innerHTML = "<p>No notices yet.</p>";
    }
  }).catch((error) => {
    console.error("Error loading notices:", error);
    noticeContainer.innerHTML = "<p>Failed to load notices.</p>";
  });
});
