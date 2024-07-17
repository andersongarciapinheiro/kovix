document.addEventListener('DOMContentLoaded', function() {
  const bgParallax = document.querySelector('.bg-parallax');

  function movimentBg() {
    const scrollPosition = window.scrollY;
    // Ajusta o valor para um movimento mais suave. Experimente diferentes valores para ajustar a velocidade do efeito.
    const parallaxSpeed = 0.01;

    // Calcula a nova posição da imagem de fundo
    const backgroundPositionY = scrollPosition * parallaxSpeed;

    // Define a nova posição da imagem de fundo
    bgParallax.style.backgroundPositionY = `-${backgroundPositionY}px`;
  }

  window.addEventListener('scroll', movimentBg);
});
