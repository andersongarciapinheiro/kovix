import { catalogData, catalogoDataDesc } from './json.js';

// Função para criar HTML do produto
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

// Função para criar HTML detalhado do produto na modal
function createProductDetailHTML(product, description) {
  return `
    <div class="produto">
      <div class="produto-title">
        <h3>${product.linha}</h3>
      </div>
      <div class="produto-img">
        <img src="${product.img}" alt="">
      </div>
      <div class="produto-desc">
        <h3>Características:</h3>
        <p>${description.especificacoes}</p>
      </div>
      <div class="logo-modal">
        <img src="../assets/logos/old_kovix.png" alt="">
      </div>
    </div>
  `;
}

// Função para carregar o catálogo
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

  // Adiciona o event listener aos produtos
  addProductClickListener();
}

// Função para filtrar produtos
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

// Função para exibir ou ocultar títulos das seções
function closeTitle() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (section.offsetHeight < 10) {
      section.previousElementSibling.style.display = 'none';
    } else {
      section.previousElementSibling.style.display = 'flex';
    }
  });
}

// Função para abrir a modal
function openModal(product, description) {
  const modal = document.querySelector('.modal');
  modal.innerHTML = createProductDetailHTML(product, description);
  modal.style.display = 'block';

  // Fechar a modal ao clicar fora
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Função para adicionar event listener aos produtos
function addProductClickListener() {
  const products = document.querySelectorAll('.product');
  products.forEach((product, index) => {
    product.addEventListener('click', () => {
      const productData = catalogData.Produtos[index];
      const productDesc = catalogoDataDesc.Produtos[index];
      openModal(productData, productDesc);
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
  loadCatalog(catalogData);

  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', filterProducts);
  searchInput.addEventListener('input', closeTitle);
});

