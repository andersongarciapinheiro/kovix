import { varejistas } from './varejoJson.js';

function createCards(retailers) {
  const container = document.getElementById('cards-container');
  container.innerHTML = ''; // Limpar o conteúdo existente

  retailers.forEach(retailer => {
      const card = document.createElement('a');
      card.className = 'card';
      card.href = retailer.url;
      card.target = '_blank';

      const img = document.createElement('img');
      img.src = retailer.image;
      img.alt = retailer.name;

      const cardContent = document.createElement('div');
      cardContent.className = 'card-content';

      const h2 = document.createElement('h2');
      h2.textContent = retailer.name;

      const p = document.createElement('p');
      p.textContent = retailer.description;

      const a = document.createElement('a');
      a.href = retailer.url;
      a.target = '_blank';
      a.textContent = 'Contate';

      cardContent.appendChild(h2);
      cardContent.appendChild(p);
      cardContent.appendChild(a);

      card.appendChild(img);
      card.appendChild(cardContent);

      container.appendChild(card);
  });
}

// Chamar a função para criar os cards ao carregar a página
document.addEventListener('DOMContentLoaded', () => createCards(varejistas));


