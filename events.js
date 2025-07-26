import { db, ref, onValue } from './script.js';
const list = document.getElementById('events-list');
onValue(ref(db, 'events'), (snapshot) => {
  const data = snapshot.val();
  list.innerHTML = '';
  for (let key in data) {
    const item = data[key];
    const div = document.createElement('div');
    div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p><small>${item.date}</small>`;
    list.appendChild(div);
  }
});
