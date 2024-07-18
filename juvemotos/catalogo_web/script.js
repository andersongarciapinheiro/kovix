import { catalogData } from './json.js'


function createProductHTML(product) {
  return `
    <div class="product" data-nome="${product.nome.toLowerCase()}">
    <div class="img">
      <img src="${product.img}" alt="">
    </div>
      <div class="desc">
        <h3>${product.nome}</h3>
        <p>${product.linha ? "Linha: " + product.linha : ""}</p>
        <p>${product.caixa ? "Caixa com " + product.caixa : ""}</p>
        <p>${product.cor ? "Cor: " + product.cor : ""}</p>
        <p>${product.modelo ? "Modelo: " + product.modelo : ""}</p>
      </div>
    </div>
  `;
}

function loadCatalog(catalogData) {
  const catalogContent = document.getElementById('catalog-content');

  Object.keys(catalogData).forEach(section => {
    const sectionElement = document.createElement('section');
    const sectionTitle = document.createElement('h2');
    sectionTitle.id = section;
    sectionElement.id = section;
    sectionTitle.innerHTML = `${section.charAt(0).toUpperCase() + section.slice(1)}`;
    
    catalogData[section].forEach(product => {
      sectionElement.innerHTML += createProductHTML(product);
    });

    catalogContent.appendChild(sectionTitle);
    catalogContent.appendChild(sectionElement);
  });
}


function filterProducts() {
  const searchInput = document.getElementById('search').value.toLowerCase();
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    const productName = product.getAttribute('data-nome');
    if (productName.includes(searchInput)) {
      product.style.display = 'flex';
    } else {
      product.style.display = 'none';
    }
  });
}

function closeTitle() {
  const section = document.querySelectorAll('section');
  section.forEach(i => {
    if(i.offsetHeight < 10) {
      i.previousElementSibling.style.display = 'none'
    } else {
      i.previousElementSibling.style.display = 'flex'
    }
  })
}


document.addEventListener('DOMContentLoaded', () => {
  loadCatalog(catalogData);

  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', filterProducts);
  searchInput.addEventListener('input', closeTitle);
});

function openMenu() {
  let buttonMenu = document.querySelector(".button-menu")
  let navMenu = document.querySelector("nav")
  let header = document.querySelector('header');
  let heightHeader = header.offsetHeight;
  let heightNav = navMenu.offsetHeight;
  let heightFinal = heightHeader - heightNav + 60
  navMenu.style.top = heightFinal+"px"
  let key = true

  buttonMenu.addEventListener('click', function () {
    if(key) {
      key = false
      navMenu.style.top = heightHeader+"px"
    } else {
      key = true
      navMenu.style.top = heightFinal+"px"
    }
  })
}

openMenu()