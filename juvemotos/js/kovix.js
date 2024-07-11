import {kovixjason} from '../data/kovixjson.js';

function createProductHTML(product) {
  return `
    <div class="product" data-nome="${product.nome.toLowerCase()}">
      <div class="img">
        <img src="${product.img3}" alt="">
      </div>
    </div>
  `;
}

function loadCatalog(kovixjason) {
  const catalogContent = document.getElementById('catalog-content');

  Object.entries(kovixjason).forEach(([section, products]) => {
    const sectionElement = document.createElement('section');
    sectionElement.id = section;

    const sectionTitle = document.createElement('h2');
    sectionTitle.id = section;
    sectionTitle.innerHTML = `${section.charAt(0).toUpperCase() + section.slice(1)}`;

    sectionElement.appendChild(sectionTitle);

    products.forEach(product => {
      sectionElement.innerHTML += createProductHTML(product);
    });

    catalogContent.appendChild(sectionElement);
  });

  productModel(kovixjason);
}

function productModel(kovixjason) {
  const products = document.querySelectorAll('.product');
  const modal = document.querySelector('.modal');
  const images = document.querySelector('.images');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');

  products.forEach((product, index) => {
    product.addEventListener('click', () => {
      showModal(kovixjason, index);
    });
  });

  arrowLeft.addEventListener('click', () => {
    images.style.transform = "translate(0%)";
  });

  arrowRight.addEventListener('click', () => {
    images.style.transform = "translate(-100%)";
  });

  modal.addEventListener('click', () => {
    modal.classList.add('none');
  });

  function showModal(kovixjason, index) {
    modal.classList.remove('none');
    images.innerHTML = '';
    images.style.transform = "translate(0%)";

    Object.values(kovixjason).forEach(products => {
      const product = products[index];
      if (product) {
        images.appendChild(createImageElement(product.img));
        images.appendChild(createImageElement(product.img2));
      }
    });
  }

  function createImageElement(src) {
    const img = document.createElement('img');
    img.src = src;
    return img;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadCatalog(kovixjason);
});


































// OLD

// import {kovixjason} from '../data/kovixjson.js'


// function createProductHTML(product) {
//   return `
//     <div class="product" data-nome="${product.nome.toLowerCase()}">
//     <div class="img">
//       <img src="${product.img3}" alt="">
//     </div>
//   `;
// }

// function loadCatalog(kovixjason) {
//   const catalogContent = document.getElementById('catalog-content');

//   Object.keys(kovixjason).forEach(section => {
//     const sectionElement = document.createElement('section');
//     const sectionTitle = document.createElement('h2');
//     sectionTitle.id = section;
//     sectionElement.id = section;
//     sectionTitle.innerHTML = `${section.charAt(0).toUpperCase() + section.slice(1)}`;

//     kovixjason[section].forEach(product => {
//       sectionElement.innerHTML += createProductHTML(product);
//     });

//     // catalogContent.appendChild(sectionTitle);
//     catalogContent.appendChild(sectionElement);
//   });
//   productModel(kovixjason)
// }

// function productModel(kovixjason) {
//   let product = document.querySelectorAll('.product')
//   let modal = document.querySelector('.modal')
//   let modalContent = document.querySelector('.modal-content');
//   let images = document.querySelector('.images');
//   let arrowLeft = document.querySelector('.arrow-left')
//   let arrowRight = document.querySelector('.arrow-right')

//   product.forEach((i, index) => {
//     i.addEventListener('click', function () {
//       modal.classList.toggle('none')
//       images.innerHTML = '';
//       images.style.transform = "translate(0%)";
//       Object.keys(kovixjason).forEach(section => {
//         let img = kovixjason[section][index].img
//         let img2 = kovixjason[section][index].img2
//         let applyImg = modalCreateImage(img)
//         let applyImg2 = modalCreateImage(img2)
//         images.appendChild(applyImg)
//         images.appendChild(applyImg2)
//       })
//     })
//   })

//   arrowLeft.addEventListener('click', function() {
//     images.style.transform = "translate(0%)";
//   })
//   arrowRight.addEventListener('click', function() {
//     images.style.transform = "translate(-100%)";
//   })

//   function modalCreateImage(imgJson, imgJson2) {
//     let img = document.createElement('IMG')
//     img.src = imgJson
//     return img
//   }

//   modalContent.addEventListener('click', function (event) {
//     event.stopPropagation();
//   })

//   modal.addEventListener('click', function () {
//     modal.classList.toggle('none')
//   })
// }

// document.addEventListener('DOMContentLoaded', () => {
//   loadCatalog(kovixjason);
// });