// events.js
import { auth, db, ref, onAuthStateChanged, get, child } from './script.js';

const eventContainer = document.getElementById('event-list');

onAuthStateChanged(auth, () => {
  const eventsRef = ref(db, 'events/');
  get(eventsRef).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      eventContainer.innerHTML = "";
      Object.keys(data).reverse().forEach((key) => {
        const event = data[key];
        const div = document.createElement('div');
        div.className = "event-card";
        div.innerHTML = `
          <h3>${event.title}</h3>
          <p>${event.description}</p>
          <small>${event.date}</small>
        `;
        eventContainer.appendChild(div);
      });
    } else {
      eventContainer.innerHTML = "<p>No events yet.</p>";
    }
  }).catch((error) => {
    console.error("Error loading events:", error);
    eventContainer.innerHTML = "<p>Failed to load events.</p>";
  });
});
