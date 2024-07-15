// Aguarda o DOM ser completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', function () {

  // Seleciona o elemento do carrossel
  const carousel = document.querySelector('.section4-imgs-carrossel');

  // Converte a NodeList das imagens em um array para facilitar a manipulação
  let images = Array.from(document.querySelectorAll('.section4-img'));

  // Define o índice inicial da imagem central
  let currentIndex = 2; // Inicialmente, a terceira imagem está no centro

  // Função para atualizar a posição e o estilo das imagens no carrossel
  function updateCarousel() {
    // Itera sobre cada imagem e atualiza seu estilo com base na posição relativa ao currentIndex
    images.forEach((img, index) => {
      // Define a posição horizontal das imagens
      img.style.transform = `translateX(${(index - currentIndex) * 150}px)`;
      // Define a profundidade (z-index) para destacar a imagem central
      img.style.zIndex = index === currentIndex ? 10 : 1;
      // Define o tamanho das imagens, destacando a imagem central
      img.style.width = index === currentIndex ? '300px' : '200px';
      img.style.height = index === currentIndex ? '300px' : '200px';
    });
  }

  // Função para mover o carrossel para a próxima imagem
  function nextImage() {
    // Incrementa o índice atual, garantindo que ele permaneça dentro do intervalo válido
    currentIndex = (currentIndex + 1) % images.length;
    // Remove a primeira imagem do array
    const firstImage = images.shift();
    // Adiciona a primeira imagem ao final do carrossel no DOM
    carousel.appendChild(firstImage);
    // Adiciona a primeira imagem ao final do array de imagens
    images.push(firstImage);
    // Decrementa o índice atual para manter a imagem central correta
    currentIndex--;

    // Atualiza o carrossel após mover as imagens
    updateCarousel();
  }

  // Chama a função para atualizar o carrossel inicialmente
  updateCarousel();

  // Configura um intervalo para chamar a função nextImage a cada 3 segundos
  setInterval(nextImage, 4000); // Troca de imagem a cada 3 segundos


  function resizeCarousel() {
    // Posição de rolagem atual
    const scrollPosition = window.scrollY;
    // Posição onde o redimensionamento deve começar
    const startScroll = 100;
    // Posição onde o redimensionamento deve parar
    const endScroll = 500;

    // Calcula a nova largura e altura com base na posição de rolagem
    const newSize = Math.min(Math.max(50, 50 + (scrollPosition - startScroll)), 400);

    // Define a nova largura e altura do carrossel
    carousel.style.width = `${newSize}px`;
    carousel.style.height = `${newSize}px`;
  }

  // Adiciona o evento de rolagem
  window.addEventListener('scroll', resizeCarousel);

  // Chama a função inicialmente para definir o tamanho correto ao carregar a página
  resizeCarousel();
});
