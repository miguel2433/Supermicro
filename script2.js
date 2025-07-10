import { Arquitectura } from './Arquitectura.js';

document.addEventListener('DOMContentLoaded', function () {
  const arquitecturaContainer = document.getElementById('arquitectura');

  for (const key in Arquitectura) {
    const item = Arquitectura[key];
    const card = document.createElement('div');
    card.className = 'mt-4 bg-white rounded-xl shadow-md p-6 w-72 text-left transform hover:scale-105 transition-transform duration-300';

    card.innerHTML = `
      <img src="${item.imgExample}" alt="${item.title}" class="w-full h-40 object-cover rounded-md mb-4">
      <h4 class="text-xl font-semibold text-stone-800 mb-2">${item.title}</h4>
      <p class="text-stone-600 text-sm">${item.description}</p>
    `;

    arquitecturaContainer.appendChild(card);
  }
});
