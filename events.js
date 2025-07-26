import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const app = initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID"
});

const db = getFirestore(app);
const eventList = document.getElementById("eventList");

const q = query(collection(db, "events"), orderBy("timestamp", "desc"));

onSnapshot(q, (snapshot) => {
  eventList.innerHTML = "";
  snapshot.forEach(doc => {
    const e = doc.data();
    eventList.innerHTML += `
      <div class="event">
        <h3>${e.title}</h3>
        <p><strong>Date:</strong> ${e.date}</p>
        <p>${e.details}</p>
      </div>
    `;
  });
});
